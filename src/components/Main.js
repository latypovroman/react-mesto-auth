function Main(props) {
  return (
    <main className="main page__container">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image-edit-pencil">
            <img className="profile__image" onClick={props.onEditAvatar} src="" alt="Аватар пользователя"/>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">Жак Доширак</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description"></p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Места России">
        <ul className="cards__list">

        </ul>
      </section>
    </main>
  )
}

export default Main;
