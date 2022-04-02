import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from './contexts//CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {

    const isLiked = card.likes.some(user => user._id === currentUser._id);

    function setLikeState(newCard) {

      setCards((state) =>
        state.map((stateCard) => stateCard._id === card._id ? newCard : stateCard))

    }

    if (isLiked) {

      api.deleteLike(card)
      .then((newCard) => {
        setLikeState(newCard)
      })

    } else {

      api.putLike(card)
      .then((newCard) => {
        setLikeState(newCard)
      })
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then(() => {
      setCards((state) => state.filter((stateCard) => stateCard !== card))})
  }

  function fetchInitialCards() {
    return api.getInitialCards()
           .then((data) => {
             setCards(data);
           })
  }

  React.useEffect(() => {
    fetchInitialCards();
  }, [])

  return (
    <main className="main page__container">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image-edit-pencil">
            <img className="profile__image" onClick={onEditAvatar} src={currentUser.avatar} alt="Аватар пользователя"/>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Места России">
        <ul className="cards__list">
          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main;
