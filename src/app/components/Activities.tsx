import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Zap, Gauge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import actividadesIcono from '../../assets/actividades-icono.svg';
import type { SearchEntry } from '../searchTypes';

interface ActivityItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: ActivityDetail[];
}

interface ActivitiesProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ActivityButtonProps {
  item: ActivityItem;
  onOpen: (id: string) => void;
}

interface ActivityDetail {
  content: ReactNode;
  plainText: string;
  kind?: 'paragraph' | 'list';
}

const paragraph = (content: ReactNode, plainText?: string): ActivityDetail => ({
  content,
  plainText: plainText ?? (typeof content === 'string' ? content : ''),
  kind: 'paragraph',
});

const bulletList = (items: ReactNode[], plainTextItems: string[]): ActivityDetail => ({
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

function ActivityButton({ item, onOpen }: ActivityButtonProps) {
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

const activities: ActivityItem[] = [
  {
    id: 'actividades-generador',
    title: 'Generador',
    summary:
      'Controles de calidad del generador de 99Mo/99mTc para garantizar la pureza, seguridad y rendimiento del eluido.',
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1563213126-a4273aed2016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      paragraph(
        <>
          El generador de <sup>99</sup>Mo/<sup>99m</sup>Tc constituye un elemento fundamental en los servicios de Medicina Nuclear, ya que permite la obtención diaria de pertecnetato de sodio. Debido a su importancia clínica y radiológica, es necesario realizar controles de calidad periódicos que garanticen la pureza, seguridad y correcto funcionamiento del sistema.
        </>,
        'El generador de 99Mo/99mTc constituye un elemento fundamental en los servicios de Medicina Nuclear, ya que permite la obtención diaria de pertecnetato de sodio. Debido a su importancia clínica y radiológica, es necesario realizar controles de calidad periódicos que garanticen la pureza, seguridad y correcto funcionamiento del sistema.'
      ),

      paragraph(
        'Los controles de calidad del generador tienen como finalidad comprobar que el eluido obtenido presenta unas condiciones adecuadas para su administración a pacientes, verificando tanto la actividad obtenida como la ausencia de contaminantes físicos, químicos y radionucleídicos.'
      ),

      paragraph(
        'Entre los principales controles de calidad realizados sobre el generador destacan los siguientes:'
      ),

      bulletList(
        [
          <>
            <strong>Control de pureza radionucleídica:</strong> tiene como objetivo detectar la posible presencia de <sup>99</sup>Mo en el eluido de <sup>99m</sup>Tc. Esta prueba se realiza mediante un activímetro utilizando blindaje de plomo específico para diferenciar la energía emitida por ambos radionúclidos.
          </>,
          <>
            <strong>Control de pureza química:</strong> permite determinar la presencia de aluminio procedente de la columna de alúmina del generador. Un exceso de aluminio puede interferir en el marcaje de los radiofármacos y alterar la biodistribución del radiofármaco administrado.
          </>,
          <>
            <strong>Control de rendimiento de elución:</strong> evalúa la cantidad de actividad de <sup>99m</sup>Tc obtenida tras la elución del generador en comparación con la actividad teórica esperada según el decaimiento del <sup>99</sup>Mo. Este control permite detectar posibles alteraciones en el funcionamiento del generador o pérdidas de eficiencia en la elución.
          </>,
          <>
            <strong>Control visual del eluido:</strong> consiste en comprobar que la solución obtenida sea transparente, incolora y libre de partículas visibles o precipitados.
          </>,
          <>
            <strong>Registro y trazabilidad:</strong> todos los controles realizados deben quedar correctamente documentados, incluyendo fecha, hora de elución, actividad obtenida, número de lote, resultados de pureza y posibles incidencias detectadas.
          </>,
        ],
        [
          'Control de pureza radionucleídica: tiene como objetivo detectar la posible presencia de 99Mo en el eluido de 99mTc. Esta prueba se realiza mediante un activímetro utilizando blindaje de plomo específico para diferenciar la energía emitida por ambos radionúclidos.',
          'Control de pureza química: permite determinar la presencia de aluminio procedente de la columna de alúmina del generador. Un exceso de aluminio puede interferir en el marcaje de los radiofármacos y alterar la biodistribución del radiofármaco administrado.',
          'Control de rendimiento de elución: evalúa la cantidad de actividad de 99mTc obtenida tras la elución del generador en comparación con la actividad teórica esperada según el decaimiento del 99Mo.',
          'Control visual del eluido: consiste en comprobar que la solución obtenida sea transparente, incolora y libre de partículas visibles o precipitados.',
          'Registro y trazabilidad: todos los controles realizados deben quedar correctamente documentados, incluyendo fecha, hora de elución, actividad obtenida, número de lote, resultados de pureza y posibles incidencias detectadas.',
        ]
      ),

      paragraph(
        'La realización periódica de estos controles garantiza la obtención de radiofármacos seguros, eficaces y adecuados para su utilización clínica, contribuyendo a mantener la calidad diagnóstica y la seguridad radiológica en la unidad de Medicina Nuclear.'
      ),
    ],
  },

  {
    id: 'actividades-activimetro',
    title: 'Activímetro',
    summary:
      'Controles de calidad del activímetro para asegurar medidas trazables, precisas y reproducibles de actividad radiactiva.',
    icon: <Gauge className="w-5 h-5 text-blue-600" />,
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      paragraph(
        'Un activímetro es un equipo importante en radiofarmacia que se utiliza para medir la actividad radiactiva de un radiofármaco antes de administrarlo a un paciente.'
      ),

      paragraph(
        'Los controles de calidad del activímetro son importantes para asegurar que la actividad radiactiva medida es trazable, precisa y reproducible. Estos controles están regulados por el Consejo de Seguridad Nuclear.'
      ),

      paragraph(
        'Entre los principales controles de calidad del activímetro destacan los siguientes:'
      ),

      bulletList(
        [
          <>
            <strong>Prueba de constancia:</strong> este control se realiza diariamente y sirve para verificar que el activímetro da la misma lectura para una fuente conocida.
          </>,
          <>
            <strong>Prueba de exactitud:</strong> este control se realiza anualmente y sirve para confirmar que el equipo mide la actividad real.
          </>,
          <>
            <strong>Prueba de linealidad:</strong> este control se realiza cada 3-6 meses y sirve para verificar que el equipo mide correctamente un rango amplio de actividades.
          </>,
          <>
            <strong>Control de fondo:</strong> este control se realiza diariamente y sirve para determinar la radiación de fondo ambiental.
          </>,
          <>
            <strong>Prueba de geometría:</strong> evalúa la influencia del volumen y el recipiente en la medida realizada.
          </>,
        ],
        [
          'Prueba de constancia: este control se realiza diariamente y sirve para verificar que el activímetro da la misma lectura para una fuente conocida.',
          'Prueba de exactitud: este control se realiza anualmente y sirve para confirmar que el equipo mide la actividad real.',
          'Prueba de linealidad: este control se realiza cada 3-6 meses y sirve para verificar que el equipo mide correctamente un rango amplio de actividades.',
          'Control de fondo: este control se realiza diariamente y sirve para determinar la radiación de fondo ambiental.',
          'Prueba de geometría: evalúa la influencia del volumen y el recipiente en la medida realizada.',
        ]
      ),
    ],
  },
];

export const activitiesSearchEntries: SearchEntry[] = activities.map((activity) => ({
  id: `search-${activity.id}`,
  sectionId: 'actividades',
  subSectionId: activity.id,
  sectionLabel: 'Actividades',
  title: activity.title,
  content: `${activity.summary} ${activity.details.map((detail) => detail.plainText).join(' ')}`,
  resultType: 'subsection',
}));

export function Activities({ selectedSubSectionId = null, onBackToOverview }: ActivitiesProps) {
  const [activeActivityId, setActiveActivityId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = activities.some((item) => item.id === selectedSubSectionId);
    setActiveActivityId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedActivity = activities.find((item) => item.id === activeActivityId) ?? null;

  const handleBack = () => {
    setActiveActivityId(null);
    onBackToOverview?.();
  };

  if (selectedActivity) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a actividades
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedActivity.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedActivity.image}
              alt={selectedActivity.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedActivity.details.map((detail, index) =>
              detail.kind === 'list' ? (
                <div key={index}>{detail.content}</div>
              ) : (
                <p key={index} className="text-black dark:text-white leading-relaxed">
                  {detail.content}
                </p>
              )
            )}
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
              src={actividadesIcono}
              alt=""
              className="w-16 h-16 object-contain flex-shrink-0"
              aria-hidden="true"
            />
            <h2 className="text-gray-900 dark:text-white">
              Actividades de mantenimiento de equipos, accesorios y periféricos
            </h2>
          </div>

          <div className="space-y-4 text-black dark:text-white leading-relaxed">
            <p>
              Las pruebas de aceptación tienen como finalidad comprobar que los equipos funcionan de acuerdo con la normativa vigente y con las especificaciones técnicas establecidas por el fabricante. Una vez que el equipo entra en funcionamiento clínico, los valores obtenidos durante estas pruebas sirven como referencia para la realización de los controles periódicos posteriores, conocidos como pruebas de constancia.
            </p>

            <p>
              Todo el equipamiento de una unidad de Medicina Nuclear está sometido a programas de mantenimiento y control de calidad. La periodicidad de estas pruebas varía según el tipo de control realizado, pudiendo efectuarse de manera diaria, semanal, mensual, semestral o anual.
            </p>

            <p>
              En el caso del activímetro, los controles que precisan fuentes radiactivas se realizan habitualmente con fuentes de <sup>137</sup>Cs de aproximadamente 1 mCi de actividad. Entre las pruebas de control efectuadas diariamente destacan el control de respuesta de fondo y el control de exactitud y precisión.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <ActivityButton
              key={activity.id}
              item={activity}
              onOpen={setActiveActivityId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
