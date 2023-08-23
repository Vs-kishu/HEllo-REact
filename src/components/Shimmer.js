const Shimmer = () => {
  const shimmerCards = new Array(20).fill(null);
  return (
    <div className=" flex gap-10 flex-wrap p-10">
      {shimmerCards.map((card, index) => (
        <div
          key={index}
          className=" w-[200px] rounded-lg h-[300px] animate-pulse bg-gradient-to-r from-blue-600 to-white"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
