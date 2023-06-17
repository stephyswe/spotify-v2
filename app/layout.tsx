import NewHeader from "@/components/Header";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import LayoutContainer from "@/components/app/(layout)/LayoutContainer";
import LayoutContent from "@/components/app/(layout)/LayoutContent";
import getActiveProductsWithPrices from "@/libs/actions/getActiveProductsWithPrices";
import getSongsByUserId from "@/libs/actions/getSongsByUserId";
import Providers from "@/libs/providers/Index";

// spotify & globals css
import "../libs/css";

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
      /* style={{
        ["--left-sidebar-width: " as any]: "280px",
      }} */
    >
      <body className="ylx">
        <Providers products={products}>
          <LayoutContainer
            Header={<NewHeader />}
            Sidebar={<Sidebar songs={userSongs} />}
            Content={<LayoutContent>{children}</LayoutContent>}
            Player={<Player />}
          />
        </Providers>
      </body>
    </html>
  );
}
