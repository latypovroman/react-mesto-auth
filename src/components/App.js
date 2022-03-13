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

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
  <div class="page">
    <Header />
    <Main
      onEditProfile={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditProfileClick}
    />
    <Footer />

    <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input  className="popup__input"
              type="text"
              id="nickname"
              name="nickname"
              placeholder=""
              minlength="2"
              maxlength="40"
              required/>
      <span className="popup__error" id="nickname-error"></span>
      <input  className="popup__input"
              type="text"
              id="description"
              name="description"
              placeholder=""
              minlength="2"
              maxlength="200"
              required/>
      <span className="popup__error" id="description-error"></span>
    </PopupWithForm>

    <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <input  className="popup__input"
              type="text"
              id="title"
              name="name"
              placeholder="Название"
              minlength="2"
              maxlength="30"
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

    <ImagePopup />


    <template className="card-template">
      <li className="card">
        <img className="card__image" src="https://" alt=""/>
        <a className="card__delete" href="#"></a>
        <div className="card__panel">
          <h2 className="card__title">Домбай</h2>
          <div className="card__like">
            <button className="card__like-btn" type="button"></button>
            <span className="card__like-counter">0</span>
          </div>
        </div>
      </li>
    </template>
  </div>
  );
}

export default App;
