import { useState, useEffect } from 'react';
import './MiembrosCarousel.css';

interface Miembro {
  id: number;
  nombre: string;
  imagen: string;
  cargo: string;
}

export default function MiembrosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Datos de ejemplo - reemplazar con datos reales
  const miembros: Miembro[] = [
    {
      id: 1,
      nombre: 'Miembro 1',
      imagen: '/fonts/hero-image-1.png',
      cargo: 'Especialista',
    },
    {
      id: 2,
      nombre: 'Miembro 2',
      imagen: '/fonts/hero-image-2.png',
      cargo: 'Nutricionista',
    },
    {
      id: 3,
      nombre: 'Miembro 3',
      imagen: '/fonts/hero-image-1.png',
      cargo: 'Biohacker',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % miembros.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [miembros.length, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % miembros.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + miembros.length) % miembros.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % miembros.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + miembros.length) % miembros.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  return (
    <div className="relative overflow-visible w-full miembros-carousel-wrapper">
      <div
        className="relative h-[280px] md:h-[400px] lg:h-[650px] flex items-center justify-center w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {miembros.map((miembro, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + miembros.length) % miembros.length;
          const isNext = index === (activeIndex + 1) % miembros.length;

          if (!isActive && !isPrev && !isNext) {
            return null;
          }

          let translateX = '0';
          let zIndex = 1;
          let scale = 1;

          if (isActive) {
            translateX = '-50%';
            zIndex = 10;
            scale = 1;
          } else if (isPrev) {
            translateX = '-105%';
            zIndex = 5;
            scale = 0.85;
          } else if (isNext) {
            translateX = '5%';
            zIndex = 5;
            scale = 0.85;
          }

          return (
            <div
              key={miembro.id}
              className={`absolute left-1/2 transition-all duration-500 ease-in-out w-[55%] md:w-[50%] lg:w-[45%] max-w-[220px] md:max-w-[300px] lg:max-w-[400px] ${
                !isActive ? 'cursor-pointer' : ''
              }`}
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex,
              }}
              onClick={() => !isActive && setActiveIndex(index)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl lg:text-3xl font-serif text-white mb-1 md:mb-2">
                    {miembro.nombre}
                  </h4>
                  <p className="text-sm md:text-lg font-sans text-white/90">
                    {miembro.cargo}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

