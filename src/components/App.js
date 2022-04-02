import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  function fetchUserInfo() {
    return api.getUserInfo()
           .then((data) => {
              setCurrentUser(data);
           })
  }

  React.useEffect(() => {
    fetchUserInfo();
  }, [])

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

  const handleUpdateUser = (data) => {
    api.patchUserInfo(data)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  const handleUpdateAvatar = (data) => {
    console.log(data)
    api.patchUserAvatar(data)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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



      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
