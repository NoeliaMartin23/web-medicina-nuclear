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
    description: 'Fuentes institucionales y marcos generales citados en la contextualización de la Medicina Nuclear.',
    references: [
      {
        id: 'intro-1',
        citation:
          'European Medicines Agency. European Medicines Agency [Internet]. [cited 2026 May 18]. Available from: https://www.ema.europa.eu/en/homepage',
        url: 'https://www.ema.europa.eu/en/homepage',
      },
      {
        id: 'intro-2',
        citation:
          'Consejo de Seguridad Nuclear. Consejo de Seguridad Nuclear [Internet]. [cited 2026 May 18]. Available from: https://www.csn.es/home',
        url: 'https://www.csn.es/home',
      },
      {
        id: 'intro-3',
        citation:
          'International Atomic Energy Agency. International Atomic Energy Agency [Internet]. [cited 2026 May 18]. Available from: https://www.iaea.org/es',
        url: 'https://www.iaea.org/es',
      },
      {
        id: 'intro-4',
        citation:
          'European Association of Nuclear Medicine. Guidelines overview [Internet]. [cited 2026 May 18]. Available from: https://eanm.org/publications/guidelines/overview/',
        url: 'https://eanm.org/publications/guidelines/overview/',
      },
      {
        id: 'intro-5',
        citation:
          'International Commission on Radiological Protection. ICRP [Internet]. [cited 2026 May 18]. Available from: https://www.icrp.org/',
        url: 'https://www.icrp.org/',
      },
    ],
  },
  {
    id: 'equipamiento',
    title: 'Equipamiento',
    description: 'Bibliografía y recursos utilizados para describir el equipamiento sanitario, electromédico e informático.',
    references: [
      {
        id: 'equip-1',
        citation:
          'Najam H, Dearborn MC, Tafti D. Nuclear Medicine Instrumentation. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2026 Jan- [updated 2023 Nov 14; cited 2026 May 18]. Available from: https://www.ncbi.nlm.nih.gov/books/NBK597384/',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK597384/',
      },
      {
        id: 'equip-2',
        citation:
          'Consejo de Seguridad Nuclear. Red ALARA [Internet]. [cited 2026 May 18]. Available from: https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
        url: 'https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
      },
      {
        id: 'equip-3',
        citation:
          'International Atomic Energy Agency. Equipment [Internet]. [cited 2026 May 18]. Available from: https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/equipment',
        url: 'https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/equipment',
      },
      {
        id: 'equip-4',
        citation:
          'Servicio Andaluz de Salud. UGC de Medicina Nuclear: equipamiento [Internet]. [cited 2026 May 18]. Available from: https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento',
        url: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento',
      },
      {
        id: 'equip-5',
        citation:
          'Gammascan. Tecnología y equipos en medicina nuclear [Internet]. [cited 2026 May 18]. Available from: https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/',
        url: 'https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/',
      },
      {
        id: 'equip-6',
        citation:
          'Servicio Gallego de Salud. Medios humanos y materiales RF en MN y RD [Internet]. [cited 2026 May 18]. Available from: https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf',
        url: 'https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf',
      },
    ],
  },
  {
    id: 'material',
    title: 'Material',
    description: 'Referencias de apoyo para material fungible, no fungible y gestión de reposición.',
    references: [
      {
        id: 'material-1',
        citation:
          'Consejo de Seguridad Nuclear. Guía de Seguridad 11.4: criterios de aceptación de instalaciones de medicina nuclear. Madrid: CSN; 2022.',
      },
      {
        id: 'material-2',
        citation:
          'Servicio Gallego de Salud. Medios humanos y materiales RF en MN y RD [Internet]. [cited 2026 May 18]. Available from: https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf',
        url: 'https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf',
      },
      {
        id: 'material-3',
        citation:
          'Sociedad Española de Física Médica, Sociedad Española de Protección Radiológica, Sociedad Española de Medicina Nuclear e Imagen Molecular. Protocolo de control de calidad de la instrumentación en medicina nuclear (versión 2020) [Internet]. Madrid: SEFM; 2020 [cited 2026 May 18]. Available from: https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
        url: 'https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
      },
    ],
  },
  {
    id: 'protocolos-pm',
    title: 'Protocolos de Puesta en Marcha de los Equipos',
    description: 'Fuentes técnicas empleadas para control de calidad, verificación y puesta en marcha de gammacámara y PET.',
    references: [
      {
        id: 'ppm-1',
        citation:
          'International Atomic Energy Agency. Quality assurance for SPECT systems. IAEA Human Health Series No. 6. Vienna: IAEA; 2009.',
      },
      {
        id: 'ppm-2',
        citation:
          'European Association of Nuclear Medicine. Quality control of nuclear medicine instrumentation and protocol standardisation [Internet]. Vienna: EANM; 2017 [cited 2026 May 18]. Available from: https://eanm.org/wp-content/uploads/2024/06/EANM_2017_TEchGuide_QualityControl-1.pdf',
        url: 'https://eanm.org/wp-content/uploads/2024/06/EANM_2017_TEchGuide_QualityControl-1.pdf',
      },
      {
        id: 'ppm-3',
        citation:
          'National Electrical Manufacturers Association. Performance measurements of positron emission tomographs (PET). NEMA NU 2-2018. Rosslyn (VA): NEMA; 2018.',
      },
      {
        id: 'ppm-4',
        citation:
          'Sociedad Española de Física Médica, Sociedad Española de Protección Radiológica, Sociedad Española de Medicina Nuclear e Imagen Molecular. Protocolo de control de calidad de la instrumentación en medicina nuclear (versión 2020) [Internet]. Madrid: SEFM; 2020 [cited 2026 May 18]. Available from: https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
        url: 'https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
      },
    ],
  },
  {
    id: 'actividades',
    title: 'Actividades de Mantenimiento',
    description: 'Referencias empleadas para actividades sobre generador, activímetro y controles operativos de rutina.',
    references: [
      {
        id: 'act-1',
        citation:
          'International Atomic Energy Agency. Instruments QA / QC [Internet]. [cited 2026 May 18]. Available from: https://www.iaea.org/resource/hhc/nuclear-medicine/tools-instruments/instruments-qa-qc',
        url: 'https://www.iaea.org/resource/hhc/nuclear-medicine/tools-instruments/instruments-qa-qc',
      },
      {
        id: 'act-2',
        citation:
          'Najam H, Dearborn MC, Tafti D. Nuclear Medicine Instrumentation. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2026 Jan- [updated 2023 Nov 14; cited 2026 May 18]. Available from: https://www.ncbi.nlm.nih.gov/books/NBK597384/',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK597384/',
      },
      {
        id: 'act-3',
        citation:
          'Sociedad Española de Física Médica, Sociedad Española de Protección Radiológica, Sociedad Española de Medicina Nuclear e Imagen Molecular. Protocolo de control de calidad de la instrumentación en medicina nuclear (versión 2020) [Internet]. Madrid: SEFM; 2020 [cited 2026 May 18]. Available from: https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
        url: 'https://sefm.es/2021/05/03/protocolo-de-control-de-calidad-de-la-instrumentacion-en-medicina-nuclear-version-2020/',
      },
    ],
  },
  {
    id: 'protocolos-pr',
    title: 'Protocolos de Protección Radiológica',
    description: 'Normativa y principios aplicados al monitoreo de área, contaminación y gestión de residuos radioactivos.',
    references: [
      {
        id: 'ppr-1',
        citation:
          'España. Real Decreto 1029/2022, de 20 de diciembre, por el que se aprueba el Reglamento sobre protección de la salud contra los riesgos derivados de la exposición a las radiaciones ionizantes. Boletín Oficial del Estado. 2022 Dec 21;(305).',
      },
      {
        id: 'ppr-2',
        citation:
          'Consejo de Seguridad Nuclear. Red ALARA [Internet]. [cited 2026 May 18]. Available from: https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
        url: 'https://www.csn.es/proteccion-radiologica/trabajadores/red-alara',
      },
      {
        id: 'ppr-3',
        citation:
          'International Commission on Radiological Protection. ICRP [Internet]. [cited 2026 May 18]. Available from: https://www.icrp.org/',
        url: 'https://www.icrp.org/',
      },
    ],
  },
  {
    id: 'documentacion',
    title: 'Documentación',
    description: 'Fuentes relacionadas con trazabilidad, archivo, registros técnicos y requisitos documentales del servicio.',
    references: [
      {
        id: 'doc-1',
        citation:
          'Consejo de Seguridad Nuclear. Guía de Seguridad 11.4: criterios de aceptación de instalaciones de medicina nuclear. Madrid: CSN; 2022.',
      },
      {
        id: 'doc-2',
        citation:
          'España. Real Decreto 1029/2022, de 20 de diciembre, por el que se aprueba el Reglamento sobre protección de la salud contra los riesgos derivados de la exposición a las radiaciones ionizantes. Boletín Oficial del Estado. 2022 Dec 21;(305).',
      },
      {
        id: 'doc-3',
        citation:
          'International Atomic Energy Agency. Quality management system [Internet]. [cited 2026 May 18]. Available from: https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/quality-management-system',
        url: 'https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/quality-management-system',
      },
    ],
  },
  {
    id: 'cierre',
    title: 'Cierre de la instalación',
    description: 'Referencias de apoyo para verificación final, seguridad radiológica y control operativo al cierre de jornada.',
    references: [
      {
        id: 'cierre-1',
        citation:
          'España. Real Decreto 1029/2022, de 20 de diciembre, por el que se aprueba el Reglamento sobre protección de la salud contra los riesgos derivados de la exposición a las radiaciones ionizantes. Boletín Oficial del Estado. 2022 Dec 21;(305).',
      },
      {
        id: 'cierre-2',
        citation:
          'International Atomic Energy Agency. Quality management system [Internet]. [cited 2026 May 18]. Available from: https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/quality-management-system',
        url: 'https://www.iaea.org/resources/hhc/medical-physics/nuclear-medicine/quality-management-system',
      },
      {
        id: 'cierre-3',
        citation:
          'Consejo de Seguridad Nuclear. Guía de Seguridad 11.4: criterios de aceptación de instalaciones de medicina nuclear. Madrid: CSN; 2022.',
      },
    ],
  },
  {
    id: 'resumen-conclusiones',
    title: 'Resumen y Conclusiones',
    description: 'Fuentes globales que sostienen la síntesis final del trabajo y sus conclusiones operativas y regulatorias.',
    references: [
      {
        id: 'res-1',
        citation:
          'International Atomic Energy Agency. Quality assurance for SPECT systems. IAEA Human Health Series No. 6. Vienna: IAEA; 2009.',
      },
      {
        id: 'res-2',
        citation:
          'European Association of Nuclear Medicine. Quality control of nuclear medicine instrumentation and protocol standardisation [Internet]. Vienna: EANM; 2017 [cited 2026 May 18]. Available from: https://eanm.org/wp-content/uploads/2024/06/EANM_2017_TEchGuide_QualityControl-1.pdf',
        url: 'https://eanm.org/wp-content/uploads/2024/06/EANM_2017_TEchGuide_QualityControl-1.pdf',
      },
      {
        id: 'res-3',
        citation:
          'España. Real Decreto 1029/2022, de 20 de diciembre, por el que se aprueba el Reglamento sobre protección de la salud contra los riesgos derivados de la exposición a las radiaciones ionizantes. Boletín Oficial del Estado. 2022 Dec 21;(305).',
      },
      {
        id: 'res-4',
        citation:
          'Consejo de Seguridad Nuclear. Guía de Seguridad 11.4: criterios de aceptación de instalaciones de medicina nuclear. Madrid: CSN; 2022.',
      },
    ],
  },
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
                      <p className="text-black dark:text-white text-sm mt-1">
                  Carpetas organizadas por sección de la web con las referencias bibliográficas utilizadas en formato Vancouver.
                </p>
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
