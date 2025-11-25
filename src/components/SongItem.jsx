import { usePlayer } from "../context/PlayerContext";

const SongItem = ({ song }) => {
  const { currentSong, playSong } = usePlayer();

  const isActive = currentSong?.id === song.id;

  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded-md cursor-pointer ${
        isActive ? "bg-green-500 text-white" : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      <span>
        {song.title} - {song.artist}
      </span>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
        onClick={() => playSong(song)}
      >
        ▶
      </button>
    </div>
  );
};

export default SongItem;
