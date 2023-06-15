import ModalProvider from "@/libs/providers/ModalProvider";
import SupabaseProvider from "@/libs/providers/SupabaseProvider";
import ToasterProvider from "@/libs/providers/ToasterProvider";
import UserProvider from "@/libs/providers/UserProvider";

const Providers = ({ children, products }: any) => (
  <>
    <ToasterProvider />
    <SupabaseProvider>
      <UserProvider>
        <ModalProvider products={products} />
        {children}
      </UserProvider>
    </SupabaseProvider>
  </>
);

export default Providers;
