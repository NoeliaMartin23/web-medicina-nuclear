import { useEffect, useState, type ReactNode } from 'react';
import { Scan, Monitor, Activity, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import equipamientoIcono from '../../assets/equipamiento-icono.svg';

const baseUrl = import.meta.env.BASE_URL;

interface EquipmentItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: EquipmentDetail[];
}

interface EquipmentDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'title' | 'image';
  image?: string;
  alt?: string;
}

interface EquipmentProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface EquipmentButtonProps {
  item: EquipmentItem;
  onOpen: (id: string) => void;
}

const paragraph = (content: ReactNode, plainText?: string): EquipmentDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const title = (content: string, image?: string): EquipmentDetail => ({
  content,
  plainText: content,
  kind: 'title',
  image,
});

const detailImage = (image: string, alt: string): EquipmentDetail => ({
  content: null,
  plainText: alt,
  kind: 'image',
  image,
  alt,
});

const acquisitionEquipment: EquipmentItem[] = [
  {
    id: 'equipamiento-sanitario',
    title: 'Sanitario',
    summary: '',
    icon: <Scan className="w-5 h-5 text-blue-600" />,
    image: `${baseUrl}images/imagen_material_fungible.png`,
    details: [
      paragraph(
        <>
          El <strong>equipamiento sanitario</strong> en un servicio de Medicina Nuclear comprende la infraestructura física y
          de los sistemas estructurales destinados a minimizar el riesgo de contaminación radiactiva tras la administración
          de radiofármacos. Estas áreas se consideran espacios controlados (áreas &quot;calientes&quot;), especialmente en
          procedimientos terapéuticos con radionúclidos de vida media significativa, y deben diseñarse conforme al principio
          ALARA, garantizando la seguridad radiológica, la higiene estricta y la facilidad de descontaminación.
        </>,
        'El equipamiento sanitario en un servicio de Medicina Nuclear comprende la infraestructura física y de los sistemas estructurales destinados a minimizar el riesgo de contaminación radiactiva tras la administración de radiofármacos. Estas áreas se consideran espacios controlados (áreas "calientes"), especialmente en procedimientos terapéuticos con radionúclidos de vida media significativa, y deben diseñarse conforme al principio ALARA, garantizando la seguridad radiológica, la higiene estricta y la facilidad de descontaminación.'
      ),
      paragraph(
        <>
          El <u><strong>objetivo principal</strong></u> del equipamiento sanitario es <strong>evitar el contacto innecesario de manos</strong>{' '}
          con superficies contaminadas, <strong>reducir al mínimo la contaminación por salpicaduras</strong> y <strong>asegurar una
          gestión controlada, segura y adecuada</strong> de los residuos radiactivos.
        </>,
        'El objetivo principal del equipamiento sanitario es evitar el contacto innecesario de manos con superficies contaminadas, reducir al mínimo la contaminación por salpicaduras y asegurar una gestión controlada, segura y adecuada de los residuos radiactivos.'
      ),
      paragraph(
        <>
          El equipamiento sanitario de una sala de Medicina Nuclear incluye además los elementos estructurales y de apoyo
          clínico necesario para garantizar la seguridad del paciente y del personal durante la realización de las
          exploraciones. Entre estos sistemas se encuentran los <strong>dispositivos de emergencia de accionamiento manual</strong>,
          conocidos como <em>“setas de emergencia”</em>, situados tanto en el equipo de exploración como en diferentes puntos de
          la sala, permitiendo la interrupción inmediata del procedimiento ante cualquier situación de riesgo.
        </>,
        'El equipamiento sanitario de una sala de Medicina Nuclear incluye además los elementos estructurales y de apoyo clínico necesario para garantizar la seguridad del paciente y del personal durante la realización de las exploraciones. Entre estos sistemas se encuentran los dispositivos de emergencia de accionamiento manual, conocidos como “setas de emergencia”, situados tanto en el equipo de exploración como en diferentes puntos de la sala, permitiendo la interrupción inmediata del procedimiento ante cualquier situación de riesgo.'
      ),
      paragraph(
        <>
          Asimismo, la sala debe disponer de <strong>tomas centrales de oxígeno</strong> y vacío instaladas en la pared,
          destinadas a la atención rápida del paciente en caso de necesidad clínica.
        </>,
        'Asimismo, la sala debe disponer de tomas centrales de oxígeno y vacío instaladas en la pared, destinadas a la atención rápida del paciente en caso de necesidad clínica.'
      ),
      paragraph('También forman parte de este equipamiento las camillas de traslado, fijaciones, máscaras y planos inclinados empleados para el posicionamiento e inmovilización del paciente, especialmente en procedimientos combinados con planificación radioterápica. Del mismo modo, los armarios, bancadas y sistemas de almacenamiento permiten conservar y organizar correctamente el material clínico necesario para el desarrollo de las exploraciones.'),
      title('1. Elementos Sanitarios y Fontanería'),
      paragraph(
        <>
          En cuanto a su estructura, los servicios destinados a pacientes inyectados deben presentar un diseño funcional,
          resistente y fácilmente lavable. Se emplean <strong>inodoros suspendidos</strong> que facilitan la limpieza del suelo y
          reducen la acumulación de contaminación. En determinados procedimientos terapéuticos pueden instalarse sistemas de
          separación de residuos, mediante inodoros especializados que permiten dirigir la orina hacia tanques de decaimiento
          radiactivo mientras las heces siguen el circuito convencional. Asimismo, los inodoros deben estar configurados con
          sistemas de descarga dobles tras su uso, con el fin de minimizar la permanencia del material radiactivo en el sistema
          de evacuación.
        </>,
        'En cuanto a su estructura, los servicios destinados a pacientes inyectados deben presentar un diseño funcional, resistente y fácilmente lavable. Se emplean inodoros suspendidos que facilitan la limpieza del suelo y reducen la acumulación de contaminación. En determinados procedimientos terapéuticos pueden instalarse sistemas de separación de residuos, mediante inodoros especializados que permiten dirigir la orina hacia tanques de decaimiento radiactivo mientras las heces siguen el circuito convencional. Asimismo, los inodoros deben estar configurados con sistemas de descarga dobles tras su uso, con el fin de minimizar la permanencia del material radiactivo en el sistema de evacuación.'
      ),
      paragraph(
        <>
          La <strong>grifería</strong> debe ser de accionamiento automático o mediante pedal o codo, evitando el contacto manual
          y disminuyendo el riesgo de contaminación cruzada. Las superficies deben ser continuas, no porosas y descontaminables,
          generalmente fabricadas en materiales cerámicos especiales o acero inoxidable sanitario, facilitando así la limpieza y
          descontaminación.
        </>,
        'La grifería debe ser de accionamiento automático o mediante pedal o codo, evitando el contacto manual y disminuyendo el riesgo de contaminación cruzada. Las superficies deben ser continuas, no porosas y descontaminables, generalmente fabricadas en materiales cerámicos especiales o acero inoxidable sanitario, facilitando así la limpieza y descontaminación.'
      ),
      title('2. Blindaje y Protección Radiológica'),
      paragraph(
        <>
          En cuanto a la protección estructural, puede requerirse <strong>blindaje plomado o de hormigón</strong> en paredes,
          suelos o zonas adyacentes, dependiendo del estudio radiológico previo y del tipo de radionúclido empleado,
          especialmente en terapias con yodo-131. En determinadas situaciones, el propio sistema de evacuación o el tanque del
          inodoro pueden disponer de blindaje adicional para reducir la exposición radiológica.
        </>,
        'En cuanto a la protección estructural, puede requerirse blindaje plomado o de hormigón en paredes, suelos o zonas adyacentes, dependiendo del estudio radiológico previo y del tipo de radionúclido empleado, especialmente en terapias con yodo-131. En determinadas situaciones, el propio sistema de evacuación o el tanque del inodoro pueden disponer de blindaje adicional para reducir la exposición radiológica.'
      ),
      paragraph('Estas medidas de protección deben ajustarse a los criterios de seguridad radiológica establecidos por el Consejo de Seguridad Nuclear y a la normativa vigente sobre instalaciones radiactivas.'),
      title('3. Gestión de Contaminación y Seguridad'),
      paragraph(
        <>
          La <strong>señalización reglamentaria</strong> es obligatoria, incluyendo la indicación de “Área Controlada” y el
          símbolo internacional de radiación. Asimismo, debe disponerse de material básico de descontaminación, como jabón
          neutro, papel desechable y elementos absorbentes, así como cubiertas desechables con respaldo de plástico destinadas a
          proteger superficies susceptibles de contaminación radiactiva.
        </>,
        'La señalización reglamentaria es obligatoria, incluyendo la indicación de “Área Controlada” y el símbolo internacional de radiación. Asimismo, debe disponerse de material básico de descontaminación, como jabón neutro, papel desechable y elementos absorbentes, así como cubiertas desechables con respaldo de plástico destinadas a proteger superficies susceptibles de contaminación radiactiva.'
      ),
      paragraph(
        <>
          El <strong>sistema de ventilación</strong> debe ser forzado e independiente, garantizando una adecuada renovación del
          aire y evitando la acumulación de posibles gases radiactivos en el interior del sanitario. Los equipos portátiles de
          monitorización de contaminación pueden encontrarse en las proximidades para la verificación radiológica cuando sea
          necesario, siguiendo las recomendaciones generales de control radiológico ambiental.
        </>,
        'El sistema de ventilación debe ser forzado e independiente, garantizando una adecuada renovación del aire y evitando la acumulación de posibles gases radiactivos en el interior del sanitario. Los equipos portátiles de monitorización de contaminación pueden encontrarse en las proximidades para la verificación radiológica cuando sea necesario, siguiendo las recomendaciones generales de control radiológico ambiental.'
      ),
      title('4. Sistema de Desecho (Tanques de Decaimiento)'),
      paragraph(
        <>
          En procedimientos terapéuticos, especialmente con radioyodo (I-131), el <strong>sistema de evacuación</strong> puede
          conectarse a <strong>tanques de decaimiento radiactivo</strong>. Estos depósitos permiten almacenar temporalmente los
          residuos líquidos hasta que la actividad disminuya a niveles permitidos por la normativa vigente antes de su vertido al
          alcantarillado general.
        </>,
        'En procedimientos terapéuticos, especialmente con radioyodo (I-131), el sistema de evacuación puede conectarse a tanques de decaimiento radiactivo. Estos depósitos permiten almacenar temporalmente los residuos líquidos hasta que la actividad disminuya a niveles permitidos por la normativa vigente antes de su vertido al alcantarillado general.'
      ),
      paragraph('En algunos casos, puede contemplarse la conducción diferenciada de efluentes según el protocolo del centro y las recomendaciones de seguridad aplicables a instalaciones de Medicina Nuclear.'),
      detailImage(
        `${baseUrl}images/Sanitario1.png`,
        'Equipamiento sanitario y de protección radiológica'
      )
    ]
  },
  {
    id: 'equipamiento-electromedico',
    title: 'Electromédico',
    summary: '',
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    image: `${baseUrl}images/FotoPortadaElectromedico.jpg`,
    details: [
      paragraph(
        <>
          El <strong>equipamiento electromédico</strong> en un servicio de Medicina Nuclear comprende el conjunto de dispositivos tecnológicos utilizados para la adquisición de imágenes diagnósticas, el control funcional del paciente y la manipulación segura de radiofármacos. Este equipamiento está orientado a la obtención de imágenes funcionales y metabólicas mediante radiación ionizante, así como al cumplimiento de las medidas de protección radiológica necesarias durante el desarrollo de las exploraciones.
        </>,
        'El equipamiento electromédico en un servicio de Medicina Nuclear comprende el conjunto de dispositivos tecnológicos utilizados para la adquisición de imágenes diagnósticas, el control funcional del paciente y la manipulación segura de radiofármacos. Este equipamiento está orientado a la obtención de imágenes funcionales y metabólicas mediante radiación ionizante, así como al cumplimiento de las medidas de protección radiológica necesarias durante el desarrollo de las exploraciones.'
      ),
      paragraph(
        <>
          La organización de este equipamiento se divide principalmente en áreas de <strong>imagenología, radiofarmacia o “cámara caliente” y protección radiológica</strong>. Asimismo, la infraestructura debe contar con salas de espera diferenciadas para pacientes inyectados (“calientes”) y no inyectados (“fríos”), así como &quot;hot toilets&quot; (baños blindados) para pacientes tratados con radionúclidos, garantizando la correcta separación de circuitos asistenciales.
        </>,
        'La organización de este equipamiento se divide principalmente en áreas de imagenología, radiofarmacia o “cámara caliente” y protección radiológica. Asimismo, la infraestructura debe contar con salas de espera diferenciadas para pacientes inyectados (“calientes”) y no inyectados (“fríos”), así como "hot toilets" (baños blindados) para pacientes tratados con radionúclidos, garantizando la correcta separación de circuitos asistenciales.'
      ),
      title(
        '1. Equipamiento Principal de Imagenología (Sala de Exploración)'
      ),
      paragraph(
        <>
          El equipo fundamental en Medicina Nuclear es la <strong>gammacámara convencional o Anger Camera</strong>, capaz de detectar la radiación gamma emitida por el radiofármaco administrado al paciente. Este sistema está compuesto por <u>colimadores, cristales centelleadores y tubos fotomultiplicadores</u>, elementos esenciales para dirigir la radiación y transformar la señal detectada en imágenes diagnósticas de calidad.
        </>,
        'El equipo fundamental en Medicina Nuclear es la gammacámara convencional o Anger Camera, capaz de detectar la radiación gamma emitida por el radiofármaco administrado al paciente. Este sistema está compuesto por colimadores, cristales centelleadores y tubos fotomultiplicadores, elementos esenciales para dirigir la radiación y transformar la señal detectada en imágenes diagnósticas de calidad.'
      ),
      paragraph(
        <>
          Los sistemas <strong>SPECT</strong> (Tomografía Computarizada por Emisión de Fotón Único) presentan una evolución de la gammacámara convencional, permitiendo la adquisición de imágenes tridimensionales mediante rotación alrededor del paciente y reconstrucción tomográfica. Por otro lado, los equipos <strong>PET/TC</strong> combinan la tomografía por emisión de positrones con tomografía computarizada, integrando información funcional y anatómica en una única exploración.
        </>,
        'Los sistemas SPECT (Tomografía Computarizada por Emisión de Fotón Único) presentan una evolución de la gammacámara convencional, permitiendo la adquisición de imágenes tridimensionales mediante rotación alrededor del paciente y reconstrucción tomográfica. Por otro lado, los equipos PET/TC combinan la tomografía por emisión de positrones con tomografía computarizada, integrando información funcional y anatómica en una única exploración.'
      ),
      paragraph(
        <>
          Entre el <strong>equipamiento complementario</strong> destacan las <strong>sondas gamma portátiles</strong> utilizadas en cirugía radioguiada, permitiendo la localización intraoperatoria de tejido marcado radiactivamente, así como los sistemas de captación tiroidea empleados en estudios funcionales específicos de la glándula tiroides.
        </>,
        'Entre el equipamiento complementario destacan las sondas gamma portátiles utilizadas en cirugía radioguiada, permitiendo la localización intraoperatoria de tejido marcado radiactivamente, así como los sistemas de captación tiroidea empleados en estudios funcionales específicos de la glándula tiroides.'
      ),
      paragraph(
        <>
          En <strong>estudios cardiológicos</strong> sincronizados (gated), se emplean <strong>electrocardiógrafos</strong> que registran la actividad eléctrica cardíaca y permiten sincronizar la adquisición de imágenes con el ciclo cardíaco. Asimismo, para estudios pulmonares de ventilación se utilizan sistemas específicos como <strong>Technegas</strong>, capaces de generar aerosoles radiactivos inhalables para la evaluación funcional respiratoria.
        </>,
        'En estudios cardiológicos sincronizados (gated), se emplean electrocardiógrafos que registran la actividad eléctrica cardíaca y permiten sincronizar la adquisición de imágenes con el ciclo cardíaco. Asimismo, para estudios pulmonares de ventilación se utilizan sistemas específicos como Technegas, capaces de generar aerosoles radiactivos inhalables para la evaluación funcional respiratoria.'
      ),
      detailImage(
        `${baseUrl}images/Electromedico1.jpg`,
        'Equipamiento principal de imagenología'
      ),
      title('2. Equipamiento de Radiofarmacia y Laboratorio ("Cámara Caliente")'),
      paragraph(
        <>
          La <strong>radiofarmacia o “cámara caliente”</strong> es el área destinada a la preparación, manipulación y control de calidad de radiofármacos. Uno de los equipos fundamentales es el <strong>calibrador de dosis o activímetro</strong>, utilizado para medir la actividad radiactiva antes de la administración al paciente.
        </>,
        'La radiofarmacia o “cámara caliente” es el área destinada a la preparación, manipulación y control de calidad de radiofármacos. Uno de los equipos fundamentales es el calibrador de dosis o activímetro, utilizado para medir la actividad radiactiva antes de la administración al paciente.'
      ),
      paragraph(
        <>
          Asimismo, se emplean <strong>cabinas de seguridad biológica y cabinas blindadas o Hot Cells</strong>, diseñadas para manipular radionúclidos de forma segura y reducir la exposición ocupacional. Los <strong>sistemas automáticos de dispensación</strong> permiten preparar dosis de manera más precisa y eficiente, minimizando el contacto directo con el material radiactivo.
        </>,
        'Asimismo, se emplean cabinas de seguridad biológica y cabinas blindadas o Hot Cells, diseñadas para manipular radionúclidos de forma segura y reducir la exposición ocupacional. Los sistemas automáticos de dispensación permiten preparar dosis de manera más precisa y eficiente, minimizando el contacto directo con el material radiactivo.'
      ),
      paragraph(
        <>
          El control de calidad radiofarmacéutico se realiza mediante técnicas como la <strong>cromatografía en capa fina</strong>, utilizada para verificar la pureza radioquímica de los radiofármacos preparados. Además, la unidad debe disponer de sistemas de almacenamiento específicos, incluyendo <strong>neveras y congeladores blindados</strong> destinados a la conservación segura de radioisótopos y reactivos.
        </>,
        'El control de calidad radiofarmacéutico se realiza mediante técnicas como la cromatografía en capa fina, utilizada para verificar la pureza radioquímica de los radiofármacos preparados. Además, la unidad debe disponer de sistemas de almacenamiento específicos, incluyendo neveras y congeladores blindados destinados a la conservación segura de radioisótopos y reactivos.'
      ),
      title('3. Equipamiento de Protección Radiológica y Seguridad'),
      paragraph(
        <>
          El <strong>equipamiento de protección radiológica</strong> tiene como finalidad reducir la exposición del personal y garantizar un entorno de trabajo seguro. Entre estos elementos se encuentran los <strong>biombos plomados y cristales de vidrio plomado</strong>, utilizados como barreras físicas frente a la radiación ionizante.
        </>,
        'El equipamiento de protección radiológica tiene como finalidad reducir la exposición del personal y garantizar un entorno de trabajo seguro. Entre estos elementos se encuentran los biombos plomados y cristales de vidrio plomado, utilizados como barreras físicas frente a la radiación ionizante.'
      ),
      paragraph(
        <>
          También se utilizan <strong>monitores de área y detectores de contaminación superficial tipo Geiger-Müller</strong> para el control radiológico ambiental, así como monitores de mano-pie-ropa destinados a verificar la ausencia de contaminación en el personal antes de abandonar las zonas controladas.
        </>,
        'También se utilizan monitores de área y detectores de contaminación superficial tipo Geiger-Müller para el control radiológico ambiental, así como monitores de mano-pie-ropa destinados a verificar la ausencia de contaminación en el personal antes de abandonar las zonas controladas.'
      ),
      paragraph(
        <>
          Los <strong>contenedores blindados</strong> permiten almacenar temporalmente residuos radiactivos de vida media corta, mientras que las telepinzas facilitan la manipulación a distancia de viales y materiales radiactivos, reduciendo la dosis recibida por el trabajador.
        </>,
        'Los contenedores blindados permiten almacenar temporalmente residuos radiactivos de vida media corta, mientras que las telepinzas facilitan la manipulación a distancia de viales y materiales radiactivos, reduciendo la dosis recibida por el trabajador.'
      ),
      paragraph(
        <>
          En las proximidades de áreas controladas pueden encontrarse además <strong>equipos portátiles de medición y detectores de superficie</strong> para verificar posibles contaminaciones radiológicas.
        </>,
        'En las proximidades de áreas controladas pueden encontrarse además equipos portátiles de medición y detectores de superficie para verificar posibles contaminaciones radiológicas.'
      ),
      title(
        '4. Equipamiento de Apoyo y Paciente'
      ),
      paragraph(
        <>
          El servicio debe disponer de <strong>camillas de traslado y sillones de tratamiento</strong>, frecuentemente ajustables eléctricamente para mejorar la comodidad y estabilidad del paciente durante la exploración. Asimismo, en estudios de esfuerzo o exploraciones cardiológicas se emplean monitores de signos vitales para controlar constantes fisiológicas durante el procedimiento.
        </>,
        'El servicio debe disponer de camillas de traslado y sillones de tratamiento, frecuentemente ajustables eléctricamente para mejorar la comodidad y estabilidad del paciente durante la exploración. Asimismo, en estudios de esfuerzo o exploraciones cardiológicas se emplean monitores de signos vitales para controlar constantes fisiológicas durante el procedimiento.'
      ),
      paragraph(
        <>
          En salas donde se administran contrastes intravenosos, es necesario contar con <strong>infusores automáticos</strong> que permitan una administración precisa y controlada.
        </>,
        'En salas donde se administran contrastes intravenosos, es necesario contar con infusores automáticos que permitan una administración precisa y controlada.'
      ),
      paragraph(
        <>
          Finalmente, la unidad debe disponer del <strong>material necesario para la realización periódica de controles de calidad técnicos</strong>, incluyendo fuentes radiactivas, fantomas y dispositivos de calibración. El personal técnico debe conocer los protocolos de verificación, las fechas de realización y las necesidades de mantenimiento o reposición del equipamiento utilizado.
        </>,
        'Finalmente, la unidad debe disponer del material necesario para la realización periódica de controles de calidad técnicos, incluyendo fuentes radiactivas, fantomas y dispositivos de calibración. El personal técnico debe conocer los protocolos de verificación, las fechas de realización y las necesidades de mantenimiento o reposición del equipamiento utilizado.'
      ),
      paragraph(
        'De acuerdo con los criterios de dotación de medios materiales establecidos por servicios públicos de salud autonómicos, un servicio de Medicina Nuclear debe disponer de equipamiento mínimo que garantice la adquisición diagnóstica, la manipulación segura de radiofármacos y el cumplimiento de la normativa de protección radiológica. Dichos requisitos incluyen, al menos, una gammacámara o sistema PET, activímetro calibrado, cabina blindada de preparación, sistemas de almacenamiento seguro y dispositivos de control de contaminación.'
      ),
      detailImage(
        `${baseUrl}images/Electromedico2.jpg`,
        'Equipamiento de apoyo y paciente'
      ),
    ]
  },
  {
    id: 'equipamiento-informatico',
    title: 'Informático',
    summary: '',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    image: `${baseUrl}images/FotoPortadaInformatico.jpg`,
    details: [
      paragraph(
        'El equipamiento informático en un servicio de Medicina Nuclear constituye una herramienta fundamental para la adquisición, procesamiento, visualización, almacenamiento y análisis de imágenes diagnósticas tanto funcionales como anatómicas obtenidas mediante sistemas SPECT y PET, así como para la gestión de datos de pacientes y radiofármacos. Los avances en computación han contribuido significativamente al desarrollo de esta especialidad, mejorando la velocidad de cálculo, el análisis de datos y la calidad de las reconstrucciones tridimensionales.'
      ),
      paragraph(
        'La infraestructura informática debe garantizar la trazabilidad completa del radiofármaco administrado, el almacenamiento seguro de imágenes diagnósticas y la integración con sistemas hospitalarios (RIS/PACS). Asimismo, debe cumplir con la normativa vigente en materia de protección de datos sanitarios y asegurar la conservación, confidencialidad y accesibilidad controlada de la información clínica.'
      ),
      paragraph(
        'A diferencia de otras áreas diagnósticas, la Medicina Nuclear requiere hardware y software altamente especializados, debido a la necesidad de procesar grandes volúmenes de datos volumétricos generados en estudios SPECT y PET, así como gestionar información relacionada con radionúclidos y radiofármacos.'
      ),
      title('1. Hardware Informático y Visualización'),
      paragraph(
        <>
          Las <strong>estaciones de trabajo</strong> de alto rendimiento permiten gestionar grandes volúmenes de información clínica e imágenes médicas, facilitando la reconstrucción tridimensional, el tratamiento digital y el análisis cuantitativo de los estudios realizados. Estos equipos disponen de procesadores avanzados, amplia capacidad de memoria RAM y sistemas de almacenamiento de alta velocidad mediante unidades SSD.
        </>,
        'Las estaciones de trabajo de alto rendimiento permiten gestionar grandes volúmenes de información clínica e imágenes médicas, facilitando la reconstrucción tridimensional, el tratamiento digital y el análisis cuantitativo de los estudios realizados. Estos equipos disponen de procesadores avanzados, amplia capacidad de memoria RAM y sistemas de almacenamiento de alta velocidad mediante unidades SSD.'
      ),
      paragraph(
        <>
          Los <strong>monitores médicos</strong> de alta resolución permiten una visualización precisa de imágenes funcionales y anatómicas fusionadas, mientras que las <strong>unidades de procesamiento gráfico</strong> optimizan el renderizado tridimensional y el procesamiento avanzado de imágenes. Asimismo, las <strong>conexiones de alta velocidad</strong> favorecen la integración con sistemas RIS/PACS y la visualización remota de estudios diagnósticos.
        </>,
        'Los monitores médicos de alta resolución permiten una visualización precisa de imágenes funcionales y anatómicas fusionadas, mientras que las unidades de procesamiento gráfico optimizan el renderizado tridimensional y el procesamiento avanzado de imágenes. Asimismo, las conexiones de alta velocidad favorecen la integración con sistemas RIS/PACS y la visualización remota de estudios diagnósticos.'
      ),
      title('2. Software de Medicina Nuclear'),
      paragraph(
        <>
          El <strong>software especializado</strong> permite la adquisición, reconstrucción y procesamiento de datos procedentes de gammacámaras y equipos PET. Estos sistemas gestionan los datos brutos y aplican algoritmos avanzados de corrección y reconstrucción fundamentales en la práctica clínica actual.
        </>,
        'El software especializado permite la adquisición, reconstrucción y procesamiento de datos procedentes de gammacámaras y equipos PET. Estos sistemas gestionan los datos brutos y aplican algoritmos avanzados de corrección y reconstrucción fundamentales en la práctica clínica actual.'
      ),
      paragraph(
        <>
          Los <strong>visores DICOM</strong> avanzados facilitan el registro y la fusión de imágenes funcionales y anatómicas, mejorando la precisión diagnóstica. Además, existen aplicaciones clínicas específicas para áreas como cardiología, neurología, oncología o urología.
        </>,
        'Los visores DICOM avanzados facilitan el registro y la fusión de imágenes funcionales y anatómicas, mejorando la precisión diagnóstica. Además, existen aplicaciones clínicas específicas para áreas como cardiología, neurología, oncología o urología.'
      ),
      paragraph(
        <>
          La <strong>gestión informática de radiofármacos y dosimetría</strong> permite controlar el inventario, registrar las dosis administradas y garantizar la trazabilidad de radionúclidos como el 99mTc o los utilizados en PET. Del mismo modo, los <strong>sistemas RIS/PACS</strong> permiten el almacenamiento, archivo y distribución segura de imágenes médicas, integrándose con otros sistemas hospitalarios.
        </>,
        'La gestión informática de radiofármacos y dosimetría permite controlar el inventario, registrar las dosis administradas y garantizar la trazabilidad de radionúclidos como el 99mTc o los utilizados en PET. Del mismo modo, los sistemas RIS/PACS permiten el almacenamiento, archivo y distribución segura de imágenes médicas, integrándose con otros sistemas hospitalarios.'
      ),
      title('3. Equipamiento de Conexión e Interfaz'),
      paragraph(
        <>
          Los <strong>sistemas de adquisición de datos</strong> convierten la señal detectada por la gammacámara en información digital procesable. La infraestructura de red, mediante conexiones LAN seguras y de alta velocidad, permite transmitir imágenes desde los equipos de exploración hacia estaciones de trabajo y servidores de almacenamiento.
        </>,
        'Los sistemas de adquisición de datos convierten la señal detectada por la gammacámara en información digital procesable. La infraestructura de red, mediante conexiones LAN seguras y de alta velocidad, permite transmitir imágenes desde los equipos de exploración hacia estaciones de trabajo y servidores de almacenamiento.'
      ),
      paragraph(
        <>
          El <strong>procesamiento digital de imágenes</strong> mejora la interacción del usuario con el sistema, optimiza la adquisición de datos y facilita el análisis avanzado de los estudios realizados.
        </>,
        'El procesamiento digital de imágenes mejora la interacción del usuario con el sistema, optimiza la adquisición de datos y facilita el análisis avanzado de los estudios realizados.'
      ),
      title('4. Entorno de la Sala'),
      paragraph(
        <>
          En aquellas áreas donde la sala informática se encuentra próxima a zonas de exploración o inyección, puede requerirse <strong>protección estructural</strong> adicional frente a la radiación. Asimismo, el servicio debe disponer de software específico para la realización de <strong>controles de calidad diarios y periódicos</strong> de gammacámaras, PET y activímetros, garantizando la estabilidad y correcto funcionamiento de los equipos.
        </>,
        'En aquellas áreas donde la sala informática se encuentra próxima a zonas de exploración o inyección, puede requerirse protección estructural adicional frente a la radiación. Asimismo, el servicio debe disponer de software específico para la realización de controles de calidad diarios y periódicos de gammacámaras, PET y activímetros, garantizando la estabilidad y correcto funcionamiento de los equipos.'
      ),
      paragraph(
        'Este conjunto de recursos tecnológicos permite la correcta realización, reconstrucción y análisis de tomografías computarizadas por emisión de fotón único (SPECT) y tomografía por emisión de positrones (PET), constituyendo una parte esencial del funcionamiento de un servicio moderno de Medicina Nuclear.'
      ),
      detailImage(
        `${baseUrl}images/Informatico1.jpg`,
        'Equipamiento informático y de visualización'
      )
    ]
  }
];

export const equipmentSearchEntries = acquisitionEquipment.map((equipment) => ({
  id: `search-${equipment.id}`,
  sectionId: 'equipamiento' as const,
  subSectionId: equipment.id,
  sectionLabel: 'Equipamiento',
  title: equipment.title,
  content: `${equipment.summary} ${equipment.details.map((detail) => detail.plainText).join(' ')}`,
  resultType: 'subsection' as const,
}));

function EquipmentButton({ item, onOpen }: EquipmentButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className="w-full text-left bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <h3 className="text-gray-900 dark:text-white text-xl">{item.title}</h3>
        </div>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{item.summary}</p>
      </div>
    </button>
  );
}

export function Equipment({ selectedSubSectionId = null, onBackToOverview }: EquipmentProps) {
  const [activeEquipmentId, setActiveEquipmentId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = acquisitionEquipment.some((item) => item.id === selectedSubSectionId);
    setActiveEquipmentId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedEquipment = acquisitionEquipment.find((item) => item.id === activeEquipmentId) ?? null;

  const handleBack = () => {
    setActiveEquipmentId(null);
    onBackToOverview?.();
  };

  if (selectedEquipment) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a equipamiento
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedEquipment.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedEquipment.image}
              alt={selectedEquipment.title}
              className="w-full max-h-[420px] object-cover"
            />
          </div>

          <div className="space-y-4">
            {selectedEquipment.details.map((detail, index) => {
              if (detail.kind === 'image') {
                return (
                  <div
                    key={index}
                    className="mt-4 mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  >
                    <ImageWithFallback
                      src={detail.image ?? ''}
                      alt={detail.alt ?? detail.plainText}
                      className="w-full max-h-[360px] object-contain"
                    />
                  </div>
                );
              }

              return (
                <p
                  key={index}
                  className={
                    detail.kind === 'title'
                      ? 'pl-3 font-bold text-black dark:text-white leading-relaxed'
                      : 'text-black dark:text-white leading-relaxed'
                  }
                >
                  {detail.content}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={equipamientoIcono}
              alt=""
              aria-hidden="true"
              className="w-16 h-16 object-contain shrink-0"
            />
            <h2 className="text-gray-900 dark:text-white">Equipamiento</h2>
          </div>
          <div className="space-y-5">
            <p className="text-black dark:text-white leading-relaxed">
              El <strong>equipamiento</strong> de una sala de medicina nuclear combina equipos de imagen funcional de alta tecnología, como gammacámaras (SPECT) y tomógrafos (PET/TC), con elementos de radioprotección estricta para facilitar la ejecución de las técnicas por parte del técnico y favorecer el desarrollo seguro de sus funciones. Este equipamiento debe optimizar las exposiciones a radiaciones ionizantes del personal y de los pacientes, además de hacer la estancia de los pacientes en la unidad lo más segura y confortable posible. Además, incluye activímetros para medir radiofármacos, inyectores, blindajes plomados, sistemas de ventilación y software de reconstrucción.
            </p>
            <p className="text-black dark:text-white leading-relaxed">
              La infraestructura debe contar con pavimentos especiales, sistemas de monitorización ambiental de radiación y accesos directos para pacientes, asegurando que las zonas adyacentes no reciban radiación innecesaria.
            </p>
            <p className="text-black dark:text-white leading-relaxed">
              Dicho equipamiento se organiza en tres categorías principales: <u>equipamiento sanitario</u>, <u>equipamiento electromédico</u> y <u>equipamiento informático</u>, cada una con funciones específicas e interrelacionadas dentro del circuito asistencial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acquisitionEquipment.map((equipment) => (
            <EquipmentButton
              key={equipment.id}
              item={equipment}
              onOpen={setActiveEquipmentId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
