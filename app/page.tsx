export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-4xl space-y-12">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Van complexe data- en governancevraagstukken naar bestuurlijke beslissingen.
          </h1>

          <p className="text-xl text-gray-300">
            Ik help organisaties structuur aanbrengen in datagebruik, compliance en AI — en vertaal dit naar concrete keuzes en implementaties.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
            Plan kennismaking
          </button>
        </section>

        {/* PROBLEEM */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Probleem</h2>
          <p className="text-gray-400">
            Veel organisaties hebben onvoldoende inzicht in datagebruik, governance en compliance.
            Dit leidt tot risico’s, inefficiëntie en vertraagde besluitvorming.
          </p>
        </section>

        {/* OPLOSSING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Aanpak</h2>
          <ul className="space-y-2 text-gray-400">
            <li>• Analyse van data- en applicatielandschap</li>
            <li>• Vertaling naar bestuurlijke besluitvorming</li>
            <li>• Implementatie binnen bestaande IT-structuren</li>
          </ul>
        </section>

        {/* EXPERTISE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium">Governance</h3>
              <p className="text-sm text-gray-400">Van beleid naar accountability</p>
            </div>
            <div>
              <h3 className="font-medium">Data & AI</h3>
              <p className="text-sm text-gray-400">Van experiment naar toepassing</p>
            </div>
            <div>
              <h3 className="font-medium">Executie</h3>
              <p className="text-sm text-gray-400">Van analyse naar realisatie</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}