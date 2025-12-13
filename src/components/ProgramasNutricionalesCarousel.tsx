import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './AsesoriaCarousel.css';

export default function ProgramasNutricionalesCarousel() {
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
                alt="Construye T" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Construye T</h4>
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
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 Test Epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Interpretación de test epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Plan Nutricional + 1 sesión para explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 Seguimiento</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 evaluación después de los 21 días máximo 30 días</span>
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
                src="/fonts/servicio-programa-nutricional-dos.png" 
                alt="Level Up" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Level Up</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                  <span className="text-white/95 font-sans text-base leading-relaxed">1 Test Epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Interpretación de test epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 Plan Nutricional + 2 sesión para explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 Seguimiento</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 evaluación después de los 21 días máximo 30 días</span>
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
                alt="Glow uP" 
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Título en la imagen */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl lg:text-3xl font-serif text-white drop-shadow-lg">Glow uP</h4>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
                  <span className="text-white/95 font-sans text-base leading-relaxed">2 Test Epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">Interpretación de test epi</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">3 Plan Nutricional + 3 sesión para explicación de plan</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">3 Seguimiento</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/95 font-sans text-base leading-relaxed">3 evaluación después de los 21 días máximo 30 días</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

