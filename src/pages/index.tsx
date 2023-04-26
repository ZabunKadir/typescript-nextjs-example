//components
import ImageComponent from "@/components/imageComponent";
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
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import ServicesItem from "@/components/servicesItem";
import Button from "@/components/button";
import Link from "next/link";
import NewsItem from "@/components/newsItem";
import { motion, useScroll, useTransform } from "framer-motion";

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
    buttonHref: "#",
    imgSrc: "/images/emptyImage.jpg",
  },
  {
    title: "home.news.title-2",
    buttonHref: "#",
    imgSrc: "/images/emptyImage.jpg",
  },
  {
    title: "home.news.title-3",
    buttonHref: "#",
    imgSrc: "/images/emptyImage.jpg",
  },
];
//framer motion config
const containerMotion = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Home() {
  const intl = useIntl();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], [0, 1]);

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
            <div className="flex w-full items-center justify-center flex-col space-y-6">
              <h3 className="w-full text-center uppercase text-error font-bold text-h4">
                {intl.formatMessage({ id: "home.corporate-title" })}
              </h3>
              <span className="text-title-small w-full text-center font-medium break-words max-w-[600px]">
                {intl.formatMessage({ id: "home.corporate-text" })}
              </span>
              <Link href={"/corporate"}>
                <Button
                  text={intl.formatMessage({ id: "home.more-information" })}
                />
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center items-center tablet:w-[50%] bg-gradient-to-tr from-primary-main via-primary-mid to-primary-main p-10 rounded-lg">
            <div className="flex items-center justify-center bg-gray-25 rounded-lg p-5">
              <div className="flex relative w-full h-full p-12 rounded-lg overflow-hidden  group-hover:border-warning duration-300">
                <ImageComponent
                  src={"/images/logo.png"}
                  alt="News image"
                  width={540}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col px-4 py-8 border-t border-primary-main">
          <h3 className="text-h3 text-center text-error uppercase font-bold">
            {intl.formatMessage({ id: "home.news" })}
          </h3>
          <motion.div
            variants={containerMotion}
            initial="hidden"
            animate="visible"
            style={{
              y,
            }}
            className="flex flex-col justify-center w-full items-center space-y-6 tablet:flex-row tablet:flex-wrap tablet:gap-4 tablet:justify-between desktop:gap-0 desktop:justify-around tablet:space-y-0 mt-4"
          >
            {newsItem.map(
              (item, index) =>
                index <= 2 && (
                  <motion.div
                    className="flex w-full mobile:w-[320px]"
                    variants={itemMotion}
                    key={index}
                  >
                    <NewsItem {...item} />
                  </motion.div>
                )
            )}
          </motion.div>
          <div className="flex w-full justify-center mt-12">
            {newsItem?.length > 2 && (
              <Link href={"/solutions"}>
                <Button
                  icon={faAnglesRight}
                  buttonType="secondary"
                  text={intl.formatMessage({ id: "home.show-more" })}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
