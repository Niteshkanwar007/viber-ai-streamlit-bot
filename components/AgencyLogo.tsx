import Image from 'next/image';

type AgencyLogoProps = {
  compact?: boolean;
  className?: string;
};

export function AgencyLogo({ compact = false, className = '' }: AgencyLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/shine-dezign-logo.svg"
        alt="Shine Dezign agency logo"
        width={320}
        height={96}
        priority={!compact}
        className={compact ? 'h-10 w-auto rounded-xl' : 'h-16 w-auto rounded-2xl'}
      />
      {!compact ? (
        <div>
          <div className="text-[12px] font-black uppercase tracking-[0.22em] text-ink">Shine Dezign</div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Digital Product & SaaS Consulting</div>
        </div>
      ) : null}
    </div>
  );
}
