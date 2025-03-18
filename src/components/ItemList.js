export const Item = ({ item }) => {
  console.log("item", item);

  return (
    <div className="flex justify-between">
      <div className="border-b text-left w-9/12 py-2">
        <div className="font-black">{item.name}</div>
        <div>P-{(item.defaultPrice || item.price) / 100}</div>
        <p>{item.description}</p>
      </div>
      <div className="w-3/12 p-4">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item.imageId}`}
        ></img>
      </div>
    </div>
  );
};
