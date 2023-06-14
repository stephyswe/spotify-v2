"use client";

import { pageData } from "@/app/(site)/data";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

import { FeatureList } from "./components/FeatureList";
import MadeForSection from "./components/MadeForSection";
import Welcome from "./components/Welcome";

const NewPageContent = ({ songs }: any) => {
  const onPlay = useOnPlay(songs);

  const player = usePlayer();
  const { isPlaying, activeId, play, pause } = player;

  const togglePlay = (id: string) => {
    if (isPlaying && id === activeId) {
      // pause
      if (pause) {
        pause();
      }
      player.setIsPlaying(!isPlaying);
      return;
    }
    onPlay(id);
    if (play) {
      play();
    }
    player.setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section className="rPV8BmHZXaGIGT2HwvBB" aria-label="Good afternoon">
        <Welcome />
        <FeatureList songs={songs} togglePlay={togglePlay} />
      </section>
      {pageData.map((data) => (
        <MadeForSection key={data.title} data={data} />
      ))}
    </>
  );
};

export default NewPageContent;
