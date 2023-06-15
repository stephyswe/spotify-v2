import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

//storybook css
import "../css/artist.css";
import "../css/footer.css";

/* TODO: update import to your tailwind styles file */
import "../css/globals.css";
import "../css/home-v2.css";
import "../css/spotify-more.css";
import "../css/spotify-sidebar.css";
import "../css/spotify.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
