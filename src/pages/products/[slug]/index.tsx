//components
import Layout from "@/components/layout";
import NavbarLinkInPage from "@/components/navbarLinkInPage";

//utils
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import ProductItem from "@/components/productItem";
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

const productItems = {
  antennas: [
    {
      title: "products.antennas-item-title-1",
      text: [
        "products.antennas-item-text-1",
        "products.antennas-item-text-2",
        "products.antennas-item-text-3",
      ],
      itemImage: null,
      href: "/",
    },
    {
      title: "products.antennas-item-title-2",
      text: ["products.antennas-item-text-4", "products.antennas-item-text-5"],
      itemImage: null,
      href: "/",
    },
    {
      title: "products.antennas-item-title-3",
      text: [
        "products.antennas-item-text-6",
        "products.antennas-item-text-7",
        "products.antennas-item-text-8",
      ],
      itemImage: null,
      href: "/",
    },
    {
      title: "products.antennas-item-title-4",
      text: [],
      itemImage: null,
      href: "/",
    },
    {
      title: "products.antennas-item-title-5",
      text: [
        "products.antennas-item-text-9",
        "products.antennas-item-text-10",
        "products.antennas-item-text-11",
      ],
      itemImage: null,
      href: "/",
    },
    {
      title: "products.antennas-item-title-6",
      text: ["products.antennas-item-text-12"],
      itemImage: null,
      href: "/",
    },
  ],
  rfConnectors: [
    {
      title: "products.rf-connectors-item-title-1",
      text: [],
      itemImage: null,
      href: "/",
    },
  ],
  rfCables: [
    {
      title: "products.rf-cables-item-title-1",
      text: [],
      itemImage: null,
      href: "/",
    },
  ],
  rfPcb: [
    {
      title: "products.rf-pcb-item-title-1",
      text: [],
      itemImage: null,
      href: "/",
    },
  ],
  filters: [],
};

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

//types
interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  slug: string;
}

export default function ProductsItem({ slug }: Props) {
  const router = useRouter();
  const intl = useIntl();
  if (router.isFallback) {
    return (
      <Layout>
        <div className="flex w-full h-full min-h-[400px] items-center justify-center">
          <Loading />
        </div>
      </Layout>
    );
  }
  const renderHandler = (slug: string) => {
    let items: Array<{
      title: string;
      text?: string[];
      itemImage?: string | null;
      href: string;
    }> = [];
    switch (slug) {
      case "antennas":
        items = productItems.antennas;
        break;
      case "rf-connectors":
        items = productItems.rfConnectors;
        break;
      case "rf-cables":
        items = productItems.rfCables;
        break;
      case "rf-pcb":
        items = productItems.rfPcb;
        break;
      case "filters":
        items = productItems.filters;
        break;

      default:
        items = productItems.antennas;
        break;
    }

    return items.map((i, index) => (
      <motion.div
        className="flex w-full mobile:w-[320px]"
        key={index}
        variants={item}
      >
        <ProductItem
          title={i.title}
          text={i.text}
          imgSrc={i.itemImage}
          buttonHref={i.href}
        />
      </motion.div>
    ));
  };
  return (
    <Layout>
      <div className="flex w-full flex-col justify-center items-center tablet:items-start tablet:flex-row p-12 laptop:px-52 min-h-[400px] space-x-6">
        <NavbarLinkInPage
          title={intl.formatMessage({ id: `products.${slug}` })}
          items={navbarItems}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex w-full py-6 flex-wrap gap-6 justify-center items-center mobile:justify-between tablet:justify-start tablet:p-4 tablet:pt-0"
        >
          {slug && renderHandler(slug)}
        </motion.div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params!;

  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [
    { params: { slug: "antennas" } },
    { params: { slug: "rf-connectors" } },
    { params: { slug: "rf-cables" } },
    { params: { slug: "rf-pcb" } },
    { params: { slug: "filters" } },
  ];

  return {
    paths,
    fallback: true,
  };
};
