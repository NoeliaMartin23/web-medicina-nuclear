import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Radar, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProcedureItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface ProceduresProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ProcedureButtonProps {
  item: ProcedureItem;
  onOpen: (id: string) => void;
}

function ProcedureButton({ item, onOpen }: ProcedureButtonProps) {
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

const procedures: ProcedureItem[] = [
  {
    id: 'procedimientos-monitoreo',
    title: 'Monitoreo de área y contaminación',
    summary: 'Protocolos de vigilancia radiologica para control de niveles de area y deteccion temprana de contaminacion.',
    icon: <Radar className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'El monitoreo de area y contaminacion se realiza de forma sistematica antes, durante y despues de la actividad clinica.',
      'Incluye control de superficies, puntos criticos y zonas de circulacion para detectar incrementos no esperados de radiacion.',
      'Los resultados se registran en planillas de seguimiento y, ante desviaciones, se aplican acciones de descontaminacion y verificacion.'
    ]
  },
  {
    id: 'procedimientos-gestion',
    title: 'Gestión de residuos radioactivos',
    summary: 'Procedimientos para segregacion, almacenamiento temporal y eliminacion segura de residuos segun normativa.',
    icon: <Trash2 className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1605201107820-951659ec034e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'La gestion de residuos radioactivos contempla clasificacion por tipo, actividad y periodo de semidesintegracion.',
      'El almacenamiento temporal se realiza en contenedores identificados, con control de acceso y trazabilidad documental completa.',
      'La retirada o liberacion del residuo se ejecuta segun protocolo interno y marco normativo vigente, con registro de cada etapa.'
    ]
  }
];

export function Procedures({ selectedSubSectionId = null, onBackToOverview }: ProceduresProps) {
  const [activeProcedureId, setActiveProcedureId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = procedures.some((item) => item.id === selectedSubSectionId);
    setActiveProcedureId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedProcedure = procedures.find((item) => item.id === activeProcedureId) ?? null;

  const handleBack = () => {
    setActiveProcedureId(null);
    onBackToOverview?.();
  };

  if (selectedProcedure) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a protocolos PR
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedProcedure.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Informacion detallada de la subseccion seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedProcedure.image}
              alt={selectedProcedure.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedProcedure.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Protocolos PR</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subseccion para abrir su ventana con informacion completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((procedure) => (
            <ProcedureButton
              key={procedure.id}
              item={procedure}
              onOpen={setActiveProcedureId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
