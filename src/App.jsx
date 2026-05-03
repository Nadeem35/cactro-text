import { useEffect, useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";
import storiesData from "./data/stories.json";

function App() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  // load stories
  useEffect(() => {
    setStories(storiesData);
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-black min-h-screen text-white">
      <h1 className="p-4 text-lg font-bold">Stories</h1>

      <StoryList stories={stories} setCurrentIndex={setCurrentIndex} />

      {currentIndex !== null && (
        <StoryViewer
          stories={stories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}

export default App;