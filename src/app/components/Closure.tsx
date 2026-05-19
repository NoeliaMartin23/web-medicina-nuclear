<<<<<<< HEAD
import type { SearchEntry } from '../searchTypes';
import cierreIcono from '../../assets/cierre-icono.svg';

export const closureSearchEntries: SearchEntry[] = [
  {
    id: 'search-cierre',
    sectionId: 'cierre',
    sectionLabel: 'Cierre',
    title: 'Cierre de la instalación',
    content:
      'El cierre de la instalación incluye verificación final de exploraciones enviadas al PACS, apagado y revisión de equipos, registro de incidencias, recogida de material y descontaminación de superficies para garantizar seguridad radiológica y preparación para la siguiente jornada.',
    resultType: 'section',
  },
];
=======
import { CircleCheck } from 'lucide-react';
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618

export function Closure() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-10 border border-green-200 dark:border-green-800 shadow-md">
          <div className="flex items-center gap-4 mb-6">
<<<<<<< HEAD
            <img
              src={cierreIcono}
              alt=""
              aria-hidden="true"
              className="w-16 h-16 object-contain flex-shrink-0"
            />
=======
            <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CircleCheck className="w-8 h-8 text-white" />
            </div>
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
            <h2 className="text-gray-900 dark:text-white">Cierre de la instalación</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
<<<<<<< HEAD
              Una vez finalizada la actividad clínica y comprobado que no quedan pacientes pendientes ni estudios abiertos en el sistema, 
              se procede al cierre de la instalación de Medicina Nuclear. Antes de abandonar la sala, el técnico debe verificar que todas 
              las exploraciones han sido enviadas correctamente al PACS y que el software de adquisición queda cerrado de forma adecuada.
            </p>
            
            <p>
              Los equipos deben permanecer apagados y los detectores desconectados, junto con la UPS y el resto de sistemas auxiliares. 
              Además, se revisa el estado general de los equipos para detectar posibles incidencias técnicas, anomalías o avisos registrados durante la jornada.
            </p>
            
            <p>
              Según el protocolo del servicio, también debe anotarse información relacionada con:
=======
              El mantenimiento adecuado en medicina nuclear no es solo una obligación reglamentaria, 
              sino un compromiso fundamental con la excelencia en la atención sanitaria y la seguridad 
              de todos los involucrados en los procedimientos diagnósticos y terapéuticos.
            </p>
            
            <p>
              La implementación rigurosa de los protocolos de mantenimiento preventivo, junto con 
              un programa exhaustivo de control de calidad, garantiza:
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
            </p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
<<<<<<< HEAD
                <div className="w-1.5 h-1.5 bg-[#3F5B6F] rounded-full mt-2 flex-shrink-0" />
                <span>Hora de cierre de la instalación.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#3F5B6F] rounded-full mt-2 flex-shrink-0" />
                <span>Profesional responsable del cierre.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#3F5B6F] rounded-full mt-2 flex-shrink-0" />
                <span>Estado operativo de los equipos.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#3F5B6F] rounded-full mt-2 flex-shrink-0" />
                <span>Incidencias detectadas durante el turno.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#3F5B6F] rounded-full mt-2 flex-shrink-0" />
                <span>Necesidades de mantenimiento o revisión técnica.</span>
=======
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
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
              </li>
            </ul>

            <p>
<<<<<<< HEAD
              Asimismo, el personal técnico debe recoger y ordenar el material utilizado durante la actividad diaria y realizar
              la descontaminación de los elementos empleados, incluyendo camillas, inmovilizadores, sujetacabezas, superficies 
              de trabajo y material auxiliar.
            </p>
            <p>
              El cierre correcto de la instalación garantiza la seguridad radiológica, la conservación adecuada de los equipos 
              y la preparación de la sala para la siguiente jornada asistencial.
=======
              La inversión en mantenimiento es una inversión en calidad asistencial, seguridad 
              y sostenibilidad del servicio de medicina nuclear.
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
