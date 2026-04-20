import Image from "next/image";
import { SlideDeckPreview } from "./components/SlideDeckPreview";

const brandName = "BDE Management Consulting";
const linkedinUrl = "https://www.linkedin.com/in/tinoidam/";
const githubPrototypeUrl =
  "https://github.com/TinoiDam/Control-layer-affine-prototype";
const contactEmail = "tinoi.dam@tfg.nl";

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

const heroClients = [
  { name: "DUO", src: "/images/logos/duo.png" },
  { name: "Rabobank", src: "/images/logos/rabobank.svg" },
  { name: "RIVM", src: "/images/logos/rivm.png" },
  { name: "Belastingdienst", src: "/images/logos/belastingdienst.png" },
  { name: "Eneco", src: "/images/logos/eneco.svg" },
  { name: "Fudura", src: "/images/logos/fudura.png" },
  { name: "4Blue", src: "/images/logos/4blue.png" },
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
    <main className="site-shell">
      <div className="hero-editorial-flow">
        <section className="dark-hue-section text-[var(--color-text-inverse)]">
          <div className="site-nav-section">
            <div className="site-container site-nav">
              <header className="site-nav__inner">
                <a
                  href="#"
                  aria-label={`${brandName} home`}
                  className="site-nav__brand"
                >
                  {brandName}
                </a>
                <nav className="site-nav__links" aria-label="Primary navigation">
                  <a href="#expertise" className="site-nav__link site-nav__link--active">
                    Expertise
                  </a>
                  <a href="#ai-control" className="site-nav__link">
                    AI control
                  </a>
                  <a href="#portfolio" className="site-nav__link">
                    Portfolio
                  </a>
                  <a href="#case" className="site-nav__link">
                    Case
                  </a>
                </nav>
                <a
                  href={`mailto:${contactEmail}`}
                  className="site-nav__contact"
                >
                  Contact
                </a>
                <button className="site-nav__menu" aria-label="Menu" aria-expanded="false">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </header>
            </div>
          </div>
          <div className="hero-statement">
            <div className="hero-statement__brand">
              {/* merkregel - placeholder voor branding signal */}
            </div>

            <div className="hero-statement__lead">
              <h1>
                Strategie is helder,<br />
                maar niet<br />
                uitvoerbaar.
              </h1>
              <p className="hero-statement__subheading">
                Samenhang ontbreekt bij het maken van keuzes.
              </p>
            </div>

            <PrimaryLink href="#expertise">
              <span className="cta-label">bekijk aanpak</span><span className="cta-arrow">→</span>
            </PrimaryLink>

            <p className="hero-statement__intro">
              In veranderopgaven botsen bestuurlijke keuzes met technische
              realiteit en menselijk gedrag.
            </p>

            <div className="hero-statement__body-anchor">
              <div className="hero-statement__break">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="1"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="1"
                    y1="10"
                    x2="8"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hero-statement__body--problems">
                <p>
                  De vraag is niet scherp.<br />
                  Plannen sluiten niet aan.<br />
                  Uitvoering stokt.
                </p>
              </div>
            </div>

            <div className="hero-statement__body--solution">
              <p>
                Wat ontbreekt wordt expliciet gemaakt en vertaald naar concrete
                keuzes. Zodat duidelijk is wat moet gebeuren, waarom en door wie.
                En wordt het daadwerkelijk uitgevoerd in de organisatie.
              </p>
            </div>

            <div className="hero-truststrip hero-truststrip--full-width">
              <div className="hero-truststrip__marquee">
                <div className="hero-truststrip__track">
                  {heroClients.map((client) => (
                    <div key={`${client.name}-1`} className="hero-truststrip__logo-item">
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={60}
                        height={40}
                        className="hero-truststrip__logo"
                      />
                    </div>
                  ))}
                  {heroClients.map((client) => (
                    <div key={`${client.name}-2`} className="hero-truststrip__logo-item">
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={60}
                        height={40}
                        className="hero-truststrip__logo"
                      />
                    </div>
                  ))}
                  {heroClients.map((client) => (
                    <div key={`${client.name}-3`} className="hero-truststrip__logo-item">
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={60}
                        height={40}
                        className="hero-truststrip__logo"
                      />
                    </div>
                  ))}
                  {heroClients.map((client) => (
                    <div key={`${client.name}-4`} className="hero-truststrip__logo-item">
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={60}
                        height={40}
                        className="hero-truststrip__logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-scroll-indicator" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8L12 13L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </section>

        <section className="hero-2">
          <div className="site-container hero-2__composition">
            <div className="hero-2__intro">
              <p className="hero-2__kader">
                In veranderopgaven botsen bestuurlijke keuzes met technische
                realiteit en menselijk gedrag.
              </p>
            </div>

            <div className="hero-2__problems">
              <div className="hero-2__anker">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="1"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="1"
                    y1="10"
                    x2="8"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hero-2__probleem">
                <p>
                  De vraag is niet scherp.<br />
                  Plannen sluiten niet aan.<br />
                  Uitvoering stokt.
                </p>
              </div>
            </div>

            <div className="hero-2__solution">
              <p>
                Wat ontbreekt wordt expliciet gemaakt en vertaald naar concrete
                keuzes. Zodat duidelijk is wat moet gebeuren, waarom en door wie.
                En wordt het daadwerkelijk uitgevoerd in de organisatie.
              </p>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="site-container editorial-composition">
            <div className="editorial-anchor">
              <SectionLabel>Waar het misgaat</SectionLabel>
              <h2>Niet elk probleem is het echte probleem.</h2>
            </div>
            <div className="editorial-notes">
              <article className="editorial-note">
                <p className="editorial-note__label">Mismatch</p>
                <h3>De vraag klopt niet.</h3>
                <p>
                  De vraag en het onderliggende probleem vallen niet samen. Dit
                  wordt uit elkaar gehaald en opnieuw gedefinieerd, zodat
                  duidelijk wordt waar daadwerkelijk op gestuurd moet worden.
                </p>
              </article>
              <article className="editorial-note">
                <p className="editorial-note__label">Uitvoerbaarheid</p>
                <h3>Plannen werken niet.</h3>
                <p>
                  Plannen sluiten niet aan op hoe de organisatie werkt. Wat nodig
                  is om ze uitvoerbaar te maken wordt expliciet gemaakt en
                  vertaald naar concrete keuzes.
                </p>
              </article>
              <article className="editorial-note">
                <p className="editorial-note__label">Uitvoering</p>
                <h3>Het gebeurt niet.</h3>
                <p>
                  Afhankelijkheden, eigenaarschap en besluitvorming worden
                  expliciet gemaakt, zodat uitvoering daadwerkelijk plaatsvindt.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>

      <section id="expertise" className="section-block content-layer">
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
                <div>
                  <div className="service-item__head">
                    <span>{service.label}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="max-w-[28rem] text-[0.95rem] text-[var(--color-text-secondary)]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-control" className="section-block content-layer content-layer--compact">
        <div className="site-container layout-grid layout-grid--section-wide">
          <div>
            <SectionLabel>AI control-layer</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[40rem]">
              AI-governance buiten het model afdwingen.
            </h2>
          </div>
          <div className="ai-system">
            <p className="max-w-[44rem] text-lg font-light leading-8 text-[var(--color-text-secondary)]">
              Het control-layer prototype is een bewijsstuk voor enterprise AI:
              context, policy, write-back en auditability worden niet aan het
              model overgelaten, maar in de operationele laag gecontroleerd.
            </p>
            <div className="ai-control-grid">
              {aiControls.map(([title, text]) => (
                <article key={title} className="ai-control-item">
                  <h3 className="font-semibold tracking-normal">{title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{text}</p>
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

      <section className="section-block content-layer">
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

      <section className="section-block content-layer content-layer--compact">
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

      <section className="section-block content-layer">
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

      <section className="section-block content-layer evidence-layer">
        <div className="site-container layout-grid layout-grid--media">
          <div className="evidence-copy">
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
          />
        </div>
      </section>


      <section id="portfolio" className="section-block content-layer evidence-layer">
        <div className="site-container layout-grid layout-grid--section">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="heading-lg mt-7 max-w-[32rem] text-balance">Portfolio-context.</h2>
          </div>
          <div className="portfolio-system">
            {portfolioItems.map((item) => (
              <article
                key={item.company}
                className="portfolio-case"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {item.company}
                </h3>
                <div className="grid text-sm text-[var(--color-text-secondary)]">
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

      <section id="case" className="section-block content-layer evidence-layer">
        <div className="site-container layout-grid layout-grid--media">
          <div className="evidence-copy">
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
          />
        </div>
      </section>

      <section className="section-block content-layer closing-layer">
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
