export type ThemeType = "dark" | "light";

export interface Theme {
  "--background": string;
  "--item": string;
}

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    "--background": "#fff",
    "--item":
      "linear-gradient(140deg, #fcff9e 5%, #FEBE10 40%, rgba(255,255,255,1) 100%)",
  },
  dark: {
    "--background": "#0C2340",
    "--item":
      "linear-gradient(150deg, rgba(13,12,46,1) 40%, #B0C4DE 95%, rgba(255,255,255,1) 100%)",
  },
};
