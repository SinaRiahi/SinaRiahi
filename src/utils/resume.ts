export const handleResumeDownload = (e?: React.MouseEvent | React.TouchEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const resumePath = '/resume/Sina_Riahi.pdf';
  
  fetch(resumePath)
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Sina_Riahi.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);
    })
    .catch(() => {
      const a = document.createElement('a');
      a.href = resumePath;
      a.target = '_blank';
      a.download = 'Sina_Riahi.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
};
