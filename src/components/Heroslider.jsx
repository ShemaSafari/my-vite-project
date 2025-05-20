import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const Heroslider = () => {

    const slides = [
        {
            image: `/Flags/Rwanda flag.png`,
            title: 'Rwanda',
        },
        {
            image: `/Flags/SA flag.png`,
            title: 'South Africa',
        },
        {
            image: `/Flags/Flag_of_Nigeria.svg.png`,
            title: 'Nigeria',
        },
        {
            image: `/Flags/flag-of-zimbabwe.webp`,
            title: 'Zimbambwe',
        }

    ]
    return (
        <div className="h-[70vh] w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-10 left-10 text-white text-1xl bg-black bg-opacity-50 p-4 rounded-xl">
                    {slide.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
        };

    export default Heroslider