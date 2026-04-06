import { IconButton, Flex } from "@radix-ui/themes";
import { useI18n, Locale } from "../../../../src/i18n";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();

  const toggle = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <Flex ml="1">
      <IconButton
        size="3"
        variant="ghost"
        color="gray"
        onClick={toggle}
        style={{ fontSize: "14px", fontWeight: 600, minWidth: "36px" }}
        title={locale === "en" ? "Cambiar a Espanol" : "Switch to English"}
      >
        {locale === "en" ? "ES" : "EN"}
      </IconButton>
    </Flex>
  );
};
