'use client';

import { Download, Eye, Printer } from 'lucide-react';

export function DocumentActions() {
  const handlePreview = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.toggle('preview-focus');
  };

  const handleDownloadHtml = () => {
    const html = `<!doctype html>${document.documentElement.outerHTML}`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'military-hiring-marketplace-discovery-blueprint.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="download-toolbar screen-only" aria-label="Document preview and download controls">
      <div>
        <div className="text-[11px] font-black uppercase tracking-[0.18em] text-brass">Document ready</div>
        <div className="text-sm font-semibold text-white">Preview the blueprint, then export or download.</div>
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={handlePreview} className="toolbar-button toolbar-button-secondary">
          <Eye size={16} /> Preview
        </button>
        <button type="button" onClick={() => window.print()} className="toolbar-button toolbar-button-primary">
          <Printer size={16} /> Download PDF
        </button>
        <button type="button" onClick={handleDownloadHtml} className="toolbar-button toolbar-button-secondary">
          <Download size={16} /> Download HTML
        </button>
      </div>
    </div>
  );
}
