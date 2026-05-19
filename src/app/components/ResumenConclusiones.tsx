import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, FileText, CircleCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SummaryConclusionItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface ResumenConclusionesProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ResumenConclusionesButtonProps {
  item: SummaryConclusionItem;
  onOpen: (id: string) => void;
}

function ResumenConclusionesButton({ item, onOpen }: ResumenConclusionesButtonProps) {
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

const summaryConclusionItems: SummaryConclusionItem[] = [
  {
    id: 'resumen-ejecutivo',
    title: 'Resumen',
    summary: 'Síntesis de los puntos clave del programa de mantenimiento en medicina nuclear.',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Esta subsección ofrece un resumen ejecutivo del programa de mantenimiento, enfocándose en los elementos que sostienen la seguridad y continuidad asistencial.',
      'Se prioriza el mantenimiento preventivo programado, la aplicación de protocolos de protección radiológica y la verificación continua de parámetros críticos.',
      'La coordinación entre equipamiento, protocolos operativos y documentación técnica permite reducir fallos, mejorar tiempos de respuesta y fortalecer la trazabilidad del servicio.'
    ]
  },
  {
    id: 'conclusiones-finales',
    title: 'Conclusiones',
    summary: 'Conclusiones finales sobre impacto, seguridad y sostenibilidad del mantenimiento.',
    icon: <CircleCheck className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'La implementación de un programa integral de mantenimiento es esencial para garantizar operatividad técnica, seguridad clínica y cumplimiento normativo.',
      'El cumplimiento riguroso de los protocolos establecidos protege al personal y a los pacientes, y mantiene la calidad de los resultados diagnósticos y terapéuticos.',
      'La inversión sostenida en mantenimiento representa una decisión estratégica para prolongar la vida útil de los equipos y asegurar la sostenibilidad del servicio.'
    ]
  }
];

export function ResumenConclusiones({
  selectedSubSectionId = null,
  onBackToOverview
}: ResumenConclusionesProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = summaryConclusionItems.some((item) => item.id === selectedSubSectionId);
    setActiveItemId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedItem = summaryConclusionItems.find((item) => item.id === activeItemId) ?? null;

  const handleBack = () => {
    setActiveItemId(null);
    onBackToOverview?.();
  };

  if (selectedItem) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a resumen y conclusiones
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedItem.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedItem.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Resumen y Conclusiones</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summaryConclusionItems.map((item) => (
            <ResumenConclusionesButton
              key={item.id}
              item={item}
              onOpen={setActiveItemId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
