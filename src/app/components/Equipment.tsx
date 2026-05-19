import { useEffect, useState, type ReactNode } from 'react';
import { Scan, Monitor, Activity, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const baseUrl = import.meta.env.BASE_URL;

interface EquipmentItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface EquipmentProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface EquipmentButtonProps {
  item: EquipmentItem;
  onOpen: (id: string) => void;
}

const acquisitionEquipment: EquipmentItem[] = [
  {
    id: 'equipamiento-sanitario',
    title: 'Sanitario',
    summary: 'Equipos asistenciales del área diagnóstica y terapéutica que sostienen la atención clínica segura.',
    icon: <Scan className="w-5 h-5 text-blue-600" />,
    image: `${baseUrl}images/imagen_material_fungible.png`,
    details: [
      'El equipamiento sanitario integra los dispositivos clínicos de soporte directo al paciente durante los procedimientos de medicina nuclear.',
      'Su disponibilidad impacta en la seguridad, en la continuidad asistencial y en la capacidad de respuesta frente a incidencias durante la exploración.',
      'Incluye revisión funcional periódica, control de estado físico, verificación de alarmas y registro documental de mantenimiento.'
    ]
  },
  {
    id: 'equipamiento-electromedico',
    title: 'Electromédico',
    summary: 'Sistemas diagnósticos de alta complejidad cuya precisión depende de calibraciones y control técnico continuo.',
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBzY2FubmVyJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY2NDg5ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      'El equipamiento electromédico comprende equipos como gammacámara, PET/CT y SPECT/CT, esenciales para la obtención de imágenes diagnósticas de alta calidad.',
      'Estos sistemas requieren programas de control de calidad diarios, semanales y periódicos para asegurar exactitud cuantitativa y reproducibilidad.',
      'La gestión incluye mantenimiento preventivo, intervención correctiva, validación posterior y documentación conforme a normativa.'
    ]
  },
  {
    id: 'equipamiento-informatico',
    title: 'Informático',
    summary: 'Infraestructura digital que permite adquisición, procesamiento, almacenamiento y trazabilidad de estudios.',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzY2NDA3NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      'El equipamiento informático abarca estaciones de trabajo, servidores, red local, PACS y sistemas de información clínica vinculados a medicina nuclear.',
      'Su mantenimiento garantiza integridad de datos, seguridad de acceso, continuidad operativa y disponibilidad de informes e imágenes.',
      'La estrategia incluye copias de seguridad, control de versiones, monitorización de rendimiento y planes de recuperación ante fallos.'
    ]
  }
];

function EquipmentButton({ item, onOpen }: EquipmentButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className="w-full text-left bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.summary}</p>
      </div>
    </button>
  );
}

export function Equipment({ selectedSubSectionId = null, onBackToOverview }: EquipmentProps) {
  const [activeEquipmentId, setActiveEquipmentId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = acquisitionEquipment.some((item) => item.id === selectedSubSectionId);
    setActiveEquipmentId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedEquipment = acquisitionEquipment.find((item) => item.id === activeEquipmentId) ?? null;

  const handleBack = () => {
    setActiveEquipmentId(null);
    onBackToOverview?.();
  };

  if (selectedEquipment) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a equipamiento
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedEquipment.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedEquipment.image}
              alt={selectedEquipment.title}
              className="w-full max-h-[420px] object-cover"
            />
          </div>

          <div className="space-y-4">
            {selectedEquipment.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Equipamiento</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acquisitionEquipment.map((equipment) => (
            <EquipmentButton
              key={equipment.id}
              item={equipment}
              onOpen={setActiveEquipmentId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
