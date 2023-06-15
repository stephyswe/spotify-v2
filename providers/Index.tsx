import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";

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
