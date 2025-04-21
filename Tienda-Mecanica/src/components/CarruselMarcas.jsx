import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const brands = [
    
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
            <img src={logo} alt={`Logo ${index + 1}`} className="h-16 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
