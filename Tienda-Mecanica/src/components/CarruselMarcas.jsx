import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';



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


export default function BrandCarousel() {
    return (
      <div className="relative py-24 min-h-[500px] overflow-hidden">
        
        {/* === FONDO RADIAL ORIGINAL (exacto al que me pasaste) === */}
  
        {/* === CONTENIDO OPTIMIZADO === */}
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Marcas que confían en nosotros
          </h2>
  
          {/* Fila Superior (→) */}
          <div className="mb-12">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={40}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={7000}
              loop
              className="!overflow-visible"
            >
              {[...brands, ...brands].map((logo, i) => (
                <SwiperSlide key={`top-${i}`} className="!w-[180px]">
                  <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-white/10
                       transition-all duration-300 hover:shadow-md">
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
  
          {/* Fila Inferior (←) */}
          <div className="mt-12">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={40}
              autoplay={{ 
                delay: 0, 
                disableOnInteraction: false,
                reverseDirection: true 
              }}
              speed={7000}
              loop
              className="!overflow-visible"
            >
              {[...brands, ...brands].reverse().map((logo, i) => (
                <SwiperSlide key={`bottom-${i}`} className="!w-[180px]">
                  <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-white/10
                       transition-all duration-300 hover:shadow-md">
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


      <section className="p-6 relative z-10">
          <h2 className="text-3xl font-bold text-center">{heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
  }