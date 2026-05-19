import { useEffect, useState, type ReactNode } from 'react';
import { Package, Shield, Settings, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import materialIcono from '../../assets/material-icono.svg';
import type { SearchEntry } from '../searchTypes';

const baseUrl = import.meta.env.BASE_URL;

interface MaterialItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: MaterialDetail[];
}

interface MaterialDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'list';
}

interface MaterialProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface MaterialButtonProps {
  item: MaterialItem;
  onOpen: (id: string) => void;
}

const paragraph = (content: ReactNode, plainText?: string): MaterialDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const bulletList = (items: ReactNode[], plainTextItems: string[]): MaterialDetail => ({
  content: (
    <ul className="list-disc pl-8 space-y-3 text-black dark:text-white leading-relaxed">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ),
  plainText: plainTextItems.join(' '),
  kind: 'list',
});

function MaterialButton({ item, onOpen }: MaterialButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(item.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item.id)}
      onKeyDown={handleKeyDown}
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <div className="h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const materials: MaterialItem[] = [
  {
    id: 'material-fungible',
    title: 'Material fungible',
    summary: 'Elementos de consumo habitual para la preparación y administración segura, con control continuo de stock, caducidades y trazabilidad.',
    icon: <Package className="w-5 h-5 text-green-600" />,
    image: `${baseUrl}images/imagen_material_fungible.png`,
    details: [
      paragraph(
        <>
          El <strong>material fungible</strong> sanitario es aquel que está <u>diseñado para ser desechado tras un único uso</u>. Son materiales que no se reutilizan, ya que podrían comprometer la seguridad y la asepsia en los procedimientos médicos. Su utilización permite reducir el riesgo de contaminación cruzada y prevenir la transmisión de microorganismos entre pacientes y profesionales sanitarios. Además, el material fungible garantiza un entorno limpio, seguro y controlado, especialmente en procedimientos invasivos y en áreas hospitalarias donde la esterilidad resulta imprescindible.
        </>,
        'El material fungible sanitario es aquel que está diseñado para ser desechado tras un único uso. Son materiales que no se reutilizan, ya que podrían comprometer la seguridad y la asepsia en los procedimientos médicos. Su utilización permite reducir el riesgo de contaminación cruzada y prevenir la transmisión de microorganismos entre pacientes y profesionales sanitarios. Además, el material fungible garantiza un entorno limpio, seguro y controlado, especialmente en procedimientos invasivos y en áreas hospitalarias donde la esterilidad resulta imprescindible.'
      ),
      paragraph(
        'Aunque el material fungible implica un gasto continuo, evita la necesidad de realizar procesos de limpieza y esterilización, optimizando el tiempo de trabajo y favoreciendo una gestión más eficiente de los recursos hospitalarios. Estos productos suelen fabricarse con materiales resistentes y estériles, como plástico, papel, látex o derivados sintéticos, que aseguran su funcionalidad y seguridad durante el uso clínico.'
      ),
      paragraph(
        <>
          En Medicina Nuclear, el material fungible cumple la función principal de <strong>prevenir infecciones nosocomiales</strong> (infecciones obtenidas en hospitales) y <strong>garantizar la seguridad tanto del paciente como del personal sanitario</strong>. Además, <strong>asegura un entorno limpio y controlado, reduciendo el riesgo de transmisión de patógenos</strong>.
        </>,
        'En Medicina Nuclear, el material fungible cumple la función principal de prevenir infecciones nosocomiales (infecciones obtenidas en hospitales) y garantizar la seguridad tanto del paciente como del personal sanitario. Además, asegura un entorno limpio y controlado, reduciendo el riesgo de transmisión de patógenos.'
      ),
      paragraph('Su uso abarca desde tareas rutinarias, hasta procedimientos más especializados en quirófanos y laboratorios.'),
      paragraph('En cirugías y procedimientos invasivos, la esterilidad es imprescindible.'),
      paragraph('Entre el material fungible utilizado con mayor frecuencia en la sala de exploraciones destacan:'),
      bulletList(
        [
          'Guantes desechables, batas, gorros, calzas desechables, mascarillas quirúrgicas, pañales, compresas, papel absorbente y productos descontaminantes junto con contenedores blindados.',
          'Jeringas, agujas, palomillas y abocats de distintos calibres (generalmente entre 16 y 22 G).',
          'Gasas, paños estériles, alcohol, apósitos, vendas y sistemas de fijación.',
          'Sondas y catéteres de uso único.',
          'Medidores de glucosa.',
          'Inyectores con alargaderas para la administración intravenosa de contrastes y radiofármacos.',
          'Fármacos (diuréticos) empleados en renogramas isotópicos, benzodiacepinas y relajantes musculares utilizados en estudios de PET, lugol para bloquear la captación tiroidea de yodo radiactivo y sueros glucosados e insulina.',
        ],
        [
          'Guantes desechables, batas, gorros, calzas desechables, mascarillas quirúrgicas, pañales, compresas, papel absorbente y productos descontaminantes junto con contenedores blindados.',
          'Jeringas, agujas, palomillas y abocats de distintos calibres (generalmente entre 16 y 22 G).',
          'Gasas, paños estériles, alcohol, apósitos, vendas y sistemas de fijación.',
          'Sondas y catéteres de uso único.',
          'Medidores de glucosa.',
          'Inyectores con alargaderas para la administración intravenosa de contrastes y radiofármacos.',
          'Fármacos (diuréticos) empleados en renogramas isotópicos, benzodiacepinas y relajantes musculares utilizados en estudios de PET, lugol para bloquear la captación tiroidea de yodo radiactivo y sueros glucosados e insulina.',
        ]
      )
    ]
  },
  {
    id: 'material-no-fungible',
    title: 'Material no fungible',
    summary: 'Recursos reutilizables de soporte y protección que requieren revisión periódica de estado, limpieza y mantenimiento para garantizar su funcionamiento.',
    icon: <Shield className="w-5 h-5 text-green-600" />,
    image: `${baseUrl}images/imagen_material_nofungible.png`,
    details: [
      paragraph(
        <>
          El <strong>material no fungible</strong> es aquel que <u>no se agota con el uso y que puede reutilizarse durante un periodo prolongado de tiempo</u>. Este tipo de material forma parte del equipamiento sanitario, ya que permite desarrollar la actividad asistencial de manera segura, organizada y eficiente. Aunque estos materiales no requieren una reposición continua, sí necesitan mantenimiento, limpieza, revisiones periódicas y controles de conservación para garantizar su correcto funcionamiento y prolongar su vida útil.
        </>,
        'El material no fungible es aquel que no se agota con el uso y que puede reutilizarse durante un periodo prolongado de tiempo. Este tipo de material forma parte del equipamiento sanitario, ya que permite desarrollar la actividad asistencial de manera segura, organizada y eficiente. Aunque estos materiales no requieren una reposición continua, sí necesitan mantenimiento, limpieza, revisiones periódicas y controles de conservación para garantizar su correcto funcionamiento y prolongar su vida útil.'
      ),
      paragraph('Dentro del material no fungible sanitario se incluyen tanto elementos de mobiliario y lavandería como equipos tecnológicos y sistemas de protección radiológica. Entre ellos destacan:'),
      bulletList(
        [
          <>
            <strong>Elementos de material de lavandería</strong> para salvaguardar la limpieza del equipo, prevenir su deterioro y preservar la comodidad, intimidad e higiene del paciente durante las exploraciones, destacan:
            <ul className="list-[circle] pl-8 mt-3 space-y-2">
              <li>Sábanas, almohadas, batas, camisones y reposapiernas.</li>
            </ul>
          </>,
        ],
        [
          'Elementos de material de lavandería para salvaguardar la limpieza del equipo, prevenir su deterioro y preservar la comodidad, intimidad e higiene del paciente durante las exploraciones, destacan: Sábanas, almohadas, batas, camisones y reposapiernas.',
        ]
      ),
      paragraph('Estos elementos son fundamentales para garantizar unas condiciones asistenciales adecuadas y favorecer un entorno clínico seguro y confortable.'),
      paragraph(
        <>
          Asimismo, en Medicina Nuclear adquieren especial importancia los <strong>materiales de protección radiológica</strong> destinados tanto al personal sanitario como al público. Entre ellos se encuentran:
        </>,
        'Asimismo, en Medicina Nuclear adquieren especial importancia los materiales de protección radiológica destinados tanto al personal sanitario como al público. Entre ellos se encuentran:'
      ),
      bulletList(
        [
          'Protectores plomados para jeringas empleados para la administración del radiofármaco, delantales plomados, protectores mamarios, gonadales, tiroideos y de cristalino.',
          'Mamparas plomadas, contenedores blindados y sistemas de almacenamiento seguro para fuentes radiactivas.',
        ],
        [
          'Protectores plomados para jeringas empleados para la administración del radiofármaco, delantales plomados, protectores mamarios, gonadales, tiroideos y de cristalino.',
          'Mamparas plomadas, contenedores blindados y sistemas de almacenamiento seguro para fuentes radiactivas.',
        ]
      ),
      paragraph('Además, el material no fungible incluye los principales equipos tecnológicos utilizados en la unidad de Medicina Nuclear. Entre ellos destacan:'),
      bulletList(
        [
          'Gammacámaras, SPECT, PET/TC, encargados de la adquisición de imágenes diagnósticas.',
          'Instrumentos de medida y control (activímetro o calibradores de dosis), contadores gamma y monitores de radiación.',
        ],
        [
          'Gammacámaras, SPECT, PET/TC, encargados de la adquisición de imágenes diagnósticas.',
          'Instrumentos de medida y control (activímetro o calibradores de dosis), contadores gamma y monitores de radiación.',
        ]
      ),
      paragraph('Por otro lado, el mobiliario específico de la sala de exploración también forma parte del material no fungible. Este mobiliario está adaptado a las necesidades técnicas y asistenciales de la unidad, facilitando el trabajo del personal sanitario y mejorando la atención al paciente durante los procedimientos diagnósticos y terapéuticos realizados en Medicina Nuclear.')
    ]
  },
  {
    id: 'material-preparacion',
    title: 'Preparación, Control y Reposición del material',
    summary: 'Gestión operativa del circuito de material: preparación previa, verificación durante la actividad y reposición al cierre para asegurar continuidad asistencial.',
    icon: <Settings className="w-5 h-5 text-green-600" />,
    image:
      'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      paragraph(
        <>
          <u>PREPARACIÓN DEL MATERIAL EN MEDICINA NUCLEAR</u>
        </>,
        'PREPARACIÓN DEL MATERIAL EN MEDICINA NUCLEAR'
      ),
      paragraph(
        'La preparación del material en Medicina Nuclear comprende todas las actividades destinadas a garantizar que los equipos, radiofármacos y accesorios estén disponibles en condiciones óptimas de seguridad, esterilidad y funcionamiento antes de realizar una exploración diagnóstica o un tratamiento terapéutico. Este proceso resulta fundamental para garantizar tanto la calidad de las imágenes obtenidas como la seguridad del paciente y del personal sanitario.'
      ),
      paragraph('Dentro de esta preparación se incluye:'),
      bulletList(
        [
          <>
            La <strong>organización</strong> previa de los equipos.
          </>,
          <>
            La <strong>comprobación</strong> de los sistemas de protección radiológica.
          </>,
          <>
            La <strong>verificación</strong> del estado de funcionamiento de los dispositivos.
          </>,
          <>
            La <strong>disponibilidad</strong> del material sanitario necesario para cada procedimiento.
          </>,
        ],
        [
          'La organización previa de los equipos.',
          'La comprobación de los sistemas de protección radiológica.',
          'La verificación del estado de funcionamiento de los dispositivos.',
          'La disponibilidad del material sanitario necesario para cada procedimiento.',
        ]
      ),
      paragraph(
        'La preparación de radiofármacos debe realizarse mediante protocolos normalizados de trabajo (PNT) dentro de la Unidad de Radiofarmacia autorizada, siguiendo normas estrictas de calidad y radioprotección. Además, las manipulaciones se llevan a cabo en cabinas de seguridad biológica y zonas controladas para minimizar la exposición del personal a las radiaciones ionizantes y evitar riesgos de contaminación.'
      ),
      paragraph(
        <>
          Asimismo, es <u>responsabilidad del técnico</u> y de todo el personal de la unidad de Medicina Nuclear conocer el material disponible en el servicio, incluido el material radiactivo, así como su ubicación y sus indicaciones de utilización. Esta organización resulta esencial para actuar con rapidez y eficacia ante cualquier situación urgente que pueda producirse durante la atención al paciente. Un correcto conocimiento, control y preparación del material permite reducir el tiempo de respuesta, disminuir la exposición innecesaria a radiaciones ionizantes y mejorar tanto la seguridad clínica como la calidad asistencial.
        </>,
        'Asimismo, es responsabilidad del técnico y de todo el personal de la unidad de Medicina Nuclear conocer el material disponible en el servicio, incluido el material radiactivo, así como su ubicación y sus indicaciones de utilización. Esta organización resulta esencial para actuar con rapidez y eficacia ante cualquier situación urgente que pueda producirse durante la atención al paciente. Un correcto conocimiento, control y preparación del material permite reducir el tiempo de respuesta, disminuir la exposición innecesaria a radiaciones ionizantes y mejorar tanto la seguridad clínica como la calidad asistencial.'
      ),
      paragraph(
        <>
          <u>CONTROL DEL MATERIAL EN MEDICINA NUCLEAR</u>
        </>,
        'CONTROL DEL MATERIAL EN MEDICINA NUCLEAR'
      ),
      paragraph(
        'El control del material en Medicina Nuclear tiene como finalidad verificar el correcto funcionamiento de los equipos, garantizar la calidad de las exploraciones y mantener unas condiciones adecuadas de seguridad radiológica. Para ello, se realizan controles periódicos sobre los equipos de imagen, las fuentes radiactivas y los dispositivos de medición utilizados en la unidad.'
      ),
      paragraph('Las fuentes radiactivas empleadas en:'),
      bulletList(
        [
          <>
            <strong>Gammacámaras</strong> suelen ser: fuentes no encapsuladas de 99mTc, utilizadas como fuentes puntuales, planas o lineales en función del tipo de control de calidad requerido y de las indicaciones establecidas por el servicio de Radiofísica. Estas fuentes permiten comprobar parámetros relacionados con la uniformidad, sensibilidad y correcto funcionamiento de los detectores de la gammacámara.
          </>,
          <>
            En los equipos de <strong>PET</strong>: los controles de calidad se realizan generalmente mediante fuentes lineales de 68Ge calibradas previamente por el fabricante o proveedor. Estas fuentes permiten verificar el funcionamiento adecuado del sistema de detección y reconstrucción de imágenes.
          </>,
          <>
            Los <strong>activímetros</strong>: realizan sus controles de calidad mediante fuentes de 137Cs, asegurando la precisión de las mediciones efectuadas antes de la administración al paciente.
          </>,
        ],
        [
          'Gammacámaras suelen ser: fuentes no encapsuladas de 99mTc, utilizadas como fuentes puntuales, planas o lineales en función del tipo de control de calidad requerido y de las indicaciones establecidas por el servicio de Radiofísica. Estas fuentes permiten comprobar parámetros relacionados con la uniformidad, sensibilidad y correcto funcionamiento de los detectores de la gammacámara.',
          'En los equipos de PET: los controles de calidad se realizan generalmente mediante fuentes lineales de 68Ge calibradas previamente por el fabricante o proveedor. Estas fuentes permiten verificar el funcionamiento adecuado del sistema de detección y reconstrucción de imágenes.',
          'Los activímetros: realizan sus controles de calidad mediante fuentes de 137Cs, asegurando la precisión de las mediciones efectuadas antes de la administración al paciente.',
        ]
      ),
      paragraph(
        'Todos estos controles permiten detectar posibles anomalías, reducir errores diagnósticos y garantizar el cumplimiento de las normas de calidad y protección radiológica establecidas en Medicina Nuclear.'
      ),
      paragraph(
        <>
          <u>REPOSICIÓN DEL MATERIAL EN MEDICINA NUCLEAR</u>
        </>,
        'REPOSICIÓN DEL MATERIAL EN MEDICINA NUCLEAR'
      ),
      paragraph(
        'La reposición del material en Medicina Nuclear consiste en la sustitución periódica de aquellos elementos que se consumen, se deterioran o pierden efectividad con el paso del tiempo y el uso continuado. Esta reposición resulta imprescindible para mantener el correcto funcionamiento de la unidad y garantizar la continuidad de la actividad asistencial.'
      ),
      paragraph('Las fuentes radiactivas utilizadas en los controles de calidad requieren diferentes frecuencias de reposición dependiendo de su periodo de semidesintegración.'),
      bulletList(
        [
          'En el caso del 99mTc, utilizado habitualmente en gammacámaras, su periodo de semidesintegración (T1/2) es de aproximadamente 6 horas, por lo que estas fuentes deben renovarse con frecuencia para mantener una actividad adecuada durante los controles de calidad.',
          'Las fuentes lineales de 68Ge empleadas en equipos PET presentan un periodo de semidesintegración aproximado de 270 días, permitiendo su utilización durante periodos más prolongados antes de requerir reposición.',
          'En el caso de los activímetros, las fuentes de 137Cs utilizadas para los controles de calidad poseen un periodo de semidesintegración cercano a los 30 años, lo que permite que puedan utilizarse prácticamente durante toda la vida útil del equipo y del servicio de Medicina Nuclear.',
        ],
        [
          'En el caso del 99mTc, utilizado habitualmente en gammacámaras, su periodo de semidesintegración (T1/2) es de aproximadamente 6 horas, por lo que estas fuentes deben renovarse con frecuencia para mantener una actividad adecuada durante los controles de calidad.',
          'Las fuentes lineales de 68Ge empleadas en equipos PET presentan un periodo de semidesintegración aproximado de 270 días, permitiendo su utilización durante periodos más prolongados antes de requerir reposición.',
          'En el caso de los activímetros, las fuentes de 137Cs utilizadas para los controles de calidad poseen un periodo de semidesintegración cercano a los 30 años, lo que permite que puedan utilizarse prácticamente durante toda la vida útil del equipo y del servicio de Medicina Nuclear.',
        ]
      ),
      paragraph(
        'Una correcta reposición del material garantiza la precisión diagnóstica, mejora la seguridad radiológica y contribuye a mantener unas condiciones técnicas adecuadas para el desarrollo de la actividad clínica diaria.'
      ),
      paragraph(
        <>
          <a
            href="https://iberomed.es/blog/material-fungible-sanitario-que-es-para-que-sirve/#:~:text=El%20material%20fungible%20sanitario%20engloba,asepsia%20en%20los%20procedimientos%20m%C3%A9dicos."
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline dark:text-blue-400"
          >
            https://iberomed.es/blog/material-fungible-sanitario-que-es-para-que-sirve/
          </a>
        </>,
        'https://iberomed.es/blog/material-fungible-sanitario-que-es-para-que-sirve/'
      )
    ]
  }
];

export const materialSearchEntries: SearchEntry[] = materials.map((material) => ({
  id: `search-${material.id}`,
  sectionId: 'material',
  subSectionId: material.id,
  sectionLabel: 'Material',
  title: material.title,
  content: `${material.summary} ${material.details.map((detail) => detail.plainText).join(' ')}`,
  resultType: 'subsection',
}));

export function Material({ selectedSubSectionId = null, onBackToOverview }: MaterialProps) {
  const [activeMaterialId, setActiveMaterialId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = materials.some((item) => item.id === selectedSubSectionId);
    setActiveMaterialId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedMaterial = materials.find((item) => item.id === activeMaterialId) ?? null;

  const handleBack = () => {
    setActiveMaterialId(null);
    onBackToOverview?.();
  };

  if (selectedMaterial) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-green-700 dark:text-green-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a material
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedMaterial.title}</h2>
                  <p className="text-black dark:text-white">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedMaterial.image}
              alt={selectedMaterial.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedMaterial.details.map((detail, index) => (
              detail.kind === 'list' ? (
                <div key={index}>{detail.content}</div>
              ) : (
                <p key={index} className="text-black dark:text-white leading-relaxed">
                  {detail.content}
                </p>
              )
            ))}
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
            <img src={materialIcono} alt="" className="w-16 h-16 object-contain flex-shrink-0" aria-hidden="true" />
            <h2 className="text-gray-900 dark:text-white">Material</h2>
          </div>
                  <p className="text-black dark:text-white leading-relaxed">
            Es necesario que en la sala de exploraciones existan materiales auxiliares a los equipos de adquisición de imagen que permitan que la prueba se lleve a cabo en las mejores condiciones posibles o que permita una rápida y eficiente intervención en el caso de una emergencia médica o radiológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <MaterialButton
              key={material.id}
              item={material}
              onOpen={setActiveMaterialId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
