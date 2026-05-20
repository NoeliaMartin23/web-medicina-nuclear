import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, AlertTriangle, Archive } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import documentacionIcono from '../../assets/documentacion-icono.svg';
import type { SearchEntry } from '../searchTypes';

interface DocumentItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: ProtocolDetail[];
}

interface DocumentationProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface DocumentationButtonProps {
  item: DocumentItem;
  onOpen: (id: string) => void;
}

interface ProtocolDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'list';
}

const paragraph = (
  content: ReactNode,
  plainText?: string
): ProtocolDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const bulletList = (
  items: ReactNode[],
  plainTextItems: string[]
): ProtocolDetail => ({
  content: (
    <ul className="list-disc pl-8 space-y-3 text-black dark:text-white leading-relaxed">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ),
  plainText: plainTextItems.join(' '),
  kind: 'list',
});

const bulletListWithImage = (
  items: ReactNode[],
  plainTextItems: string[],
  imageSrc: string,
  imageAlt: string
): ProtocolDetail => ({
  content: (
    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
      <ul className="list-disc pl-8 space-y-3 text-black dark:text-white leading-relaxed flex-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full md:w-72 max-h-56 rounded-xl shadow-md object-cover"
      />
    </div>
  ),
  plainText: plainTextItems.join(' '),
  kind: 'list',
});

function DocumentationButton({ item, onOpen }: DocumentationButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(item.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item.id)}
      onKeyDown={handleKeyDown}
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <div className="h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <h3 className="text-gray-900 dark:text-white text-xl">{item.title}</h3>
        </div>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const documents: DocumentItem[] = [
  {
    id: 'documentacion-averias',
    title: 'Registro de averías e incidencias',
    summary:
      '',
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',

    details: [
      paragraph(
        'El registro de averías e incidencias es un documento oficial del servicio de Medicina Nuclear en el que se anotan todos los eventos anómalos detectados durante la actividad diaria, con la finalidad de garantizar la trazabilidad de los problemas identificados y facilitar su resolución de manera rápida, segura y eficiente.'
      ),

      paragraph(
        'En este registro pueden incluirse averías de equipos, fallos de software o pérdida de imágenes, problemas eléctricos o de comunicación, errores en la identificación del paciente, contaminaciones o derrames radiactivos, incidencias relacionadas con la protección radiológica y fallos de blindaje o accesos no autorizados.'
      ),

      paragraph(
        'Toda incidencia debe registrarse indicando:'
      ),

      bulletListWithImage(
        [
          <>La fecha.</>,
          <>El equipo afectado.</>,
          <>La descripción detallada del problema.</>,
          <>El profesional responsable.</>,
          <>Las medidas correctoras adoptadas.</>,
        ],
        [
          'La fecha.',
          'El equipo afectado.',
          'La descripción detallada del problema.',
          'El profesional responsable.',
          'Las medidas correctoras adoptadas.',
        ],
        '/images/RegistrosYAverias.png',
        'Registro de averías e incidencias'
      ),

      paragraph(
        'Asimismo, el programa de garantía de calidad debe incorporar un programa de mantenimiento preventivo y correctivo, llevado a cabo por el suministrador, una empresa de asistencia técnica especializada o el propio centro sanitario.'
      ),

      paragraph(
        'Cualquier intervención realizada sobre los equipos que pueda afectar a los procedimientos de adquisición de imágenes debe ir seguida de una verificación técnica basada en los valores de referencia establecidos previamente. Esta comprobación debe ser realizada por el servicio técnico o por el servicio de radiofísica, responsables de autorizar nuevamente el uso clínico del equipo.'
      ),

      paragraph(
        'El profesional encargado de la intervención deberá dejar constancia escrita, mediante el correspondiente certificado, de la restitución del funcionamiento del equipo a las condiciones previas a la avería. Además, todas las actuaciones realizadas deberán registrarse electrónicamente en formato DICOM, permitiendo su almacenamiento, trazabilidad y análisis posterior.'
      ),

      paragraph(
        'La correcta documentación de estas incidencias y actuaciones técnicas contribuye a mejorar la seguridad del paciente y del personal, evitar la repetición de errores, facilitar auditorías e inspecciones y garantizar el cumplimiento de la normativa sanitaria y radiológica vigente.'
      ),

      paragraph(
        'Del mismo modo, permite planificar adecuadamente las tareas de mantenimiento preventivo y correctivo y asegurar el correcto funcionamiento de los equipos empleados en la práctica clínica diaria.'
      ),
    ],
  },

  {
    id: 'documentacion-archivo',
    title: 'Archivo e informes',
    summary:
      '',

    icon: <Archive className="w-5 h-5 text-blue-600" />,

    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',

    details: [
      paragraph(
        'Los informes y certificados relacionados con las pruebas de aceptación del equipamiento, el programa de control de calidad y las actividades de mantenimiento deben conservarse archivados durante toda la vida útil de los equipos, permaneciendo disponibles para las autoridades sanitarias competentes que puedan requerirlos.'
      ),

      paragraph(
        'Del mismo modo, la documentación relativa a la administración de radiofármacos con fines diagnósticos, terapéuticos o de investigación, así como las historias clínicas de los pacientes, deberá mantenerse archivada durante un periodo mínimo de treinta años, de acuerdo con la normativa vigente.'
      ),

      paragraph(
        'La conservación adecuada de esta documentación garantiza la trazabilidad de los procedimientos realizados, facilita las labores de inspección y auditoría y contribuye al correcto seguimiento del estado operativo de los equipos.'
      ),

      paragraph(
        'Asimismo, los controles de calidad permiten asegurar que las dosis administradas a los pacientes sean tan bajas como sea razonablemente posible, manteniendo en todo momento una calidad de imagen adecuada para el diagnóstico y minimizando los riesgos asociados al uso de radiaciones ionizantes sin comprometer sus beneficios clínicos.'
      ),
    ],
  },
];

export const documentationSearchEntries: SearchEntry[] = documents.map((document) => ({
  id: `search-${document.id}`,
  sectionId: 'documentacion',
  subSectionId: document.id,
  sectionLabel: 'Documentación',
  title: document.title,
  content: `${document.summary} ${document.details.join(' ')}`,
  resultType: 'subsection',
}));

export function Documentation({ selectedSubSectionId = null, onBackToOverview }: DocumentationProps) {
  const [activeDocumentationId, setActiveDocumentationId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = documents.some((item) => item.id === selectedSubSectionId);
    setActiveDocumentationId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedDocument = documents.find((item) => item.id === activeDocumentationId) ?? null;

  const handleBack = () => {
    setActiveDocumentationId(null);
    onBackToOverview?.();
  };

  if (selectedDocument) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a documentación
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedDocument.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedDocument.image}
              alt={selectedDocument.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedDocument.details.map((detail, index) =>
              detail.kind === 'list' ? (
                <div key={index}>{detail.content}</div>
              ) : (
                <p key={index} className="text-black dark:text-white leading-relaxed">
                  {detail.content}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <img src={documentacionIcono} alt="" className="w-16 h-16 object-contain flex-shrink-0" aria-hidden="true" />
            <h2 className="text-gray-900 dark:text-white">Documentación</h2>
          </div>
          <p className="text-black dark:text-white text-lg leading-relaxed">
            Todo servicio de Medicina Nuclear debe disponer de un programa de garantía de calidad desde la puesta en funcionamiento de la instalación. Dicho programa debe incluir procedimientos escritos y protocolizados relacionados con la práctica clínica, así como medidas de control de calidad aplicadas a los radiofármacos, al equipamiento instrumental y a los sistemas de adquisición y tratamiento de datos.
          </p>
          <p className="text-black dark:text-white text-lg leading-relaxed mt-4">
            Los resultados obtenidos durante las pruebas de aceptación inicial de los equipos deben registrarse y conservarse adecuadamente, ya que constituyen los valores de referencia empleados en los posteriores controles de calidad y verificaciones periódicas. De este modo, se garantiza el correcto funcionamiento de la instalación, la fiabilidad diagnóstica de las exploraciones y la seguridad radiológica tanto de los pacientes como del personal sanitario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((document) => (
            <DocumentationButton
              key={document.id}
              item={document}
              onOpen={setActiveDocumentationId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
