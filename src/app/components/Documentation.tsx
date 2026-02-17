import { FileText, BookOpen, ClipboardList, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DocumentCardProps {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
}

function DocumentCard({ title, description, type, icon }: DocumentCardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
        <Download className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      </div>
      <div className="flex items-center gap-2 ml-16">
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">{type}</span>
      </div>
    </div>
  );
}

export function Documentation() {
  const documents = [
    {
      title: "Manual de Operación de Gammacámara",
      description: "Instrucciones detalladas de uso, mantenimiento y resolución de problemas para equipos de gammagrafía.",
      type: "PDF - Manual",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Protocolo de Seguridad Radiológica",
      description: "Normativa de protección radiológica, límites de dosis y procedimientos de emergencia.",
      type: "PDF - Protocolo",
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Registro de Mantenimiento",
      description: "Formularios y plantillas para documentación de actividades de mantenimiento preventivo y correctivo.",
      type: "Excel - Registro",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Normativa CSN (Consejo de Seguridad Nuclear)",
      description: "Reglamento sobre instalaciones nucleares y radiactivas, y guías de seguridad aplicables.",
      type: "PDF - Normativa",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Certificados de Calibración",
      description: "Documentación de calibraciones realizadas por servicios técnicos autorizados.",
      type: "PDF - Certificado",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Procedimientos de Control de Calidad",
      description: "Protocolos detallados para verificación de parámetros técnicos y funcionales.",
      type: "PDF - Procedimiento",
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <h2 className="text-gray-900 dark:text-white mb-3">Documentación</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manuales, normativa y registros técnicos de referencia
          </p>
        </div>

        <div className="mb-8">
          <div className="aspect-[21/9] w-full rounded-xl overflow-hidden shadow-md mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdW1lbnRhdGlvbiUyMGZpbGVzfGVufDF8fHx8MTc2NjQ4OTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Documentación médica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((document, index) => (
            <DocumentCard key={index} {...document} />
          ))}
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <p className="text-blue-900 dark:text-blue-200">
            <span className="font-semibold">Nota:</span> Todos los documentos deben mantenerse actualizados 
            y accesibles al personal autorizado. Se recomienda revisar periódicamente las actualizaciones 
            de normativa y manuales del fabricante.
          </p>
        </div>
      </div>
    </section>
  );
}
