import { usePlayer } from "../context/PlayerContext";

const PlayerBar = () => {
  const { currentSong, pauseSong, stopSong } = usePlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="font-semibold">
        {currentSong
          ? `${currentSong.title} - ${currentSong.artist}`
          : "No song selected"}
      </div>

      <div className="space-x-2">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-3 rounded"
          onClick={pauseSong}
        >
          ⏸ Pause
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
          onClick={stopSong}
        >
          ⏹ Stop
        </button>
      </div>
    </div>
  );
};

export default PlayerBar;
