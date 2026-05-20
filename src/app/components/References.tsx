import { useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, ExternalLink, FileText, Folder, FolderOpen } from 'lucide-react';
import type { SearchEntry } from '../searchTypes';

interface ReferenceItem {
  id: string;
  citation: string;
  url?: string;
}

interface ReferenceFolder {
  id: string;
  title: string;
  description: string;
  references: ReferenceItem[];
}

const referenceFolders: ReferenceFolder[] = [
  {
    id: 'introduccion',
    title: 'Introducción',
    description: 'Solo se mantienen los enlaces que aparecían asociados a esta sección en la plataforma.',
    references: [
      {
        id: 'intro-1',
        citation:
          'European Medicines Agency. European Medicines Agency [Internet]. Amsterdam: EMA; [cited 2026 May 19]. Available from: https://www.ema.europa.eu/en/homepage',
        url: 'https://www.ema.europa.eu/en/homepage',
      },
      {
        id: 'intro-2',
        citation:
          'Consejo de Seguridad Nuclear. Consejo de Seguridad Nuclear [Internet]. Madrid: CSN; [cited 2026 May 19]. Available from: https://www.csn.es/home',
        url: 'https://www.csn.es/home',
      },
      {
        id: 'intro-3',
        citation:
          'International Atomic Energy Agency. International Atomic Energy Agency [Internet]. Vienna: IAEA; [cited 2026 May 19]. Available from: https://www.iaea.org/es',
        url: 'https://www.iaea.org/es',
      },
      {
        id: 'intro-4',
        citation:
          'European Association of Nuclear Medicine. European Association of Nuclear Medicine [Internet]. Vienna: EANM; [cited 2026 May 19]. Available from: https://www.eanm.org/',
        url: 'https://www.eanm.org/',
      },
      {
        id: 'intro-5',
        citation:
          'International Commission on Radiological Protection. ICRP [Internet]. Ottawa: ICRP; [cited 2026 May 19]. Available from: https://www.icrp.org/',
        url: 'https://www.icrp.org/',
      },
    ],
  },
  {
    id: 'equipamiento',
    title: 'Equipamiento',
    description: 'Solo se mantienen los enlaces que aparecían asociados a esta sección en la plataforma.',
    references: [
      {
        id: 'equip-1',
        citation:
          'Consejo de Seguridad Nuclear. Red ALARA [Internet]. Madrid: CSN; [cited 2026 May 19]. Available from: https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
        url: 'https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
      },
      {
        id: 'equip-2',
        citation:
          'Consejo de Seguridad Nuclear. Protección radiológica [Internet]. Madrid: CSN; [cited 2026 May 19]. Available from: https://www.csn.es/proteccion-radiologica',
        url: 'https://www.csn.es/proteccion-radiologica',
      },
      {
        id: 'equip-3',
        citation:
          'Ministerio para la Transición Ecológica y el Reto Demográfico. Ministerio para la Transición Ecológica y el Reto Demográfico [Internet]. Madrid: MITECO; [cited 2026 May 19]. Available from: https://www.miteco.gob.es/es.html',
        url: 'https://www.miteco.gob.es/es.html',
      },
      {
        id: 'equip-4',
        citation:
          'Najam H, Dearborn MC, Tafti D. Nuclear Medicine Instrumentation. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2026 Jan- [updated 2023 Nov 14; cited 2026 May 19]. Available from: https://www.ncbi.nlm.nih.gov/books/NBK597384/',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK597384/',
      },
      {
        id: 'equip-5',
        citation:
          'Gammascan. Tecnología y equipos en medicina nuclear [Internet]. [place unknown]: Gammascan; [cited 2026 May 19]. Available from: https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/',
        url: 'https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/',
      },
      {
        id: 'equip-6',
        citation:
          'Servicio Andaluz de Salud. UGC de Medicina Nuclear: equipamiento [Internet]. Sevilla: Servicio Andaluz de Salud; [cited 2026 May 19]. Available from: https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento',
        url: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento',
      },
      {
        id: 'equip-7',
        citation:
          'Consejo de Seguridad Nuclear. Protección radiológica del público y del medio ambiente [Internet]. Madrid: CSN; [cited 2026 May 19]. Available from: https://www.csn.es/proteccion-radiologica/vigilancia-radiologica-ambiental',
        url: 'https://www.csn.es/proteccion-radiologica/vigilancia-radiologica-ambiental',
      },
    ],
  },
  {
    id: 'material',
    title: 'Material',
    description: 'Solo se mantienen los enlaces que aparecían asociados a esta sección en la plataforma.',
    references: [
      {
        id: 'material-1',
        citation:
          'Iberomed. Material fungible sanitario: qué es y para qué sirve [Internet]. [place unknown]: Iberomed; [cited 2026 May 19]. Available from: https://iberomed.es/blog/material-fungible-sanitario-que-es-para-que-sirve/',
        url: 'https://iberomed.es/blog/material-fungible-sanitario-que-es-para-que-sirve/',
      },
    ],
  },
  {
    id: 'protocolos-pm',
    title: 'Protocolos de Puesta en Marcha de los Equipos',
    description: 'Se mantiene únicamente la referencia normativa mencionada de forma explícita en la plataforma.',
    references: [
      {
        id: 'ppm-1',
        citation:
          'Vallejo Carrascal C. Técnicas de imagen en medicina nuclear. Madrid: Editorial Síntesis; 2019.',
      },
    ],
  },
  {
    id: 'actividades',
    title: 'Actividades',
    description: 'Se mantiene únicamente la referencia normativa mencionada de forma explícita en la plataforma.',
    references: [
      {
        id: 'act-1',
        citation:
          'Vallejo Carrascal C. Técnicas de imagen en medicina nuclear. Madrid: Editorial Síntesis; 2019.',
      },
    ],
  },
  {
    id: 'protocolos-pr',
    title: 'Protocolos de Protección Radiológica',
    description: 'Se mantiene únicamente la referencia normativa mencionada de forma explícita en la plataforma.',
    references: [
      {
        id: 'ppr-1',
        citation:
          'España. Real Decreto 1841/1997, de 5 de diciembre, por el que se establecen los criterios de calidad en medicina nuclear. Boletín Oficial del Estado. 1997 Dec 19;(303).',
      },
    ],
  },
  {
    id: 'documentacion',
    title: 'Documentación',
    description: 'Se mantiene únicamente la referencia normativa mencionada de forma explícita en la plataforma.',
    references: [
      {
        id: 'doc-1',
        citation:
          'Vallejo Carrascal C. Técnicas de imagen en medicina nuclear. Madrid: Editorial Síntesis; 2019.',
      },
    ],
  },
  {
    id: 'cierre',
    title: 'Cierre de la instalación',
    description: 'Se mantiene únicamente la referencia normativa mencionada de forma explícita en la plataforma.',
    references: [
      {
        id: 'cierre-1',
        citation:
          'Vallejo Carrascal C. Técnicas de imagen en medicina nuclear. Madrid: Editorial Síntesis; 2019.',
      },
    ],
  }
];

export const referencesSearchEntries: SearchEntry[] = referenceFolders.flatMap((folder) => [
  {
    id: `search-folder-${folder.id}`,
    sectionId: 'referencias',
    sectionLabel: 'Referencias',
    title: folder.title,
    content: `${folder.description} ${folder.references.map((reference) => reference.citation).join(' ')}`,
    resultType: 'subsection',
  },
  ...folder.references.map((reference) => ({
    id: `search-reference-${reference.id}`,
    sectionId: 'referencias',
    sectionLabel: 'Referencias',
    title: `${folder.title} — referencia`,
    content: reference.citation,
    resultType: 'reference' as const,
  })),
]);

export function References() {
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);

  const activeFolder = useMemo(
    () => referenceFolders.find((folder) => folder.id === activeFolderId) ?? null,
    [activeFolderId]
  );

  if (activeFolder) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveFolderId(null)}
              className="inline-flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300 hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a carpetas
            </button>

            <div className="flex items-center gap-4 mb-6">
              <FolderOpen className="w-10 h-10 text-[#3F5B6F] dark:text-blue-300 flex-shrink-0" />
              <div>
                <h2 className="text-gray-900 dark:text-white">{activeFolder.title}</h2>
              <p className="text-black dark:text-white text-sm mt-1">{activeFolder.description}</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900/40">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Referencias bibliográficas en formato <span className="font-semibold">Vancouver</span>
                </p>
              </div>

              <ol className="divide-y divide-gray-200 dark:divide-gray-700">
                {activeFolder.references.map((reference, index) => (
                  <li key={reference.id} className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 w-8 flex-shrink-0">
                        [{index + 1}]
                      </span>
                      <div className="min-w-0 flex-1">
                    <p className="text-black dark:text-white leading-relaxed text-sm">
                          {reference.citation}
                        </p>
                        {reference.url && (
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-sm text-blue-700 dark:text-blue-300 hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Abrir fuente
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-10 h-10 text-[#3F5B6F] dark:text-blue-300 flex-shrink-0" />
              <div>
                <h2 className="text-gray-900 dark:text-white">Referencias</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {referenceFolders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setActiveFolderId(folder.id)}
                className="text-left bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <Folder className="w-10 h-10 text-[#3F5B6F] dark:text-blue-300 flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-gray-900 dark:text-white text-lg">{folder.title}</h3>
                    <p className="text-black dark:text-white text-sm mt-2 leading-relaxed">
                      {folder.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span>
                        {folder.references.length} referencia{folder.references.length === 1 ? '' : 's'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
