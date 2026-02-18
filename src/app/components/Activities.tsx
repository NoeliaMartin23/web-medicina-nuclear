import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Zap, Gauge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ActivityItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface ActivitiesProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ActivityButtonProps {
  item: ActivityItem;
  onOpen: (id: string) => void;
}

function ActivityButton({ item, onOpen }: ActivityButtonProps) {
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

const activities: ActivityItem[] = [
  {
    id: 'actividades-generador',
    title: 'Generador',
    summary: 'Actividades de control operativo, elución y verificación del rendimiento del generador en la rutina del servicio.',
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1563213126-a4273aed2016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'La actividad de generador incluye comprobación de estado, elución programada y verificación del rendimiento esperado.',
      'Se controla trazabilidad del lote, registro de actividad obtenida y cumplimiento de condiciones de manipulación segura.',
      'Ante desviaciones, se activa revisión técnica y se documentan acciones correctivas para mantener continuidad asistencial.'
    ]
  },
  {
    id: 'actividades-activimetro',
    title: 'Activímetro',
    summary: 'Controles de constancia, calibración y validación de medidas para asegurar cuantificación fiable de actividad.',
    icon: <Gauge className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Las actividades del activímetro contemplan controles de constancia diaria y verificación periódica de exactitud y linealidad.',
      'Se revisa respuesta del equipo frente a fuentes de referencia y se valida la coherencia de las mediciones previas a su uso clínico.',
      'Los resultados se registran en la documentación técnica para asegurar trazabilidad metrológica y cumplimiento normativo.'
    ]
  }
];

export function Activities({ selectedSubSectionId = null, onBackToOverview }: ActivitiesProps) {
  const [activeActivityId, setActiveActivityId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = activities.some((item) => item.id === selectedSubSectionId);
    setActiveActivityId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedActivity = activities.find((item) => item.id === activeActivityId) ?? null;

  const handleBack = () => {
    setActiveActivityId(null);
    onBackToOverview?.();
  };

  if (selectedActivity) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a actividades
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedActivity.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedActivity.image}
              alt={selectedActivity.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedActivity.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Actividades</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <ActivityButton
              key={activity.id}
              item={activity}
              onOpen={setActiveActivityId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
