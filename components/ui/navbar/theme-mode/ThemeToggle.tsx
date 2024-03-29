import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import Head from "next/head";
import { useCssLibPreference } from "../../../CssLibPreference";

export const ThemeToggle = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const { accentColor, setAccentColor } = useCssLibPreference();

  const changeAccentColor = (value: string) => {
    console.log("Changing accent color to", value); // Log the color change
    setAccentColor(value); // Correctly call setAccentColor
  };

  return (
    <Flex ml="2">
      <Head>
        <style>{`
        :root, .light, .light-theme {
          --theme-toggle-sun-icon-display: block;
          --theme-toggle-moon-icon-display: none;
        }
        .dark, .dark-theme {
          --theme-toggle-sun-icon-display: none;
          --theme-toggle-moon-icon-display: block;
        }
      `}</style>
      </Head>

      <IconButton
        size="3"
        variant="ghost"
        color="gray"
        onClick={() => {
          // Set 'system' theme if the next theme matches the system theme
          const resolvedTheme = theme === "system" ? systemTheme : theme;
          const newTheme = resolvedTheme === "dark" ? "light" : "dark";
          const newThemeMatchesSystem = newTheme === systemTheme;
          setTheme(newThemeMatchesSystem ? "system" : newTheme);
          if (newTheme === "dark") {
            changeAccentColor("crimson");
          } else if (newTheme === "light") {
            changeAccentColor("blue");
          }
        }}
      >
        <SunIcon
          width="16"
          height="16"
          style={{ display: "var(--theme-toggle-sun-icon-display)" }}
        />
        <MoonIcon
          width="16"
          height="16"
          style={{ display: "var(--theme-toggle-moon-icon-display)" }}
        />
      </IconButton>
    </Flex>
  );
};
