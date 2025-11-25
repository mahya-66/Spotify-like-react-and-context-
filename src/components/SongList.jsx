import { usePlayer } from "../context/PlayerContext";
import SongItem from "./SongItem";

const SongList = () => {
  const { songs } = usePlayer();

  return (
    <div>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
