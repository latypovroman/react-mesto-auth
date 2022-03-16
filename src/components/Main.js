import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  function fetchUserInfo() {
    return api.getUserInfo()
           .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
           })
  }

  function fetchInitialCards() {
    return api.getInitialCards()
           .then((data) => {
             setCards(data);
           })
  }

  React.useEffect(() => {
    fetchUserInfo();

  })

  React.useEffect(() => {
    fetchInitialCards();

  }, [])

  return (
    <main className="main page__container">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image-edit-pencil">
            <img className="profile__image" onClick={props.onEditAvatar} src={userAvatar} alt="Аватар пользователя"/>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Места России">
        <ul className="cards__list">
          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main;
