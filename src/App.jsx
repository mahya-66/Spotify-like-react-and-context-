import { PlayerProvider } from "./context/PlayerContext";
import SongList from "./components/SongList";
import StatusBar from "./components/StatusBar";
import PlayerBar from "./components/PlayerBar";

const App = () => {
  return (
    <PlayerProvider>
      <div className="p-6 bg-gray-50 min-h-screen pb-32">
        <StatusBar />
        <SongList />
        <PlayerBar />
      </div>
    </PlayerProvider>
  );
};

export default App;
