function Main() {
  const handleEditAvatarClick = () => {
    const userPhotoPopup = document.querySelector('.popup_type_user-photo');
    userPhotoPopup.classList.add('popup_opened');
  }

  const handleEditProfileClick = () => {
    const editProfilePopup = document.querySelector('.popup_type_profile');
    editProfilePopup.classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    const addCardPopup = document.querySelector('.popup_type_add-card');
    addCardPopup.classList.add('popup_opened');
  }

  return (
    <main className="main page__container">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image-edit-pencil">
            <img className="profile__image" onClick={handleEditAvatarClick} src="" alt="Аватар пользователя"/>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">Жак Доширак</h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            <p className="profile__description"></p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="cards" aria-label="Места России">
        <ul className="cards__list">

        </ul>
      </section>
    </main>
  )
}

export default Main;
