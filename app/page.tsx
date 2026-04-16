export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        
        {/* Hero */}
        <h1 className="text-5xl font-bold leading-tight">
          BDE Management Consulting
        </h1>

        <p className="text-lg text-gray-300">
          Vertaling van complexe data- en governancevraagstukken naar bestuurlijke besluiten en uitvoerbare implementaties.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Plan kennismaking
          </button>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
          <div>
            <h3 className="font-semibold text-lg">Governance</h3>
            <p className="text-gray-400 text-sm">
              Van beleidskaders naar concrete besluitvorming en accountability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Data & AI</h3>
            <p className="text-gray-400 text-sm">
              Implementatie van AI en datagedreven werken binnen complexe organisaties.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Executie</h3>
            <p className="text-gray-400 text-sm">
              Van analyse naar werkende oplossingen binnen bestaande IT-landschappen.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}