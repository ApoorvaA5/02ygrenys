import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Manufacturing from '../assets/Manufacturing.png'; 
import Phoenix from '../assets/Phoenix.png';
import Anchor from '../assets/anchorFluid.jpg';
import Finish from '../assets/finish.png';
import TandS from '../assets/T-S.png';
import Red from '../assets/Red.png';
import SPC from '../assets/SPC.png';
import Stanley from '../assets/StanleyBlack.png';
import unicrest from '../assets/Unicrest.png';
import UEE from '../assets/UEE.png';
import Guard from '../assets/guard.png';
import Tube from '../assets/tube.png';
import Tiger from '../assets/tiger.png';
import Ukm from '../assets/ukm.png';

const clients = [
  {
    id: "1",
    name: "Manufacturing Technology Inc",
    logo: Manufacturing,
    place: "UK"
  },
  {
    id: "2",
    name: "Phoenix",
    logo: Phoenix,
    place: "USA"
  },
  {
    id: "3",
    name: "Anchor",
    logo: Anchor,
    place: "USA"
  },
  {
    id: "4",
    name: "Finish",
    logo: Finish,
    place: "USA"
  },
  {
    id: "5",
    name: "T & s",
    logo: TandS,
    place: "USA"
  },
  {
    id: "6",
    name: "Red valve",
    logo: Red,
    place: "USA"
  },
  {
    id: "7",
    name: "Sullivan Process Control",
    logo: SPC,
    place: "USA"
  },
  {
    id: "8",
    name: "Stanley Black and Decker",
    logo: Stanley,
    place: "USA"
  },
  {
    id: "9",
    name: "Unicrest",
    logo: unicrest,
    place: "Australia"
  },
  {
    id: "10",
    name: "UEE",
    logo: UEE,
    place: "Canada"
  },
  {
    id: "11",
    name: "Guard",
    logo: Guard,
    place: "USA"
  },
  {
    id: "12",
    name: "Tube",
    logo: Tube,
    place: "UK"
  },
  {
    id: "13",
    name: "Tiger",
    logo: Tiger,
    place: "USA"
  },
  {
    id: "14",
    name: "UKM",
    logo: Ukm,
    place: "USA"
  },

];

const ClientSwiper = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#448FFF] opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
          Our Trusted Partners
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
          Collaborating with Industry Leaders
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="client-swiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div 
                className="flex flex-col items-center justify-center h-32 transition-all duration-300 transform hover:scale-110"
                style={{ animation: `fadeSlideUp 0.5s ease-out forwards` }}
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[80%] object-contain max-h-[60%] mb-2"
                />
                <p className="text-sm text-gray-800 font-medium">{client.place}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default ClientSwiper;