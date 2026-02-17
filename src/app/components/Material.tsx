import { Package, Shield, Droplet, Settings, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MaterialCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function MaterialCard({ title, description, icon }: MaterialCardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Material() {
  const materials = [
    {
      title: "Radiofármacos",
      description: "Control de calidad, almacenamiento y registro de isótopos radiactivos. Verificación de actividad y pureza radioquímica según protocolos establecidos.",
      icon: <Droplet className="w-6 h-6 text-green-600" />
    },
    {
      title: "Material de Protección",
      description: "Delantales plomados, protectores tiroideos, guantes, y otros elementos de protección radiológica. Inspección periódica de integridad.",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Jeringas y Contenedores",
      description: "Jeringas blindadas, viales plomados y contenedores de transporte para material radiactivo. Limpieza y verificación de blindaje.",
      icon: <Package className="w-6 h-6 text-green-600" />
    },
    {
      title: "Calibradores de Dosis",
      description: "Activímetros para medición de actividad de radiofármacos. Calibración periódica y verificación de constancia con fuentes patrón.",
      icon: <Settings className="w-6 h-6 text-green-600" />
    },
    {
      title: "Detectores de Radiación",
      description: "Contadores Geiger, detectores de contaminación y monitores de área. Verificación de funcionamiento y calibración regular.",
      icon: <Activity className="w-6 h-6 text-green-600" />
    },
    {
      title: "Consumibles Sanitarios",
      description: "Material estéril, gasas, desinfectantes y elementos de un solo uso. Control de stock y fechas de caducidad.",
      icon: <Package className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <h2 className="text-gray-900 dark:text-white mb-3">Material</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Material especializado de la sala de exploración que requiere control y mantenimiento
          </p>
        </div>

        <div className="mb-8">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583830379747-195159d0de82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBzdXBwbGllc3xlbnwxfHx8fDE3NjY0ODk4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Material médico"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <MaterialCard key={index} {...material} />
          ))}
        </div>
      </div>
    </section>
  );
}
