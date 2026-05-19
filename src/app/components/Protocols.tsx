import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Scan, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import protocolosIcono from '../../assets/protocolos-icono.svg';
import type { SearchEntry } from '../searchTypes';

interface ProtocolItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: ProtocolDetail[];
}

interface ProtocolDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'list';
}

interface ProtocolsProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ProtocolButtonProps {
  item: ProtocolItem;
  onOpen: (id: string) => void;
}

const paragraph = (content: ReactNode, plainText?: string): ProtocolDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const bulletList = (items: ReactNode[], plainTextItems: string[]): ProtocolDetail => ({
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

function ProtocolButton({ item, onOpen }: ProtocolButtonProps) {
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
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const protocolItems: ProtocolItem[] = [
  {
    id: 'protocolos-gammacamara',
    title: 'Gammacámara',
    summary: 'Protocolos de control y verificación para asegurar calidad de imagen y funcionamiento estable del sistema.',
    icon: <Scan className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      paragraph(
        'Los fabricantes de las gammacámaras establecen habitualmente un programa de controles de calidad con diferentes periodicidades en función del parámetro evaluado. Las pruebas de carácter diario deben realizarse antes del inicio de la actividad clínica, con el fin de garantizar el correcto funcionamiento del equipo y asegurar la calidad diagnóstica de las imágenes obtenidas.'
      ),
      paragraph('Entre los principales controles de calidad realizados en las gammacámaras destacan los siguientes:'),
      bulletList(
        [
          <>
            <strong>Control de uniformidad:</strong> tiene como finalidad comprobar la respuesta homogénea de la gammacámara cuando se expone a una fuente de radiación distribuida uniformemente. Para ello pueden utilizarse fuentes planas de aproximadamente 200 MBq de <sup>57</sup>Co o varias fuentes puntuales de unos 20 MBq de distintos radioisótopos. La uniformidad puede evaluarse de forma intrínseca, sin colimador, o extrínseca, con colimador.
            <ul className="list-[circle] pl-8 mt-3 space-y-2">
              <li>
                La uniformidad intrínseca se verifica diariamente y su límite de aceptación corresponde al 10 % del parámetro validado por el fabricante.
              </li>
              <li>
                La uniformidad extrínseca se comprueba durante la aceptación del equipo y sus límites de aceptación son del 7 % para la uniformidad no corregida y del 5 % para la corregida. Además, se admite un desplazamiento máximo del fotopico del 3 %.
              </li>
            </ul>
          </>,
          <>
            <strong>Control del centro de rotación (COR):</strong> permite detectar posibles desviaciones del centro de rotación y comprobar la correcta alineación de los cabezales respecto al eje de giro. Para realizar esta prueba se emplea una fuente puntual suspendida a menos de 2 cm del centro de rotación y situada dentro del campo de visión de la gammacámara. Posteriormente se realiza una adquisición SPECT utilizando la matriz de mayor resolución. Los límites de aceptación establecidos son de 2 mm para la desviación del COR y para la variación entre el centro y los bordes. Este control se efectúa mensualmente.
          </>,
          <>
            <strong>Control de sensibilidad:</strong> evalúa la capacidad del sistema para transformar eventos radiactivos en señales detectables y cuantificables. Con periodicidad mensual se prepara una disolución acuosa con una actividad determinada de <sup>99m</sup>Tc que no supere una tasa de contaje de 20 Kc/s, colocándose posteriormente sobre una placa Petri. La imagen se adquiere con colimador LEAP durante 300 segundos y se calcula la eficiencia de contaje en cuentas por segundo y becquerel. El límite de aceptación se establece en el 80 % del valor de referencia.
          </>,
          <>
            <strong>Control de resolución espacial:</strong> tiene como objetivo valorar la capacidad del equipo para diferenciar dos eventos radiactivos situados a corta distancia entre sí. Se realiza mensualmente mediante un maniquí de cuadrantes y una fuente puntual de <sup>99m</sup>Tc colocada en el eje del colimador a una distancia equivalente a cinco veces el campo total de visión útil. Se adquieren imágenes cada 45° hasta completar 360° y posteriormente se determina el tamaño mínimo de barras distinguibles en los ejes X e Y. Este control también puede realizarse utilizando una fuente lineal formada por dos capilares paralelos separados 5 cm y con una actividad aproximada de 18,5 MBq. En este caso se determinan los parámetros FWHM (<em>Full Width at Half Maximum</em>) y FWTM (<em>Full Width at Tenth Maximum</em>). Los resultados no deben diferir más de ±5 % respecto a los valores establecidos por el fabricante.
          </>,
          <>
            <strong>Control de uniformidad tomográfica:</strong> de manera similar a los controles de uniformidad intrínseca y extrínseca, esta prueba evalúa la uniformidad de los estudios tomográficos y la correcta delimitación de contornos volumétricos. Para ello se distribuyen homogéneamente entre 200 y 400 MBq de <sup>99m</sup>Tc en el interior de un maniquí cilíndrico de aproximadamente 20 cm de diámetro. El cilindro se coloca alineado con el eje de rotación de la gammacámara y se realiza una adquisición SPECT con cortes de un píxel de espesor. El criterio de aceptación se basa en la ausencia de artefactos en las imágenes obtenidas. Este control se realiza mensualmente.
          </>,
          <>
            <strong>Resolución temporal:</strong> tiene como finalidad valorar la capacidad del equipo para diferenciar eventos radiactivos producidos en intervalos de tiempo muy cortos. Este control se verifica semestralmente y los resultados obtenidos no deben diferir más del 10 % respecto al valor validado por el fabricante.
          </>,
          <>
            <strong>Control del tamaño del píxel:</strong> consiste en verificar el tamaño real del píxel de una matriz determinada para cada energía y colimador utilizados en la práctica clínica. La prueba se realiza semestralmente colocando dos fuentes radiactivas separadas a una distancia conocida y adquiriendo una imagen con la matriz que proporcione el mayor detalle espacial. Posteriormente se calcula el centro de gravedad de ambas fuentes y el número de píxeles existentes entre ellas. El tamaño del píxel no debe diferir más de un 5 % respecto al valor de referencia establecido.
          </>,
        ],
        [
          'Control de uniformidad: tiene como finalidad comprobar la respuesta homogénea de la gammacámara cuando se expone a una fuente de radiación distribuida uniformemente. Para ello pueden utilizarse fuentes planas de aproximadamente 200 MBq de 57Co o varias fuentes puntuales de unos 20 MBq de distintos radioisótopos. La uniformidad puede evaluarse de forma intrínseca, sin colimador, o extrínseca, con colimador. La uniformidad intrínseca se verifica diariamente y su límite de aceptación corresponde al 10 % del parámetro validado por el fabricante. La uniformidad extrínseca se comprueba durante la aceptación del equipo y sus límites de aceptación son del 7 % para la uniformidad no corregida y del 5 % para la corregida. Además, se admite un desplazamiento máximo del fotopico del 3 %.',
          'Control del centro de rotación (COR): permite detectar posibles desviaciones del centro de rotación y comprobar la correcta alineación de los cabezales respecto al eje de giro. Para realizar esta prueba se emplea una fuente puntual suspendida a menos de 2 cm del centro de rotación y situada dentro del campo de visión de la gammacámara. Posteriormente se realiza una adquisición SPECT utilizando la matriz de mayor resolución. Los límites de aceptación establecidos son de 2 mm para la desviación del COR y para la variación entre el centro y los bordes. Este control se efectúa mensualmente.',
          'Control de sensibilidad: evalúa la capacidad del sistema para transformar eventos radiactivos en señales detectables y cuantificables. Con periodicidad mensual se prepara una disolución acuosa con una actividad determinada de 99mTc que no supere una tasa de contaje de 20 Kc/s, colocándose posteriormente sobre una placa Petri. La imagen se adquiere con colimador LEAP durante 300 segundos y se calcula la eficiencia de contaje en cuentas por segundo y becquerel. El límite de aceptación se establece en el 80 % del valor de referencia.',
          'Control de resolución espacial: tiene como objetivo valorar la capacidad del equipo para diferenciar dos eventos radiactivos situados a corta distancia entre sí. Se realiza mensualmente mediante un maniquí de cuadrantes y una fuente puntual de 99mTc colocada en el eje del colimador a una distancia equivalente a cinco veces el campo total de visión útil. Se adquieren imágenes cada 45° hasta completar 360° y posteriormente se determina el tamaño mínimo de barras distinguibles en los ejes X e Y. Este control también puede realizarse utilizando una fuente lineal formada por dos capilares paralelos separados 5 cm y con una actividad aproximada de 18,5 MBq. En este caso se determinan los parámetros FWHM (Full Width at Half Maximum) y FWTM (Full Width at Tenth Maximum). Los resultados no deben diferir más de ±5 % respecto a los valores establecidos por el fabricante.',
          'Control de uniformidad tomográfica: de manera similar a los controles de uniformidad intrínseca y extrínseca, esta prueba evalúa la uniformidad de los estudios tomográficos y la correcta delimitación de contornos volumétricos. Para ello se distribuyen homogéneamente entre 200 y 400 MBq de 99mTc en el interior de un maniquí cilíndrico de aproximadamente 20 cm de diámetro. El cilindro se coloca alineado con el eje de rotación de la gammacámara y se realiza una adquisición SPECT con cortes de un píxel de espesor. El criterio de aceptación se basa en la ausencia de artefactos en las imágenes obtenidas. Este control se realiza mensualmente.',
          'Resolución temporal: tiene como finalidad valorar la capacidad del equipo para diferenciar eventos radiactivos producidos en intervalos de tiempo muy cortos. Este control se verifica semestralmente y los resultados obtenidos no deben diferir más del 10 % respecto al valor validado por el fabricante.',
          'Control del tamaño del píxel: consiste en verificar el tamaño real del píxel de una matriz determinada para cada energía y colimador utilizados en la práctica clínica. La prueba se realiza semestralmente colocando dos fuentes radiactivas separadas a una distancia conocida y adquiriendo una imagen con la matriz que proporcione el mayor detalle espacial. Posteriormente se calcula el centro de gravedad de ambas fuentes y el número de píxeles existentes entre ellas. El tamaño del píxel no debe diferir más de un 5 % respecto al valor de referencia establecido.',
        ]
      ),
    ]
  },
  {
    id: 'protocolos-pet',
    title: 'PET',
    summary: 'Procedimientos de puesta en marcha y control de calidad para mantener precisión diagnóstica y cuantificación confiable.',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1659353887988-7f64f5f9d8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      paragraph(
        <>
          De manera similar a lo que ocurre con las gammacámaras, los equipos PET deben someterse a controles de calidad específicos adaptados a sus características técnicas y funcionales. La <em>National Electrical Manufacturers Association</em> (NEMA) y la <em>International Electrotechnical Commission</em> (IEC) son las organizaciones encargadas de establecer y normalizar los procedimientos y criterios de evaluación de estos controles, siendo los protocolos de NEMA los más utilizados de forma habitual. Además, los sistemas PET disponen de programas informáticos integrados que facilitan la realización y el análisis de estas pruebas de control de calidad.
        </>,
        'De manera similar a lo que ocurre con las gammacámaras, los equipos PET deben someterse a controles de calidad específicos adaptados a sus características técnicas y funcionales. La National Electrical Manufacturers Association (NEMA) y la International Electrotechnical Commission (IEC) son las organizaciones encargadas de establecer y normalizar los procedimientos y criterios de evaluación de estos controles, siendo los protocolos de NEMA los más utilizados de forma habitual. Además, los sistemas PET disponen de programas informáticos integrados que facilitan la realización y el análisis de estas pruebas de control de calidad.'
      ),
      paragraph('Entre los principales controles de calidad del PET se encuentran los siguientes:'),
      bulletList(
        [
          <>
            <strong>Control de estabilidad de los detectores:</strong> permite evaluar el funcionamiento de los detectores y detectar posibles fallos o desviaciones en su rendimiento. Este control se realiza diariamente.
          </>,
          <>
            <strong>Calibración del </strong>
            <em>Standardized Uptake Value (SUV)</em>
            <strong>:</strong> tiene como finalidad calibrar el sistema para convertir la densidad de cuentas detectadas en concentración de actividad. Se lleva a cabo durante la aceptación del equipo y posteriormente con periodicidad trimestral.
          </>,
          <>
            <strong>Validación del SUV:</strong> se realiza de forma anual para comprobar la exactitud de la calibración. Los resultados obtenidos deben presentar diferencias inferiores al ±10 % respecto a los valores de referencia.
          </>,
          <>
            <strong>Control de calidad de la imagen y exactitud de las correcciones:</strong> evalúa la correcta aplicación de las correcciones físicas y la calidad global de la imagen obtenida. Se efectúa anualmente y las tolerancias aceptadas son las establecidas por el fabricante.
          </>,
          <>
            <strong>Normalización:</strong> los equipos PET cuentan con entre 10.000 y 20.000 elementos detectores distribuidos en anillos. Las pequeñas variaciones existentes entre ellos, como diferencias de espesor, emisión de luz o propiedades fisicoquímicas, pueden producir variaciones en la tasa de conteo para una misma actividad. La normalización permite corregir estas diferencias y se realiza de manera anual.
          </>,
          <>
            <strong>Resolución espacial:</strong> se expresa mediante los parámetros FWHM (<em>Full Width at Half Maximum</em>) y FWTM (<em>Full Width at Tenth Maximum</em>), los cuales representan la dispersión espacial producida por factores físicos e instrumentales. Para verificarla se emplean fuentes puntuales suspendidas. Este control se realiza semanalmente y las tolerancias son validadas por la casa fabricante.
          </>,
          <>
            <strong>Sensibilidad:</strong> determina la tasa de eventos detectados por unidad de actividad de la fuente radiactiva. Depende tanto de la eficiencia geométrica, relacionada con la fracción de fotones que alcanzan el detector, como de la eficiencia intrínseca, asociada a la capacidad del detector para registrar dichos fotones. Este control se efectúa mensualmente y la diferencia respecto al valor de referencia debe ser inferior al 10 %.
          </>,
          <>
            <strong>Uniformidad tomográfica:</strong> se realiza mensualmente mediante un maniquí tomográfico rellenable con <sup>18</sup>F. El objetivo es comprobar la uniformidad de la imagen obtenida y verificar la ausencia de artefactos o irregularidades visibles.
          </>,
        ],
        [
          'Control de estabilidad de los detectores: permite evaluar el funcionamiento de los detectores y detectar posibles fallos o desviaciones en su rendimiento. Este control se realiza diariamente.',
          'Calibración del Standardized Uptake Value (SUV): tiene como finalidad calibrar el sistema para convertir la densidad de cuentas detectadas en concentración de actividad. Se lleva a cabo durante la aceptación del equipo y posteriormente con periodicidad trimestral.',
          'Validación del SUV: se realiza de forma anual para comprobar la exactitud de la calibración. Los resultados obtenidos deben presentar diferencias inferiores al ±10 % respecto a los valores de referencia.',
          'Control de calidad de la imagen y exactitud de las correcciones: evalúa la correcta aplicación de las correcciones físicas y la calidad global de la imagen obtenida. Se efectúa anualmente y las tolerancias aceptadas son las establecidas por el fabricante.',
          'Normalización: los equipos PET cuentan con entre 10.000 y 20.000 elementos detectores distribuidos en anillos. Las pequeñas variaciones existentes entre ellos, como diferencias de espesor, emisión de luz o propiedades fisicoquímicas, pueden producir variaciones en la tasa de conteo para una misma actividad. La normalización permite corregir estas diferencias y se realiza de manera anual.',
          'Resolución espacial: se expresa mediante los parámetros FWHM (Full Width at Half Maximum) y FWTM (Full Width at Tenth Maximum), los cuales representan la dispersión espacial producida por factores físicos e instrumentales. Para verificarla se emplean fuentes puntuales suspendidas. Este control se realiza semanalmente y las tolerancias son validadas por la casa fabricante.',
          'Sensibilidad: determina la tasa de eventos detectados por unidad de actividad de la fuente radiactiva. Depende tanto de la eficiencia geométrica, relacionada con la fracción de fotones que alcanzan el detector, como de la eficiencia intrínseca, asociada a la capacidad del detector para registrar dichos fotones. Este control se efectúa mensualmente y la diferencia respecto al valor de referencia debe ser inferior al 10 %.',
          'Uniformidad tomográfica: se realiza mensualmente mediante un maniquí tomográfico rellenable con 18F. El objetivo es comprobar la uniformidad de la imagen obtenida y verificar la ausencia de artefactos o irregularidades visibles.',
        ]
      ),
    ]
  }
];

export const protocolsSearchEntries: SearchEntry[] = protocolItems.map((protocol) => ({
  id: `search-${protocol.id}`,
  sectionId: 'protocolos',
  subSectionId: protocol.id,
  sectionLabel: 'Protocolos de Puesta en Marcha',
  title: protocol.title,
  content: `${protocol.summary} ${protocol.details.map((detail) => detail.plainText).join(' ')}`,
  resultType: 'subsection',
}));

export function Protocols({ selectedSubSectionId = null, onBackToOverview }: ProtocolsProps) {
  const [activeProtocolId, setActiveProtocolId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = protocolItems.some((item) => item.id === selectedSubSectionId);
    setActiveProtocolId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedProtocol = protocolItems.find((item) => item.id === activeProtocolId) ?? null;

  const handleBack = () => {
    setActiveProtocolId(null);
    onBackToOverview?.();
  };

  if (selectedProtocol) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a protocolos
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedProtocol.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedProtocol.image}
              alt={selectedProtocol.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedProtocol.details.map((detail, index) => (
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
            <img src={protocolosIcono} alt="" className="w-16 h-16 object-contain flex-shrink-0" aria-hidden="true" />
            <h2 className="text-gray-900 dark:text-white">Protocolos de Puesta en Marcha</h2>
          </div>
          <div className="space-y-4 text-black dark:text-white leading-relaxed">
            <p>
              Los protocolos de puesta en marcha de los equipos se realizan una vez que estos han sido recibidos e instalados en la unidad de Medicina Nuclear. Su <strong>principal objetivo</strong> es comprobar que el funcionamiento del equipo cumple con la normativa vigente y con las especificaciones técnicas establecidas por el fabricante.
            </p>
            <p>
              Estas pruebas se llevan a cabo antes de que el equipo pueda utilizarse con fines clínicos, por lo que no se autoriza su uso asistencial hasta obtener resultados satisfactorios en todas las verificaciones realizadas.
            </p>
            <p>
              Asimismo, los controles de aceptación son efectuados por personal responsable de la empresa suministradora en colaboración con el Servicio de Radiofísica asociado a la unidad de Medicina Nuclear. Los resultados obtenidos servirán como referencia durante toda la vida útil del equipo y permitirán comparar y evaluar las pruebas de control de calidad y mantenimiento que deban realizarse de forma periódica.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {protocolItems.map((protocol) => (
            <ProtocolButton
              key={protocol.id}
              item={protocol}
              onOpen={setActiveProtocolId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
