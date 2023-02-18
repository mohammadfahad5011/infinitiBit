// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Container } from "react-bootstrap";

const Slider_content = [
  {
    title: "Transparent On-chain CEX 1",
    des: "InfinityBit will be a permissioned on-chain CEX which will accept the IBIT token for reduced trading fees",
  },
  {
    title: "Transparent On-chain CEX 2",
    des: "InfinityBit will be a permissioned on-chain CEX which will accept the IBIT token for reduced trading fees",
  },
  {
    title: "Transparent On-chain CEX 3",
    des: "InfinityBit will be a permissioned on-chain CEX which will accept the IBIT token for reduced trading fees",
  },
  {
    title: "Transparent On-chain CEX 4",
    des: "InfinityBit will be a permissioned on-chain CEX which will accept the IBIT token for reduced trading fees",
  },
  {
    title: "Transparent On-chain CEX 5",
    des: "InfinityBit will be a permissioned on-chain CEX which will accept the IBIT token for reduced trading fees",
  },
];

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        spaceBetween={20}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        centeredSlides={true}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {Slider_content.map((slide) => {
          return (
            <SwiperSlide>
              <Container>
                <div className="slider_content">
                  <h1>{slide.title}</h1>
                  <p>{slide.des}</p>
                </div>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
