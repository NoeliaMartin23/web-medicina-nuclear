export function Introduction() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={`${baseUrl}images/icono_introduccion.png`}
              alt="Icono de Introducción"
              className="w-9 h-9 object-contain"
            />
          </div>
          <h2 className="text-gray-900 dark:text-white">Introducción</h2>
        </div>
        
        <div className="prose prose-blue max-w-none">
          <div className="mb-4">
            <p className="text-black dark:text-white">
              La <b>Medicina Nuclear</b> es una especialidad médica que emplea de forma controlada pequeñas e 
              inocuas dosis de <b>radiotrazadores</b> (radiofármacos) con fines diagnósticos y terapéuticos, 
              permitiendo la obtención de imágenes para evaluar las funciones corporales y metabólicas 
              de alta sensibilidad y precisión, para el tratamiento y el diagnóstico de enfermedades.
            </p>
            <img
              src={`${baseUrl}images/imagen_introduccion_parrafo1.jpg`}
              alt="Estudio de medicina nuclear"
              className="w-full md:w-80 lg:w-96 h-auto rounded-xl shadow-md mt-2 mx-auto block"
            />
          </div>
          <p className="text-black dark:text-white mb-4">
            La correcta operatividad de los equipos, junto con un mantenimiento sistemático y un control de calidad riguroso,
            resulta esencial para garantizar resultados fiables, seguros y reproducibles.
          </p>
          <p className="text-black dark:text-white">
            La <b>Medicina Nuclear Moderna</b> desempeña un papel fundamental en el desarrollo de la <u>medicina 
            personalizada o de precisión</u>, ya que permite seleccionar tratamientos específicos adaptados a las características
            individuales de cada paciente. Esta disciplina abarca la evaluación del riesgo, el diagnóstico, el seguimiento 
            terapéutico y la terapia con radionúclidos, con el objetivo de mejorar la calidad de vida y la salud pública.
          </p>
          <p className="text-black dark:text-white mt-4">
            Los <b>Radiotrazadores</b> son compuestos marcados con un radionúclido, formados por una molécula portadora unida a un 
            átomo radiactivo. Su <u>función</u> es permitir la obtención de información funcional o metabólica de los órganos, tejidos
            o sistemas biológicos a nivel molecular, lo que facilita el diagnóstico precoz y mejora el tratamiento y el pronóstico.
          </p>
          <p className="text-black dark:text-white mt-4">
            Estos compuestos pueden administrarse por vía <i>intravenosa, inhalatoria, oral o mediante inyección directa en un órgano</i>, 
            dependiendo del proceso patológico en estudio.
          </p>
          <p className="text-black dark:text-white mt-4">
            Los <b>Radiotrazadores</b> autorizados para uso clínico se denominan radiofármacos y deben cumplir estrictas normas de seguridad, 
            calidad y eficacia establecidas por organismos reguladores como la 
            <a href="https://www.ema.europa.eu/en/homepage" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><i> European Medicines Agency (EMA)</i></a> o el 
            <a href="https://www.csn.es/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><i> Consejo de Seguridad
            Nuclear (CSN)</i></a>. El especialista en Medicina Nuclear selecciona el radiofármaco más adecuado según la indicación clínica, lo 
            que determinará la realización de técnicas de imagen como la tomografía por emisión de positrones (PET) o la 
            tomografía por emisión de fotón único (SPECT).
          </p>
          <p className="text-black dark:text-white mt-4">
            El mantenimiento preventivo y correctivo de los equipos de imagen, junto con la gestión adecuada del material fungible y no fungible,
            constituyen pilares fundamentales para asegurar la continuidad asistencial, la seguridad operativa y la protección radiológica tanto
            del paciente como del personal sanitario.
          </p>
          <p className="text-black dark:text-white mt-4">
            En relación con lo anterior, este trabajo abarca el equipamiento de la sala, la gestión del material, los protocolos de control de 
            calidad, las actividades de mantenimiento, la protección radiológica y la documentación asociada, con el fin de garantizar un 
            funcionamiento seguro y eficiente de la instalación.
          </p>
          <p className="text-black dark:text-white mt-4">
            El proyecto tiene como finalidad describir de forma estructurada, técnica, sistemática y organizada los procedimientos de 
            mantenimiento, control de calidad y gestión documental en una sala de exploración de Medicina Nuclear, de acuerdo con las 
            recomendaciones de organismos internacionales como la 
            <a href="https://www.iaea.org/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><i> International Atomic Energy Agency (IAEA)</i></a>, la 
            <a href="https://www.eanm.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><i> European Association of Nuclear Medicine (EANM)</i></a> y la 
            <a href="https://www.icrp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><i> International Commission on Radiological Protection (ICRP)</i></a>.
          </p>
        </div>
      </div>
    </section>
  );
}
