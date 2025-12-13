import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Estilos para el carousel
const carouselStyles = `
  .test-carousel .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(106, 32, 68, 0.3);
    opacity: 1;
    transition: all 0.3s ease;
  }
  .test-carousel .swiper-pagination-bullet-active {
    background: #6a2044;
    width: 28px;
    border-radius: 5px;
  }
  
  .tabs-carousel {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .tabs-carousel .swiper-slide {
    width: auto;
  }
  
  /* Rollo fotográfico - desplazamiento continuo */
  @keyframes scrollRoll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .image-roll {
    display: flex;
    animation: scrollRoll 25s linear infinite;
    width: fit-content;
  }
  
  .image-roll:hover {
    animation-play-state: paused;
  }
  
  .roll-container {
    overflow: hidden;
    border-radius: 1rem;
    position: relative;
  }
  
  .roll-container::before,
  .roll-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 10;
    pointer-events: none;
  }
  
  .roll-container::before {
    left: 0;
    background: linear-gradient(90deg, #f6f0ea, transparent);
  }
  
  .roll-container::after {
    right: 0;
    background: linear-gradient(-90deg, #f6f0ea, transparent);
  }
`;

export default function TestEpigeneticoTabs() {
  const [activeTab, setActiveTab] = useState('que-es');
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>('energia');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const tabs = [
    { id: 'que-es', label: 'Qué es' },
    { id: 'como-se-realiza', label: 'Cómo se realiza' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'preguntas', label: 'Preguntas frecuentes' },
  ];
  
  const resultImages: string[] = [
    '/fonts/hero-image-1.png',
    '/fonts/hero-image-2.png',
    '/fonts/servicio-test-epigenetico.png',
    '/fonts/servicio-programa-nutricional-uno.png',
    '/fonts/servicio-programa-nutricional-dos.png',
  ];

  // Calcular el porcentaje de progreso según el tab activo
  const getProgressPercentage = () => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    return ((activeIndex + 1) / tabs.length) * 100;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <style>{carouselStyles}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Toggle Buttons */}
          <div className="mb-8">
            {/* Carousel en móvil */}
            <div className="md:hidden mb-4">
              <Swiper
                modules={[]}
                spaceBetween={16}
                slidesPerView="auto"
                className="tabs-carousel"
              >
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.id} style={{ width: 'auto' }}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 font-sans text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-transparent text-primary border-2 border-primary hover:bg-primary/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Botones normales en tablet/desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-sans text-base font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-transparent text-primary border-2 border-primary hover:bg-primary/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Barra de progreso */}
            <div className="relative h-1 bg-primary/20 rounded-full overflow-hidden max-w-4xl mx-auto">
              <div 
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[400px]">
            {/* Qué es */}
            {activeTab === 'que-es' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-6">
                    ¿Qué es el test epigenético?
                  </h2>
                  <div className="space-y-4 text-base lg:text-lg font-sans text-primary/80 leading-relaxed">
                    <p>
                      El test epigenético es una herramienta de diagnóstico que analiza cómo los factores externos —como la alimentación, los contaminantes ambientales y el estrés— están afectando tu expresión génica sin alterar tu ADN. Esta prueba no se centra en tu secuencia genética, sino en cómo los genes se activan o desactivan según tu entorno.
                    </p>
                    <p>
                      A través de este análisis, puedes descubrir qué áreas de tu salud están comprometidas y cómo intervenir de forma precisa para mejorar tu bienestar general. Se convierte así en una poderosa herramienta preventiva y de optimización de la salud a largo plazo.
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-lg mx-auto md:mx-0 lg:max-w-none">
                  {/* Carousel de imágenes */}
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="test-carousel w-full rounded-2xl overflow-hidden"
                  >
                    <SwiperSlide>
                      <img 
                        src="/fonts/hero-image-1.png" 
                        alt="Test epigenético" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img 
                        src="/fonts/servicio-programa-nutricional-uno.png" 
                        alt="Nutrición" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img 
                        src="/fonts/servicio-test-epigenetico.png" 
                        alt="Análisis epigenético" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            )}

            {/* Cómo se realiza */}
            {activeTab === 'como-se-realiza' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Lado izquierdo - Explicación */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-6">
                    Explicación del proceso
                  </h2>
                  <div className="space-y-4 text-base lg:text-lg font-sans text-primary/80 leading-relaxed">
                    <p>
                      El proceso es rápido, indoloro y no invasivo. Consiste en tomar de 3 a 5 cabellos de la zona occipital de tu cabeza, los cuales contienen información valiosa sobre tu estado epigenético.
                    </p>
                    <p>
                      Esta muestra se analiza mediante una tecnología que examina 96 biomarcadores relacionados con deficiencias nutricionales, exposición a contaminantes, estrés oxidativo y otros factores clave.
                    </p>
                    <p>
                      En apenas 15 minutos se recoge la muestra y, en un plazo de 2 a 3 días, recibirás un informe completo con la prioridad de los indicadores alterados. Este informe permite diseñar un plan nutricional individualizado según tus necesidades biológicas reales.
                    </p>
                  </div>
                </div>

                {/* Lado derecho - Protocolo */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">
                    Protocolo
                  </h2>
                  <p className="text-base font-sans text-primary/60 mb-6">
                    Cada sesión consta de pasos sencillos que aseguran un proceso efectivo y cómodo.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tiempo de la sesión */}
                    <div className="flex items-start gap-4 p-4 bg-neutral rounded-xl border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-primary text-sm">Tiempo de la sesión</h4>
                        <p className="font-sans text-secondary text-sm">15-20 minutos</p>
                      </div>
                    </div>

                    {/* Número de sesiones */}
                    <div className="flex items-start gap-4 p-4 bg-neutral rounded-xl border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-primary text-sm">Número de sesiones</h4>
                        <p className="font-sans text-secondary text-sm">1 consulta</p>
                      </div>
                    </div>

                    {/* Tiempo de recuperación */}
                    <div className="flex items-start gap-4 p-4 bg-neutral rounded-xl border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-primary text-sm">Tiempo de recuperación</h4>
                        <p className="font-sans text-secondary text-sm">Sin tiempo de recuperación</p>
                      </div>
                    </div>

                    {/* Dolor */}
                    <div className="flex items-start gap-4 p-4 bg-neutral rounded-xl border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-primary text-sm">Dolor</h4>
                        <p className="font-sans text-secondary text-sm">Completamente indoloro</p>
                      </div>
                    </div>

                    {/* Resultados */}
                    <div className="flex items-start gap-4 p-4 bg-neutral rounded-xl border border-primary/10 sm:col-span-2">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-primary text-sm">Entrega de resultados</h4>
                        <p className="font-sans text-secondary text-sm">2-3 días con informe personalizado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Beneficios */}
            {activeTab === 'beneficios' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Lado izquierdo */}
                <div className="space-y-8">
                  {/* ¿Esto es para mí? */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4">
                      ¿Esto es para mí?
                    </h3>
                    <p className="text-base font-sans text-primary/80 leading-relaxed mb-4">
                      Este test es ideal para cualquier persona interesada en tomar el control de su salud de forma proactiva y precisa, desde deportistas hasta personas preocupadas por el envejecimiento, quienes siguen una dieta vegana o experimentan molestias no específicas sin causa aparente.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Si tienes fatiga constante',
                        'Si quieres mejorar tu energía',
                        'Si tienes digestiones pesadas',
                        'Si quieres optimizar tu salud'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-sans text-base text-primary/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Beneficios principales */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4">
                      Beneficios
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        'Bienestar celular',
                        'Inmunidad reforzada',
                        'Mayor energía'
                      ].map((benefit, index) => (
                        <span
                          key={index}
                          className="px-5 py-2.5 bg-white border-2 border-primary text-primary font-sans text-sm font-medium rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lado derecho - Acordeón */}
                <div className="bg-neutral rounded-2xl p-6 lg:p-8">
                  <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-2">
                    ¿Qué puedes esperar de este test?
                  </h3>
                  <p className="text-sm font-sans text-primary/60 mb-6">
                    Valores que consideran las preocupaciones de nuestros pacientes:
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      {
                        id: 'energia',
                        title: 'Mejor energía y vitalidad',
                        description: 'El test ayuda a detectar deficiencias nutricionales específicas que podrían estar causando fatiga o bajo rendimiento físico. Al ajustar la dieta, se optimiza el metabolismo energético celular.'
                      },
                      {
                        id: 'inmunidad',
                        title: 'Optimización del sistema inmune',
                        description: 'Identifica desequilibrios nutricionales que pueden debilitar tu sistema inmunológico. Con las recomendaciones personalizadas, fortaleces tus defensas naturales.'
                      },
                      {
                        id: 'digestion',
                        title: 'Digestión y salud intestinal mejoradas',
                        description: 'Detecta problemas de absorción de nutrientes y desequilibrios en la flora intestinal. Las intervenciones nutricionales mejoran significativamente tu digestión y bienestar digestivo.'
                      },
                      {
                        id: 'envejecimiento',
                        title: 'Envejecimiento saludable',
                        description: 'Revela factores que aceleran el envejecimiento celular y permite intervenir para mantener la juventud física y cognitiva por más tiempo.'
                      },
                      {
                        id: 'mental',
                        title: 'Mayor claridad mental y bienestar emocional',
                        description: 'Un sistema equilibrado reduce el estrés oxidativo y mejora el funcionamiento del eje intestino-cerebro, favoreciendo la concentración, el sueño y el bienestar emocional.'
                      }
                    ].map((benefit) => (
                      <div
                        key={benefit.id}
                        className="bg-white rounded-xl border border-primary/10 overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedBenefit(expandedBenefit === benefit.id ? null : benefit.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-light transition-colors"
                        >
                          <span className="font-sans font-semibold text-primary text-sm lg:text-base">
                            {benefit.title}
                          </span>
                          <svg
                            className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                              expandedBenefit === benefit.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedBenefit === benefit.id && (
                          <div className="px-4 pb-4">
                            <p className="font-sans text-sm text-primary/70 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Resultados */}
            {activeTab === 'resultados' && (
              <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
                {/* Lado izquierdo - Texto */}
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-serif text-primary">
                    Los resultados confirman la efectividad
                  </h2>
                  
                  <div className="space-y-4 text-base lg:text-lg font-sans text-primary/80 leading-relaxed">
                    <p>
                      El test epigenético es una herramienta poderosa que permite visualizar cómo tus hábitos actuales están influyendo en tu expresión génica. Los resultados muestran áreas de mejora específicas y cómo intervenir de manera efectiva.
                    </p>
                    <p>
                      Nuestros pacientes reportan mejoras significativas en sus niveles de energía, calidad de sueño, digestión y bienestar general después de seguir las recomendaciones personalizadas basadas en sus resultados epigenéticos.
                    </p>
                    <p>
                      También es una excelente opción si has intentado otros métodos sin resultados visibles o si buscas un enfoque complementario a tu rutina de ejercicio y alimentación saludable. El test potencia los resultados de un estilo de vida equilibrado.
                    </p>
                  </div>
                  
                  {/* Nota informativa */}
                  <div className="bg-neutral rounded-xl p-5 border border-primary/10">
                    <p className="font-sans text-sm text-primary/70 leading-relaxed">
                      Los resultados pueden variar en función de las características individuales de cada paciente, incluyendo factores como el estilo de vida, la condición tratada y la adherencia a las recomendaciones. La efectividad está directamente relacionada con el cumplimiento del plan nutricional y las modificaciones de hábitos sugeridas. En la mayoría de los casos, se observan mejoras notables en un plazo de 3 a 6 meses.
                    </p>
                  </div>
                </div>

                {/* Lado derecho - Rollo fotográfico */}
                <div className="relative">
                  <div className="bg-neutral rounded-2xl p-6">
                    <div className="roll-container">
                      <div className="image-roll">
                        {/* Primera serie de imágenes */}
                        {resultImages.map((img, index) => (
                          <div key={`first-${index}`} className="flex-shrink-0 px-3">
                            <img
                              src={img}
                              alt={`Resultado ${index + 1}`}
                              className="w-56 h-72 object-cover rounded-xl shadow-lg"
                            />
                          </div>
                        ))}
                        {/* Segunda serie (para loop continuo) */}
                        {resultImages.map((img, index) => (
                          <div key={`second-${index}`} className="flex-shrink-0 px-3">
                            <img
                              src={img}
                              alt={`Resultado ${index + 1}`}
                              className="w-56 h-72 object-cover rounded-xl shadow-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preguntas frecuentes */}
            {activeTab === 'preguntas' && (
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-10 text-center">
                  Preguntas frecuentes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: 'doloroso',
                      question: '¿Es doloroso el test epigenético?',
                      answer: 'No. Es completamente indoloro. Solo se requiere cortar entre 3 y 5 cabellos de la zona occipital. No se utiliza aguja ni extracción de sangre.'
                    },
                    {
                      id: 'diferencia',
                      question: '¿Qué diferencia hay entre un test de ADN y uno epigenético?',
                      answer: 'El test de ADN revela información genética estática que heredaste de tus padres. El test epigenético muestra cómo el entorno ha afectado tus genes en el momento actual, ofreciendo una visión dinámica de tu salud hoy.'
                    },
                    {
                      id: 'cabello-tenido',
                      question: '¿Puedo hacerme el test si tengo el cabello teñido?',
                      answer: 'Sí. Sin embargo, es preferible acudir con el cabello limpio y sin productos químicos aplicados en las últimas 24 horas para obtener resultados más precisos. Si no se puede analizar el cabello, se puede usar una muestra de las cejas.'
                    },
                    {
                      id: 'frecuencia',
                      question: '¿Con qué frecuencia se puede repetir?',
                      answer: 'Hasta 4 veces al año. Hacerlo periódicamente permite evaluar la evolución de tu estado epigenético y comprobar la eficacia de las intervenciones nutricionales y de estilo de vida.'
                    },
                    {
                      id: 'informe',
                      question: '¿Recibiré un informe personalizado?',
                      answer: 'Sí. El informe se adapta a tus necesidades e incluye gráficos, prioridades y un plan nutricional específico diseñado para optimizar tu bienestar.'
                    },
                    {
                      id: 'sustituto',
                      question: '¿Es un sustituto de los exámenes médicos?',
                      answer: 'No. Aunque ofrece información muy útil, no reemplaza controles médicos tradicionales ni diagnósticos clínicos. Es un complemento para mejorar tu salud desde un enfoque preventivo y personalizado.'
                    }
                  ].map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white rounded-xl border border-primary/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                        className="w-full flex items-start justify-between p-5 text-left hover:bg-neutral-light transition-colors"
                      >
                        <h3 className="font-serif text-lg text-primary pr-4 flex-1">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-primary transition-transform flex-shrink-0 mt-0.5 ${
                            expandedFaq === faq.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="px-5 pb-5">
                          <p className="font-sans text-sm lg:text-base text-primary/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

