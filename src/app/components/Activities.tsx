import { CalendarCheck, Settings, ShieldCheck, ClipboardList } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  frequency: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function ActivityCard({ title, frequency, description, icon, color }: ActivityCardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-gray-900 dark:text-white">{title}</h3>
            <span className="text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/50 rounded-full whitespace-nowrap ml-2">
              {frequency}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Activities() {
  const activities = [
    {
      title: "Revisión Diaria de Equipos",
      frequency: "Diaria",
      description: "Inspección visual y funcional de todos los equipos. Verificación de uniformidad en gammacámaras y comprobación de sistemas de seguridad activos.",
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      title: "Calibración de Instrumentos",
      frequency: "Semanal",
      description: "Calibración de activímetros y verificación de detectores de radiación. Control de linealidad y reproducibilidad de mediciones.",
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100 dark:bg-purple-900/50"
    },
    {
      title: "Control de Contaminación",
      frequency: "Diaria",
      description: "Monitorización de superficies de trabajo, suelos y equipos. Registro de niveles de contaminación y acciones de descontaminación si necesario.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      color: "bg-green-100 dark:bg-green-900/50"
    },
    {
      title: "Verificación de Material",
      frequency: "Semanal",
      description: "Inventario de material fungible, verificación de fechas de caducidad y estado de conservación. Reposición según necesidades.",
      icon: <ClipboardList className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-100 dark:bg-orange-900/50"
    },
    {
      title: "Mantenimiento Preventivo",
      frequency: "Mensual",
      description: "Limpieza profunda de equipos, lubricación de partes móviles, verificación de conexiones eléctricas y sistemas de refrigeración.",
      icon: <Settings className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-100 dark:bg-indigo-900/50"
    },
    {
      title: "Auditoría de Protocolos",
      frequency: "Trimestral",
      description: "Revisión de cumplimiento de protocolos de seguridad, actualización de documentación y evaluación de incidencias registradas.",
      icon: <ClipboardList className="w-6 h-6 text-red-600" />,
      color: "bg-red-100 dark:bg-red-900/50"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <h2 className="text-gray-900 dark:text-white mb-3">Actividades</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Actividades programadas de mantenimiento, verificación y control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
