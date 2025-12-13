import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function HeroImagesCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    '/fonts/hero-image-1.png',
    '/fonts/hero-image-2.png',
    '/fonts/servicio-test-epigenetico.png',
    '/fonts/servicio-programa-nutricional-uno.png',
    '/fonts/servicio-programa-nutricional-dos.png',
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
  }, []);

  return (
    <div className="w-full px-4">
      <div className="max-w-full mx-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              swiper.autoplay?.start();
            }, 100);
          }}
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          className="hero-images-carousel"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 backdrop-blur-sm bg-white/10">
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

