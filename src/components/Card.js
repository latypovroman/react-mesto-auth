function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
  <li className="card">
    <img className="card__image" onClick={handleClick} src={card.link} alt={card.name}/>
    <a className="card__delete" href="#"></a>
    <div className="card__panel">
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like">
        <button className="card__like-btn" type="button"></button>
        <span className="card__like-counter">{card.likes.length}</span>
      </div>
    </div>
  </li>
 )
}

export default Card;
