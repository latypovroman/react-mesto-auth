function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
  <li className="card">
    <img className="card__image" onClick={handleClick} src={props.card.link} alt={props.card.name}/>
    <a className="card__delete" href="#"></a>
    <div className="card__panel">
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like">
        <button className="card__like-btn" type="button"></button>
        <span className="card__like-counter">{props.card.likes.length}</span>
      </div>
    </div>
  </li>
 )
}

export default Card;
