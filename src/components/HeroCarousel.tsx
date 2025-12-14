import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Forzar actualización del autoplay después de que el componente se monte
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Asegurar que el autoplay se inicie
          setTimeout(() => {
            swiper.autoplay?.start();
          }, 100);
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={2000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }}
        loop={true}
        className="hero-carousel"
        style={{ width: '100%', height: '100%' }}
        allowTouchMove={true}
      >
        <SwiperSlide>
          {/* Imagen móvil */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: "url('/fonts/imagen-portada-1-movil.jpeg')" }}
          />
          {/* Imagen desktop/tablet */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/fonts/hero-image-1.png')" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* Imagen móvil */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: "url('/fonts/portada-2-movil.png')" }}
          />
          {/* Imagen desktop/tablet */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/fonts/hero-image-2.png')" }}
          />
        </SwiperSlide>
      </Swiper>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
    </div>
  );
}

