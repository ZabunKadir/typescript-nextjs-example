import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../translations/en.json";
import trMessages from "../translations/tr.json";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { locale = "tr", defaultLocale, asPath } = useRouter();
  const messages = {
    en: enMessages,
    tr: trMessages,
  };

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale]}
    >
      <Component {...pageProps} />;
    </IntlProvider>
  );
};

export default MyApp;
