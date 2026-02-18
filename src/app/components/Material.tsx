import { useEffect, useState, type ReactNode } from 'react';
import { Package, Shield, Settings, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const baseUrl = import.meta.env.BASE_URL;

interface MaterialItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface MaterialProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface MaterialButtonProps {
  item: MaterialItem;
  onOpen: (id: string) => void;
}

function MaterialButton({ item, onOpen }: MaterialButtonProps) {
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
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const materials: MaterialItem[] = [
    {
      id: 'material-fungible',
      title: "Material fungible",
      summary: "Elementos de consumo habitual para la preparación y administración segura, con control continuo de stock, caducidades y trazabilidad.",
      icon: <Package className="w-5 h-5 text-green-600" />,
      image: `${baseUrl}images/imagen_material_fungible.png`,
      details: [
        'El material fungible agrupa insumos de un solo uso y de reposición frecuente en el flujo diario de medicina nuclear.',
        'Su control incluye inventario mínimo, fechas de caducidad, condiciones de almacenamiento y trazabilidad por procedimiento.',
        'La reposición planificada reduce interrupciones, evita faltantes críticos y mantiene la seguridad del paciente y del personal.'
      ]
    },
    {
      id: 'material-no-fungible',
      title: "Material no fungible",
      summary: "Recursos reutilizables de soporte y protección que requieren revisión periódica de estado, limpieza y mantenimiento para garantizar su funcionamiento.",
      icon: <Shield className="w-5 h-5 text-green-600" />,
      image: `${baseUrl}images/imagen_material_nofungible.png`,
      details: [
        'El material no fungible comprende elementos reutilizables cuya integridad física y funcional debe verificarse de forma periódica.',
        'La gestión contempla limpieza, desinfección, registro de incidencias y sustitución cuando se detecta desgaste o pérdida de prestaciones.',
        'Una supervisión estructurada prolonga la vida útil de los recursos y garantiza condiciones operativas seguras.'
      ]
    },
    {
      id: 'material-preparacion',
      title: "Preparación, Control y Reposición del material",
      summary: "Gestión operativa del circuito de material: preparación previa, verificación durante la actividad y reposición al cierre para asegurar continuidad asistencial.",
      icon: <Settings className="w-5 h-5 text-green-600" />,
      image:
        "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      details: [
        'La preparación del material organiza los recursos necesarios antes del inicio de la jornada y de cada procedimiento.',
        'El control operativo durante la actividad valida disponibilidad, estado y uso correcto de cada elemento según protocolo.',
        'La reposición al cierre consolida inventarios, registra consumos y deja el área preparada para la continuidad asistencial.'
      ]
    }
];

export function Material({ selectedSubSectionId = null, onBackToOverview }: MaterialProps) {
  const [activeMaterialId, setActiveMaterialId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = materials.some((item) => item.id === selectedSubSectionId);
    setActiveMaterialId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedMaterial = materials.find((item) => item.id === activeMaterialId) ?? null;

  const handleBack = () => {
    setActiveMaterialId(null);
    onBackToOverview?.();
  };

  if (selectedMaterial) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-green-700 dark:text-green-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a material
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedMaterial.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedMaterial.image}
              alt={selectedMaterial.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedMaterial.details.map((paragraph, index) => (
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
          <h2 className="text-gray-900 dark:text-white mb-3">Material</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Subapartados de material con el mismo formato visual que equipamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <MaterialButton
              key={material.id}
              item={material}
              onOpen={setActiveMaterialId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
