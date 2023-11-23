const Card = (props) => {
  return (
    <div className="card">
      <i className="fa-light fa fa-heart"></i>
      <img src={props.imgUrl} />
      <div> Adresse :{props.address} </div>
      <div> Nom :{props.name} </div>
    </div>
  );
};

export default Card;
