import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Language } from '../data/translations';
import { RESUME_MARKDOWN } from '../data/resumeMarkdown';

const pdfBlobCache: Partial<Record<Language, Blob>> = {};
let isGeneratingResume = false;

export const getActiveLanguage = (): Language => {
  const saved = localStorage.getItem('sr_portfolio_lang');
  if (saved === 'en' || saved === 'fr' || saved === 'fa') {
    return saved;
  }
  return 'en';
};

export const getResumeFilename = (lang: Language): string => {
  switch (lang) {
    case 'fr':
      return 'Sina_Riahi_Resume_FR.pdf';
    case 'fa':
      return 'Sina_Riahi_Resume_FA.pdf';
    default:
      return 'Sina_Riahi_Resume_EN.pdf';
  }
};

/**
 * Converts a single page's Markdown block into styled executive HTML for A4 rendering.
 */
function parseMarkdownBlockToHtml(mdBlock: string, isPersian: boolean): string {
  // Handle 2-column split block (Education + Languages)
  if (mdBlock.includes('<!-- SPLIT_EDU_LANG -->')) {
    const [beforeSplit, rest] = mdBlock.split('<!-- SPLIT_EDU_LANG -->');
    const [splitContent, afterSplit] = (rest || '').split('<!-- END_SPLIT -->');
    const [col1, col2] = (splitContent || '').split('<!-- COL_DIVIDER -->');

    return (
      parseMarkdownBlockToHtml(beforeSplit || '', isPersian) +
      `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 8px; margin-bottom: 12px;">
        <div>${parseMarkdownBlockToHtml(col1 || '', isPersian)}</div>
        <div>${parseMarkdownBlockToHtml(col2 || '', isPersian)}</div>
      </div>` +
      parseMarkdownBlockToHtml(afterSplit || '', isPersian)
    );
  }

  const lines = mdBlock.split('\n');
  let html = '';
  let inTable = false;
  let inBulletList = false;
  let inGridList = false;

  const closeLists = () => {
    if (inTable) {
      html += '</tbody></table>';
      inTable = false;
    }
    if (inBulletList) {
      html += '</ul>';
      inBulletList = false;
    }
    if (inGridList) {
      html += '</div>';
      inGridList = false;
    }
  };

  const formatInline = (text: string): string => {
    return text.replace(
      /\*\*(.+?)\*\*/g,
      '<strong style="font-weight: 700; color: #0f172a;">$1</strong>'
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();

    if (!rawLine) {
      closeLists();
      continue;
    }

    // H1 Document Title + Contact Subtitle
    if (rawLine.startsWith('# ')) {
      closeLists();
      const title = rawLine.slice(2).trim();
      const nextLine = (lines[i + 1] || '').trim();
      i++; // consume contact subtitle line
      html += `
        <div style="text-align: center; margin-bottom: 18px;">
          <h1 style="font-size: 28px; font-weight: 800; letter-spacing: ${
            isPersian ? '0' : '0.06em'
          }; color: #0f172a; margin: 0 0 8px 0;">
            ${title}
          </h1>
          <div dir="ltr" style="font-size: 11.5px; color: #475569; font-weight: 500;">
            ${nextLine}
          </div>
          <div style="height: 2px; background-color: #0f172a; margin-top: 14px; width: 100%;"></div>
        </div>
      `;
      continue;
    }

    // H2 Section Header
    if (rawLine.startsWith('## ')) {
      closeLists();
      const sectionTitle = rawLine.slice(3).trim();
      html += `
        <div style="margin-top: 18px; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; padding-bottom: 5px; border-bottom: 1px solid #cbd5e1;">
            <span style="display: inline-block; width: 10px; height: 10px; background-color: #2563eb; border-radius: 1px; flex-shrink: 0;"></span>
            <h2 style="font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 0; letter-spacing: ${
              isPersian ? '0' : '0.04em'
            };">
              ${sectionTitle}
            </h2>
          </div>
        </div>
      `;
      continue;
    }

    // H3 Subheader (Experience Role | Org | Date OR Project Title)
    if (rawLine.startsWith('### ')) {
      closeLists();
      const content = rawLine.slice(4).trim();
      if (content.includes('|')) {
        const parts = content.split('|').map((p) => p.trim());
        const role = parts[0] || '';
        const org = parts[1] || '';
        const period = parts[2] || '';
        html += `
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-top: 12px; margin-bottom: 5px; gap: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: #0f172a;">
              <span>${role}</span>
              <span style="color: #94a3b8; margin: 0 6px;">|</span>
              <span style="color: #2563eb; font-weight: 700;">${org}</span>
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: #475569; white-space: nowrap;">
              ${period}
            </div>
          </div>
        `;
      } else {
        html += `
          <div style="margin-top: 14px; margin-bottom: 5px;">
            <h3 style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 0;">
              ${content}
            </h3>
          </div>
        `;
      }
      continue;
    }

    // Tech stack badge line (`...`)
    if (rawLine.startsWith('`') && rawLine.endsWith('`') && rawLine.length > 2) {
      closeLists();
      const stackText = rawLine.slice(1, -1);
      html += `
        <div style="margin-bottom: 7px;">
          <span dir="ltr" style="display: inline-block; background-color: #f1f5f9; color: #1e293b; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
            ${stackText}
          </span>
        </div>
      `;
      continue;
    }

    // Table Row: | Key | Value |
    if (rawLine.startsWith('|') && rawLine.endsWith('|')) {
      if (inBulletList || inGridList) closeLists();
      if (!inTable) {
        html += `<table style="width: 100%; border-collapse: collapse; margin-top: 4px; margin-bottom: 8px; font-size: 12px;"><tbody>`;
        inTable = true;
      }
      const cells = rawLine
        .slice(1, -1)
        .split('|')
        .map((c) => c.trim());
      const keyCol = cells[0] || '';
      const valCol = cells[1] || '';
      html += `
        <tr>
          <td style="padding: 4.5px 0; width: 175px; font-weight: 700; color: #0f172a; vertical-align: top;">
            ${keyCol}
          </td>
          <td dir="ltr" style="padding: 4.5px 0; color: #334155; font-weight: 500; text-align: ${
            isPersian ? 'right' : 'left'
          };">
            ${valCol}
          </td>
        </tr>
      `;
      continue;
    }

    // Standard Bullet Item (- ...)
    if (rawLine.startsWith('- ')) {
      if (inTable || inGridList) closeLists();
      if (!inBulletList) {
        html += `<ul style="margin: 4px 0 10px 0; padding-${
          isPersian ? 'right' : 'left'
        }: 18px; list-style-type: disc; color: #334155; font-size: 12px; line-height: 1.6;">`;
        inBulletList = true;
      }
      html += `<li style="margin-bottom: 4.5px;">${formatInline(rawLine.slice(2).trim())}</li>`;
      continue;
    }

    // 2-Column Grid Bullet Item (* ...)
    if (rawLine.startsWith('* ')) {
      if (inTable || inBulletList) closeLists();
      if (!inGridList) {
        html += `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 24px; margin: 6px 0 12px 0; font-size: 12px; color: #334155;">`;
        inGridList = true;
      }
      html += `
        <div style="display: flex; align-items: center; gap: 7px;">
          <span style="width: 4.5px; height: 4.5px; background-color: #334155; border-radius: 50%; flex-shrink: 0;"></span>
          <span>${formatInline(rawLine.slice(2).trim())}</span>
        </div>
      `;
      continue;
    }

    // Normal paragraph / line
    closeLists();
    html += `
      <p style="font-size: 12px; color: #334155; line-height: 1.62; margin: 0 0 5px 0;">
        ${formatInline(rawLine)}
      </p>
    `;
  }

  closeLists();
  return html;
}

/**
 * Compiles the localized Markdown resume into a multi-page A4 PDF Blob.
 */
export async function generateLocalizedResumePdf(lang: Language): Promise<Blob> {
  if (pdfBlobCache[lang]) {
    return pdfBlobCache[lang]!;
  }

  const markdown = RESUME_MARKDOWN[lang] || RESUME_MARKDOWN.en;
  const pageBlocks = markdown.split('---PAGE---').map((b) => b.trim());
  const isPersian = lang === 'fa';

  // Ensure fonts are loaded before capturing canvas
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  // Create offscreen staging container
  const host = document.createElement('div');
  host.style.position = 'fixed';
  host.style.top = '0';
  host.style.left = '-9999px';
  host.style.width = '794px';
  host.style.zIndex = '-100';
  host.style.pointerEvents = 'none';
  document.body.appendChild(host);

  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const totalPages = pageBlocks.length;

    for (let idx = 0; idx < totalPages; idx++) {
      const pageNum = idx + 1;
      const bodyHtml = parseMarkdownBlockToHtml(pageBlocks[idx], isPersian);

      const footerLeft =
        lang === 'fa'
          ? 'سینا ریاحی - رزومه مهندسی نرم‌افزار'
          : lang === 'fr'
          ? 'Sina Riahi - CV Ingénieur Logiciel'
          : 'Sina Riahi - Resume';

      const footerRight =
        lang === 'fa'
          ? `صفحه ${pageNum} از ${totalPages}`
          : lang === 'fr'
          ? `Page ${pageNum} sur ${totalPages}`
          : `Page ${pageNum} of ${totalPages}`;

      const pageEl = document.createElement('div');
      pageEl.dir = isPersian ? 'rtl' : 'ltr';
      pageEl.style.width = '794px';
      pageEl.style.height = '1123px';
      pageEl.style.padding = '52px 56px 42px 56px';
      pageEl.style.boxSizing = 'border-box';
      pageEl.style.backgroundColor = '#ffffff';
      pageEl.style.color = '#0f172a';
      pageEl.style.fontFamily = isPersian
        ? "'Vazirmatn', 'Plus Jakarta Sans', sans-serif"
        : "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif";
      pageEl.style.display = 'flex';
      pageEl.style.flexDirection = 'column';
      pageEl.style.justifyContent = 'space-between';

      pageEl.innerHTML = `
        <div>${bodyHtml}</div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #e2e8f0; padding-top: 10px; font-size: 10.5px; color: #94a3b8; font-weight: 500;">
          <span>${footerLeft}</span>
          <span>${footerRight}</span>
        </div>
      `;

      host.innerHTML = '';
      host.appendChild(pageEl);

      const canvas = await html2canvas(pageEl, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.96);
      if (idx > 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    }

    const blob = pdf.output('blob');
    pdfBlobCache[lang] = blob;
    return blob;
  } finally {
    if (host.parentNode) {
      host.parentNode.removeChild(host);
    }
  }
}

/**
 * Triggers client-side Markdown-to-PDF compilation and downloads the localized PDF
 * matching the current website language ('en', 'fr', or 'fa').
 */
export const handleResumeDownload = async (
  e?: React.MouseEvent | React.TouchEvent,
  overrideLang?: Language
) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  if (isGeneratingResume) return;
  isGeneratingResume = true;

  const lang = overrideLang || getActiveLanguage();
  const filename = getResumeFilename(lang);

  try {
    const blob = await generateLocalizedResumePdf(lang);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      if (a.parentNode) {
        a.parentNode.removeChild(a);
      }
    }, 150);
  } catch (err) {
    console.error('Resume PDF generation fallback triggered:', err);
    const fallbackUrl = '/resume/Sina_Riahi.pdf';
    const a = document.createElement('a');
    a.href = fallbackUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
  } finally {
    isGeneratingResume = false;
  }
};
