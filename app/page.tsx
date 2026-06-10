import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  Flag,
  Gauge,
  Globe2,
  GraduationCap,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Radar,
  Route,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  Wrench
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AgencyLogo } from '@/components/AgencyLogo';
import { DocumentActions } from '@/components/DocumentActions';
import { MermaidBlock } from '@/components/MermaidBlock';

const preparedDate = 'June 10, 2026';
const totalPages = 12;

type PageProps = {
  number: number;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  accent?: string;
};

function Page({ number, kicker, title, subtitle, children }: PageProps) {
  return (
    <section className="a4-page">
      <div className="page-content">
        <header className="mb-7 flex items-start justify-between gap-8">
          <div>
            <div className="page-kicker mb-2">{kicker}</div>
            <h2 className="page-title">{title}</h2>
            {subtitle ? <p className="page-subtitle mt-3">{subtitle}</p> : null}
          </div>
          <div className="rounded-full border border-line bg-field px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-olive">
            V1 Blueprint
          </div>
        </header>
        <main className="min-h-0 flex-1">{children}</main>
      </div>
      <Footer page={number} />
    </section>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <footer className="page-footer">
      <span>Shine Dezign · Confidential Pre-Discovery Document</span>
      <span>
        {String(page).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
    </footer>
  );
}

function IconCard({ icon: Icon, title, children, accent = 'text-olive' }: IconCardProps) {
  return (
    <div className="card p-5">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-field ${accent}`}>
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">{title}</h3>
      <div className="mt-2 text-[11px] leading-5 text-slate-600">{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <div className="brass-rule" />
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">{children}</h3>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white/80 p-4">
      <div className="text-3xl font-black tracking-[-0.06em] text-ink">{value}</div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</div>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-line bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">{children}</span>;
}

function CoverIllustration() {
  return (
    <div className="relative h-[310px] rounded-[34px] border border-line bg-gradient-to-br from-field via-white to-slate-100 p-8 shadow-card">
      <div className="absolute right-8 top-8 rounded-full border border-olive/25 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-olive">
        Ecosystem View
      </div>
      <div className="absolute left-10 top-16 flex h-24 w-24 items-center justify-center rounded-full bg-slateblue text-white shadow-card">
        <ShieldCheck size={42} />
      </div>
      <div className="absolute right-20 top-28 flex h-24 w-24 items-center justify-center rounded-full bg-olive text-white shadow-card">
        <Building2 size={42} />
      </div>
      <div className="absolute bottom-12 left-1/2 flex h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-brass text-white shadow-card">
        <Target size={48} />
      </div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 310" fill="none" aria-hidden="true">
        <path d="M165 110 C275 45 390 60 514 148" stroke="#68724D" strokeWidth="2" strokeDasharray="7 8" />
        <path d="M175 135 C260 250 390 250 350 218" stroke="#B08D57" strokeWidth="2" strokeDasharray="7 8" />
        <path d="M505 172 C485 255 420 265 372 230" stroke="#68724D" strokeWidth="2" strokeDasharray="7 8" />
      </svg>
      <div className="absolute bottom-8 right-8 w-56 rounded-3xl border border-line bg-white/85 p-5 backdrop-blur">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brass">Core Thesis</div>
        <p className="mt-2 text-[13px] font-bold leading-5 text-ink">Translate service history into employer-ready hiring signals.</p>
      </div>
    </div>
  );
}

function JourneyFlow({ title, steps, tone }: { title: string; steps: string[]; tone: string }) {
  return (
    <div className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[14px] font-extrabold text-ink">{title}</h3>
        <Route className={tone} size={18} />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-line bg-white p-3 text-center">
            <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-field text-[10px] font-black text-olive">{index + 1}</div>
            <div className="text-[10px] font-bold leading-4 text-slate-700">{step}</div>
            {index < steps.length - 1 ? <ArrowRight className="absolute -right-[13px] top-1/2 z-10 -translate-y-1/2 rounded-full bg-white text-brass" size={18} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-[10px] font-bold text-slate-600"><span>{label}</span><span>{value}%</span></div>
      <div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-gradient-to-r from-olive to-brass" style={{ width: `${value}%` }} /></div>
    </div>
  );
}

export default function BlueprintDocument() {
  return (
    <>
      <DocumentActions />
      <main className="document-shell">
      <section className="a4-page">
        <div className="page-content">
          <div className="flex items-center justify-between">
            <AgencyLogo />
            <div className="rounded-full border border-line px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-olive">Prepared {preparedDate}</div>
          </div>

          <div className="mt-14 grid grid-cols-[1.05fr_.95fr] gap-10">
            <div>
              <div className="page-kicker mb-5">Discovery & Solution Blueprint V1</div>
              <h1 className="text-[58px] font-black leading-[0.92] tracking-[-0.07em] text-ink">
                Military Hiring Marketplace
              </h1>
              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>Business Understanding</Pill>
                <Pill>Product Strategy</Pill>
                <Pill>Technical Architecture</Pill>
                <Pill>MVP Roadmap</Pill>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="card p-5">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Prepared For</div>
                  <div className="mt-2 text-xl font-extrabold text-ink">Confidential Client</div>
                </div>
                <div className="card p-5">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Prepared By</div>
                  <div className="mt-2 text-xl font-extrabold text-ink">Shine Dezign</div>
                </div>
              </div>
            </div>
            <CoverIllustration />
          </div>

          <div className="mt-auto rounded-[28px] border border-line bg-slateblue p-7 text-white">
            <div className="flex items-start gap-5">
              <Radar className="mt-1 text-brass" size={34} />
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-brass">Pre-Discovery Orientation</div>
                <p className="mt-2 max-w-3xl text-[18px] font-semibold leading-7 text-white/90">
                  A structured view of the market, user ecosystem, MVP scope, matching strategy, and scalable technical foundation required to transform military experience into meaningful civilian opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer page={1} />
      </section>
      <Page number={2} kicker="Executive Summary" title="More than a job board" subtitle="The proposed platform should be treated as a translation, trust, and workflow layer between military talent and civilian hiring teams—not a listings directory.">
        <div className="grid grid-cols-3 gap-4">
          <IconCard icon={ShieldCheck} title="Military Experience">Service history, rank, occupational specialty, deployments, certifications, and leadership exposure become structured candidate intelligence.</IconCard>
          <IconCard icon={BriefcaseBusiness} title="Employer Requirements">Open roles, required capabilities, location constraints, compliance needs, and hiring urgency become comparable demand signals.</IconCard>
          <IconCard icon={Workflow} title="Recruitment Workflows">The marketplace guides discovery, outreach, screening, scheduling, and selection through purpose-built workflows.</IconCard>
        </div>
        <div className="mt-7 grid grid-cols-[.95fr_1.05fr] gap-6">
          <div className="card bg-field/70 p-6">
            <SectionLabel>Key Observations</SectionLabel>
            <ul className="space-y-4 text-[12px] leading-5 text-slate-700">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-olive" size={17} />Military candidates often undersell capabilities because service terminology does not map cleanly to civilian job language.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-olive" size={17} />Employers want veteran talent, but recruiters need structured context to evaluate fit quickly and confidently.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-olive" size={17} />The defensible product layer is not the job post; it is the matching logic, profile taxonomy, and hiring workflow data.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="card p-6">
              <SectionLabel>Business Opportunity</SectionLabel>
              <p className="text-[13px] leading-6 text-slate-700">A specialized marketplace can own a high-trust segment where candidates need guided transition support and employers need better signals than keyword-based search. The platform can combine profile enrichment, military-to-civilian skill translation, employer education, and recruiter workflow management.</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Metric value="01" label="Talent translation" />
              <Metric value="02" label="Employer clarity" />
              <Metric value="03" label="Workflow velocity" />
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-[26px] border border-olive/20 bg-gradient-to-r from-slateblue to-olive p-6 text-white">
          <SectionLabel>Expected Value</SectionLabel>
          <div className="grid grid-cols-4 gap-4 text-[12px] leading-5 text-white/85">
            <div><b className="block text-white">Better matches</b>Military skill context becomes searchable and comparable.</div>
            <div><b className="block text-white">Shorter screening</b>Recruiters see fit indicators before interviews.</div>
            <div><b className="block text-white">Higher trust</b>Verified profiles and structured workflows reduce ambiguity.</div>
            <div><b className="block text-white">Strategic data</b>Marketplace activity creates insight into talent supply and demand.</div>
          </div>
        </div>
      </Page>

      <Page number={3} kicker="Industry Analysis" title="Competitive signals & market whitespace" subtitle="Existing military-transition platforms validate the need; the opportunity is to combine transition support, intelligent matching, and employer workflow depth into one SaaS marketplace.">
        <div className="grid grid-cols-2 gap-5">
          {[{
            name: 'Oplign', url: 'oplign.com', focus: 'Skills-based matching platform connecting military-experienced candidates to relevant opportunities.', strengths: ['Military skills translation', 'Fit scoring orientation', 'Candidate-role alignment'], takeaways: ['Prioritize structured skill taxonomies', 'Make match reasoning visible to employers']
          }, {
            name: 'Bridge My Return', url: 'bridgemyreturn.com', focus: 'Veteran and military spouse employment platform with transition support and employer connections.', strengths: ['Community-aligned positioning', 'Transition enablement', 'Employer network focus'], takeaways: ['Blend marketplace utility with guided support', 'Design for trust and career readiness']
          }].map((item) => (
            <div key={item.name} className="card p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.05em] text-ink">{item.name}</h3>
                  <div className="mt-1 flex items-center gap-2 text-[11px] font-bold text-olive"><Globe2 size={14} />{item.url}</div>
                </div>
                <Search className="text-brass" size={28} />
              </div>
              <div className="space-y-4 text-[12px] leading-5 text-slate-700">
                <div><b className="text-ink">Platform Focus:</b> {item.focus}</div>
                <div><b className="text-ink">Strengths:</b><div className="mt-2 flex flex-wrap gap-2">{item.strengths.map((s) => <Pill key={s}>{s}</Pill>)}</div></div>
                <div><b className="text-ink">Relevant Takeaways:</b><ul className="mt-2 space-y-1">{item.takeaways.map((t) => <li key={t} className="flex gap-2"><ArrowRight size={13} className="mt-1 text-brass" />{t}</li>)}</ul></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-[1fr_.75fr] gap-5">
          <div className="card p-6">
            <SectionLabel>Market Opportunity Insights</SectionLabel>
            <div className="space-y-4">
              <MiniBar label="Need for civilian skill translation" value={92} />
              <MiniBar label="Employer fit visibility gap" value={84} />
              <MiniBar label="Workflow specialization opportunity" value={76} />
              <MiniBar label="Data-driven marketplace defensibility" value={88} />
            </div>
          </div>
          <div className="rounded-[26px] border border-brass/30 bg-brass/10 p-6">
            <BarChart3 className="mb-4 text-brass" size={30} />
            <h3 className="text-xl font-black tracking-[-0.04em] text-ink">Whitespace thesis</h3>
            <p className="mt-3 text-[12px] leading-6 text-slate-700">The strongest position is a vertical SaaS marketplace where military context, employer hiring intent, and workflow outcomes are captured as structured data from day one.</p>
          </div>
        </div>
      </Page>

      <Page number={4} kicker="Stakeholder Map" title="Five-sided marketplace operating model" subtitle="The product must create clear value for each stakeholder while ensuring every interaction improves marketplace intelligence.">
        <div className="relative mx-auto h-[430px] w-[650px]">
          <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-brass bg-slateblue text-center text-white shadow-card">
            <Network size={34} />
            <div className="mt-2 text-[13px] font-black leading-4">Military Hiring Marketplace</div>
          </div>
          {[{label:'Military Members',icon:ShieldCheck,x:'left-0 top-4',text:'Transition-ready profiles'}, {label:'Veterans',icon:BadgeCheck,x:'right-0 top-4',text:'Civilian career mobility'}, {label:'Employers',icon:Building2,x:'left-0 bottom-4',text:'Qualified talent pipelines'}, {label:'Recruiters',icon:UsersRound,x:'right-0 bottom-4',text:'Efficient screening'}, {label:'Administrators',icon:KeyRound,x:'left-1/2 top-[330px] -translate-x-1/2',text:'Governance & reporting'}].map(({label,icon:Icon,x,text}) => (
            <div key={label} className={`absolute ${x} z-10 w-48 rounded-[24px] border border-line bg-white p-5 text-center shadow-card`}>
              <Icon className="mx-auto text-olive" size={28} />
              <div className="mt-2 text-[14px] font-black text-ink">{label}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">{text}</div>
            </div>
          ))}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 430" fill="none" aria-hidden="true">
            <path d="M140 92 L325 215 L510 92" stroke="#68724D" strokeWidth="2" strokeDasharray="6 8" />
            <path d="M140 338 L325 215 L510 338" stroke="#B08D57" strokeWidth="2" strokeDasharray="6 8" />
            <path d="M325 354 L325 215" stroke="#68724D" strokeWidth="2" strokeDasharray="6 8" />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <IconCard icon={Target} title="Goals">Find aligned opportunities, source credible candidates, reduce hiring uncertainty, and build a measurable transition ecosystem.</IconCard>
          <IconCard icon={Wrench} title="Pain Points">Terminology mismatch, resume ambiguity, inconsistent screening quality, fragmented communication, and limited performance reporting.</IconCard>
          <IconCard icon={Sparkles} title="Desired Outcomes">Clear match rationale, guided profile completion, transparent workflows, faster interviews, and trusted talent-market insights.</IconCard>
        </div>
      </Page>

      <Page number={5} kicker="User Journey Flows" title="Marketplace journeys that convert intent into outcomes" subtitle="Each journey should be intentionally instrumented so user actions strengthen the profile graph, matching engine, and operational reporting layer.">
        <div className="space-y-5">
          <JourneyFlow title="Candidate Journey" tone="text-olive" steps={['Registration','Profile','Resume','Matching','Application','Scheduling','Hiring']} />
          <JourneyFlow title="Employer Journey" tone="text-brass" steps={['Registration','Company Profile','Job Posting','Candidate Discovery','Shortlist','Interview','Hiring']} />
          <div className="card p-5">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-[14px] font-extrabold text-ink">Admin Journey</h3><ClipboardCheck className="text-slateblue" size={18} /></div>
            <div className="grid grid-cols-3 gap-4">
              {['Moderation','Reporting','Management'].map((step, index) => (
                <div key={step} className="rounded-[22px] border border-line bg-field/70 p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[12px] font-black text-olive">{index + 1}</div>
                  <div className="text-[14px] font-black text-ink">{step}</div>
                  <p className="mt-2 text-[11px] leading-5 text-slate-600">Govern quality, trust, compliance, and marketplace performance.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-olive/25 bg-olive/10 p-5 text-[12px] leading-6 text-slate-700">
            <b className="text-ink">Journey design principle:</b> every step should reduce friction for the current user and capture structured signals for better future matching.
          </div>
        </div>
      </Page>

      <Page number={6} kicker="MVP Module Breakdown" title="Practical MVP scope with extensibility built in" subtitle="The MVP should prove marketplace liquidity, matching quality, and workflow trust before expanding into advanced intelligence layers.">
        <div className="grid grid-cols-3 gap-5">
          {[{
            icon: ShieldCheck, title: 'Candidate Portal', purpose: 'Create military-aware profiles, upload resumes, manage applications, and view recommended opportunities.', value: 'Improves readiness and makes service history easier for employers to evaluate.', future: 'Resume parsing, skill translation guidance, AI profile coaching, credential verification.'
          }, {
            icon: Building2, title: 'Employer Portal', purpose: 'Manage company profile, post roles, discover candidates, shortlist, schedule, and track hiring activity.', value: 'Reduces sourcing ambiguity and accelerates veteran-focused recruiting workflows.', future: 'Talent pools, recruiter collaboration, campaign analytics, ATS integrations.'
          }, {
            icon: KeyRound, title: 'Admin Portal', purpose: 'Moderate users and content, manage categories, review activity, and maintain marketplace quality.', value: 'Protects trust, compliance posture, and operational control during early growth.', future: 'Advanced reporting, fraud signals, role permissions, workflow automation.'
          }].map(({icon:Icon,title,purpose,value,future}) => (
            <div key={title} className="card flex min-h-[455px] flex-col p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-slateblue text-white"><Icon size={28} /></div>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-ink">{title}</h3>
              <div className="mt-5 space-y-5 text-[12px] leading-6 text-slate-700">
                <div><div className="text-[10px] font-black uppercase tracking-[0.16em] text-brass">Purpose</div>{purpose}</div>
                <div><div className="text-[10px] font-black uppercase tracking-[0.16em] text-brass">Business Value</div>{value}</div>
                <div><div className="text-[10px] font-black uppercase tracking-[0.16em] text-brass">Future Expansion</div>{future}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-4 gap-3">
          {['Profile graph','Job graph','Matching data','Workflow events'].map((item) => <div key={item} className="rounded-2xl bg-field p-4 text-center text-[11px] font-black uppercase tracking-[0.1em] text-olive">{item}</div>)}
        </div>
      </Page>
      <Page number={7} kicker="Matching Engine Visualization" title="Matching as the strategic asset" subtitle="The matching layer should be designed as a compounding product capability: every profile, role, action, and outcome improves the system’s ability to recommend credible opportunities.">
        <div className="grid grid-cols-[.9fr_1.2fr_.9fr] gap-5">
          <div className="space-y-3">
            {['Candidate Skills','Military Experience','Certifications','Location'].map((item) => <div key={item} className="card p-4 text-[13px] font-bold text-ink"><ShieldCheck className="mb-2 text-olive" size={19} />{item}</div>)}
          </div>
          <div className="relative rounded-[34px] border border-brass/40 bg-gradient-to-br from-slateblue to-olive p-8 text-white shadow-card">
            <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white text-center text-2xl font-black text-brass">→</div>
            <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white text-center text-2xl font-black text-brass">→</div>
            <Radar className="mx-auto text-brass" size={58} />
            <h3 className="mt-4 text-center text-3xl font-black tracking-[-0.05em]">Matching Layer</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] font-bold">
              {['Taxonomy mapping','Weighted fit score','Constraint filtering','Explainable rationale'].map((item) => <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-3 text-center">{item}</div>)}
            </div>
          </div>
          <div className="space-y-3">
            {['Employer Requirements','Role Criteria','Hiring Urgency','Recommendations'].map((item) => <div key={item} className="card p-4 text-[13px] font-bold text-ink"><Building2 className="mb-2 text-brass" size={19} />{item}</div>)}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-5">
          <div className="card p-6">
            <SectionLabel>Why it matters</SectionLabel>
            <p className="text-[13px] leading-6 text-slate-700">A military hiring platform wins when it turns hard-to-interpret experience into explainable fit. Matching becomes a strategic asset because it drives candidate confidence, employer trust, recruiter efficiency, and marketplace defensibility.</p>
          </div>
          <div className="card p-6">
            <SectionLabel>Recommendation outputs</SectionLabel>
            <div className="space-y-2 text-[12px] font-bold text-slate-700">
              {['Best-fit roles for candidates','High-potential candidates for employers','Skill gaps and profile completion prompts','Market insights for supply-demand planning'].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-olive" />{item}</div>)}
            </div>
          </div>
        </div>
      </Page>

      <Page number={8} kicker="System Architecture V1" title="Modular SaaS architecture for an MVP that can scale" subtitle="The architecture should keep the initial build focused while preserving clean boundaries for future intelligence, integrations, and enterprise-grade operations.">
        <div className="rounded-[30px] border border-line bg-white p-5 shadow-card">
          <MermaidBlock chart={`flowchart LR
            subgraph Client[User Experience]
              C[Candidate Portal]
              E[Employer Portal]
              A[Admin Portal]
            end
            subgraph FE[Frontend Boundary]
              N[Next.js + TypeScript]
            end
            subgraph API[Backend Boundary]
              B[NestJS API]
              AU[JWT Auth + RBAC]
              NO[Email + In-App Notifications]
            end
            subgraph DATA[Data Boundary]
              DB[(PostgreSQL)]
              S3[(AWS S3 Storage)]
            end
            C --> N
            E --> N
            A --> N
            N --> B
            B --> AU
            B --> DB
            B --> S3
            B --> NO`} />
        </div>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {[{icon:Layers3,title:'Frontend',text:'Next.js document-grade UI and portal foundation.'},{icon:Server,title:'Backend',text:'NestJS modules for marketplace workflows.'},{icon:Database,title:'Database',text:'PostgreSQL relational model for users, jobs, matches.'},{icon:Mail,title:'Notifications',text:'Email and in-app events for workflow movement.'}].map(({icon:Icon,title,text}) => (
            <div key={title} className="rounded-2xl border border-line bg-field/60 p-4">
              <Icon className="mb-3 text-olive" size={22} />
              <div className="text-[13px] font-black text-ink">{title}</div>
              <p className="mt-1 text-[10px] leading-4 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Page>

      <Page number={9} kicker="Security & Scalability" title="Trust, governance, and growth readiness" subtitle="The platform will handle sensitive career, identity, and employer workflow data; therefore security and scalability must be treated as product requirements from the first release.">
        <div className="grid grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3"><LockKeyhole className="text-olive" size={30} /><h3 className="text-2xl font-black tracking-[-0.04em] text-ink">Security</h3></div>
            <div className="grid grid-cols-2 gap-3">
              {['Authentication','Authorization','Role Management','Audit Logs','Data Protection','Secure Storage'].map((item) => <div key={item} className="rounded-2xl border border-line bg-white p-4 text-[12px] font-bold text-slate-700"><ShieldCheck className="mb-2 text-olive" size={18} />{item}</div>)}
            </div>
          </div>
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3"><Gauge className="text-brass" size={30} /><h3 className="text-2xl font-black tracking-[-0.04em] text-ink">Scalability</h3></div>
            <div className="grid grid-cols-2 gap-3">
              {['Horizontal Growth','Database Scaling','Caching','Future Services','Queue Workers','Search Layer'].map((item) => <div key={item} className="rounded-2xl border border-line bg-white p-4 text-[12px] font-bold text-slate-700"><Server className="mb-2 text-brass" size={18} />{item}</div>)}
            </div>
          </div>
        </div>
        <div className="mt-7 rounded-[30px] border border-line bg-slateblue p-6 text-white">
          <SectionLabel>Architecture posture</SectionLabel>
          <div className="grid grid-cols-5 items-center gap-3 text-center text-[11px] font-bold">
            {['Identity','Permissions','Workflow Events','Observability','Scale Units'].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brass text-white">{index + 1}</div>{item}
              </div>
            ))}
          </div>
        </div>
      </Page>

      <Page number={10} kicker="Discovery Questions" title="Workshop agenda for informed product definition" subtitle="These questions are designed to turn assumptions into decisions across business model, product experience, data strategy, compliance, and technical execution.">
        <div className="grid grid-cols-3 gap-5">
          {[{
            icon: BriefcaseBusiness, title: 'Business Questions', questions: ['What is the initial geographic and employer segment focus?', 'Will revenue come from subscriptions, placement fees, employer seats, or hybrid models?', 'What defines marketplace success in the first 90 days after launch?', 'Which partnerships or veteran organizations matter most?']
          }, {
            icon: FileCheck2, title: 'Product Questions', questions: ['What candidate data is required for credible matching?', 'How guided should resume/profile creation be?', 'What employer workflows must exist in MVP versus later?', 'What match explanation will recruiters trust?']
          }, {
            icon: Server, title: 'Technical Questions', questions: ['What identity verification level is required?', 'Are ATS or job-board integrations needed in V1?', 'What reporting is required for employers and admins?', 'What compliance and data retention rules apply?']
          }].map(({icon:Icon,title,questions}) => (
            <div key={title} className="card p-6">
              <Icon className="mb-4 text-olive" size={32} />
              <h3 className="text-xl font-black tracking-[-0.04em] text-ink">{title}</h3>
              <div className="mt-5 space-y-3">
                {questions.map((question) => <div key={question} className="rounded-2xl bg-field/70 p-3 text-[11px] font-semibold leading-5 text-slate-700">{question}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[26px] border border-brass/25 bg-brass/10 p-5 text-[12px] leading-6 text-slate-700">
          <b className="text-ink">Recommended workshop output:</b> prioritized MVP backlog, target user definitions, data model assumptions, matching logic v1, integration map, and measurable launch success criteria.
        </div>
      </Page>

      <Page number={11} kicker="Implementation Roadmap" title="Phased roadmap from core marketplace to intelligent hiring platform" subtitle="A phased release plan reduces delivery risk while allowing the platform to learn from real marketplace behavior before investing in advanced automation.">
        <div className="relative mt-12 h-[430px]">
          <div className="absolute left-8 right-8 top-32 h-1 rounded-full bg-line" />
          {[{
            phase:'Phase 1', title:'Core Marketplace', x:'left-0', items:['Candidate + employer onboarding','Job posting and applications','Admin moderation','Basic matching filters']
          },{
            phase:'Phase 2', title:'Advanced Matching', x:'left-1/2 -translate-x-1/2', items:['Weighted recommendations','Messaging','Scheduling workflows','Analytics foundation']
          },{
            phase:'Phase 3', title:'AI & Intelligence', x:'right-0', items:['AI recommendations','Employer intelligence','Recruiter tools','Integration ecosystem']
          }].map((phase, index) => (
            <div key={phase.phase} className={`absolute ${phase.x} top-0 w-[245px]`}>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-slateblue text-xl font-black text-white shadow-card">{index + 1}</div>
              <div className="card p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brass">{phase.phase}</div>
                <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-ink">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-[11px] leading-5 text-slate-700">
                  {phase.items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 text-olive" />{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Metric value="Build" label="Validate core workflows" />
          <Metric value="Learn" label="Instrument marketplace signals" />
          <Metric value="Scale" label="Automate intelligence layers" />
        </div>
      </Page>

      <Page number={12} kicker="Final Observations" title="The value is not job posting. It is translation into hireability." subtitle="The most important product decision is to make military experience understandable, discoverable, and actionable for civilian employers without reducing candidates to keyword matches.">
        <div className="grid grid-cols-[1.05fr_.95fr] gap-7">
          <div className="space-y-5">
            <div className="card p-7">
              <SectionLabel>Executive conclusion</SectionLabel>
              <p className="text-[17px] font-semibold leading-8 text-slate-700">A Military Hiring Marketplace SaaS Platform should be built around trust, translation, and workflow velocity. The real product is not a list of jobs; it is a system that helps employers understand military capability and helps candidates move from service experience to meaningful civilian opportunity.</p>
            </div>
            <div className="rounded-[30px] border border-olive/25 bg-field p-7">
              <Flag className="mb-4 text-olive" size={34} />
              <p className="font-serif text-[27px] leading-10 tracking-[-0.03em] text-ink">“Creating technology that connects military talent with meaningful civilian opportunities.”</p>
            </div>
          </div>
          <div className="rounded-[34px] bg-slateblue p-7 text-white">
            <div className="rounded-3xl border border-white/15 bg-white p-3">
              <AgencyLogo compact />
            </div>
            <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-brass">Prepared by</div>
            <div className="mt-2 text-4xl font-black tracking-[-0.06em]">Shine Dezign</div>
            <div className="mt-8 space-y-4 text-[13px] leading-6 text-white/80">
              <div className="flex gap-3"><CalendarClock className="text-brass" size={19} />Discovery-ready blueprint prepared {preparedDate}</div>
              <div className="flex gap-3"><GraduationCap className="text-brass" size={19} />Recommended next step: structured stakeholder workshop</div>
              <div className="flex gap-3"><MapPin className="text-brass" size={19} />Focus: MVP clarity, data model, matching logic, delivery roadmap</div>
            </div>
            <div className="mt-12 rounded-3xl border border-white/15 bg-white/10 p-5 text-[12px] leading-6 text-white/80">This document is intentionally pre-discovery: it frames the likely opportunity, assumptions, product architecture, and decision areas before formal requirement definition begins.</div>
          </div>
        </div>
      </Page>
      </main>
    </>
  );
}
