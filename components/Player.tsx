"use client";

import useGetSongByid from "@/hooks/useGetSongsById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import React, { FC } from "react";
import { PlayerContent } from "./PlayerContent";

interface PlayerProps {}

const Player: FC<PlayerProps> = ({}) => {
  const player = usePlayer();
  const { song } = useGetSongByid(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
