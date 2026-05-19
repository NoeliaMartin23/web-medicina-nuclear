import { useEffect, useState, type ReactNode } from 'react';
import { Scan, Monitor, Activity, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
<<<<<<< HEAD
import equipamientoIcono from '../../assets/equipamiento-icono.svg';
import type { SearchEntry } from '../searchTypes';

const baseUrl = import.meta.env.BASE_URL;

type EquipmentDetail =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'heading'; content: string; level?: 'section' | 'subsection' }
  | { type: 'link'; href: string; label: string }
  | { type: 'list'; items: Array<{ label: string; content: string }> };

=======

const baseUrl = import.meta.env.BASE_URL;

>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
interface EquipmentItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
<<<<<<< HEAD
  details: EquipmentDetail[];
=======
  details: string[];
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
}

interface EquipmentProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface EquipmentButtonProps {
  item: EquipmentItem;
  onOpen: (id: string) => void;
}

const acquisitionEquipment: EquipmentItem[] = [
  {
    id: 'equipamiento-sanitario',
    title: 'Sanitario',
    summary: 'Equipos asistenciales del área diagnóstica y terapéutica que sostienen la atención clínica segura.',
    icon: <Scan className="w-5 h-5 text-blue-600" />,
    image: `${baseUrl}images/imagen_material_fungible.png`,
    details: [
<<<<<<< HEAD
      { type: 'text', content: 'El equipamiento de la sala sanitaria (baño o lavabo) en un servicio de medicina nuclear está diseñado para gestionar el riesgo de contaminación radiactiva tras la administración de radiofármacos. Se consideran áreas "calientes" y deben contar con elementos que faciliten la descontaminación y minimicen la exposición, siguiendo el principio ALARA.' },
      { type: 'link', href: 'https://www.csn.es/proteccion-radiologica/trabajadores/red-alara', label: 'https://www.csn.es/proteccion-radiologica/trabajadores/red-alara' },
      { type: 'text', content: 'El equipamiento sanitario en un servicio de Medicina Nuclear comprende la infraestructura física y los sistemas estructurales destinados a minimizar el riesgo de contaminación radiactiva tras la administración de radiofármacos. Estas áreas se consideran espacios controlados, especialmente en procedimientos terapéuticos con radionúclidos de vida media significativa, y deben diseñarse conforme al principio ALARA, garantizando seguridad radiológica, higiene estricta y facilidad de descontaminación. Se consideran áreas "calientes" y deben contar con elementos que faciliten la descontaminación y minimicen la exposición.' },
      { type: 'text', content: 'El objetivo principal del equipamiento sanitario es evitar el contacto de manos con superficies contaminadas, reducir al mínimo la contaminación por salpicaduras y asegurar una gestión controlada, segura y adecuada de los residuos radiactivos.' },
      { type: 'heading', content: '1. Elementos Sanitarios y Fontanería (Diseño Seguro)', level: 'subsection' },
      { type: 'text', content: 'Desde el punto de vista constructivo, los sanitarios destinados a pacientes inyectados deben presentar un diseño funcional, resistente y fácilmente lavable. Se emplean inodoros suspendidos que facilitan la limpieza del suelo y reducen la acumulación de contaminación. También pueden instalarse sistemas de separación de residuos, mediante inodoros especializados que permiten dirigir la orina hacia tanques de decaimiento radiactivo mientras las heces siguen el circuito convencional, según el protocolo del centro. Asimismo, los sanitarios deben estar configurados con sistemas de descarga doble tras su uso, con el fin de minimizar la permanencia de material radiactivo en el sistema de evacuación. La grifería debe ser de accionamiento automático o mediante pedal o codo, evitando el contacto manual y disminuyendo el riesgo de contaminación cruzada. Las superficies deben ser continuas, no porosas y descontaminables, generalmente fabricadas en materiales cerámicos especiales o acero inoxidable sanitario para que sean fáciles de limpiar.' },
      { type: 'image', src: `${baseUrl}images/ElementosSanitariosYFontaneria.png`, alt: 'Elementos Sanitarios y Fontanería en un sanitario de medicina nuclear' },
      { type: 'heading', content: '2. Blindaje y Protección Radiológica', level: 'subsection' },
      { type: 'text', content: 'En cuanto a la protección estructural, puede requerirse blindaje perimetral plomado o de hormigón en paredes, suelos o zonas adyacentes, dependiendo del estudio radiológico previo y del tipo de radionúclido empleado, especialmente si se usa Iodo-131. En algunas ocasiones, el inodoro o el tanque del inodoro pueden estar blindados. La ventilación debe ser independiente y controlada, evitando la acumulación de gases radiactivos y garantizando una renovación adecuada del aire. (https://www.csn.es/proteccion-radiologica)' },
      { type: 'heading', content: '3. Gestión de Contaminación y Seguridad', level: 'subsection' },
      { type: 'text', content: 'La señalización reglamentaria es obligatoria, incluyendo la indicación de “Área Controlada” y el símbolo internacional de radiación. Asimismo, debe disponerse de material básico de descontaminación, como jabón neutro, papel desechable y elementos absorbentes, así como cubiertas desechables con respaldo de plástico destinadas a proteger superficies susceptibles de contaminación radiactiva. El sistema de ventilación debe ser forzado e independiente, garantizando una adecuada renovación del aire y evitando la acumulación de posibles gases radiactivos en el interior del sanitario. Los equipos portátiles de monitorización de contaminación pueden encontrarse en las proximidades para la verificación radiológica cuando sea necesario. (https://www.miteco.gob.es/es.html) (https://www.csn.es/proteccion-radiologica)' },
      { type: 'image', src: `${baseUrl}images/GestionDeContaminacion.png`, alt: 'Gestión de contaminación y seguridad en área controlada de medicina nuclear' },
      { type: 'heading', content: '4. Sistema de Desecho (Tanques de Decaimiento)', level: 'subsection' },
      { type: 'text', content: 'En procedimientos terapéuticos, especialmente con radioyodo (I-131), el sistema de evacuación puede conectarse a tanques de decaimiento radiactivo. Estos depósitos permiten almacenar temporalmente los residuos líquidos hasta que la actividad disminuya a niveles permitidos por la normativa vigente antes de su vertido al alcantarillado general. En algunos casos, puede contemplarse la conducción diferenciada de efluentes según el protocolo del centro.' }
=======
      'El equipamiento sanitario integra los dispositivos clínicos de soporte directo al paciente durante los procedimientos de medicina nuclear.',
      'Su disponibilidad impacta en la seguridad, en la continuidad asistencial y en la capacidad de respuesta frente a incidencias durante la exploración.',
      'Incluye revisión funcional periódica, control de estado físico, verificación de alarmas y registro documental de mantenimiento.'
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
    ]
  },
  {
    id: 'equipamiento-electromedico',
    title: 'Electromédico',
    summary: 'Sistemas diagnósticos de alta complejidad cuya precisión depende de calibraciones y control técnico continuo.',
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBzY2FubmVyJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY2NDg5ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
<<<<<<< HEAD
      { type: 'text', content: 'El equipamiento de una sala de electromedicina en medicina nuclear es especializado, enfocado en la obtención de imágenes funcionales y el manejo seguro de radiofármacos. Se divide principalmente en áreas de imagenología, radiofarmacia (cámara caliente) y protección radiológica.' },
      { type: 'text', content: 'La infraestructura debe contar con salas de espera independientes para pacientes inyectados ("calientes") y no inyectados ("fríos"), así como "hot toilets" (baños blindados).' },
      { type: 'link', href: 'https://www.ncbi.nlm.nih.gov/books/NBK597384/', label: 'https://www.ncbi.nlm.nih.gov/books/NBK597384/' },
      { type: 'heading', content: '1. Equipamiento Principal de Imagenología (Sala de Exploración)', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Gammacámara (Anger Camera):', content: 'Equipo fundamental que detecta radiación gamma, compuesto por colimadores, cristales centelleadores y tubos fotomultiplicadores.' },
          { label: 'SPECT (Tomografía Computarizada por Emisión de Fotón Único):', content: 'Gammacámaras avanzadas que giran alrededor del paciente para crear imágenes 3D.' },
          { label: 'PET/CT (Tomografía por Emisión de Positrones):', content: 'Combina PET para metabolismo y TC para anatomía en una sola sesión.' },
          { label: 'PET/MR (PET/Resonancia Magnética):', content: 'Tecnología híbrida avanzada para mayor contraste en tejidos blandos.' },
          { label: 'Sistemas de sonda gamma (Gamma Probe):', content: 'Para localización intraoperatoria.' },
          { label: 'Sistemas de captación de tiroides:', content: 'Contadores especializados.' }
        ]
      },
      { type: 'heading', content: '2. Equipamiento de Radiofarmacia y Laboratorio ("Cámara Caliente")', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Calibrador de dosis (Activímetro):', content: 'Mide la actividad de los radiofármacos antes de administrarse al paciente.' },
          { label: 'Cabinas de seguridad biológica y blindadas (Hot Cells):', content: 'Cabinas plomadas para manipular material radiactivo.' },
          { label: 'Sistemas automáticos de dispensación:', content: 'Para la preparación de dosis.' },
          { label: 'Cromatógrafo de capa fina (TLC scanner):', content: 'Para control de calidad de radiofármacos.' },
          { label: 'Neveras y congeladores blindados:', content: 'Para almacenamiento de radioisótopos.' }
        ]
      },
      { type: 'heading', content: '3. Equipamiento de Protección Radiológica y Seguridad', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Biombos plomados y vidrio plomado:', content: 'Barreras físicas contra la radiación.' },
          { label: 'Monitores de área y de superficie (Geiger-Müller):', content: 'Para detectar contaminación.' },
          { label: 'Monitores de mano-pie-ropa:', content: 'Equipos para verificar que el personal no esté contaminado.' },
          { label: 'Contenedores de residuos radiactivos (blindados):', content: 'Para desechos de vida media corta.' },
          { label: 'Tele-pinzas:', content: 'Para manipulación a distancia de viales.' }
        ]
      },
      { type: 'heading', content: '4. Equipamiento de Apoyo y Paciente', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Camillas de traslado y sillones de tratamiento:', content: 'A menudo ajustables eléctricamente para mayor comodidad.' },
          { label: 'Monitores de signos vitales:', content: 'Para pacientes en estudios de estrés (ej. cardíacos).' },
          { label: 'Estaciones de trabajo y computadoras:', content: 'Para la reconstrucción y análisis de imágenes.' }
        ]
      },
      { type: 'heading', content: '5. Equipos de Medición (Contingencia)', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Monitor de radiación/Detector de superficie:', content: 'En las cercanías o dentro del sanitario para verificar la contaminación (por ejemplo, contadores Geiger).' }
        ]
      },
      { type: 'text', content: 'De acuerdo con los criterios de dotación de medios materiales establecidos por servicios públicos de salud autonómicos, como el Servicio Gallego de Salud (SERGAS), un servicio de Medicina Nuclear debe disponer de equipamiento mínimo que garantice la adquisición diagnóstica, la manipulación segura de radiofármacos y el cumplimiento de la normativa de protección radiológica. Dichos requisitos incluyen, al menos, una gammacámara o sistema PET, activímetro calibrado, cabina blindada de preparación, sistemas de almacenamiento seguro y dispositivos de control de contaminación.' }
=======
      'El equipamiento electromédico comprende equipos como gammacámara, PET/CT y SPECT/CT, esenciales para la obtención de imágenes diagnósticas de alta calidad.',
      'Estos sistemas requieren programas de control de calidad diarios, semanales y periódicos para asegurar exactitud cuantitativa y reproducibilidad.',
      'La gestión incluye mantenimiento preventivo, intervención correctiva, validación posterior y documentación conforme a normativa.'
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
    ]
  },
  {
    id: 'equipamiento-informatico',
    title: 'Informático',
    summary: 'Infraestructura digital que permite adquisición, procesamiento, almacenamiento y trazabilidad de estudios.',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzY2NDA3NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
<<<<<<< HEAD
      { type: 'text', content: 'El equipamiento de la sala informática en un servicio de Medicina Nuclear es crucial para la adquisición, procesamiento, visualización y almacenamiento de imágenes funcionales y anatómicas, así como para la gestión de datos de pacientes y radiofármacos.' },
      { type: 'text', content: 'La infraestructura informática debe garantizar la trazabilidad completa del radiofármaco administrado, el almacenamiento seguro de imágenes diagnósticas y la integración con sistemas hospitalarios (RIS/PACS). Asimismo, debe cumplir con la normativa vigente en materia de protección de datos sanitarios y asegurar la conservación, confidencialidad y accesibilidad controlada de la información clínica.' },
      { type: 'text', content: 'El hardware y software especializado es esencial, diferenciándose de una sala informática médica convencional por la necesidad de procesar grandes volúmenes de datos volumétricos (SPECT/PET) y gestionar información de trazadores radiactivos.' },
      { type: 'text', content: 'A continuación se detalla el equipamiento principal:' },
      { type: 'heading', content: '1. Hardware Informático y Visualización', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Workstations (Estaciones de trabajo) de alto rendimiento:', content: 'Equipos con procesadores potentes (ej. Intel Xeon o AMD Ryzen Threadripper) para la reconstrucción de imágenes 3D y análisis cuantificados.' },
          { label: 'Memoria y Almacenamiento:', content: 'Mínimo de 32GB RAM, recomendado 64GB o más, con unidades SSD rápidas para manejo de grandes volúmenes de imágenes PET/CT o SPECT.' },
          { label: 'Monitores de Alta Resolución:', content: 'Monitores médicos de alto contraste y resolución, a menudo con calibración de color/escala de grises (Hybrid Gamma Pixel) para la visualización precisa de imágenes fusionadas.' },
          { label: 'GPU (Unidad de Procesamiento Gráfico):', content: 'Tarjetas gráficas potentes (ej. NVIDIA Quadro o Tesla) esenciales para renderizado 3D y procesamiento avanzado.' },
          { label: 'Conectividad:', content: 'Conexiones de alta velocidad (100+ Mbps) para integración con RIS/PACS y visualización remota.' }
        ]
      },
      { type: 'heading', content: '2. Software de Medicina Nuclear', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Software de Adquisición y Procesamiento:', content: 'Software específico de la cámara gamma o PET para el manejo de los datos brutos (sinogramas).' },
          { label: 'Visores DICOM Avanzados (Workstation Nuclear):', content: 'Software especializado como Alma NUCLEAR o MIM Software, diseñado para el diagnóstico a partir de exploraciones moleculares, ofreciendo herramientas de registro de imágenes y fusión.' },
          { label: 'Paquetes de Aplicaciones Clínicas:', content: 'Software específico para áreas funcionales, ej. cardiología (4DM, Emory Cardiac Toolbox), neurología, urología, etc.' },
          { label: 'Gestión de Radiofármacos y Dosimetría:', content: 'Software de gestión de inventario y dosis del paciente (ej. BioDose, Optility) para realizar trazabilidad de los radiofármacos (99mTc, PET) y optimizar la protección radiológica.' },
          { label: 'PACS/RIS (Picture Archiving and Communication System):', content: 'Sistema para almacenamiento, archivo y distribución de las imágenes, integrado con el sistema de información radiológica.' }
        ]
      },
      { type: 'heading', content: '3. Equipamiento de Conexión e Interfaz', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Sistemas de Adquisición de Datos (Interfaces):', content: 'Conectores analógico-digitales (ADC) que convierten la señal del cristal centelleador de la gammacámara en datos informáticos.' },
          { label: 'Red de Area Local (LAN):', content: 'Conectores seguros para el envío de imágenes de la gammacámara o PET/CT a la estación de trabajo y servidor de archivo.' }
        ]
      },
      { type: 'heading', content: '4. Entorno de la Sala', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Protección contra radiación:', content: 'En áreas donde la sala informática está adyacente a la zona de inyección o gammacámara, se requiere protección de plomo (bunker).' },
          { label: 'Control de Calidad:', content: 'Software para la verificación diaria de la estabilidad de las cámaras y activímetros.' }
        ]
      },
      { type: 'text', content: 'Este equipamiento permite la correcta realización de tomografías computarizadas por emisión de fotón único (SPECT) y por emisión de positrones (PET).' },
      { type: 'link', href: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento', label: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento' },
      { type: 'link', href: 'https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/', label: 'https://www.gammascan.es/tecnologia-y-equipos-en-medicina-nuclear/' },
      { type: 'link', href: 'https://www.studocu.com/es/document/escola-eixample-clinic/medicina-nuclear/modulo-especifico-4-diseno-de-instalaciones-de-medicina-nuclear/145505287', label: 'https://www.studocu.com/es/document/escola-eixample-clinic/medicina-nuclear/modulo-especifico-4-diseno-de-instalaciones-de-medicina-nuclear/145505287' },
      { type: 'link', href: 'https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf', label: 'https://www.sergas.gal/Docs/PROCRAD/Medios%20humanos%20y%20materiales%20RF%20en%20MN%20y%20RD.pdf' },
      { type: 'heading', content: '5. Equipos de Imagen Principal', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Gammacámara (SPECT):', content: 'Detecta radiación gamma de radiofármacos para mostrar función orgánica.' },
          { label: 'PET/CT:', content: 'Cámara de tomografía por emisión de positrones combinada con tomografía computarizada para localizar estructuras anatómicas.' },
          { label: 'Componentes de cámara:', content: 'Incluyen colimadores, cristales centelleadores y tubos fotomultiplicadores.' }
        ]
      },
      { type: 'heading', content: '6. «Hot Lab» o Cuarto Caliente (Preparación)', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Activímetro:', content: 'Equipo indispensable para calibrar la dosis radioactiva antes de administrarla.' },
          { label: 'Blindaje:', content: 'Bancos o torres en L, blindaje de viales y jeringas, ladrillos de plomo.' },
          { label: 'Cabinas de flujo laminar:', content: 'Para manipulación segura de isótopos.' }
        ]
      },
      { type: 'heading', content: '7. Protección Radiológica y Accesorios', level: 'subsection' },
      {
        type: 'list',
        items: [
          { label: 'Barreras:', content: 'Muros, puertas blindadas, biombos con vidrio plomado.' },
          { label: 'Accesorios:', content: 'Inyectores de contraste, sistemas de monitorización cardíaca, inyectores, bombas de infusión.' },
          { label: 'Gestión de residuos:', content: 'Contenedores blindados para material radiactivo.' }
        ]
      }
=======
      'El equipamiento informático abarca estaciones de trabajo, servidores, red local, PACS y sistemas de información clínica vinculados a medicina nuclear.',
      'Su mantenimiento garantiza integridad de datos, seguridad de acceso, continuidad operativa y disponibilidad de informes e imágenes.',
      'La estrategia incluye copias de seguridad, control de versiones, monitorización de rendimiento y planes de recuperación ante fallos.'
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
    ]
  }
];

<<<<<<< HEAD
const flattenEquipmentDetail = (detail: EquipmentDetail) => {
  switch (detail.type) {
    case 'text':
    case 'heading':
      return detail.content;
    case 'image':
      return detail.alt;
    case 'link':
      return `${detail.label} ${detail.href}`;
    case 'list':
      return detail.items.map((item) => `${item.label} ${item.content}`).join(' ');
    default:
      return '';
  }
};

export const equipmentSearchEntries: SearchEntry[] = acquisitionEquipment.map((equipment) => ({
  id: `search-${equipment.id}`,
  sectionId: 'equipamiento',
  subSectionId: equipment.id,
  sectionLabel: 'Equipamiento',
  title: equipment.title,
  content: `${equipment.summary} ${equipment.details.map(flattenEquipmentDetail).join(' ')}`,
  resultType: 'subsection',
}));

=======
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
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
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.summary}</p>
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
            <p className="text-gray-600 dark:text-gray-300">
              Información detallada de la subsección seleccionada.
            </p>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedEquipment.image}
              alt={selectedEquipment.title}
              className="w-full max-h-[420px] object-cover"
            />
          </div>

          <div className="space-y-4">
<<<<<<< HEAD
            {selectedEquipment.details.map((detail, index) =>
              detail.type === 'image' ? (
                <div
                  key={index}
                  className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
                >
                  <ImageWithFallback
                    src={detail.src}
                    alt={detail.alt}
                    className="w-full max-h-[420px] object-contain bg-white"
                  />
                </div>
              ) : detail.type === 'heading' ? (
                detail.level === 'section' ? (
                  <h3 key={index} className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {detail.content}
                  </h3>
                ) : (
                  <h4 key={index} className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
                    {detail.content}
                  </h4>
                )
              ) : detail.type === 'link' ? (
                <a
                  key={index}
                  href={detail.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block underline text-blue-700 dark:text-blue-300 break-all"
                >
                  {detail.label}
                </a>
              ) : detail.type === 'list' ? (
                <ul key={index} className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  {detail.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>{' '}
                      <span>{item.content}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {detail.content}
                </p>
              )
            )}
=======
            {selectedEquipment.details.map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-12">
<<<<<<< HEAD
          <div className="flex items-center gap-3 mb-3">
            <img src={equipamientoIcono} alt="" className="w-16 h-16 object-contain flex-shrink-0" aria-hidden="true" />
            <h2 className="text-gray-900 dark:text-white">Equipamiento</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            El equipamiento de una sala de medicina nuclear combina equipos de imagen funcional de alta tecnología, como gammacámaras (SPECT) y tomógrafos PET/CT, con elementos de radioprotección estricta. Incluye activímetros para medir radiofármacos, inyectores, blindajes plomados, sistemas de ventilación y software de reconstrucción. 
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            El equipamiento de una sala de Medicina Nuclear comprende el conjunto de equipos de imagen funcional  , recursos técnicos, estructurales y digitales necesarios para la obtención de imágenes, la preparación segura de radiofármacos y la protección radiológica tanto del paciente como del personal. (https://www.csn.es/proteccion-radiologica/trabajadores)
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Dicho equipamiento se organiza en tres categorías principales: equipamiento sanitario, equipamiento electromédico y equipamiento informático, cada una con funciones específicas e interrelacionadas dentro del circuito asistencial. (https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hrs3/index.php?id=medicina_nuclear_equipamiento)
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            La infraestructura debe contar con pavimentos especiales, sistemas de monitorización ambiental de radiación y accesos directos para pacientes, asegurando que las zonas adyacentes no reciban radiación innecesaria (https://www.csn.es/proteccion-radiologica/vigilancia-radiologica-ambiental).
=======
          <h2 className="text-gray-900 dark:text-white mb-3">Equipamiento</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona una subsección para abrir su ventana con información completa.
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
          </p>
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
