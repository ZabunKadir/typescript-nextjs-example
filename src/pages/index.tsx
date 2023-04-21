//components

import CarouselItemOnVideo from "@/components/carouselOnVideoItem";
import Layout from "@/components/layout";
import Video from "@/components/videoComponent";
//utils
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Swiper
import "swiper/css";
SwiperCore.use([Autoplay]);

//variables
const carouselItems = [
  {
    title: "home.carousel.title-1",
    information: "home.carousel.info-1",
    buttonText: "home.more-information",
    buttonHref: "/about-us",
  },
  {
    title: "home.carousel.title-2",
    information: "home.carousel.info-2",
    buttonText: "home.more-information",
    buttonHref: "/products",
  },
  {
    title: "home.carousel.title-3",
    information: "home.carousel.info-3",
    buttonText: "home.more-information",
    buttonHref: "/consultancy-and-training",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="flex relative w-full max-h-[600px]">
        <Video
          src="./videos/antenna.mp4"
          autoPlay={true}
          startPauseController={false}
          mute
          loop={true}
        />
        <div className="flex w-full absolute h-full">
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <CarouselItemOnVideo {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
