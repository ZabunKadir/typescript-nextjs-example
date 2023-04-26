//components
import Layout from "@/components/layout";
import NewsItem from "@/components/newsItem";

//utils
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

//variables
const consultantItems = [
  {
    title: "consultant.title-1",
    text: "consultant.text-1",

    imgSrc: "/images/emptyImage.jpg",
  },
  {
    title: "consultant.title-2",
    text: "consultant.text-2",

    imgSrc: "/images/emptyImage.jpg",
  },
  {
    title: "consultant.title-3",
    text: "consultant.text-3",

    imgSrc: "/images/emptyImage.jpg",
  },
];
//framer motion config
const container = {
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ConsultantPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <div className="flex w-full flex-col justify-between items-center tablet:items-start tablet:flex-row px-6 py-12 tablet:p-12 laptop:px-52 min-h-[400px] space-x-6">
        <div className="flex w-full flex-col tablet:px-4 py-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center w-full items-center space-y-6 tablet:flex-row tablet:flex-wrap tablet:gap-4 tablet:justify-between desktop:gap-0 desktop:justify-around tablet:space-y-0 mt-4"
          >
            {consultantItems.map((i, index) => (
              <motion.div
                className="flex justify-center items-center w-full tablet:w-[320px]"
                key={index}
                variants={item}
              >
                <NewsItem {...i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};
export default ConsultantPage;
