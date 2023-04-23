//components

import CarouselItemOnVideo from "@/components/carouselOnVideoItem";
import Layout from "@/components/layout";
import Video from "@/components/videoComponent";
//utils
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import {
  faShieldHalved,
  faUserDoctor,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
//Swiper
import "swiper/css";
import { useIntl } from "react-intl";
import ServicesItem from "@/components/servicesItem";
import Button from "@/components/button";
import Link from "next/link";
import ImageComponent from "@/components/imageComponent";
import NewsItem from "@/components/newsItem";
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
const servicesItem = [
  {
    title: "home.services.title-1",
    text: "home.services.text-1",
    icon: faChartLine,
  },
  {
    title: "home.services.title-2",
    text: "home.services.text-2",
    icon: faUserDoctor,
  },
  {
    title: "home.services.title-3",
    text: "home.services.text-3",
    icon: faShieldHalved,
  },
];
const newsItem = [
  {
    title: "home.news.title-1",
    text: "home.news.text-1",
    buttonHref: "/",
    imgSrc: "./images/",
  },
  {
    title: "home.services.title-2",
    text: "home.services.text-2",
  },
  {
    title: "home.services.title-3",
    text: "home.services.text-3",
  },
];
export default function Home() {
  const intl = useIntl();
  return (
    <Layout>
      <div className="flex w-full flex-col space-y-6">
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
        <div className="flex w-full flex-col space-y-6 p-4">
          <h3 className="w-full text-center text-h4 font-bold text-error uppercase">
            {intl.formatMessage({ id: "home.services" })}
          </h3>
          <div className="flex w-full flex-col justify-center space-y-4 tablet:px-12 laptop:justify-around laptop:flex-row laptop:space-y-0">
            {servicesItem.map((item, index) => (
              <ServicesItem
                classNames={
                  index % 2 == 1 ? "flex-row-reverse laptop:flex-row" : ""
                }
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col-reverse tablet:flex-row tablet:space-x-2 p-4">
          <div className="flex w-full tablet:w-[50%] p-4">
            <div className="flex w-full items-center justify-center flex-col space-y-4">
              <h3 className="w-full text-center text-error font-bold text-h4">
                {intl.formatMessage({ id: "home.corporate-title" })}
              </h3>
              <span className="text-title-small w-full text-center font-medium break-words">
                {intl.formatMessage({ id: "home.corporate-text" })}
              </span>
              <Link href={"/corporate"}>
                <Button
                  text={intl.formatMessage({ id: "home.corporate-more" })}
                />
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center items-center tablet:w-[50%] bg-gradient-to-tr from-primary-main via-primary-mid to-primary-main p-10 rounded-lg">
            <div className="flex mix-blend shadow-md shadow-warning items-center justify-center bg-gray-200 rounded-lg p-5">
              <span className="text-h4 ">LOGO AREA</span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h3>{intl.formatMessage({ id: "home.news" })}</h3>
          {/* {newsItem.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))} */}
        </div>
      </div>
    </Layout>
  );
}
