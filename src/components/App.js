import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
  <div className="page">
    <Header />
    <Main
      onEditProfile={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditProfileClick}
      onCardClick={handleCardClick}
    />
    <Footer />

    <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input  className="popup__input"
              type="text"
              id="nickname"
              name="nickname"
              placeholder=""
              minLength="2"
              maxLength="40"
              required/>
      <span className="popup__error" id="nickname-error"></span>
      <input  className="popup__input"
              type="text"
              id="description"
              name="description"
              placeholder=""
              minLength="2"
              maxLength="200"
              required/>
      <span className="popup__error" id="description-error"></span>
    </PopupWithForm>

    <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <input  className="popup__input"
              type="text"
              id="title"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required/>
      <span className="popup__error" id="title-error"></span>
      <input  className="popup__input"
              type="url"
              id="link"
              name="link"
              placeholder="Ссылка на картинку"
              required/>
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>

    <PopupWithForm name="user-photo" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <input  className="popup__input"
              type="url"
              id="avatar"
              name="link"
              placeholder="Ссылка на аватар"
              required/>
      <span className="popup__error" id="avatar-error"></span>
    </PopupWithForm>

    <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>

    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </div>
  );
}

export default App;
