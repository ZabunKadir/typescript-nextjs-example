import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../translations/en.json";
import trMessages from "../translations/tr.json";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { locale = navigator.language, defaultLocale, asPath } = useRouter();

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={locale === "en" ? enMessages : trMessages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
