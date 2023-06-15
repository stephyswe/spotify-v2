import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import React from "react";

//storybook css
import "../css/artist.css";
import "../css/footer.css";

/* TODO: update import to your tailwind styles file */
import "../css/globals.css";
import "../css/home-v2.css";
import "../css/spotify-more.css";
import "../css/spotify-sidebar.css";
import "../css/spotify.css";
// TODO: marker remove css
import "./marker.css";

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
    (Story) => (
      <main id="main">
        <div
          id="root"
          className="Root encore-dark-theme nav-ylx"
          style={{ ["--panel-gap" as any]: "8px" }}
        >
          <Story />
        </div>
      </main>
    ),
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
