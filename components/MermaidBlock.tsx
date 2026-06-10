'use client';

import { useEffect, useId, useState } from 'react';
import mermaid from 'mermaid';

type MermaidBlockProps = {
  chart: string;
  className?: string;
};

export function MermaidBlock({ chart, className = '' }: MermaidBlockProps) {
  const id = useId().replace(/:/g, '');
  const [svg, setSvg] = useState('');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'base',
      themeVariables: {
        primaryColor: '#F5F3EA',
        primaryTextColor: '#0F172A',
        primaryBorderColor: '#B08D57',
        lineColor: '#68724D',
        secondaryColor: '#FFFFFF',
        tertiaryColor: '#EEF2F7',
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      flowchart: { curve: 'basis', padding: 12 }
    });

    mermaid.render(`mermaid-${id}`, chart).then(({ svg: renderedSvg }) => setSvg(renderedSvg));
  }, [chart, id]);

  return <div className={`mermaid ${className}`} dangerouslySetInnerHTML={{ __html: svg }} />;
}
