import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Footer from "@/app/(site)/components/Footer";
import NewHeader from "@/components/RealHeader/RealHeader";
import SpotifyPlayer from "@/components/RealPlayer/SpotifyPlayer";
import NewSidebar from "@/components/RealSidebar/Main";
import {
  OsScrollbar,
  OsScrollbarVertical,
  ResizeObserver,
} from "@/components/sites/OsLayout";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";

// spotify css
import "./css/footer.css";
import "./css/home-v2.css";
import "./css/spotify-more.css";
import "./css/spotify-sidebar.css";
import "./css/spotify.css";
//global css
import "./globals.css";

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html
      lang="en"
      dir="ltr"
      className="no-focus-outline spotify__os--is-windows spotify__container--is-web"
    >
      <body className="ylx">
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <main id="main">
              <div
                id="root"
                className="Root encore-dark-theme nav-ylx"
                style={{ ["--panel-gap" as any]: "8px" }}
              >
                <div className="ZQftYELq0aOsg6tPbVbV">
                  <NewHeader />
                  <NewSidebar songs={userSongs} />
                  <div className="jEMA2gVoLgPQqAFrPhFw lPapCDz3v_LipgXwe8gi">
                    <LayoutTemplate>{children}</LayoutTemplate>
                  </div>
                  <SpotifyPlayer />
                </div>
              </div>
            </main>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

interface LayoutTemplateProps {
  children: React.ReactNode;
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => (
  <div className="main-view-container">
    <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-overflow os-host-overflow-y os-host-transition">
      <ResizeObserver />
      <div className="os-padding">
        <div
          className="os-viewport os-viewport-native-scrollbars-invisible"
          style={{ overflowY: "scroll" }}
        >
          <div
            className="os-content"
            style={{ padding: "0px", height: "100%", width: "100%" }}
          >
            <div className="main-view-container__scroll-node-child-spacer"></div>
            <div
              className="main-view-container__scroll-node-child"
              style={{ minHeight: "calc(((100vh - 64px) - 90px) - 519px)" }}
            >
              <main
                tabIndex={-1}
                aria-label="Spotify - Web Player: Music for everyone"
              >
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
      <OsScrollbar />
      <OsScrollbarVertical />
      <div className="os-scrollbar-corner"></div>
    </div>
  </div>
);
