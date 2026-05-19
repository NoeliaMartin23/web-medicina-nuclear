import { activitiesSearchEntries } from './components/Activities';
import { closureSearchEntries } from './components/Closure';
import { documentationSearchEntries } from './components/Documentation';
import { equipmentSearchEntries } from './components/Equipment';
import { introductionSearchEntries } from './components/Introduction';
import { materialSearchEntries } from './components/Material';
import { proceduresSearchEntries } from './components/Procedures';
import { protocolsSearchEntries } from './components/Protocols';
import { referencesSearchEntries } from './components/References';
import { summaryConclusionSearchEntries } from './components/ResumenConclusiones';
import type { SearchEntry, SearchResult } from './searchTypes';

const sectionSearchEntries: SearchEntry[] = [
  {
    id: 'section-introduccion',
    sectionId: 'introduccion',
    sectionLabel: 'Introducción',
    title: 'Introducción',
    content:
      'Medicina nuclear, radiotrazadores, radiofármacos, diagnóstico, tratamiento, control de calidad, mantenimiento, protección radiológica y funcionamiento seguro de la instalación.',
    resultType: 'section',
  },
  {
    id: 'section-equipamiento',
    sectionId: 'equipamiento',
    sectionLabel: 'Equipamiento',
    title: 'Equipamiento',
    content:
      'Equipamiento sanitario, electromédico e informático. Gammacámaras, PET, SPECT, activímetros, estaciones de trabajo, blindajes, ventilación y software clínico.',
    resultType: 'section',
  },
  {
    id: 'section-material',
    sectionId: 'material',
    sectionLabel: 'Material',
    title: 'Material',
    content:
      'Material fungible, no fungible, preparación, control y reposición del material. Inventario, limpieza, almacenamiento y trazabilidad.',
    resultType: 'section',
  },
  {
    id: 'section-protocolos',
    sectionId: 'protocolos',
    sectionLabel: 'Protocolos de Puesta en Marcha',
    title: 'Protocolos de Puesta en Marcha',
    content:
      'Protocolos PM de gammacámara y PET. Puesta en marcha, verificación, calibración, control de calidad y rendimiento diagnóstico.',
    resultType: 'section',
  },
  {
    id: 'section-actividades',
    sectionId: 'actividades',
    sectionLabel: 'Actividades',
    title: 'Actividades',
    content:
      'Actividades de mantenimiento, control operativo, generador, activímetro, elución, calibración, constancia y validación de medidas.',
    resultType: 'section',
  },
  {
    id: 'section-procedimientos',
    sectionId: 'procedimientos',
    sectionLabel: 'Protocolos de Protección Radiológica',
    title: 'Protocolos de Protección Radiológica',
    content:
      'Protocolos PR, monitoreo de área y contaminación, gestión de residuos radioactivos, vigilancia radiológica, descontaminación y seguridad.',
    resultType: 'section',
  },
  {
    id: 'section-documentacion',
    sectionId: 'documentacion',
    sectionLabel: 'Documentación',
    title: 'Documentación',
    content:
      'Registro de averías e incidencias, archivo, informes técnicos, certificados, mantenimiento, auditorías y documentación regulatoria.',
    resultType: 'section',
  },
  {
    id: 'section-cierre',
    sectionId: 'cierre',
    sectionLabel: 'Cierre',
    title: 'Cierre de la instalación',
    content:
      'Cierre de la instalación, apagado y revisión de equipos, PACS, incidencias, descontaminación, orden de material y seguridad radiológica.',
    resultType: 'section',
  },
  {
    id: 'section-resumen',
    sectionId: 'resumen-conclusiones',
    sectionLabel: 'Resumen y Conclusiones',
    title: 'Resumen y Conclusiones',
    content:
      'Resumen ejecutivo, conclusiones finales, mantenimiento de equipos, material, protección radiológica, documentación y calidad asistencial.',
    resultType: 'section',
  },
  {
    id: 'section-referencias',
    sectionId: 'referencias',
    sectionLabel: 'Referencias',
    title: 'Referencias',
    content:
      'Normativa, guías técnicas, bibliografía, CSN, IAEA, EANM, SEFM, NEMA y SEMNIM.',
    resultType: 'section',
  },
];

const searchEntries: SearchEntry[] = [
  ...sectionSearchEntries,
  ...introductionSearchEntries,
  ...equipmentSearchEntries,
  ...materialSearchEntries,
  ...protocolsSearchEntries,
  ...activitiesSearchEntries,
  ...proceduresSearchEntries,
  ...documentationSearchEntries,
  ...closureSearchEntries,
  ...summaryConclusionSearchEntries,
  ...referencesSearchEntries,
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const indexedEntries = searchEntries.map((entry) => {
  const combinedText = `${entry.title}. ${entry.content}`.trim();

  return {
    ...entry,
    combinedText,
    normalizedTitle: normalizeText(entry.title),
    normalizedSectionLabel: normalizeText(entry.sectionLabel),
    normalizedCombinedText: normalizeText(combinedText),
  };
});

const countOccurrences = (text: string, term: string) => {
  if (!term) return 0;

  let count = 0;
  let startIndex = 0;

  while (true) {
    const matchIndex = text.indexOf(term, startIndex);

    if (matchIndex === -1) {
      break;
    }

    count += 1;
    startIndex = matchIndex + term.length;
  }

  return count;
};

const buildExcerpt = (combinedText: string, normalizedCombinedText: string, terms: string[]) => {
  const firstMatchIndex = terms
    .map((term) => normalizedCombinedText.indexOf(term))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];

  if (firstMatchIndex === undefined) {
    return combinedText.length > 140 ? `${combinedText.slice(0, 137)}...` : combinedText;
  }

  const start = Math.max(0, firstMatchIndex - 45);
  const end = Math.min(combinedText.length, firstMatchIndex + 115);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < combinedText.length ? '...' : '';

  return `${prefix}${combinedText.slice(start, end).trim()}${suffix}`;
};

export const searchSite = (query: string, limit = 8): SearchResult[] => {
  const normalizedQuery = normalizeText(query);

  if (normalizedQuery.length < 2) {
    return [];
  }

  const terms = normalizedQuery.split(' ').filter(Boolean);

  return indexedEntries
    .filter((entry) => terms.every((term) => entry.normalizedCombinedText.includes(term)))
    .map((entry) => {
      let score = 0;

      if (entry.normalizedTitle === normalizedQuery) score += 120;
      if (entry.normalizedSectionLabel === normalizedQuery) score += 90;
      if (entry.normalizedTitle.startsWith(normalizedQuery)) score += 65;
      if (entry.normalizedSectionLabel.startsWith(normalizedQuery)) score += 40;

      terms.forEach((term) => {
        if (entry.normalizedTitle.includes(term)) score += 24;
        if (entry.normalizedSectionLabel.includes(term)) score += 14;
        score += Math.min(12, countOccurrences(entry.normalizedCombinedText, term) * 3);
      });

      if (entry.resultType === 'section') score += 6;

      return {
        id: entry.id,
        sectionId: entry.sectionId,
        subSectionId: entry.subSectionId ?? null,
        sectionLabel: entry.sectionLabel,
        title: entry.title,
        content: entry.content,
        resultType: entry.resultType,
        score,
        excerpt: buildExcerpt(entry.combinedText, entry.normalizedCombinedText, terms),
      };
    })
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, 'es'))
    .slice(0, limit);
};

export type { SearchResult } from './searchTypes';
