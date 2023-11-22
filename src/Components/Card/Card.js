const Card = (props) => {
  return (
    <div className="card">
      <i className="fa-light fa fa-heart"></i>
      <img src={props.image} />
      <div> {props.text} </div>
    </div>
  );
};

export default Card;
