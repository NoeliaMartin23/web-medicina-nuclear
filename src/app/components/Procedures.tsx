import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Radar, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import protocolosIcono from '../../assets/protocolos-icono.svg';
import type { SearchEntry } from '../searchTypes';

interface ProcedureItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: ProcedureDetail[];
}

interface ProceduresProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ProcedureButtonProps {
  item: ProcedureItem;
  onOpen: (id: string) => void;
}

interface ProcedureDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'list' | 'imageRow';
  images?: {
    src: string;
    alt: string;
  }[];
}

const paragraph = (
  content: ReactNode,
  plainText?: string
): ProcedureDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const bulletList = (
  items: ReactNode[],
  plainTextItems: string[]
): ProcedureDetail => ({
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

const imageRow = (
  images: {
    src: string;
    alt: string;
  }[]
): ProcedureDetail => ({
  content: null,
  plainText: images.map((image) => image.alt).join(' '),
  kind: 'imageRow',
  images,
});

function ProcedureButton({ item, onOpen }: ProcedureButtonProps) {
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
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <h3 className="text-gray-900 dark:text-white text-xl">{item.title}</h3>
        </div>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{item.summary}</p>
      </div>
    </div>
  );
}

const procedures: ProcedureItem[] = [
  {
    id: 'procedimientos-monitoreo',
    title: 'Monitoreo de área y contaminación',
    summary:
      '',
    icon: <Radar className="w-5 h-5 text-blue-600" />,
    image: '/images/PortadaContaminacion.jpg',
    details: [
      paragraph(
        'La unidad de Medicina Nuclear debe disponer de detectores de radiación ambiental para la vigilancia de área, así como de detectores de contaminación destinados a evaluar la posible presencia de material radiactivo en superficies y zonas de trabajo.'
      ),

      paragraph(
        'Todos estos equipos deben someterse periódicamente a controles de calidad y verificaciones de funcionamiento, con el fin de garantizar mediciones fiables y seguras.'
      ),

      paragraph(
        'Los detectores de radiación ambiental incorporan sistemas de alarma acústica que se activan cuando se superan los límites de exposición previamente establecidos, habitualmente en valores próximos a 10 μSv/h frente a radiación X, gamma o partículas beta.'
      ),

      paragraph(
        'Por su parte, los detectores de contaminación permiten identificar y cuantificar la contaminación radiactiva producida por distintos radioisótopos.'
      ),

      paragraph(
        <>
          Los resultados obtenidos se expresan generalmente en Bq/cm<sup>2</sup>, unidad empleada para determinar el nivel de contaminación superficial presente en un área concreta.
        </>,
        'Los resultados obtenidos se expresan generalmente en Bq/cm2, unidad empleada para determinar el nivel de contaminación superficial presente en un área concreta.'
      ),
      imageRow([
        {
          src: '/images/Contaminacion1.jpg',
          alt: 'Monitoreo de contaminación 1',
        },
        {
          src: '/images/Contaminacion2.jpg',
          alt: 'Monitoreo de contaminación 2',
        },
      ]),
    ],
  },

  {
    id: 'procedimientos-gestion',
    title: 'Gestión de residuos radiactivos',
    summary:
      '',
    icon: <Trash2 className="w-5 h-5 text-blue-600" />,
    image: '/images/PortadaResiduos.jpg',
    details: [
      paragraph(
        'La gestión de residuos radiactivos en Medicina Nuclear engloba los procedimientos destinados a garantizar la protección del personal, los pacientes y el medio ambiente frente a las radiaciones ionizantes.'
      ),

      paragraph(
        'Los residuos generados deben clasificarse según su estado físico, actividad y periodo de semidesintegración, almacenándose en contenedores específicos y correctamente señalizados hasta alcanzar niveles seguros para su eliminación.'
      ),

      paragraph(
        'Los residuos sólidos, líquidos y gaseosos requieren medidas de manipulación y control específicas, así como un registro adecuado de su gestión y supervisión por parte del Servicio de Protección Radiológica.'
      ),
      imageRow([
        {
          src: '/images/Residuos1.jpg',
          alt: 'Gestión de residuos 1',
        },
        {
          src: '/images/Residuos2.jpg',
          alt: 'Gestión de residuos 2',
        },
      ]),
      paragraph('GESTIÓN DE RESIDUOS EN TERAPIA METABÓLICA'),
      imageRow([
        {
          src: '/images/Residuos3.jpg',
          alt: 'Gestión de residuos 3',
        },
        {
          src: '/images/Residuos4.jpg',
          alt: 'Gestión de residuos 4',
        },
      ]),
      paragraph('ALMACEN DE RESIDUOS'),
      imageRow([
        {
          src: '/images/Residuos5.jpg',
          alt: 'Almacén de residuos 5',
        },
        {
          src: '/images/Residuos6.jpg',
          alt: 'Almacén de residuos 6',
        },
        {
          src: '/images/Residuos7.jpg',
          alt: 'Almacén de residuos 7',
        },
      ]),
    ],
  },
];

export const proceduresSearchEntries: SearchEntry[] = procedures.map((procedure) => ({
  id: `search-${procedure.id}`,
  sectionId: 'procedimientos',
  subSectionId: procedure.id,
  sectionLabel: 'Protocolos de Protección Radiológica',
  title: procedure.title,
  content: `${procedure.summary} ${procedure.details.map((detail) => detail.plainText).join(' ')}`,
  resultType: 'subsection',
}));

export function Procedures({ selectedSubSectionId = null, onBackToOverview }: ProceduresProps) {
  const [activeProcedureId, setActiveProcedureId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = procedures.some((item) => item.id === selectedSubSectionId);
    setActiveProcedureId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedProcedure = procedures.find((item) => item.id === activeProcedureId) ?? null;

  const handleBack = () => {
    setActiveProcedureId(null);
    onBackToOverview?.();
  };

  if (selectedProcedure) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a protocolos de protección radiológica
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedProcedure.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedProcedure.image}
              alt={selectedProcedure.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedProcedure.details.map((detail, index) => {
              if (detail.kind === 'list') {
                return <div key={index}>{detail.content}</div>;
              }

              if (detail.kind === 'imageRow') {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
                  >
                    {detail.images?.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
                      >
                        <ImageWithFallback
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[420px] object-contain block"
                        />
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <p key={index} className="text-black dark:text-white leading-relaxed">
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
              src={protocolosIcono}
              alt=""
              className="w-16 h-16 object-contain flex-shrink-0"
              aria-hidden="true"
            />
            <h2 className="text-gray-900 dark:text-white">
              Protocolos de Protección Radiológica
            </h2>
          </div>

          <div className="space-y-4 text-black dark:text-white leading-relaxed">
            <p>
              El técnico debe conocer y aplicar el Reglamento de Protección Sanitaria contra Radiaciones Ionizantes, ya que el trabajo en una unidad de Medicina Nuclear implica riesgos derivados de la exposición a radiaciones ionizantes. Por ello, es fundamental disponer de protocolos de protección radiológica actualizados que garanticen la seguridad de las personas, el medio ambiente y las instalaciones.
            </p>

            <p>
              Las medidas de protección radiológica buscan evitar los efectos deterministas, producidos al superar una dosis umbral, y reducir la probabilidad de efectos estocásticos, cuya aparición es aleatoria y aumenta con la dosis recibida. Estos últimos pueden provocar alteraciones genéticas en la persona expuesta y en su descendencia.
            </p>

            <p>
              Todo sistema de protección radiológica se basa en tres principios fundamentales: justificación, optimización y limitación de dosis. Estos principios persiguen garantizar que la exposición a radiaciones ionizantes, tanto en pacientes como en profesionales, sea la mínima posible dentro de lo razonablemente alcanzable.
            </p>

            <p>
              Una de las principales medidas de protección radiológica es la delimitación y señalización de áreas según el riesgo de irradiación y contaminación radiactiva, diferenciándose entre zonas vigiladas y zonas controladas conforme a la normativa vigente.
            </p>

            <ul className="list-disc pl-8 space-y-3 text-black dark:text-white leading-relaxed">
              <li>
                <strong>Zona vigilada:</strong> es aquella donde puede existir exposición a radiación superior a 1 mSv anual, aunque con baja probabilidad de alcanzar límites elevados. Suelen incluirse en esta categoría pasillos, despachos médicos, salas de control y aseos de pacientes inyectados.
              </li>

              <li>
                <strong>Zona controlada:</strong> es aquella donde existe mayor riesgo de exposición radiológica, pudiendo superarse los 6 mSv anuales. En esta categoría se incluyen habitualmente las salas de exploración, inyección, pacientes inyectados y el cuarto caliente.
              </li>
            </ul>

            <div className="mt-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
              <ImageWithFallback
                src="/images/PR1.jpg"
                alt="Zona controlada en protección radiológica"
                className="w-full h-[250px] object-contain block"
              />
            </div>

            <p>
              La señalización de las zonas debe indicar los riesgos de irradiación y contaminación existentes. Además, el personal expuesto debe someterse a control dosimétrico y clasificarse como categoría A o B. Los técnicos que trabajan en zonas controladas pertenecen normalmente a la categoría A y deben utilizar dosímetros individuales.
            </p>

            <p>
              Para reducir la exposición a las radiaciones se aplican medidas como disminuir el tiempo de exposición, aumentar la distancia respecto a la fuente radiactiva y utilizar blindajes adecuados. En Medicina Nuclear son habituales los protectores de jeringas de plomo o tungsteno, adaptados al tipo y energía del radioisótopo empleado.
            </p>

            <p>
              El Real Decreto 1841/1997 establece las actividades máximas recomendadas para cada exploración y radiofármaco con el fin de evitar sobreexposiciones, aunque en la práctica clínica estas deben ajustarse a las características individuales de cada paciente.
            </p>

            <p>
              Las mujeres embarazadas y en periodo de lactancia requieren medidas especiales de protección radiológica. Durante el embarazo, la dosis al feto no puede superar 1 mSv y, durante la lactancia, deben evitarse tareas con riesgo de incorporación de radionúclidos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((procedure) => (
            <ProcedureButton
              key={procedure.id}
              item={procedure}
              onOpen={setActiveProcedureId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
