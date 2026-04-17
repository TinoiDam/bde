import Image from "next/image";

const brandName = "BDE Management Consulting";
const linkedinUrl = "https://www.linkedin.com/in/tinoidam/";
const githubPrototypeUrl =
  "https://github.com/TinoiDam/Control-layer-affine-prototype";
const contactEmail = "tinoi.dam@tfg.nl";

const trustSignals = [
  ["600+", "applicaties in bestuurlijke analyse"],
  ["106", "applicaties in scope gebracht"],
  ["17", "domeinen verbonden rond datagebruik"],
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
    title: "Informatiehuishouding & informatievoorziening",
    text: "Applicaties, datagebruik, eigenaarschap en besluitvorming terugbrengen naar een bestuurbaar geheel, zonder extra ruis voor de organisatie.",
  },
  {
    label: "02",
    title: "AI governance & enterprise control",
    text: "AI operationaliseren met beleid, control layers, auditability, approval flows en duidelijke grenzen tussen model-output en bestuurlijke verantwoordelijkheid.",
  },
  {
    label: "03",
    title: "Portfolio & strategic implementation",
    text: "Ambitie, risico, capaciteit en afhankelijkheden vertalen naar keuzes, ritme en voortgang die bestuurlijk houdbaar en operationeel uitvoerbaar zijn.",
  },
  {
    label: "04",
    title: "Requirements & decision support",
    text: "Complexe eisen, impactanalyses en compliancevraagstukken terugbrengen tot opties met heldere afwegingen, consequenties en besluitpunten.",
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
  "Huidige situatie in kaart brengen: processen, technologie, mensen, governance en afhankelijkheden.",
  "Gewenste situatie definiëren in taal die bestuur, business en IT samen kunnen gebruiken.",
  "Gaps identificeren tussen ambitie, technische realiteit en menselijk gedrag.",
  "Concrete opties formuleren met afwegingen, consequenties en uitvoeringsrisico's.",
  "Benodigde besluitvorming afstemmen voordat het werk de organisatie in gaat.",
  "Roadmap bepalen met een ritme dat voortgang maakt en de lijn niet overbelast.",
];

const maturityDimensions = [
  "Customer",
  "Governance",
  "Process",
  "Organization & skills",
  "Behavior & leadership",
];

const credentials = [
  "DUO: 600+ applicaties geanalyseerd, 106 in scope gebracht en 17 domeinen verbonden rond raadpleeg-logging compliance.",
  "Rabobank: organisatieontwerp en FEC definition management in een internationale context over meerdere continenten.",
  "IV-, portfolio- en governanceopdrachten in publieke, financiële, zorg- en energieomgevingen.",
  "MSc Business Administration, IREB/CPRE, Lean Six Sigma Black Belt en Power BI gecertificeerd.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase leading-6 tracking-[0.28em] text-[#5f7476]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e7e1d6] text-[#111417]">
      <section className="relative bg-[#111417] text-[#f4f0e8]">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_28%),radial-gradient(circle_at_80%_18%,rgba(95,116,118,0.34),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#f4f0e8]/18" />

        <div className="relative mx-auto flex min-h-[86svh] w-full max-w-[92rem] flex-col px-6 py-7 sm:px-10 lg:px-16 xl:px-20">
          <header className="flex items-center justify-between gap-6">
            <a
              href="#"
              aria-label={`${brandName} home`}
              className="max-w-[13rem] text-[0.8rem] font-semibold uppercase leading-5 tracking-[0.24em] text-[#f4f0e8]"
            >
              {brandName}
            </a>
            <nav className="hidden items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4f0e8]/68 lg:flex">
              <a href="#expertise" className="transition hover:text-[#f4f0e8]">
                Expertise
              </a>
              <a href="#ai-control" className="transition hover:text-[#f4f0e8]">
                AI control
              </a>
              <a href="#case" className="transition hover:text-[#f4f0e8]">
                Case
              </a>
            </nav>
            <a
              href={`mailto:${contactEmail}`}
              className="hidden border border-[#f4f0e8]/55 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4f0e8] transition hover:border-[#8aa0a0] hover:text-[#c8d2cf] sm:inline-flex"
            >
              Discreet gesprek
            </a>
          </header>

          <div className="grid flex-1 items-end gap-16 pb-12 pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pb-16 lg:pt-24">
            <div className="fade-up">
              <SectionLabel>Bestuur / techniek / gedrag</SectionLabel>
              <h1 className="mt-7 max-w-4xl font-serif text-[3.7rem] font-semibold leading-[0.94] text-[#f4f0e8] sm:text-[5.8rem] lg:text-[6.6rem]">
                Ambitie vertalen naar werk dat klopt.
              </h1>
            </div>

            <div className="fade-up max-w-2xl lg:pb-4">
              <p className="text-[1.28rem] font-light leading-[1.58] text-[#f4f0e8]/82 sm:text-[1.55rem]">
                {brandName} ondersteunt bestuurders en programmadirecties bij
                vraagstukken waar informatiehuishouding, AI governance,
                compliance en uitvoering samenkomen.
              </p>
              <p className="mt-8 text-lg leading-8 text-[#c8c5bb]">
                Geen losse capaciteit. Wel helder oordeel, structuur en
                uitvoeringskracht voor werk dat zorgvuldig moet landen, met
                minimale belasting van de business.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#ai-control"
                  className="inline-flex w-fit items-center border border-[#8aa0a0] bg-[#5f7476] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:bg-transparent"
                >
                  Bekijk AI governance
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center border border-[#f4f0e8]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4f0e8]/82 transition hover:border-[#f4f0e8] hover:text-[#f4f0e8]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-[#f4f0e8]/14 py-7 sm:grid-cols-3">
            {trustSignals.map(([value, label]) => (
              <div key={value} className="flex items-baseline gap-4">
                <span className="font-serif text-4xl font-semibold text-[#c8d2cf]">
                  {value}
                </span>
                <span className="max-w-[14rem] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#f4f0e8]/54">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#111417]/12 bg-[#f4f0e8] text-[#111417]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.42fr_1fr] lg:px-16 xl:px-20">
          <div>
            <SectionLabel>Ervaringscontext</SectionLabel>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#687174]">
              Organisaties en opdrachtomgevingen waar vergelijkbare governance-,
              informatie- en uitvoeringsvraagstukken speelden.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#111417]/10 bg-[#111417]/10 sm:grid-cols-3 lg:grid-cols-6">
            {experienceNames.map((name) => (
              <div
                key={name}
                className="flex min-h-32 items-center justify-center bg-[#f4f0e8] px-5 py-6"
              >
                <span className="text-center text-[0.9rem] font-semibold uppercase tracking-[0.18em] text-[#3f4648] opacity-75 transition duration-300 hover:opacity-100 sm:text-[0.95rem]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-[#e7e1d6] text-[#111417]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="mt-7 max-w-xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
              Expertise, vertaald naar beweging.
            </h2>
          </div>
          <div className="grid border-t border-[#111417]/18">
            {services.map((service) => (
              <article
                key={service.label}
                className="grid gap-6 border-b border-[#111417]/18 py-8 sm:grid-cols-[5.5rem_1fr]"
              >
                <span className="font-serif text-4xl font-semibold text-[#5f7476]">
                  {service.label}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4f5658]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-control" className="bg-[#1f2426] text-[#f4f0e8]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>AI control-layer thinking</SectionLabel>
            <h2 className="mt-7 max-w-3xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
              AI governance die operationeel afdwingbaar is.
            </h2>
            <p className="mt-8 max-w-2xl text-[1.2rem] font-light leading-8 text-[#d9d5cb]">
              Het control-layer prototype is geen technisch bijproject, maar een
              strategisch bewijsstuk: AI kan pas enterprise-ready worden wanneer
              context, policy, write-back en auditability buiten het model
              worden afgedwongen.
            </p>
            <a
              href={githubPrototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit border border-[#f4f0e8]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:border-[#c8d2cf] hover:text-[#c8d2cf]"
            >
              Open prototype
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {controlPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="border border-[#f4f0e8]/14 p-6 transition hover:border-[#c8d2cf]/55"
              >
                <h3 className="text-xl font-semibold">{principle.title}</h3>
                <p className="mt-5 leading-7 text-[#d9d5cb]">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e8] text-[#111417]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Profiel</SectionLabel>
            <div className="mt-7 flex items-start gap-5">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-[#111417]/15">
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
                <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#687174]">
                  AI governance / informatiehuishouding / veranderstructuur
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-[2.9rem] font-semibold leading-[1] sm:text-[4.4rem]">
              Een brug tussen boardroom, business, compliance en IT.
            </h2>
            <p className="mt-8 max-w-3xl text-xl font-light leading-9 text-[#4f5658]">
              De waarde zit in het reduceren van onzekerheid: de huidige
              situatie scherp krijgen, abstracte kaders vertalen naar
              begrijpelijke keuzes en uitvoering organiseren zonder de
              organisatie te overvragen.
            </p>
            <div className="mt-10 grid gap-4 border-t border-[#111417]/18 pt-8 sm:grid-cols-2">
              {credentials.map((credential) => (
                <p key={credential} className="leading-7 text-[#4f5658]">
                  {credential}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7e1d6] text-[#111417]">
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
                className="grid gap-5 border-t border-[#111417]/18 pt-7 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-serif text-4xl font-semibold text-[#5f7476]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[1.35rem] font-light leading-9 text-[#3f4648]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e8] text-[#111417]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <SectionLabel>Diagnostic instrument</SectionLabel>
            <h2 className="mt-7 max-w-2xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.6rem]">
              Volwassenheid zichtbaar maken voordat verandering wordt ingezet.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4f5658]">
              De Lean Maturity Scan maakt het gesprek over uitvoering concreet:
              waar zit frictie, welke managementroutines ontbreken, en wat is
              de eerstvolgende stap die werkelijk helpt?
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {maturityDimensions.map((dimension) => (
                <span
                  key={dimension}
                  className="border border-[#111417]/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#687174]"
                >
                  {dimension}
                </span>
              ))}
            </div>
            <a
              href="/docs/lean-maturity-scan.pdf"
              className="mt-10 inline-flex w-fit border border-[#111417]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111417] transition hover:border-[#5f7476] hover:text-[#5f7476]"
            >
              Open scan preview
            </a>
          </div>

          <a
            href="/docs/lean-maturity-scan.pdf"
            aria-label="Open de Lean Maturity Scan preview"
            className="group relative block min-h-[22rem] overflow-hidden border border-[#111417]/12 bg-[#111417]"
          >
            <Image
              src="/images/lean-maturity-scan.png"
              alt="Preview van de BDE Lean Maturity Scan"
              fill
              sizes="(min-width: 1024px) 42rem, 100vw"
              loading="eager"
              className="object-contain p-5 opacity-92 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
            />
          </a>
        </div>
      </section>

      <section id="case" className="bg-[#111417] text-[#f4f0e8]">
        <div className="mx-auto max-w-[92rem] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>Case study</SectionLabel>
              <h2 className="mt-7 max-w-2xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[4.8rem]">
                Gedeelde taal voor globale FEC-governance.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d9d5cb]">
                Een strategische governancecase waarin compliance-fragmentatie
                wordt vertaald naar definities, eigenaarschap,
                besluitrechten en uitvoerbare implementatie.
              </p>
              <a
                href="/docs/global-strategies-case.pdf"
                className="mt-10 inline-flex w-fit border border-[#f4f0e8]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:border-[#c8d2cf] hover:text-[#c8d2cf]"
              >
                Open volledige deck
              </a>
            </div>

            <div className="min-w-0">
              <div className="overflow-hidden border border-[#f4f0e8]/14 bg-[#1f2426] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
                <object
                  data="/docs/global-strategies-case.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                  type="application/pdf"
                  aria-label="Scrollable PDF preview van de Global Strategies case study"
                  className="h-[32rem] w-full bg-[#f4f0e8] sm:h-[38rem]"
                >
                  <a
                    href="/docs/global-strategies-case.pdf"
                    className="group relative block h-[28rem] overflow-hidden bg-[#111417]"
                  >
                    <Image
                      src="/images/global-strategies-case.png"
                      alt="Preview van de Global Strategies case study"
                      fill
                      sizes="(min-width: 1024px) 42rem, 100vw"
                      loading="eager"
                      className="object-contain p-5 opacity-92 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
                    />
                  </a>
                </object>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f0e8]/44">
                Scroll door de originele PDF-preview
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7e1d6] text-[#111417]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_0.82fr] lg:px-16 lg:py-32 xl:px-20">
          <h2 className="max-w-4xl font-serif text-[3rem] font-semibold leading-[0.98] sm:text-[5rem]">
            Voor werk dat te belangrijk is om als capaciteit te behandelen.
          </h2>
          <div className="flex flex-col justify-between gap-9">
            <p className="text-xl font-light leading-9 text-[#4f5658]">
              Een rustige tafel voor organisaties die governance,
              informatievoorziening en AI verantwoord willen operationaliseren
              zonder onnodige complexiteit toe te voegen.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-fit border border-[#5f7476] bg-[#5f7476] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:bg-transparent hover:text-[#5f7476]"
              >
                Neem contact op
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit border border-[#111417]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111417] transition hover:border-[#5f7476] hover:text-[#5f7476]"
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
