import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, FileText, CircleCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SummaryConclusionItem {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  image: string;
  details: string[];
}

interface ResumenConclusionesProps {
  selectedSubSectionId?: string | null;
  onBackToOverview?: () => void;
}

interface ResumenConclusionesButtonProps {
  item: SummaryConclusionItem;
  onOpen: (id: string) => void;
}

function ResumenConclusionesButton({ item, onOpen }: ResumenConclusionesButtonProps) {
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

const summaryConclusionItems: SummaryConclusionItem[] = [
  {
    id: 'resumen-ejecutivo',
    title: 'Resumen',
    summary: 'Síntesis de los puntos clave del programa de mantenimiento en medicina nuclear.',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    image: '/images/FotoResumen.png',
    details: [
      'El trabajo se centra en el mantenimiento de los equipos y del material utilizado en una instalación de Medicina Nuclear, destacando la importancia de garantizar la seguridad, el correcto funcionamiento técnico y la calidad diagnóstica de las exploraciones realizadas.',
      'En primer lugar, se ha estudiado el equipamiento principal presente en una unidad de Medicina Nuclear, incluyendo gammacámaras, sistemas PET-TC, activímetros, generadores y diferentes accesorios necesarios para la adquisición y procesamiento de imágenes diagnósticas. También se ha descrito el material de la sala de exploración, diferenciando entre material fungible y no fungible, así como las medidas necesarias para su conservación, limpieza y reposición.',
      'Además, se han analizado las condiciones de mantenimiento preventivo y correctivo de los equipos, destacando la necesidad de realizar revisiones periódicas para evitar averías y asegurar un funcionamiento preciso, estable y seguro. Tmabién, se ha abordado el procedimiento de cierre de la instalación, incluyendo las verificaciones finales de seguridad, desconexión de equipos y control radiológico del área.',
      'Por otra parte, el trabajo contempla la relevancia de la protección radiológica dentro de Medicina Nuclear, tanto para los trabajadores como para los pacientes y el medio ambiente.',
      'También, se desarrollan las medidas de protección radiológica, el monitoreo de contaminación y la gestión de residuos radiactivos, junto con la documentación necesaria para el registro de averías, incidencias, mantenimiento y reposición de fuentes radiactivas dentro de la instalación.'
    ]
  },
  {
    id: 'conclusiones-finales',
    title: 'Conclusiones',
    summary: 'Conclusiones finales sobre impacto, seguridad y sostenibilidad del mantenimiento.',
    icon: <CircleCheck className="w-5 h-5 text-blue-600" />,
    image: '/images/FotoConclusiones.png',
    details: [
      'El mantenimiento de los equipos y del material de una instalación de Medicina Nuclear constituye una actividad fundamental para garantizar exploraciones diagnósticas seguras, precisas y de calidad. El correcto estado de los equipos no solo influye en la obtención de imágenes fiables, sino también en la seguridad del paciente, del personal sanitario y del entorno de trabajo.',
      'A lo largo del trabajo se ha podido comprobar que los procedimientos de mantenimiento preventivo permiten detectar fallos antes de que afecten al funcionamiento de los sistemas, reduciendo tiempos de inactividad y evitando posibles riesgos radiológicos. Asimismo, la adecuada organización del material de la sala y el cumplimiento de los protocolos de cierre favorecen un entorno de trabajo más eficiente, controlado y seguro.',
      'También se concluye que la protección radiológica tiene un papel esencial dentro de Medicina Nuclear, ya que el uso de sustancias radiactivas requiere controles estrictos y continuos para minimizar la exposición innecesaria. Por ello, los controles de calidad y la vigilancia radiológica deben realizarse de manera periódica, rigurosa y documentada.',
      'Por último, este trabajo permite comprender la gran responsabilidad técnica y sanitaria asociada al mantenimiento de una instalación de Medicina Nuclear. La futura incorporación de los protocolos específicos de control de calidad, gestión de residuos y documentación técnica completará una visión más global, profesional y especializada del funcionamiento integral de este tipo de servicios hospitalarios.'
    ]
  }
];

export const summaryConclusionSearchEntries = summaryConclusionItems.map((item) => ({
  id: `search-${item.id}`,
  sectionId: 'resumen-conclusiones' as const,
  subSectionId: item.id,
  sectionLabel: 'Resumen y Conclusiones',
  title: item.title,
  content: `${item.summary} ${item.details.join(' ')}`,
  resultType: 'subsection' as const,
}));

export function ResumenConclusiones({
  selectedSubSectionId = null,
  onBackToOverview
}: ResumenConclusionesProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>(selectedSubSectionId);

  useEffect(() => {
    const exists = summaryConclusionItems.some((item) => item.id === selectedSubSectionId);
    setActiveItemId(exists ? selectedSubSectionId : null);
  }, [selectedSubSectionId]);

  const selectedItem = summaryConclusionItems.find((item) => item.id === activeItemId) ?? null;

  const handleBack = () => {
    setActiveItemId(null);
    onBackToOverview?.();
  };

  if (selectedItem) {
    return (
      <section className="py-16 px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a resumen y conclusiones
          </button>

          <div className="mb-6">
            <h2 className="text-gray-900 dark:text-white mb-2">{selectedItem.title}</h2>
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageWithFallback
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full max-h-[420px] object-cover block"
            />
          </div>

          <div className="space-y-4">
            {selectedItem.details.map((paragraph, index) => (
                      <p key={index} className="text-black dark:text-white leading-relaxed">
                {paragraph}
              </p>
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
          <h2 className="text-gray-900 dark:text-white mb-3">Resumen y Conclusiones</h2>
                  <p className="text-black dark:text-white">
            Selecciona una subsección para abrir su ventana con información completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summaryConclusionItems.map((item) => (
            <ResumenConclusionesButton
              key={item.id}
              item={item}
              onOpen={setActiveItemId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
