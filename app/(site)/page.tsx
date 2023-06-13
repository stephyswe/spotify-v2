import getSongs from "@/actions/getSongs";
import getSongsByUserId from "@/actions/getSongsByUserId";
import MainStuff from "@/app/(site)/components/NewPageContent";

// not cached, always server rendered
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  
  return <MainStuff songs={songs} />;
}
