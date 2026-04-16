const paragraphs = [
  "BDE adviseert bestuurders, directies en programmaleiders bij vraagstukken waar data, AI, compliance en uitvoering samenkomen. We brengen complexiteit terug tot heldere keuzes en bestuurbare verandering.",
  "Onze rol is compact en senior: scherpte aan tafel, structuur in besluitvorming en praktische vertaling naar beleid, processen en teams. Altijd met oog voor risico, tempo en draagvlak.",
  "Zo ontstaat consulting die niet eindigt bij een adviesdocument, maar bij een organisatie die weet wat er moet gebeuren, wie eigenaar is en hoe de volgende stap wordt gezet.",
];

const markers = ["Data strategy", "AI governance", "Compliance", "Execution"];

const focusAreas = [
  {
    label: "01",
    title: "Data & AI governance",
    text: "Ontwerp van eigenaarschap, kaders, ritmes en besluitvorming voor verantwoord datagebruik en AI-toepassing.",
  },
  {
    label: "02",
    title: "Compliance naar uitvoering",
    text: "Vertaling van wet- en regelgeving naar werkbare processen, rollen en controls zonder de organisatie te verzwaren.",
  },
  {
    label: "03",
    title: "Strategische implementatie",
    text: "Van analyse en boardroombesluit naar programma, prioriteiten, operating model en concrete voortgang.",
  },
];

const approach = [
  "Diagnose van het vraagstuk, het datalandschap en de bestuurlijke context.",
  "Keuzes expliciet maken: ambitie, risico, governance en uitvoerbaarheid.",
  "Implementatie begeleiden met heldere rollen, ritme, besluitpunten en overdracht.",
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
                href="mailto:info@bde.nl"
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
                Data, AI en governance met bestuurlijke scherpte
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

      <section className="relative bg-[#f4f1e8] text-[#001f19]">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-7 py-24 sm:px-12 lg:grid-cols-[0.88fr_1.12fr] lg:px-24 lg:py-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#b9852a]">
              Waar BDE waarde toevoegt
            </p>
            <h2 className="mt-7 max-w-xl font-serif text-[3.5rem] font-medium leading-[0.96] sm:text-[5rem]">
              Advies voor momenten waarop ruis kostbaar wordt.
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

      <section className="relative bg-[#06271f] text-[#f4f1e8]">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(90deg,rgba(255,255,255,0.85)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:6px_6px]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-16 px-7 py-24 sm:px-12 lg:grid-cols-[1fr_1fr] lg:px-24 lg:py-32">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.42em] text-[#d99a2b]">
              Aanpak
            </p>
            <h2 className="mt-7 font-serif text-[3.5rem] font-medium leading-[0.98] sm:text-[5rem]">
              Senior, precies en dicht op de realiteit van de organisatie.
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
            <a
              href="mailto:info@bde.nl"
              className="inline-flex w-fit rounded-full border border-white/90 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-[#d99a2b] hover:text-[#d99a2b]"
            >
              Contacteer ons
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
