import { useState, useEffect } from 'react';

const words = ['Biohacking', 'Epigenética', 'Nutrición'];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // Cambiar palabra después de la animación de fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        // Fade in
        setIsVisible(true);
      }, 500); // Mitad del tiempo de transición
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2'
      }`}
      style={{ color: '#b29981' }}
    >
      {words[currentIndex]}
    </span>
  );
}


