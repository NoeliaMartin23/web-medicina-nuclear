import { CircleCheck } from 'lucide-react';

interface ProcedureStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

function ProcedureStep({ number, title, description, isLast }: ProcedureStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
          {number}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-600 mt-2" />}
      </div>

      <div className="flex-1 pb-12">
        <h3 className="text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export function Procedures() {
  const procedures = [
    {
      title: "Preparación Inicial",
      description: "Revisión del programa de mantenimiento y preparación de herramientas, equipos de medida y documentación necesaria. Verificación de disponibilidad de material y repuestos."
    },
    {
      title: "Inspección Visual",
      description: "Examen detallado del estado general del equipo, cables, conexiones y componentes externos. Detección de anomalías visibles, desgastes o daños en superficies y estructuras."
    },
    {
      title: "Verificación Funcional",
      description: "Comprobación del correcto funcionamiento de todos los sistemas. Realización de tests de encendido, calibración automática y verificación de parámetros operativos."
    },
    {
      title: "Mediciones y Tests",
      description: "Ejecución de protocolos de control de calidad específicos. Medición de uniformidad, resolución, sensibilidad y otros parámetros técnicos según fabricante."
    },
    {
      title: "Limpieza y Ajustes",
      description: "Limpieza de componentes críticos, ajuste de parámetros si necesario y lubricación de partes móviles. Verificación de sistemas de refrigeración y ventilación."
    },
    {
      title: "Documentación",
      description: "Registro completo de todas las actividades realizadas, mediciones obtenidas e incidencias detectadas. Actualización del libro de mantenimiento y archivo de certificados."
    },
    {
      title: "Verificación Final",
      description: "Comprobación final del correcto funcionamiento tras las intervenciones. Verificación de que todos los parámetros están dentro de especificaciones y autorización para uso clínico."
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-12">
            <h2 className="text-gray-900 dark:text-white mb-3">Procedimientos</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Secuencia detallada de pasos para la ejecución del mantenimiento
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-transparent rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            {procedures.map((procedure, index) => (
              <ProcedureStep
                key={index}
                number={index + 1}
                title={procedure.title}
                description={procedure.description}
                isLast={index === procedures.length - 1}
              />
            ))}
          </div>

          <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 flex items-start gap-4">
            <CircleCheck className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-green-900 dark:text-green-200 mb-2">Importante</h4>
              <p className="text-green-800 dark:text-green-300">
                Todos los procedimientos deben ser realizados por personal técnico cualificado y autorizado. 
                En caso de detectar anomalías graves, suspender el uso del equipo y contactar con el servicio 
                técnico oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
