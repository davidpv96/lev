import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function CtaCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    '/fonts/hero-image-1.png',
    '/fonts/hero-image-2.png',
    '/fonts/servicio-test-epigenetico.png',
    '/fonts/servicio-programa-nutricional-uno.png',
    '/fonts/servicio-programa-nutricional-dos.png',
  ];

  // Duplicar imágenes para loop continuo
  const duplicatedImages = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        allowTouchMove={false}
        className="cta-bg-carousel w-full h-full"
      >
        {duplicatedImages.map((img, index) => (
          <SwiperSlide key={index} style={{ width: 'auto', height: '100%' }}>
            <img 
              src={img} 
              alt="" 
              className="h-full w-auto object-cover rounded-lg opacity-20"
              style={{ filter: 'blur(2px)' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

