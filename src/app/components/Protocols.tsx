import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Scan, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProtocolItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface ProtocolsProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ProtocolButtonProps {
  item: ProtocolItem;
  onOpen: (id: string) => void;
}

function ProtocolButton({ item, onOpen }: ProtocolButtonProps) {
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

const protocolItems: ProtocolItem[] = [
  {
    id: 'protocolos-gammacamara',
    title: 'Gammacámara',
    summary: 'Protocolos de control y verificación para asegurar calidad de imagen y funcionamiento estable del sistema.',
    icon: <Scan className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'El protocolo de gammacámara incluye controles diarios, semanales y periódicos para verificar uniformidad, resolución y sensibilidad del equipo.',
      'Se ejecutan pruebas de constancia, revisión de colimadores y validación de parámetros de adquisición antes de la actividad clínica.',
      'Toda desviación se documenta, se activa corrección técnica cuando corresponde y se registra la trazabilidad de cada control.'
    ]
  },
  {
    id: 'protocolos-pet',
    title: 'PET',
    summary: 'Procedimientos de puesta en marcha y control de calidad para mantener precisión diagnóstica y cuantificación confiable.',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1659353887988-7f64f5f9d8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'El protocolo PET contempla calibración, verificación de sincronización y pruebas de rendimiento para garantizar exactitud diagnóstica.',
      'Incluye chequeos de normalización, control de artefactos y validación de reconstrucción de imagen según estándares del servicio.',
      'La revisión sistemática de resultados y registros técnicos permite mantener continuidad operativa y seguridad clínica.'
    ]
  }
];

export function Protocols({ selectedSubSectionId = null, onBackToOverview }: ProtocolsProps) {
  const [activeProtocolId, setActiveProtocolId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = protocolItems.some((item) => item.id === selectedSubSectionId);
    setActiveProtocolId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedProtocol = protocolItems.find((item) => item.id === activeProtocolId) ?? null;

  const handleBack = () => {
    setActiveProtocolId(null);
    onBackToOverview?.();
  };

  if (selectedProtocol) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a protocolos
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedProtocol.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedProtocol.image}
              alt={selectedProtocol.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedProtocol.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Protocolos de Puesta en Marcha</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {protocolItems.map((protocol) => (
            <ProtocolButton
              key={protocol.id}
              item={protocol}
              onOpen={setActiveProtocolId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
