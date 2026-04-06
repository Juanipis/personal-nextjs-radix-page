import React, { createContext, useContext, useState, useCallback, useLayoutEffect } from "react";
import en from "./translations/en.json";
import es from "./translations/es.json";

export type Locale = "en" | "es";

const translations: Record<Locale, typeof en> = { en, es };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCAL_STORAGE_KEY = "juanipis-locale";

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY) as Locale | null;
    if (stored && (stored === "en" || stored === "es")) {
      setLocaleState(stored);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "es") {
        setLocaleState("es");
      }
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCAL_STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = getNestedValue(translations[locale], key);
      return value !== undefined ? value : key;
    },
    [locale]
  );

  if (!ready) return null;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
