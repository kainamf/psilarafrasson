// Declaração global para o objeto instgrm do Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
import { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  url: string;
  maxWidth?: number;
  className?: string;
}

export default function InstagramEmbed({
  url,
  maxWidth = 540,
  className = '',
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-full overflow-x-auto flex justify-center mx-auto ${className}`}
    >
      <blockquote
        className="instagram-media w-full max-w-[540px] bg-white border-0 m-auto box-border"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      ></blockquote>
    </div>
  );
}
