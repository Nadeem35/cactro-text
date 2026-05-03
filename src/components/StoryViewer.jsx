import { useEffect, useRef, useState } from "react";

function StoryViewer({ stories, currentIndex, setCurrentIndex }) {
  const story = stories[currentIndex];
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  if (!story) return null;

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setLoading(true);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(null);
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setLoading(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      prevStory();
    } else {
      nextStory();
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < stories.length - 1) {
        setLoading(true);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(null);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, stories.length, setCurrentIndex]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">

      {/* Mobile Container */}
      <div
        ref={containerRef}
        onClick={handleClick}
        className="relative w-full max-w-sm h-full bg-black overflow-hidden"
      >
        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            Loading...
          </div>
        )}

        {/* Story Image */}
        <img
          key={story.id}
          src={story.image}
          alt="story"
          onLoad={() => setLoading(false)}
          className="w-full h-full object-cover"
        />

        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(null);
          }}
          className="absolute top-4 right-4 text-white text-2xl z-20"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default StoryViewer;