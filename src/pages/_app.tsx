import { ThemeProvider } from "next-themes";
import {
  CssLibPreferenceProvider,
  useCssLibPreference,
} from "../../components/CssLibPreference";
import { I18nProvider } from "../i18n";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Favicon } from "../../components/Favicon";
import { useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import Navbar from "../../components/ui/navbar/navbar";
import FloatingActionButton from "../../components/ui/floatingActionButton/floatingActionButton";
import PageTransition from "../../components/ui/pageTransition/pageTransition";

function Pages({ Component, pageProps }: AppProps) {
  const { accentColor } = useCssLibPreference();

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [accentColor]);

  return (
    <Theme
      accentColor={accentColor as any}
      grayColor="sand"
      radius="large"
      scaling="95%"
      className="flex flex-col min-h-screen"
    >
      <Favicon />
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <FloatingActionButton />
    </Theme>
  );
}

function App(props: AppProps) {
  return (
    <I18nProvider>
      <CssLibPreferenceProvider>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: "light-theme", dark: "dark-theme" }}
          defaultTheme="light-theme"
        >
          <Pages {...props} />
        </ThemeProvider>
      </CssLibPreferenceProvider>
    </I18nProvider>
  );
}

export default App;
