//components
import ImageComponent from "@/components/imageComponent";
import Layout from "@/components/layout";
import NavbarInPage from "@/components/navbarInPage";
import NavbarLinkInPage from "@/components/navbarLinkInPage";
import { useState } from "react";

//utils
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import NewsItem from "@/components/newsItem";
import Loading from "@/components/loading";
//variables
const navbarItems = [
  {
    text: "products.navbar-text-1",
    href: "/products/antennas",
  },
  {
    text: "products.navbar-text-2",
    href: "/products/rf-connectors",
  },
  {
    text: "products.navbar-text-3",
    href: "/products/rf-cables",
  },
  {
    text: "products.navbar-text-4",
    href: "/products/rf-pcb",
  },
  {
    text: "products.navbar-text-5",
    href: "/products/filters",
  },
];
const products = [
  {
    text: "products.navbar-text-1",
    image: null,
    href: "/products/antennas",
  },
  {
    text: "products.navbar-text-2",
    image: null,
    href: "/products/rf-connectors",
  },
  {
    text: "products.navbar-text-3",
    image: null,
    href: "/products/rf-cables",
  },
  {
    text: "products.navbar-text-4",
    image: null,
    href: "/products/rf-pcb",
  },
  {
    text: "products.navbar-text-5",
    image: null,
    href: "/products/filters",
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
const ProductsPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <div className="flex w-full flex-col justify-center items-center tablet:items-start tablet:flex-row p-12 laptop:px-52 min-h-[400px] space-x-6">
        <NavbarLinkInPage
          title={intl.formatMessage({ id: "products.title" })}
          items={navbarItems}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex w-full py-6 flex-wrap gap-6 justify-center items-center mobile:justify-between tablet:justify-start tablet:p-4 tablet:pt-0"
        >
          {products.map((i, index) => (
            <motion.div key={index} variants={item}>
              <NewsItem
                title={i.text}
                text="Deneme"
                imgSrc={i.image}
                buttonHref={i.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};
export default ProductsPage;
