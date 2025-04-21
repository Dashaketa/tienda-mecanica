import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Los logos en tu proyecto
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
];

export default function BrandCarousel() {
  return (
    <div className="py-12 bg-black/10">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Marcas que confían en nosotros</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-[0_0_20px_20px_rgba(134,239,172,0.4)] hover:scale-[1.05] transition-all duration-1000">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-full object-contain grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
