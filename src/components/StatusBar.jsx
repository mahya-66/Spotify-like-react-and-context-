import { usePlayer } from "../context/PlayerContext";

const StatusBar = () => {
  const { currentSong, playerState } = usePlayer();

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mb-4">
      {playerState === "PLAYING" && currentSong && (
        <p>
          🎧 Playing: {currentSong.title} - {currentSong.artist}
        </p>
      )}
      {playerState === "PAUSED" && currentSong && (
        <p>
          ⏸ Paused: {currentSong.title} - {currentSong.artist}
        </p>
      )}
      {playerState === "STOPPED" && <p>⏹ Stopped</p>}
      {playerState === "IDLE" && <p>🎵 Select a song</p>}
    </div>
  );
};

export default StatusBar;
