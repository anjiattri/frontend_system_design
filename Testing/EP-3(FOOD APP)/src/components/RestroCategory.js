import ItemList from "./ItemList";

const RestroCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-200 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}
            {`(${data.itemCards.length})`}
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList data={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestroCategory;
