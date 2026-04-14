import type { ResumeData } from "../data/resume";

interface Props {
  data: ResumeData;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {title}
      </h2>
      <div className="mt-1 h-px bg-slate-200" />
    </div>
  );
}

function Sidebar({ data }: Props) {
  return (
    <aside className="w-full md:w-64 md:shrink-0 bg-slate-800 text-slate-100 p-6 flex flex-col gap-7 print:w-64 print:shrink-0">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full ring-4 ring-slate-600 overflow-hidden shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          Contact
        </h3>
        <ul className="space-y-2 text-sm">
          <ContactItem icon="✉" text={data.contact.email} />
          <ContactItem icon="✆" text={data.contact.phone} />
          <ContactItem icon="⌖" text={data.contact.location} />
          {data.contact.linkedin && (
            <ContactItem icon="in" text={data.contact.linkedin} />
          )}
          {data.contact.github && (
            <ContactItem icon="gh" text={data.contact.github} />
          )}
          {data.contact.website && (
            <ContactItem icon="🌐" text={data.contact.website} />
          )}
        </ul>
      </div>

      {/* Skills */}
      {data.skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-1">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded bg-slate-700 text-slate-200 text-xs leading-none"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Languages
          </h3>
          <ul className="space-y-1">
            {data.languages.map(({ lang, level }) => (
              <li key={lang} className="text-sm flex justify-between">
                <span>{lang}</span>
                <span className="text-slate-400 text-xs">{level}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-2 break-all">
      <span className="text-slate-400 shrink-0 font-mono text-xs mt-0.5">
        {icon}
      </span>
      <span className="text-slate-300 text-xs leading-relaxed">{text}</span>
    </li>
  );
}

function MainContent({ data }: Props) {
  return (
    <main className="flex-1 p-5 md:p-8 flex flex-col gap-7 overflow-hidden">
      {/* Summary */}
      <section>
        <SectionTitle title="Profile" />
        <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
      </section>

      {/* Awards */}
      {data.awards && data.awards.length > 0 && (
        <section>
          <SectionTitle title="Awards & Recognition" />
          <div className="flex flex-col gap-3">
            {data.awards.map((award) => (
              <div key={award.title} className="flex justify-between items-start flex-wrap gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-amber-500 text-sm">🏆</span>
                    <span className="font-semibold text-sm text-slate-800">{award.title}</span>
                    <span className="text-slate-500 text-sm"> · {award.issuer}</span>
                  </div>
                  {award.description && (
                    <p className="text-xs text-slate-500 leading-relaxed">{award.description}</p>
                  )}
                </div>
                <span className="text-xs text-slate-400 shrink-0 font-medium">{award.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      <section>
        <SectionTitle title="Experience" />
        <div className="flex flex-col gap-5">
          {data.experience.map((exp) => (
            <div key={exp.company + exp.role + exp.period}>
              <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
                <div>
                  <span className="font-semibold text-sm text-slate-800">
                    {exp.role}
                  </span>
                  <span className="text-slate-500 text-sm"> · {exp.company}</span>
                </div>
                <span className="text-xs text-slate-400 shrink-0">
                  {exp.period} · {exp.location}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-slate-600 leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <SectionTitle title="Projects" />
          <div className="flex flex-col gap-4">
            {data.projects.map((proj) => (
              <div key={proj.name}>
                <div className="flex justify-between items-baseline gap-2 mb-0.5">
                  <span className="font-semibold text-sm text-slate-800">
                    {proj.name}
                  </span>
                  {proj.url && (
                    <span className="text-xs text-slate-400">{proj.url}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-1">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 leading-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section>
        <SectionTitle title="Education" />
        <div className="flex flex-col gap-3">
          {data.education.map((edu) => (
            <div key={edu.institution} className="flex justify-between items-baseline flex-wrap gap-1">
              <div>
                <span className="font-semibold text-sm text-slate-800">
                  {edu.degree}
                </span>
                <span className="text-slate-500 text-sm">
                  {" "}· {edu.institution}
                </span>
                {edu.detail && (
                  <p className="text-xs text-slate-400 mt-0.5">{edu.detail}</p>
                )}
              </div>
              <span className="text-xs text-slate-400 shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function Resume({ data }: Props) {
  return (
    <div
      id="resume"
      className="resume-page bg-white shadow-xl mx-auto w-full md:w-[210mm] min-h-screen md:min-h-[297mm] flex flex-col-reverse md:flex-row print:w-[210mm] print:min-h-[297mm] print:flex-row"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <Sidebar data={data} />
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-slate-900 text-white px-6 md:px-8 py-6 md:py-7">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{data.name}</h1>
          <p className="mt-1 text-slate-300 text-xs md:text-sm tracking-wide uppercase">
            {data.title}
          </p>
        </header>
        <MainContent data={data} />
      </div>
    </div>
  );
}
