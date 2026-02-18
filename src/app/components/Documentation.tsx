import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, AlertTriangle, Archive } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DocumentItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface DocumentationProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface DocumentationButtonProps {
  item: DocumentItem;
  onOpen: (id: string) => void;
}

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
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const documents: DocumentItem[] = [
  {
    id: 'documentacion-averias',
    title: 'Registro de averías e incidencias',
    summary: 'Gestión documental de fallos, incidencias operativas y acciones correctivas aplicadas en el servicio.',
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'El registro de averías e incidencias recoge fecha, equipo afectado, descripción del evento y nivel de impacto asistencial.',
      'Se documentan las acciones inmediatas, responsables asignados, tiempos de respuesta y validación de la corrección aplicada.',
      'Esta trazabilidad permite analizar recurrencias, mejorar planes preventivos y justificar decisiones técnicas ante auditorías.'
    ]
  },
  {
    id: 'documentacion-archivo',
    title: 'Archivo e informes',
    summary: 'Organización y conservación de informes técnicos, actas de mantenimiento y documentación regulatoria.',
    icon: <Archive className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'El archivo centraliza informes de mantenimiento, certificados de calibración, controles de calidad y documentación de soporte.',
      'La estructura documental debe facilitar búsqueda rápida, control de versiones y acceso restringido según perfil autorizado.',
      'La conservación ordenada de informes garantiza continuidad operativa, cumplimiento normativo y respaldo técnico del servicio.'
    ]
  }
];

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
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedDocument.image}
              alt={selectedDocument.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedDocument.details.map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <h2 className="text-gray-900 dark:text-white mb-3">Documentación</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
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
