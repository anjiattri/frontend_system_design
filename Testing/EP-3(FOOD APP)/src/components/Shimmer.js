function Shimmer() {
  const numberOfCards = 20;
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <div key={index} className="p-4 m-4 w-52 h-96 bg-gray-200"></div>
      ))}
    </div>
  );
}

export default Shimmer;
