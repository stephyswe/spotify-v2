"use client";

import { pageData } from "@/app/(site)/data";
import { FeatureList } from "@/components/app/(site)/FeatureList";
import MadeForSection from "@/components/app/(site)/MadeForSection";
import Welcome from "@/components/app/(site)/Welcome";
import useOnPlay from "@/libs/hooks/useOnPlay";
import usePlayer from "@/libs/hooks/usePlayer";

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
