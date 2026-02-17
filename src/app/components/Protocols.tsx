import { ShieldCheck, ClipboardCheck, ListChecks, FileText } from 'lucide-react';

interface ProtocolCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

function ProtocolCard({ title, description, items, icon, color }: ProtocolCardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 ml-16">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Protocols() {
  const protocols = [
    {
      title: "Mantenimiento Preventivo",
      description: "Protocolos de revisión y mantenimiento programado para garantizar el funcionamiento óptimo",
      icon: <ClipboardCheck className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100 dark:bg-purple-900/50",
      items: [
        "Inspección visual diaria de equipos y sistemas",
        "Calibración mensual de detectores y calibradores",
        "Verificación trimestral de sistemas de seguridad",
        "Mantenimiento semestral de sistemas mecánicos",
        "Revisión anual completa por servicio técnico autorizado"
      ]
    },
    {
      title: "Control de Calidad",
      description: "Procedimientos de verificación de calidad y precisión de equipos e imágenes",
      icon: <ListChecks className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100 dark:bg-blue-900/50",
      items: [
        "Test de uniformidad diario en gammacámaras",
        "Verificación de resolución espacial semanal",
        "Control de calidad de radiofármacos antes de uso",
        "Verificación de sincronización PET/CT mensual",
        "Documentación y registro de todos los tests realizados"
      ]
    },
    {
      title: "Seguridad Radiológica",
      description: "Protocolos de protección radiológica y prevención de contaminación",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      color: "bg-green-100 dark:bg-green-900/50",
      items: [
        "Monitorización de niveles de radiación ambiental",
        "Control de contaminación de superficies",
        "Verificación de equipos de protección individual",
        "Gestión de residuos radiactivos según normativa",
        "Dosimetría personal del personal expuesto"
      ]
    },
    {
      title: "Documentación y Registros",
      description: "Mantenimiento de registros y documentación técnica reglamentaria",
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-100 dark:bg-orange-900/50",
      items: [
        "Libro de operaciones y mantenimiento actualizado",
        "Registro de incidencias y acciones correctivas",
        "Certificados de calibración y verificación",
        "Documentación de formación del personal",
        "Informes de controles de calidad periódicos"
      ]
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <h2 className="text-gray-900 dark:text-white mb-3">Protocolos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Protocolos estandarizados de mantenimiento, control de calidad y seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {protocols.map((protocol, index) => (
            <ProtocolCard key={index} {...protocol} />
          ))}
        </div>
      </div>
    </section>
  );
}
