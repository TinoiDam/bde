import Image from "next/image";

const linkedinUrl = "https://www.linkedin.com/in/tinoidam/";
const contactEmail = "tinoi.dam@tfg.nl";

const paragraphs = [
  "BDE helpt organisaties waar informatiehuishouding, data governance, AI en compliance bestuurlijk moeten landen. We brengen complexe IV-vraagstukken terug tot keuzes die directies kunnen nemen en teams kunnen uitvoeren.",
  "De aanpak is compact en senior: scherpte aan tafel, requirements die kloppen, besluitopties die helder zijn en implementatie die past binnen bestaande programma's, domeinen en IT-landschappen.",
  "Zo ontstaat consulting die niet eindigt bij een adviesdocument, maar bij eigenaarschap, ritme en operationele borging. Van inzicht in datagebruik tot governance die meetbaar werkt.",
];

const markers = [
  "Informatiehuishouding",
  "Data governance",
  "AI readiness",
  "Project delivery",
];

const proof = [
  ["600+", "applicaties geanalyseerd"],
  ["17", "domeinen bestuurlijk verbonden"],
  ["5", "sectoren: overheid, finance, energie, zorg en utilities"],
];

const focusAreas = [
  {
    label: "01",
    title: "Informatiehuishouding & datagebruik",
    text: "Inzicht in applicaties, datastromen, eigenaarschap en bestuurlijke keuzes voor organisaties met versnipperde informatievoorziening.",
  },
  {
    label: "02",
    title: "Data & AI governance",
    text: "Kaders, rollen, besluitvorming en controls voor verantwoord datagebruik, AI-toepassing en aantoonbare compliance.",
  },
  {
    label: "03",
    title: "Strategische implementatie",
    text: "Van requirements en impactanalyse naar uitvoerbare programma's, prioriteiten, operating model en concrete voortgang.",
  },
];

const approach = [
  "Diagnose van het vraagstuk, het applicatielandschap en de bestuurlijke context.",
  "Requirements, risico's en besluitopties vertalen naar een helder uitvoeringspad.",
  "Implementatie begeleiden met eigenaarschap, ritme, besluitpunten en overdracht.",
];

const credentials = [
  "Projectleider informatiehuishouding bij DUO rond inzicht in datagebruik en bestuurlijke verankering.",
  "Ervaring met data governance, FEC en portfoliostructurering bij Rabobank.",
  "Achtergrond in IV-opdrachten bij Belastingdienst, RIVM en projectdelivery bij ENECO.",
  "MSc Business Administration, IREB/CPRE, Lean Six Sigma Black Belt en Power BI gecertificeerd.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#001f19] text-[#f4f1e8]">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(33,89,69,0.28),transparent_34%),radial-gradient(circle_at_76%_12%,rgba(8,58,45,0.36),transparent_32%),linear-gradient(135deg,#102c21_0%,#001f19_36%,#001711_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:6px_6px]" />
        <div className="absolute inset-0 border border-white/20" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-7 py-9 sm:px-12 lg:px-24">
          <header className="flex items-center justify-between">
            <a
              href="#"
              aria-label="BDE home"
              className="text-[1rem] font-extrabold uppercase tracking-[0.46em] text-white"
            >
              BDE
            </a>
            <div className="flex items-center gap-7 sm:gap-12">
              <a
                href={`mailto:${contactEmail}`}
                className="hidden rounded-full border border-white/90 px-12 py-5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-[#d99a2b] hover:text-[#d99a2b] md:inline-flex"
              >
                Contacteer ons
              </a>
              <button
                type="button"
                className="hidden items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-white md:flex"
                aria-label="Taalkeuze"
              >
                NL <span className="text-[#d99a2b]">⌄</span>
              </button>
              <button
                type="button"
                aria-label="Menu openen"
                className="flex h-10 w-14 flex-col justify-center gap-3"
              >
                <span className="block h-px w-full bg-white" />
                <span className="block h-px w-full bg-white" />
              </button>
            </div>
          </header>

          <div className="grid flex-1 items-start gap-16 pt-24 sm:pt-32 lg:grid-cols-[0.98fr_1.02fr] lg:gap-24 lg:pt-40">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.48em] text-[#d99a2b] sm:text-base">
                Premium consulting
              </p>
              <h1 className="mt-8 max-w-3xl font-serif text-[4.25rem] font-medium leading-[0.94] tracking-normal text-[#f4f1e8] sm:text-[6rem] lg:text-[6.8rem]">
                Grip op data, AI en informatiehuishouding
              </h1>
            </div>

            <div className="relative max-w-[40rem] pt-24 lg:pt-28">
              <span className="absolute left-0 top-0 h-7 w-8 border-b border-l border-[#d99a2b]" />
              <div className="space-y-10 text-[1.45rem] font-light leading-[1.55] tracking-normal text-[#f4f1e8]/86 sm:text-[1.7rem]">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-white/14 pb-10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {markers.map((marker) => (
              <p
                key={marker}
                className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/58"
              >
                {marker}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001f19] text-[#f4f1e8]">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-7 py-24 sm:px-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-24 lg:py-32">
          <div className="relative min-h-[32rem] overflow-hidden border border-white/16">
            <Image
              src="/images/tinoi-dam-portrait.jpg"
              alt="Portret van Tinoi Dam"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              loading="eager"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,25,0)_42%,rgba(0,31,25,0.58)_100%)]" />
          </div>

          <div className="flex flex-col justify-between gap-14">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#d99a2b]">
                Senior profiel
              </p>
              <h2 className="mt-7 max-w-3xl font-serif text-[3.5rem] font-medium leading-[0.96] sm:text-[5rem]">
                De verbindende schakel tussen bestuur, business, compliance en IT.
              </h2>
              <p className="mt-9 max-w-3xl text-[1.35rem] font-light leading-[1.58] text-[#f4f1e8]/84">
                Tinoi Dam combineert projectleiding, informatiemanagement en
                requirements engineering met ervaring in complexe publieke en
                financiele omgevingen. De nadruk ligt op besluitvorming,
                implementeerbare oplossingen en duurzame operationele borging.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-full border border-white/90 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-[#d99a2b] hover:text-[#d99a2b]"
                >
                  Bekijk LinkedIn
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex w-fit rounded-full border border-white/35 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white/82 transition hover:border-white hover:text-white"
                >
                  Start gesprek
                </a>
              </div>
            </div>

            <div className="grid gap-6 border-t border-white/16 pt-8 lg:grid-cols-3">
              {proof.map(([value, label]) => (
                <div key={value}>
                  <p className="font-serif text-5xl text-[#d99a2b]">{value}</p>
                  <p className="mt-3 text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-white/58">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f4f1e8] text-[#001f19]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-7 py-24 sm:px-12 lg:grid-cols-[0.88fr_1.12fr] lg:px-24 lg:py-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#b9852a]">
              Waar BDE waarde toevoegt
            </p>
            <h2 className="mt-7 max-w-xl font-serif text-[3.5rem] font-medium leading-[0.96] sm:text-[5rem]">
              Advies voor organisaties waar informatie geen bijzaak is.
            </h2>
          </div>

          <div className="border-t border-[#001f19]/25">
            {focusAreas.map((area) => (
              <article
                key={area.label}
                className="grid gap-6 border-b border-[#001f19]/25 py-9 sm:grid-cols-[6rem_1fr]"
              >
                <span className="font-serif text-4xl text-[#b9852a]">
                  {area.label}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{area.title}</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#274039]">
                    {area.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e8] text-[#001f19]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-7 pb-24 sm:px-12 lg:grid-cols-[1fr_1fr] lg:px-24 lg:pb-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#b9852a]">
              Track record
            </p>
            <h2 className="mt-7 font-serif text-[3.5rem] font-medium leading-[0.98] sm:text-[4.8rem]">
              Ervaring in omgevingen waar governance aantoonbaar moet werken.
            </h2>
          </div>

          <div className="border-t border-[#001f19]/25">
            {credentials.map((item) => (
              <p
                key={item}
                className="border-b border-[#001f19]/25 py-7 text-[1.25rem] leading-8 text-[#274039]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#06271f] text-[#f4f1e8]">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(90deg,rgba(255,255,255,0.85)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:6px_6px]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-16 px-7 py-24 sm:px-12 lg:grid-cols-[1fr_1fr] lg:px-24 lg:py-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#d99a2b]">
              Aanpak
            </p>
            <h2 className="mt-7 font-serif text-[3.5rem] font-medium leading-[0.98] sm:text-[5rem]">
              Senior, precies en dicht op de realiteit van programmaorganisaties.
            </h2>
          </div>

          <div className="space-y-10 pt-3">
            {approach.map((step, index) => (
              <div key={step} className="grid grid-cols-[4rem_1fr] gap-6">
                <span className="font-serif text-4xl text-[#d99a2b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[1.45rem] font-light leading-[1.5] text-[#f4f1e8]/86">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001f19] text-[#f4f1e8]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-7 py-24 sm:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-24 lg:py-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#d99a2b]">
              Case study
            </p>
            <h2 className="mt-7 max-w-3xl font-serif text-[3.5rem] font-medium leading-[0.96] sm:text-[5rem]">
              Een globale FEC-strategie vertalen naar gedeelde taal en uitvoering.
            </h2>
            <p className="mt-9 max-w-2xl text-[1.3rem] font-light leading-[1.58] text-[#f4f1e8]/84">
              De case laat zien hoe een gefragmenteerde compliance-omgeving kan
              worden teruggebracht naar een gemeenschappelijk begrippenkader,
              operating model en governance-aanpak over landen en businesslines
              heen.
            </p>
            <a
              href="/docs/global-strategies-case.pdf"
              className="mt-10 inline-flex w-fit rounded-full border border-white/90 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-[#d99a2b] hover:text-[#d99a2b]"
            >
              Bekijk case
            </a>
          </div>

          <a
            href="/docs/global-strategies-case.pdf"
            aria-label="Bekijk de Global Strategies case study"
            className="group relative block overflow-hidden border border-white/16 bg-[#0b2f26]"
          >
            <Image
              src="/images/global-strategies-case.png"
              alt="Preview van de Global Strategies case study"
              width={1200}
              height={675}
              loading="eager"
              className="h-full min-h-[22rem] w-full object-cover opacity-86 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            />
          </a>
        </div>
      </section>

      <section className="bg-[#001f19] text-[#f4f1e8]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-7 py-24 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-24 lg:py-32">
          <h2 className="font-serif text-[3.5rem] font-medium leading-[0.96] sm:text-[5.2rem]">
            Een complex vraagstuk verdient een rustige, scherpe tafel.
          </h2>
          <div className="flex flex-col justify-between gap-10">
            <p className="text-[1.35rem] font-light leading-[1.55] text-[#f4f1e8]/82">
              Voor organisaties die richting zoeken in data, AI en governance,
              en daarbij geen groot adviesapparaat nodig hebben maar senior
              oordeel, duidelijke keuzes en betrouwbare uitvoering.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-fit rounded-full border border-white/90 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-[#d99a2b] hover:text-[#d99a2b]"
              >
                Contacteer ons
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-full border border-white/35 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.14em] text-white/82 transition hover:border-white hover:text-white"
              >
                LinkedIn profiel
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
