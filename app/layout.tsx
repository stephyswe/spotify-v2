import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
import getSongsByUserId from "@/actions/getSongsByUserId";
import NewHeader from "@/components/RealHeader/RealHeader";
import SpotifyPlayer from "@/components/RealPlayer/SpotifyPlayer";
import NewSidebar from "@/components/RealSidebar/Main";
import LayoutContainer from "@/components/app/(layout)/LayoutContainer";
import LayoutTemplate from "@/components/app/(layout)/LayoutTemplate";
import Providers from "@/providers/Index";

// spotify & globals css
import "../css";

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export const revalidate = 0;

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html
      lang="en"
      dir="ltr"
      className="no-focus-outline spotify__os--is-windows spotify__container--is-web"
    >
      <body className="ylx">
        <Providers products={products}>
          <LayoutContainer
            Header={<NewHeader />}
            Sidebar={<NewSidebar songs={userSongs} />}
            Template={<LayoutTemplate>{children}</LayoutTemplate>}
            Player={<SpotifyPlayer />}
          />
        </Providers>
      </body>
    </html>
  );
}
