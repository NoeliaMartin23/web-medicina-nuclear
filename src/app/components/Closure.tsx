import { CircleCheck } from 'lucide-react';

export function Closure() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-10 border border-green-200 dark:border-green-800 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CircleCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-900 dark:text-white">Cierre de la instalación</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              El mantenimiento adecuado en medicina nuclear no es solo una obligación reglamentaria, 
              sino un compromiso fundamental con la excelencia en la atención sanitaria y la seguridad 
              de todos los involucrados en los procedimientos diagnósticos y terapéuticos.
            </p>
            
            <p>
              La implementación rigurosa de los protocolos de mantenimiento preventivo, junto con 
              un programa exhaustivo de control de calidad, garantiza:
            </p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <span>La precisión diagnóstica y la fiabilidad de los resultados clínicos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <span>La protección radiológica óptima para pacientes y trabajadores</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <span>La vida útil prolongada de equipos de alto coste</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <span>El cumplimiento de la normativa vigente en radioprotección</span>
              </li>
            </ul>

            <p>
              La inversión en mantenimiento es una inversión en calidad asistencial, seguridad 
              y sostenibilidad del servicio de medicina nuclear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
