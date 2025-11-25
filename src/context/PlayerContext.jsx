import { createContext, useContext, useState } from "react";
import { songs } from "../utiles/songs";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playerState, setPlayerState] = useState("IDLE");

  const playSong = (song) => {
    setCurrentSong(song);
    setPlayerState("PLAYING");
  };

  const pauseSong = () => {
    if (currentSong) {
      setPlayerState("PAUSED");
    }
  };

  const stopSong = () => {
    setCurrentSong(null);
    setPlayerState("STOPPED");
  };

  return (
    <PlayerContext
      value={{
        songs,
        currentSong,
        playerState,
        playSong,
        pauseSong,
        stopSong,
      }}
    >
      {children}
    </PlayerContext>
  );
};

export const usePlayer = () => useContext(PlayerContext);
