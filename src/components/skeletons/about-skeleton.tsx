const AboutSkeleton = () => {
  return (
    <div className="w-full min-h-[200px] p-6 animate-pulse">
      {/* Title */}
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>

      {/* Description block */}
      <div className="space-y-3 mb-5">
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Random block elements */}
      {Array.from({length: 2}, (_, index) => (
        <div className="grid grid-cols-3 gap-4 mt-6" key={index}>
            <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
            <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
            <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        </div>
      ))}
      
    </div>
  );
};

export default AboutSkeleton;
