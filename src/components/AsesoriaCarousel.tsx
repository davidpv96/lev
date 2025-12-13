import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './AsesoriaCarousel.css';

export default function AsesoriaCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        className="asesoria-carousel"
      >
        <SwiperSlide className="!h-auto">
          <div className="bg-primary rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-out hover:scale-105 h-full flex flex-col">
            {/* Imagen arriba con título superpuesto */}
            <div className="w-full h-64 bg-neutral-light relative overflow-hidden">
              <img 
                src="/fonts/servicio-programa-nutricional-uno.png" 
                alt="Solo Asesoría" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Solo Asesoría</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-4 lg:p-5 flex-1 flex flex-col">
              <ul className="space-y-2.5 mb-3">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 Consulta Profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-primary rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-out hover:scale-105 h-full flex flex-col">
            {/* Imagen arriba con título superpuesto */}
            <div className="w-full h-64 bg-neutral-light relative overflow-hidden">
              <img 
                src="/fonts/servicio-programa-nutricional-uno.png" 
                alt="Cuida-T" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Cuida-T</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-4 lg:p-5 flex-1 flex flex-col">
              <ul className="space-y-2.5 mb-3">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Consulta profesional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Plan nutricional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Suplementación inteligente</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-primary rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-out hover:scale-105 h-full flex flex-col">
            {/* Imagen arriba con título superpuesto */}
            <div className="w-full h-64 bg-neutral-light relative overflow-hidden">
              <img 
                src="/fonts/servicio-programa-nutricional-uno.png" 
                alt="Renuave-T" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Renuave-T</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-4 lg:p-5 flex-1 flex flex-col">
              <ul className="space-y-2.5 mb-3">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Consulta profesional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Plan nutricional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Suplementación inteligente</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 seguimiento</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 evaluación final</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-primary rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-out hover:scale-105 h-full flex flex-col">
            {/* Imagen arriba con título superpuesto */}
            <div className="w-full h-64 bg-neutral-light relative overflow-hidden">
              <img 
                src="/fonts/servicio-programa-nutricional-uno.png" 
                alt="Transforma-T" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Transforma-T</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-4 lg:p-5 flex-1 flex flex-col">
              <ul className="space-y-2.5 mb-3">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Consulta profesional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Plan nutricional</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Suplementación inteligente</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 seguimientos</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 evaluaciones</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 sesiones de estimulación de nervio vago</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

