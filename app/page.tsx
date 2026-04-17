import Image from "next/image";
import { SlideDeckPreview } from "./components/SlideDeckPreview";

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

const portfolioItems = [
  {
    company: "DUO",
    context: "Raadpleeg-logging compliance over een breed applicatielandschap.",
    action: "Scope, domeinen en implementatiestrategie expliciet gemaakt.",
    result: "600+ applicaties geanalyseerd, 106 applicaties in scope en 17 domeinen verbonden.",
  },
  {
    company: "Rabobank",
    context: "FEC definition management in internationale governance-context.",
    action: "Organisatieontwerp vertaald naar rollen, definities en besluitstructuur.",
    result: "Meer gedeelde taal rond eigenaarschap en uitvoerbare implementatie.",
  },
  {
    company: "RIVM",
    context: "Publieke omgeving waar betrouwbaarheid, informatie en uitvoering samenkomen.",
    action: "Governancevraagstukken gestructureerd rond besluitbaarheid en verantwoordelijkheid.",
    result: "Meer controle op richting, afhankelijkheden en uitvoeringskeuzes.",
  },
  {
    company: "Belastingdienst",
    context: "Complexe IV-vraagstukken met meerdere organisatorische afhankelijkheden.",
    action: "Eigenaarschap, besluitvorming en beheersbare uitvoering geordend.",
    result: "Minder interpretatieruimte in bestuurlijke en operationele keuzes.",
  },
  {
    company: "Eneco",
    context: "Portfolio- en implementatiekeuzes met business- en IT-afhankelijkheden.",
    action: "Operationele afhankelijkheden expliciet gemaakt voor besluitvorming.",
    result: "Meer samenhang tussen ambitie, risico, capaciteit en uitvoering.",
  },
  {
    company: "Fudura",
    context: "Technische bedrijfscontext met uitvoerings- en afstemmingsvraagstukken.",
    action: "Structuur, ritme en besluitbaarheid verbonden aan lopend werk.",
    result: "Meer uitvoeringsduidelijkheid zonder extra organisatielaag.",
  },
];

const services = [
  {
    label: "01",
    title: "Informatiehuishouding & IV",
    text: "Applicaties, datagebruik, eigenaarschap en besluitvorming terugbrengen naar controleerbare structuren.",
  },
  {
    label: "02",
    title: "Governance & besluitstructuur",
    text: "Richting vertalen naar besluitpunten, rollen, afhankelijkheden en verdedigbare uitvoering.",
  },
  {
    label: "03",
    title: "Portfolio & implementatie",
    text: "Ambitie, risico en capaciteit verbinden aan keuzes met meetbare voortgang.",
  },
  {
    label: "04",
    title: "AI control & auditability",
    text: "AI toepassen met contextcontrole, menselijke goedkeuring en reproduceerbare verantwoording.",
  },
];

const approach = [
  "Huidige structuur, risico's en afhankelijkheden expliciet maken.",
  "Gewenste besluit- en uitvoeringsstructuur definiëren.",
  "Gaps identificeren tussen richting, governance en uitvoering.",
  "Opties formuleren met consequenties en verdedigbaarheid.",
  "Besluitvorming organiseren rond eigenaarschap.",
  "Roadmap bepalen met meetbare voortgang.",
];

const aiControls = [
  ["Governed retrieval", "Alleen context binnen scope, objecttype en vertrouwelijkheid."],
  ["Policy-enforced write-back", "Output alleen naar vooraf toegestane objecten en workflows."],
  ["Auditability by design", "Bronnen, beslissingen en state-diffs reproduceerbaar vastgelegd."],
  ["Human approval", "Menselijke goedkeuring waar impact of risico dat vereist."],
];

const capabilityPrinciples = [
  ["Outcome over activity", "Elke interventie leidt tot een besluit, structuur of meetbare voortgang."],
  ["Risk-reduction framing", "Werk voorkomt stagnatie, misalignment of governance failure."],
  ["Defendability", "Uitkomsten zijn uitlegbaar en verdedigbaar op board- of programmaniveau."],
  ["Consistency of signal", "Positionering, taal en uitvoering sluiten zonder tegenspraak op elkaar aan."],
  ["Scale signaling", "Complexiteit, scope en stakeholderomgeving worden expliciet gemaakt."],
  ["Governance language", "Communicatie vertrekt vanuit besluitvorming, niet vanuit supportactiviteit."],
  ["Anti-ambiguity", "Geen vage bijdrage: altijd eigenaarschap of structurele impact."],
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
        <div className="site-container py-2.5 sm:py-3">
          <header className="flex items-center justify-between gap-8">
            <a
              href="#"
              aria-label={`${brandName} home`}
              className="whitespace-nowrap text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.18em] sm:text-[0.72rem] sm:tracking-[0.22em]"
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
              <a href="#portfolio" className="transition hover:text-[var(--color-accent)]">
                Portfolio
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

      <section className="dark-hue-section text-[var(--color-text-inverse)]">
        <div className="site-container hero-grid py-20 sm:py-24 lg:py-28">
          <div className="hero-grid__heading">
            <SectionLabel>Bestuur / techniek / gedrag</SectionLabel>
            <h1 className="heading-xl mt-10 max-w-[60rem] text-balance">
              Richting naar gecontroleerde uitvoering.
            </h1>
          </div>
          <div className="hero-grid__body hairline-top pt-8 lg:pt-10">
            <p className="max-w-[38rem] text-[1.18rem] font-light leading-8 text-white/78 sm:text-[1.32rem]">
              {brandName} werkt op het snijvlak van governance,
              informatievoorziening en AI-context in omgevingen waar richting
              bestaat, maar uitvoering nog niet structureel gestuurd wordt.
            </p>
            <p className="mt-7 max-w-[38rem] leading-7 text-white/58">
              De inzet is helder: minder interpretatie, minder organisatiebelasting
              en meer verdedigbare voortgang.
            </p>
            <div className="mt-9">
              <PrimaryLink href="#expertise">Bekijk expertise</PrimaryLink>
            </div>
          </div>
        </div>
        <div className="hero-metrics">
          <div className="site-container hero-grid hero-grid__metrics py-7">
            {metrics.map(([value, label]) => (
              <div key={value} className="metric-item">
                <span className="text-3xl font-semibold tracking-normal text-[var(--color-text-inverse)]">
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

      <section className="matrix-section border-b border-[var(--color-divider)]">
        <div className="site-container layout-grid layout-grid--section py-16">
          <div>
            <SectionLabel>Ervaringscontext</SectionLabel>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">
              Opdrachtomgevingen waar governance, informatie en uitvoering
              samen moesten vallen.
            </p>
          </div>
          <div className="soft-matrix grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {experienceNames.map((name) => (
              <div
                key={name}
                className="soft-cell flex min-h-28 items-center justify-center px-4 py-6"
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
        <div className="site-container layout-grid layout-grid--section layout-grid--expertise">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[34rem]">Structuur voor werk dat niet vaag mag blijven.</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article
                key={service.label}
                className="service-item"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)]">
                  {service.label}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-normal">{service.title}</h3>
                  <p className="mt-3 max-w-[42rem] leading-7 text-[var(--color-text-secondary)]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-control" className="matrix-section section-block">
        <div className="site-container layout-grid layout-grid--section-wide">
          <div>
            <SectionLabel>AI control-layer</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[40rem]">
              AI-governance buiten het model afdwingen.
            </h2>
          </div>
          <div>
            <p className="max-w-[44rem] text-lg font-light leading-8 text-[var(--color-text-secondary)]">
              Het control-layer prototype is een bewijsstuk voor enterprise AI:
              context, policy, write-back en auditability worden niet aan het
              model overgelaten, maar in de operationele laag gecontroleerd.
            </p>
            <div className="soft-matrix mt-9 sm:grid-cols-2">
              {aiControls.map(([title, text]) => (
                <article key={title} className="soft-cell p-6">
                  <h3 className="font-semibold tracking-normal">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-9">
              <a
                href={githubPrototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open prototype
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-surface-primary)]">
        <div className="site-container layout-grid layout-grid--section">
          <div>
            <SectionLabel>Profiel</SectionLabel>
            <div className="mt-7 flex items-start gap-5">
              <div className="relative aspect-[4/5] h-24 shrink-0 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-secondary)]">
                <Image
                  src="/images/tinoi-dam-portrait.jpg"
                  alt="Portret van Tinoi Dam"
                  fill
                  sizes="96px"
                  className="object-cover object-[50%_16%]"
                />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-normal">Tinoi Dam</p>
                <p className="mt-3 max-w-52 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[var(--color-text-secondary)]">
                  Partner | Management Consultant
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading-lg max-w-[58rem]">Brengt richting in gecontroleerde uitvoering.</h2>
            <p className="mt-7 max-w-[44rem] text-lg font-light leading-8 text-[var(--color-text-secondary)]">
              Strategieën en frameworks stranden wanneer organisaties afhaken op
              abstractie. Het werk zit in de vertaling: wat moet veranderen, wie
              moet besluiten en wat is verdedigbaar op programmaniveau?
            </p>
            <div className="hairline-top mt-9 grid gap-5 pt-7 sm:grid-cols-2">
              {credentials.map((credential) => (
                <p key={credential} className="text-sm leading-6 text-[var(--color-text-secondary)]">
                  {credential}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="matrix-section section-block">
        <div className="site-container layout-grid layout-grid--section">
          <div>
            <SectionLabel>Werkprincipes</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[32rem] text-balance">Uitkomst boven activiteit.</h2>
          </div>
          <div className="principle-list">
            {capabilityPrinciples.map(([title, text]) => (
              <article key={title} className="principle-item">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-bg-alt)]">
        <div className="site-container layout-grid layout-grid--section">
          <div>
            <SectionLabel>Aanpak</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[32rem] text-balance">Besluitbaar maken.</h2>
          </div>
          <div className="approach-list">
            {approach.map((step, index) => (
              <div
                key={step}
                className="approach-item"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-7 tracking-normal">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-[var(--color-surface-primary)]">
        <div className="site-container layout-grid layout-grid--media">
          <div>
            <SectionLabel>Diagnostic instrument</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[42rem]">Volwassenheid zichtbaar maken voordat verandering start.</h2>
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
          <SlideDeckPreview
            title="Open de Lean Maturity Scan preview"
            href="/docs/lean-maturity-scan.pdf"
            imageSrc="/images/lean-maturity-scan.png"
            imageAlt="Preview van de BDE Lean Maturity Scan"
            tags={maturityDimensions}
            compact
          />
        </div>
      </section>


      <section id="portfolio" className="section-block bg-[var(--color-bg-alt)]">
        <div className="site-container layout-grid layout-grid--section">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[32rem] text-balance">Portfolio-context.</h2>
          </div>
          <div className="soft-matrix sm:grid-cols-2">
            {portfolioItems.map((item) => (
              <article
                key={item.company}
                className="soft-cell p-6 sm:p-7"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {item.company}
                </h3>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Context: </span>
                    {item.context}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Action: </span>
                    {item.action}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Result: </span>
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="section-block bg-[var(--color-surface-primary)]">
        <div className="site-container layout-grid layout-grid--media">
          <div>
            <SectionLabel>Case study</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[42rem]">
              Gedeelde taal voor globale FEC-governance.
            </h2>
            <p className="mt-7 max-w-[38rem] leading-7 text-[var(--color-text-secondary)]">
              Compliance-fragmentatie vertaald naar definities, eigenaarschap,
              besluitrechten en gecontroleerde uitvoering.
            </p>
            <div className="mt-9">
              <PrimaryLink href="/docs/global-strategies-case.pdf">Open volledige deck</PrimaryLink>
            </div>
          </div>
          <SlideDeckPreview
            title="Open volledige Global FEC governance deck"
            href="/docs/global-strategies-case.pdf"
            imageSrc="/images/global-strategies-case.png"
            imageAlt="Preview van de Global Strategies case study"
            tags={["FEC", "Governance", "Definitions"]}
            compact
          />
        </div>
      </section>

      <section className="section-block bg-[var(--color-bg-default)]">
        <div className="site-container layout-grid layout-grid--closing">
          <h2 className="heading-lg max-w-[56rem]">Voor werk dat verdedigbare uitvoering vraagt.</h2>
          <div className="hairline-top pt-7">
            <p className="max-w-[34rem] leading-7 text-[var(--color-text-secondary)]">
              Governance, informatievoorziening en AI verantwoord operationaliseren
              met eigenaarschap, besluitvorming en meetbare voortgang.
            </p>
            <div className="mt-9">
              <PrimaryLink href={`mailto:${contactEmail}`}>Neem contact op</PrimaryLink>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link mt-7"
            >
              Bekijk profiel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
