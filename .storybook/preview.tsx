import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import React from "react";

//storybook css
import "../libs/css/artist.css";
import "../libs/css/footer.css";

/* TODO: update import to your tailwind styles file */
import "../libs/css/globals.css";
import "../libs/css/home-v2.css";
import "../libs/css/spotify-more.css";
import "../libs/css/spotify-sidebar.css";
import "../libs/css/spotify.css";
import Providers from "../libs/providers/Index";
// TODO: marker remove css
import "./marker.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["App", ["Sidebar"], "*"],
      },
    },
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
      <html
        lang="en"
        dir="ltr"
        className="no-focus-outline spotify__os--is-windows spotify__container--is-web"
      >
        <body className="ylx">
          <main id="main">
            <div
              id="root"
              className="Root encore-dark-theme nav-ylx"
              style={{ ["--panel-gap" as any]: "8px" }}
            >
              <Providers products={[]}>
                <Story />
              </Providers>
            </div>
          </main>
        </body>
      </html>
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
