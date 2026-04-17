import Image from "next/image";

const brandName = "BDE Management Consulting";
const linkedinUrl = "https://www.linkedin.com/in/tinoidam/";
const githubPrototypeUrl =
  "https://github.com/TinoiDam/Control-layer-affine-prototype";
const contactEmail = "tinoi.dam@tfg.nl";

const metrics = [
  ["600+", "applicaties geanalyseerd"],
  ["106", "applicaties in scope gebracht"],
  ["17", "domeinen verbonden"],
];

const experienceNames = [
  "Rabobank",
  "DUO",
  "RIVM",
  "Belastingdienst",
  "Eneco",
  "Fudura",
];

const services = [
  {
    label: "01",
    title: "Informatiehuishouding & IV",
    text: "Applicaties, datagebruik, eigenaarschap en besluitvorming terugbrengen naar een bestuurbaar geheel.",
  },
  {
    label: "02",
    title: "Governance & besluitstructuur",
    text: "Richting vertalen naar duidelijke besluitpunten, rollen, afhankelijkheden en uitvoerbare control.",
  },
  {
    label: "03",
    title: "Portfolio & implementatie",
    text: "Ambitie, risico en capaciteit verbinden aan keuzes die bestuurlijk houdbaar en operationeel uitvoerbaar zijn.",
  },
  {
    label: "04",
    title: "AI control & auditability",
    text: "AI toepassen met beleid, contextcontrole, menselijke goedkeuring en reproduceerbare verantwoording.",
  },
];

const approach = [
  "Huidige situatie in kaart brengen.",
  "Gewenste situatie definiëren.",
  "Gaps identificeren tussen ambitie, techniek en gedrag.",
  "Opties formuleren met afwegingen en consequenties.",
  "Besluitvorming afstemmen.",
  "Roadmap bepalen die de organisatie kan dragen.",
];

const aiControls = [
  ["Governed retrieval", "Alleen context binnen scope, objecttype en vertrouwelijkheid."],
  ["Policy-enforced write-back", "Output alleen naar vooraf toegestane objecten en workflows."],
  ["Auditability by design", "Bronnen, beslissingen en state-diffs reproduceerbaar vastgelegd."],
  ["Human approval", "Menselijke goedkeuring waar impact of risico dat vereist."],
];

const credentials = [
  "DUO: 600+ applicaties geanalyseerd, 106 in scope gebracht en 17 domeinen verbonden rond raadpleeg-logging compliance.",
  "Rabobank: organisatieontwerp en FEC definition management in internationale context.",
  "IV-, portfolio- en governanceopdrachten in publieke, financiële, zorg- en energieomgevingen.",
  "MSc Business Administration, IREB/CPRE, Lean Six Sigma Black Belt en Power BI gecertificeerd.",
];

const maturityDimensions = [
  "Customer",
  "Governance",
  "Process",
  "Organization & skills",
  "Behavior & leadership",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="button-link">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--color-bg-default)] text-[var(--color-text-primary)]">
      <section className="border-b border-[var(--color-divider)] bg-[var(--color-bg-default)]">
        <div className="mx-auto max-w-[1100px] px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-8">
            <a
              href="#"
              aria-label={`${brandName} home`}
              className="max-w-52 text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.24em]"
            >
              {brandName}
            </a>
            <nav className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-text-secondary)] md:flex">
              <a href="#expertise" className="transition hover:text-[var(--color-accent)]">
                Expertise
              </a>
              <a href="#ai-control" className="transition hover:text-[var(--color-accent)]">
                AI control
              </a>
              <a href="#case" className="transition hover:text-[var(--color-accent)]">
                Case
              </a>
            </nav>
            <a
              href={`mailto:${contactEmail}`}
              className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.18em] underline decoration-[var(--color-accent)] decoration-1 underline-offset-8 transition hover:text-[var(--color-accent)] sm:inline-flex"
            >
              Contact
            </a>
          </header>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] text-[var(--color-text-inverse)]">
        <div className="mx-auto grid max-w-[1100px] gap-16 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.96fr_0.74fr] lg:px-10 lg:py-28">
          <div>
            <SectionLabel>Bestuur / techniek / gedrag</SectionLabel>
            <h1 className="mt-10 max-w-3xl text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[5rem] lg:text-[5.75rem]">
              Richting omzetten in gecontroleerde uitvoering.
            </h1>
          </div>
          <div className="self-end border-t border-white/14 pt-8 lg:pt-10">
            <p className="max-w-[38rem] text-[1.18rem] font-light leading-8 text-white/78 sm:text-[1.32rem]">
              {brandName} werkt op het snijvlak van governance,
              informatievoorziening en AI-context in omgevingen waar richting
              bestaat, maar uitvoering nog niet structureel beheerst is.
            </p>
            <p className="mt-7 max-w-[38rem] leading-7 text-white/58">
              De inzet is helder: minder interpretatie, minder belasting voor de
              organisatie en meer controle op wat er werkelijk verandert.
            </p>
            <div className="mt-9">
              <PrimaryLink href="#expertise">Bekijk expertise</PrimaryLink>
            </div>
          </div>
        </div>
        <div className="border-t border-white/12">
          <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-7 sm:grid-cols-3 sm:px-8 lg:px-10">
            {metrics.map(([value, label]) => (
              <div key={value} className="flex items-baseline gap-4">
                <span className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text-inverse)]">
                  {value}
                </span>
                <span className="max-w-40 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-white/45">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-divider)] bg-[var(--color-surface-primary)]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.34fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Ervaringscontext</SectionLabel>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">
              Opdrachtomgevingen waar governance, informatie en uitvoering
              samen moesten vallen.
            </p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-[var(--color-border)] sm:grid-cols-3 lg:grid-cols-6">
            {experienceNames.map((name) => (
              <div
                key={name}
                className="flex min-h-28 items-center justify-center border-b border-r border-[var(--color-border)] px-4 py-6"
              >
                <span className="text-center text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section-block bg-[var(--color-bg-alt)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.38fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-md">Structuur voor werk dat niet vaag mag blijven.</h2>
          </div>
          <div className="border-t border-[var(--color-border)]">
            {services.map((service) => (
              <article
                key={service.label}
                className="grid gap-5 border-b border-[var(--color-border)] py-7 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)]">
                  {service.label}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-3 max-w-[42rem] leading-7 text-[var(--color-text-secondary)]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-control" className="section-block bg-[var(--color-primary)] text-[var(--color-text-inverse)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.46fr_1fr] lg:px-10">
          <div>
            <SectionLabel>AI control-layer</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-lg text-[var(--color-text-inverse)]">
              AI-governance buiten het model afdwingen.
            </h2>
          </div>
          <div>
            <p className="max-w-[44rem] text-lg font-light leading-8 text-white/72">
              Het control-layer prototype is een bewijsstuk voor enterprise AI:
              context, policy, write-back en auditability worden niet aan het
              model overgelaten, maar in de operationele laag gecontroleerd.
            </p>
            <div className="mt-9 grid border-l border-t border-white/14 sm:grid-cols-2">
              {aiControls.map(([title, text]) => (
                <article key={title} className="border-b border-r border-white/14 p-6">
                  <h3 className="font-semibold tracking-[-0.01em]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/58">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-9">
              <a
                href={githubPrototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold uppercase tracking-[0.14em] underline decoration-[var(--color-accent)] underline-offset-8 transition hover:text-[var(--color-accent)]"
              >
                Open prototype
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-surface-primary)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.34fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Profiel</SectionLabel>
            <div className="mt-7 flex items-start gap-5">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden border border-[var(--color-border)]">
                <Image
                  src="/images/tinoi-dam-portrait.jpg"
                  alt="Portret van Tinoi Dam"
                  fill
                  sizes="64px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.03em]">Tinoi Dam</p>
                <p className="mt-3 max-w-52 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[var(--color-text-secondary)]">
                  Governance / IV / AI-context
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading-lg max-w-3xl">Verbindt richting, besluitvorming en uitvoering.</h2>
            <p className="mt-7 max-w-[44rem] text-lg font-light leading-8 text-[var(--color-text-secondary)]">
              Strategieën en frameworks stranden wanneer organisaties afhaken op
              abstractie. Het werk zit in de vertaling: wat moet veranderen, wie
              moet besluiten en hoe landt het zonder onnodige organisatiebelasting?
            </p>
            <div className="mt-9 grid gap-5 border-t border-[var(--color-border)] pt-7 sm:grid-cols-2">
              {credentials.map((credential) => (
                <p key={credential} className="text-sm leading-6 text-[var(--color-text-secondary)]">
                  {credential}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-bg-alt)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.38fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Aanpak</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-md">Van ongedefinieerd naar besluitbaar.</h2>
          </div>
          <div className="border-t border-[var(--color-border)]">
            {approach.map((step, index) => (
              <div
                key={step}
                className="grid gap-5 border-b border-[var(--color-border)] py-5 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-7 tracking-[-0.01em]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-surface-primary)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.44fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Diagnostic instrument</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-lg">Volwassenheid zichtbaar maken voordat verandering start.</h2>
            <p className="mt-7 max-w-[40rem] leading-7 text-[var(--color-text-secondary)]">
              De Lean Maturity Scan maakt frictie, ontbrekende managementroutines
              en de eerstvolgende zinvolle stap expliciet.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {maturityDimensions.map((dimension) => (
                <span key={dimension} className="tag">
                  {dimension}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <PrimaryLink href="/docs/lean-maturity-scan.pdf">Open scan preview</PrimaryLink>
            </div>
          </div>
          <a
            href="/docs/lean-maturity-scan.pdf"
            aria-label="Open de Lean Maturity Scan preview"
            className="relative block min-h-[20rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-primary)]"
          >
            <Image
              src="/images/lean-maturity-scan.png"
              alt="Preview van de BDE Lean Maturity Scan"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-contain p-5"
            />
          </a>
        </div>
      </section>

      <section id="case" className="section-block bg-[var(--color-primary)] text-[var(--color-text-inverse)]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.42fr_1fr] lg:px-10">
          <div>
            <SectionLabel>Case study</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-lg text-[var(--color-text-inverse)]">
              Gedeelde taal voor globale FEC-governance.
            </h2>
            <p className="mt-7 max-w-[38rem] leading-7 text-white/62">
              Compliance-fragmentatie vertaald naar definities, eigenaarschap,
              besluitrechten en uitvoerbare implementatie.
            </p>
            <div className="mt-9">
              <PrimaryLink href="/docs/global-strategies-case.pdf">Open volledige deck</PrimaryLink>
            </div>
          </div>
          <div>
            <div className="border border-white/14 bg-[var(--color-primary)] p-2">
              <object
                data="/docs/global-strategies-case.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                type="application/pdf"
                aria-label="Scrollable PDF preview van de Global Strategies case study"
                className="h-[28rem] w-full bg-[var(--color-text-inverse)] sm:h-[36rem]"
              >
                <a
                  href="/docs/global-strategies-case.pdf"
                  className="relative block h-[26rem] overflow-hidden bg-[var(--color-primary)]"
                >
                  <Image
                    src="/images/global-strategies-case.png"
                    alt="Preview van de Global Strategies case study"
                    fill
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="object-contain p-5"
                  />
                </a>
              </object>
            </div>
            <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/38">
              Originele PDF-preview
            </p>
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-bg-default)]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 sm:px-8 lg:grid-cols-[0.62fr_0.38fr] lg:px-10">
          <h2 className="heading-lg max-w-2xl">Voor werk dat te belangrijk is om als capaciteit te behandelen.</h2>
          <div className="border-t border-[var(--color-border)] pt-7">
            <p className="max-w-[34rem] leading-7 text-[var(--color-text-secondary)]">
              Governance, informatievoorziening en AI verantwoord operationaliseren
              zonder onnodige complexiteit toe te voegen.
            </p>
            <div className="mt-9">
              <PrimaryLink href={`mailto:${contactEmail}`}>Neem contact op</PrimaryLink>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.14em] underline decoration-[var(--color-accent)] underline-offset-8 transition hover:text-[var(--color-accent)]"
            >
              Bekijk profiel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
