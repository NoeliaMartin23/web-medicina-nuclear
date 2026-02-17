import { FileCheck } from 'lucide-react';

export function ResumenConclusiones() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-800 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-900 dark:text-white">Resumen y Conclusiones</h2>
          </div>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-gray-900 dark:text-white mb-3">Resumen</h3>
              <p>
                Esta sección proporciona un resumen ejecutivo del programa de mantenimiento en medicina nuclear,
                destacando los aspectos más relevantes del equipamiento, protocolos y procedimientos establecidos.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white mb-3">Puntos Clave</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Mantenimiento preventivo programado según normativa vigente</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Protocolos de protección radiológica actualizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Control de calidad continuo en equipos críticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Documentación completa y trazabilidad de todas las actividades</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white mb-3">Conclusiones</h3>
              <p className="mb-3">
                La implementación de un programa integral de mantenimiento es fundamental para garantizar
                la operatividad y seguridad del servicio de medicina nuclear.
              </p>
              <p>
                El cumplimiento riguroso de los protocolos establecidos asegura la calidad asistencial,
                la protección radiológica del personal y pacientes, y el óptimo funcionamiento de los equipos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
