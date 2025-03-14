export default RestaurentCardComponent = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = props.data;
  return (
    <div className="res-card-component">
      <div className="logo">
        <img
          className="logo1"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png"}
        ></img>
      </div>
      <div className="res-info">
        <div>{name}</div>
        <div>{avgRating}</div>
        <div>{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};
