import Image from "next/image";

const brandName = "BDE Management Consulting B.V.";
const linkedinUrl = "https://www.linkedin.com/in/tinoidam/";
const githubPrototypeUrl =
  "https://github.com/TinoiDam/Control-layer-affine-prototype";
const contactEmail = "tinoi.dam@tfg.nl";

const trustSignals = [
  ["600+", "applicaties in bestuurlijke analyse"],
  ["17", "domeinen verbonden rond datagebruik"],
  ["5", "sectoren: overheid, finance, energie, zorg en utilities"],
];

const services = [
  {
    label: "01",
    title: "Informatiehuishouding & informatievoorziening",
    text: "Structuur aanbrengen in applicatielandschappen, datagebruik, eigenaarschap en besluitvorming zodat organisaties grip krijgen zonder extra bestuurlijke ruis.",
  },
  {
    label: "02",
    title: "AI governance & enterprise control",
    text: "AI operationaliseren met beleid, control layers, auditability, approval flows en duidelijke grenzen tussen model-output en bestuurlijke verantwoordelijkheid.",
  },
  {
    label: "03",
    title: "Portfolio & strategic implementation",
    text: "Ambitie, risico, capaciteit en afhankelijkheden vertalen naar uitvoerbare portfolio-keuzes, ritme en voortgang op directieniveau.",
  },
  {
    label: "04",
    title: "Requirements & decision support",
    text: "Complexe eisen, impactanalyses en compliancevraagstukken terugbrengen tot besluitopties die business, compliance en IT samen kunnen dragen.",
  },
];

const controlPrinciples = [
  {
    title: "Governed retrieval",
    text: "AI krijgt alleen context die binnen projectscope, objecttype en vertrouwelijkheid past. Geen model-gedreven datagraaien.",
  },
  {
    title: "Policy-enforced write-back",
    text: "Output wordt alleen naar vooraf toegestane objecten gerouteerd, zoals PROJECT_STATE, TRACKER of WORK_SUMMARY.",
  },
  {
    title: "Auditability by design",
    text: "Elke bron, beslissing, write target en state-diff wordt reproduceerbaar vastgelegd voor toezicht en verantwoording.",
  },
  {
    title: "Human approval where it matters",
    text: "High-impact writes blijven onder menselijke goedkeuring. Automatisering versnelt, maar neemt governance niet over.",
  },
];

const approach = [
  "Scherp krijgen welk besluit echt nodig is en welke informatie daarvoor betrouwbaar genoeg moet zijn.",
  "De minimale governance ontwerpen die risico verlaagt zonder de business met extra overleglagen te belasten.",
  "Uitvoering organiseren met duidelijke eigenaars, besluitpunten, ritme en overdracht naar de lijn.",
];

const credentials = [
  "Bestuurlijke verankering van inzicht in datagebruik binnen een complex publiek applicatielandschap.",
  "Data governance, FEC en portfoliostructurering in financiele dienstverlening.",
  "IV-opdrachten en projectdelivery in publieke, zorg- en energieomgevingen.",
  "MSc Business Administration, IREB/CPRE, Lean Six Sigma Black Belt en Power BI gecertificeerd.",
];

const deckSlides = [
  {
    eyebrow: "01 / Strategic context",
    title: "A shared language for global FEC execution",
    body: "Fragmented terminology and policy interpretation create reporting risk, inconsistent controls and avoidable operational cost.",
  },
  {
    eyebrow: "02 / Operating model",
    title: "From principles to ownership and decision rights",
    body: "The work translates strategy into roles, governance forums, definitions and integration points that can be embedded in daily operations.",
  },
  {
    eyebrow: "03 / Governance outcome",
    title: "Controlled implementation across business lines",
    body: "A phased rollout makes governance measurable, reduces ambiguity and creates a basis for reliable reporting across jurisdictions.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase leading-6 tracking-[0.28em] text-[#7a3038]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e9e6df] text-[#171514]">
      <section className="relative bg-[#171514] text-[#f6f4ef]">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_28%),radial-gradient(circle_at_80%_18%,rgba(122,48,56,0.32),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#f6f4ef]/18" />

        <div className="relative mx-auto flex min-h-[86svh] w-full max-w-[92rem] flex-col px-6 py-7 sm:px-10 lg:px-16 xl:px-20">
          <header className="flex items-center justify-between gap-6">
            <a
              href="#"
              aria-label={`${brandName} home`}
              className="max-w-[13rem] text-[0.8rem] font-semibold uppercase leading-5 tracking-[0.24em] text-[#f6f4ef]"
            >
              BDE Management Consulting B.V.
            </a>
            <nav className="hidden items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f6f4ef]/68 lg:flex">
              <a href="#expertise" className="transition hover:text-[#f6f4ef]">
                Expertise
              </a>
              <a href="#ai-control" className="transition hover:text-[#f6f4ef]">
                AI control
              </a>
              <a href="#case" className="transition hover:text-[#f6f4ef]">
                Case
              </a>
            </nav>
            <a
              href={`mailto:${contactEmail}`}
              className="hidden border border-[#f6f4ef]/55 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f6f4ef] transition hover:border-[#b46a72] hover:text-[#f0c9cd] sm:inline-flex"
            >
              Discreet gesprek
            </a>
          </header>

          <div className="grid flex-1 items-end gap-16 pb-12 pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pb-16 lg:pt-24">
            <div className="fade-up">
              <SectionLabel>Boutique advisory / senior execution</SectionLabel>
              <h1 className="mt-7 max-w-4xl font-serif text-[3.7rem] font-semibold leading-[0.94] text-[#f6f4ef] sm:text-[5.8rem] lg:text-[6.6rem]">
                Complex werk. Laag risico. Heldere uitvoering.
              </h1>
            </div>

            <div className="fade-up max-w-2xl lg:pb-4">
              <p className="text-[1.28rem] font-light leading-[1.58] text-[#f6f4ef]/82 sm:text-[1.55rem]">
                {brandName} ondersteunt bestuurders en programmadirecties bij
                vraagstukken waar informatiehuishouding, AI governance,
                compliance en uitvoering samenkomen.
              </p>
              <p className="mt-8 text-lg leading-8 text-[#c9cbc8]">
                Geen generieke capaciteit. Wel senior oordeel, structuur en
                implementatiekracht voor werk dat zorgvuldig moet landen, met
                minimale belasting van de business.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#ai-control"
                  className="inline-flex w-fit items-center border border-[#b46a72] bg-[#7a3038] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f4ef] transition hover:bg-transparent"
                >
                  Bekijk AI governance
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center border border-[#f6f4ef]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f4ef]/82 transition hover:border-[#f6f4ef] hover:text-[#f6f4ef]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-[#f6f4ef]/14 py-7 sm:grid-cols-3">
            {trustSignals.map(([value, label]) => (
              <div key={value} className="flex items-baseline gap-4">
                <span className="font-serif text-4xl font-semibold text-[#f0c9cd]">
                  {value}
                </span>
                <span className="max-w-[14rem] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#f6f4ef]/54">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-[#e9e6df] text-[#171514]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="mt-7 max-w-xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
              Senior expertise, geformuleerd als resultaat.
            </h2>
          </div>
          <div className="grid border-t border-[#171514]/18">
            {services.map((service) => (
              <article
                key={service.label}
                className="grid gap-6 border-b border-[#171514]/18 py-8 sm:grid-cols-[5.5rem_1fr]"
              >
                <span className="font-serif text-4xl font-semibold text-[#7a3038]">
                  {service.label}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b4843]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-control" className="bg-[#242321] text-[#f6f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>AI control-layer thinking</SectionLabel>
            <h2 className="mt-7 max-w-3xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
              AI governance die operationeel afdwingbaar is.
            </h2>
            <p className="mt-8 max-w-2xl text-[1.2rem] font-light leading-8 text-[#d8d6d0]">
              Het control-layer prototype is geen technisch bijproject, maar een
              strategisch bewijsstuk: AI kan pas enterprise-ready worden wanneer
              context, policy, write-back en auditability buiten het model
              worden afgedwongen.
            </p>
            <a
              href={githubPrototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit border border-[#f6f4ef]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f4ef] transition hover:border-[#f0c9cd] hover:text-[#f0c9cd]"
            >
              Open prototype
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {controlPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="border border-[#f6f4ef]/14 p-6 transition hover:border-[#f0c9cd]/55"
              >
                <h3 className="text-xl font-semibold">{principle.title}</h3>
                <p className="mt-5 leading-7 text-[#d8d6d0]">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ef] text-[#171514]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Senior judgement</SectionLabel>
            <div className="mt-7 flex items-start gap-5">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-[#171514]/15">
                <Image
                  src="/images/tinoi-dam-portrait.jpg"
                  alt="Portret van Tinoi Dam"
                  fill
                  sizes="80px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold leading-none">
                  Tinoi Dam
                </p>
                <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#6d6860]">
                  AI governance / informatiehuishouding / strategic execution
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-[2.9rem] font-semibold leading-[1] sm:text-[4.4rem]">
              Een brug tussen boardroom, business, compliance en IT.
            </h2>
            <p className="mt-8 max-w-3xl text-xl font-light leading-9 text-[#4b4843]">
              De waarde zit in het reduceren van onzekerheid: requirements
              scherp krijgen, governance uitvoerbaar maken, besluitvorming
              organiseren en uitvoering laten landen zonder de organisatie te
              overvragen.
            </p>
            <div className="mt-10 grid gap-4 border-t border-[#171514]/18 pt-8 sm:grid-cols-2">
              {credentials.map((credential) => (
                <p key={credential} className="leading-7 text-[#4b4843]">
                  {credential}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e6df] text-[#171514]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Aanpak</SectionLabel>
            <h2 className="mt-7 max-w-2xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
              Zo weinig mogelijk belasting. Zo veel mogelijk voortgang.
            </h2>
          </div>
          <div className="grid gap-7">
            {approach.map((step, index) => (
              <div
                key={step}
                className="grid gap-5 border-t border-[#171514]/18 pt-7 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-serif text-4xl font-semibold text-[#7a3038]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[1.35rem] font-light leading-9 text-[#3d3934]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="bg-[#171514] text-[#f6f4ef]">
        <div className="mx-auto max-w-[92rem] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>Case study</SectionLabel>
              <h2 className="mt-7 max-w-2xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
                Gedeelde taal voor globale FEC-governance.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d6d0]">
                Een strategische governancecase waarin compliance-fragmentatie
                wordt vertaald naar definities, eigenaarschap,
                besluitrechten en uitvoerbare implementatie.
              </p>
              <a
                href="/docs/global-strategies-case.pdf"
                className="mt-10 inline-flex w-fit border border-[#f6f4ef]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f4ef] transition hover:border-[#f0c9cd] hover:text-[#f0c9cd]"
              >
                Open volledige deck
              </a>
            </div>

            <div className="min-w-0">
              <div className="deck-scroll flex snap-x gap-5 overflow-x-auto pb-6">
                <div className="relative h-[24rem] min-w-[20rem] snap-start overflow-hidden border border-[#f6f4ef]/14 bg-[#242321] sm:min-w-[34rem]">
                  <Image
                    src="/images/global-strategies-case.png"
                    alt="Preview van de Global Strategies case study"
                    fill
                    sizes="(min-width: 1024px) 38rem, 20rem"
                    loading="eager"
                    className="object-cover opacity-92"
                  />
                </div>
                {deckSlides.map((slide) => (
                  <article
                    key={slide.eyebrow}
                    className="flex h-[24rem] min-w-[20rem] snap-start flex-col justify-between border border-[#f6f4ef]/14 bg-[#242321] p-7 sm:min-w-[28rem]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c9cd]">
                      {slide.eyebrow}
                    </p>
                    <div>
                      <h3 className="font-serif text-4xl font-semibold leading-tight">
                        {slide.title}
                      </h3>
                      <p className="mt-6 leading-7 text-[#d8d6d0]">
                        {slide.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6f4ef]/44">
                Scroll horizontaal door de preview
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e6df] text-[#171514]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_0.82fr] lg:px-16 lg:py-32 xl:px-20">
          <h2 className="max-w-4xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[5rem]">
            Voor werk dat te belangrijk is om als capaciteit te behandelen.
          </h2>
          <div className="flex flex-col justify-between gap-9">
            <p className="text-xl font-light leading-9 text-[#4b4843]">
              Een rustige, senior tafel voor organisaties die governance,
              informatievoorziening en AI verantwoord willen operationaliseren.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-fit border border-[#7a3038] bg-[#7a3038] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f4ef] transition hover:bg-transparent hover:text-[#7a3038]"
              >
                Neem contact op
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit border border-[#171514]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#171514] transition hover:border-[#7a3038] hover:text-[#7a3038]"
              >
                Bekijk profiel
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
