function StoryList({ stories, setCurrentIndex }) {
  return (
    <div className="flex overflow-x-auto gap-3 px-4 pb-4 no-scrollbar border-b-2">
      {stories.map((story, index) => (
        <div
          key={story.id}
          onClick={() => setCurrentIndex(index)}
          className="min-w-[70px] h-[70px] rounded-full border-2 border-pink-500 p-1 cursor-pointer"
        >
          <img
            src={story.image}
            alt="story"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

export default StoryList;