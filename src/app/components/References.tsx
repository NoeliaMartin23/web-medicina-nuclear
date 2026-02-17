import { BookOpen } from 'lucide-react';

export function References() {
  const references = [
    {
      authors: "Consejo de Seguridad Nuclear (CSN)",
      title: "Guía de Seguridad 11.4: Criterios de aceptación de instalaciones de medicina nuclear",
      year: "2022",
      type: "Normativa"
    },
    {
      authors: "International Atomic Energy Agency (IAEA)",
      title: "Quality Assurance for SPECT Systems - IAEA Human Health Series No. 6",
      year: "2021",
      type: "Guía internacional"
    },
    {
      authors: "Sociedad Española de Física Médica (SEFM)",
      title: "Protocolo español de control de calidad en equipos de medicina nuclear",
      year: "2023",
      type: "Protocolo"
    },
    {
      authors: "European Association of Nuclear Medicine (EANM)",
      title: "Guidelines for PET/CT Quality Control",
      year: "2022",
      type: "Guía clínica"
    },
    {
      authors: "Reglamento sobre protección sanitaria contra radiaciones ionizantes",
      title: "Real Decreto 1029/2022 - Ministerio de la Presidencia",
      year: "2022",
      type: "Normativa española"
    },
    {
      authors: "National Electrical Manufacturers Association (NEMA)",
      title: "Performance Measurements of Positron Emission Tomographs - NEMA NU 2",
      year: "2018",
      type: "Estándar técnico"
    },
    {
      authors: "Sociedad Española de Medicina Nuclear e Imagen Molecular (SEMNIM)",
      title: "Recomendaciones para garantía de calidad en medicina nuclear",
      year: "2023",
      type: "Recomendaciones"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-gray-900 dark:text-white">Referencias</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Normativa, guías técnicas y bibliografía de referencia
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {references.map((reference, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">[{index + 1}]</span>
                        <div>
                          <p className="text-gray-900 dark:text-white">{reference.authors}</p>
                          <p className="text-gray-700 dark:text-gray-300 italic mt-1">{reference.title}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-gray-600 dark:text-gray-400">{reference.year}</span>
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm">
                              {reference.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Nota:</span> Es responsabilidad del personal técnico mantener 
              actualizadas las referencias a normativa vigente y consultar periódicamente las actualizaciones 
              emitidas por los organismos reguladores nacionales e internacionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
