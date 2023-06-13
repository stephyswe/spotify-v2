import { Figtree } from "next/font/google";

import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import NewHeader from "@/components/RealHeader/RealHeader";
import SpotifyPlayer from "@/components/RealPlayer/SpotifyPlayer";
import NewSidebar from "@/components/RealSidebar/Main";
import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";

import "./globals.css";
import "./css/home-v2.css";
// spotify css
import "./css/spotify-more.css";
import "./css/spotify-sidebar.css";
import "./css/spotify.css";
import "./css/footer.css";
//global css


const font = Figtree({ subsets: ["latin"] });

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
                    {children}
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
