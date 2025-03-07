export default RestaurentCardComponent = (props) => {
  const { name, rating, cousine, image } = props.data;
  return (
    <div className="res-card-component">
      <div className="logo">
        <img className="logo1" src={image}></img>
      </div>
      <div className="res-info">
        <div>{name}</div>
        <div>{rating}</div>
        <div>{cousine}</div>
      </div>
    </div>
  );
};
