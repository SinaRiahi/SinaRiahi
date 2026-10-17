import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { getTehranStatus } from '../data/schedule';
import { FileText, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { NomNomMonster } from './NomNomMonster';
import { handleResumeDownload } from '../utils/resume';
import { useLanguage } from '../context/LanguageContext';
import { MorphText } from './MorphText';
import { ScrollFade } from './ScrollFade';

export const Contact: React.FC = () => {
  const { t, isPersian } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentStatus, setCurrentStatus] = useState(getTehranStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(getTehranStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      `Contact from Portfolio: ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 pb-32 sm:pb-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollFade className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
            <MorphText text={t.contact.kicker} />
          </div>
          <MorphText
            as="h2"
            text={t.contact.title}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          />
          <MorphText
            as="p"
            text={t.contact.description}
            className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
          />
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Links & Resume */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email & Phone Card */}
            <ScrollFade
              delay={50}
              className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-4 shadow-sm"
            >
              <MorphText
                as="div"
                text={t.contact.directInfoTitle}
                className="text-xs font-mono text-slate-700 dark:text-slate-400 font-bold"
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3 p-3 bg-slate-100/70 dark:bg-white/[0.02] border border-slate-300/80 dark:border-white/5 rounded-xl">
                  <div>
                    <MorphText
                      as="div"
                      text={t.contact.emailLabel}
                      className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold"
                    />
                    <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-200 truncate font-semibold">
                      {SOCIAL_LINKS.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg transition-colors shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 bg-slate-100/70 dark:bg-white/[0.02] border border-slate-300/80 dark:border-white/5 rounded-xl">
                  <div>
                    <MorphText
                      as="div"
                      text={t.contact.phoneLabel}
                      className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold"
                    />
                    <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-semibold">
                      +98 939 603 0319
                    </span>
                  </div>
                  <a
                    href="tel:09396030319"
                    className="px-2.5 py-1 text-[11px] font-mono text-blue-700 dark:text-cyan-300 font-bold"
                  >
                    <MorphText text={t.contact.callBtn} />
                  </a>
                </div>

                <div className="px-3 pt-2 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                  <MorphText text={t.contact.locationLabel} />
                  <MorphText
                    text={t.contact.locationValue}
                    className="text-slate-900 dark:text-slate-200 font-semibold"
                  />
                  <span>(UTC+3:30)</span>
                </div>

                <div className="px-3 pb-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                  <MorphText text={t.contact.currentlyPrefix} />
                  <span className={`font-bold ${currentStatus.colorClass}`}>{currentStatus.status}</span>
                </div>
              </div>
            </ScrollFade>

            {/* Resume Card */}
            <ScrollFade
              delay={110}
              className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <MorphText
                  text={t.contact.cvTitle}
                  className="text-xs font-mono text-slate-700 dark:text-slate-400 font-bold"
                />
                <MorphText
                  text={t.contact.pdfDoc}
                  className="text-[11px] font-mono text-blue-700 dark:text-cyan-400 font-bold"
                />
              </div>
              <MorphText
                as="h3"
                text={t.contact.resumeHeading}
                className="text-base font-bold text-slate-900 dark:text-white"
              />
              <MorphText
                as="p"
                text={t.contact.resumeDesc}
                className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
              />
              <div className="pt-2">
                <a
                  href={SOCIAL_LINKS.resumeUrl}
                  onClick={handleResumeDownload}
                  download="Sina_Riahi.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold !text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-white shrink-0" />
                  <MorphText text={t.contact.downloadResumeBtn} className="!text-white" />
                </a>
              </div>
            </ScrollFade>

            {/* Hub Links */}
            <ScrollFade delay={160} className="space-y-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-white/5 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white shrink-0" />
                  <MorphText
                    text={t.contact.githubProfile}
                    className="text-xs font-bold text-slate-900 dark:text-slate-200"
                  />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 shrink-0" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-white/5 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-slate-700 dark:text-slate-400 group-hover:text-blue-600 shrink-0" />
                  <MorphText
                    text={t.contact.linkedinProfile}
                    className="text-xs font-bold text-slate-900 dark:text-slate-200"
                  />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 shrink-0" />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-white/5 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-slate-700 dark:text-slate-400 group-hover:text-pink-600 shrink-0" />
                  <MorphText
                    text={t.contact.instagramProfile}
                    className="text-xs font-bold text-slate-900 dark:text-slate-200"
                  />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 shrink-0" />
              </a>
            </ScrollFade>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7">
            <ScrollFade
              delay={90}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm"
            >
              <div>
                <MorphText
                  as="h3"
                  text={t.contact.formTitle}
                  className="text-lg font-bold text-slate-900 dark:text-white"
                />
                <MorphText
                  as="p"
                  text={t.contact.formSubtitle}
                  className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium"
                />
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 font-bold block">
                      <MorphText text={t.contact.yourName} />
                    </label>
                    <input
                      type="text"
                      required
                      dir={isPersian ? 'rtl' : undefined}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#08090d] border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-blue-600 focus:bg-white dark:focus:bg-[#08090d] transition-all ${
                        isPersian ? 'font-persian' : ''
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 font-bold block">
                      <MorphText text={t.contact.yourEmail} />
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#08090d] border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-blue-600 focus:bg-white dark:focus:bg-[#08090d] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 font-bold block">
                    <MorphText text={t.contact.messageLabel} />
                  </label>
                  <textarea
                    required
                    rows={5}
                    dir={isPersian ? 'rtl' : undefined}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#08090d] border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-blue-600 focus:bg-white dark:focus:bg-[#08090d] transition-all ${
                      isPersian ? 'font-persian' : ''
                    }`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold !text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-sm hover:shadow"
                  >
                    <Send className="w-4 h-4 text-white shrink-0" />
                    <MorphText text={t.contact.sendBtn} className="!text-white" />
                  </button>
                </div>

                {formSent && (
                  <MorphText
                    as="p"
                    text={t.contact.formSentMsg}
                    className="text-xs text-emerald-600 dark:text-emerald-400 text-center font-mono font-bold"
                  />
                )}
              </form>
            </ScrollFade>

            {/* Nom Nom Monster's Dedicated Interactive Box */}
            <ScrollFade delay={150} className="pt-6">
              <NomNomMonster />
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
};

