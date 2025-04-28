import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '/Users/sebastianlopez/Documents/Duoc/5to Semestre/tienda/Tienda-Mecanica/src/styles/cards.css'; // Cambié a ruta relativa
import { useEffect, useState } from 'react';

const brands = [
  { src: '/logos/Audi.svg', alt: 'Audi' },
  { src: '/logos/BMW.svg', alt: 'BMW' },
  { src: '/logos/Chevrolet.svg', alt: 'Chevrolet' },
  { src: '/logos/Ford_logo.svg', alt: 'Ford' },
  { src: '/logos/Hyundai_Motor_Company_logo.svg', alt: 'Hyundai' },
  { src: '/logos/KIA_logo3.svg', alt: 'KIA' },
  { src: '/logos/Mercedes-Benz_Logo_2010.svg', alt: 'Mercedes-Benz' },
  { src: '/logos/Nissan_2020_logo.svg', alt: 'Nissan' },
  { src: '/logos/Peugeot_Logo.svg', alt: 'Peugeot' },
  { src: '/logos/Renault_2021.svg', alt: 'Renault' },
  { src: '/logos/Toyota_carlogo.svg', alt: 'Toyota' },
  { src: '/logos/Volkswagen_logo_2019.svg', alt: 'Volkswagen' },
  { src: '/logos/Acura.svg', alt: 'Acura' },
  { src: '/logos/Chery.svg', alt: 'Chery' },
  { src: '/logos/Infiniti.svg', alt: 'Infiniti' },
  { src: '/logos/Jeep.svg', alt: 'Jeep' },
  { src: '/logos/Lexus.svg', alt: 'Lexus' },
  { src: '/logos/Mazda.svg', alt: 'Mazda' },
  { src: '/logos/Mitsubishi.svg', alt: 'Mitsubishi' },
  { src: '/logos/Subaru.svg', alt: 'Subaru' },
  { src: '/logos/Suzuki.svg', alt: 'Suzuki' },
];

const colorPalette = [
  'shadow-yellow-300',
  'shadow-green-400',
  'shadow-pink-500',
  'shadow-purple-400',
  'shadow-blue-400',
  'shadow-cyan-400'
];

export default function BrandCarousel() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const initialColors = brands.map(() => 
      colorPalette[Math.floor(Math.random() * colorPalette.length)]
    );
    setColors(initialColors);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prev => prev.map(() => 
        colorPalette[Math.floor(Math.random() * colorPalette.length)]
      ));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 bg-transparent w-full overflow-hidden"> {/* Cambio clave aquí */}
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-12 mx-auto max-w-lg">
          <span className="titulo-carrusel">
            Marcas que confían en nosotros
          </span>
        </h2>

        {/* Fila Superior - Contenedor adicional */}
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={8000}
            loop
            className="swiper-container" /* Clase modificada */
          >
            {brands.map((logo, i) => (
              <SwiperSlide key={`top-${i}`} className="!w-[180px]">
                <div className={`p-5 rounded-xl bg-white transition-all duration-500 ${colors[i]}`}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Fila Inferior - Contenedor adicional */}
        <div className="w-full relative mt-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              reverseDirection: true 
            }}
            speed={8000}
            loop
            className="swiper-container" /* Clase modificada */
          >
            {[...brands].reverse().map((logo, i) => (
              <SwiperSlide key={`bottom-${i}`} className="!w-[180px]">
                <div className={`p-5 rounded-xl bg-white transition-all duration-500 ${colors[i]}`}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}