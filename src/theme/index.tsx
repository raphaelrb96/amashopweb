import React from "react";
import { useMemo, useState, useEffect } from "react";
// material
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
//  { customShadows }
import componentsOverride from "./overrides";
import { CacheProvider } from "@emotion/react";
import { useRouter } from "next/router";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import * as locales from "@mui/material/locale";
import shape from "./shape";
import breakpoints from "./breakpoints";

const Localization = (lang: string) => {
  switch (lang) {
    case "ar":
      return "arEG";
    case "fr":
      return "frFR";
    case "en":
      return "enUS";
    default:
      return "frFR";
  }
};
function ThemeConfig({ children }: { children: React.ReactChild }) {
  const [mode, setMode] = useState(null);
  
  const isDark = mode === "dark";

  // Create style cache
  const styleCache = createCache({
    key: "css",
    stylisPlugins: [],
  });
  // styleCache.compat = true;
  const FONT_PRIMARY: string = "'Rubik', sans-serif"; // Google Font
  const FONT_SECONDARY: string = "'Noto Kufi Arabic', sans-serif"; // Google Font

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        {
          palette: isDark
            ? { ...palette.dark, mode: "dark" }
            : { ...palette.light, mode: "light" },
          shape,
          typography: {
            ...typography,
            fontFamily: FONT_PRIMARY,
          },
          breakpoints,
          direction: 'ltr',
          shadows: shadows.light,
          // customShadows: isDark ? customShadows.light : customShadows.dark,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDark, mode]
  );
  

  themeWithLocale.components = componentsOverride(themeWithLocale);

  return (
    <CacheProvider value={styleCache}>
      <ThemeProvider theme={themeWithLocale}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeConfig;
