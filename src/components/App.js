import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  return (
  <div class="page">
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_type_profile">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form" name="bio" novalidate>
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
          <button className="popup__button" name="bio" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>

    <div className="popup popup_type_add-card">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form" name="card" novalidate>
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
          <button className="popup__button" name="card" type="submit">Создать</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>

    <div className="popup popup_type_user-photo">
      <div className="popup__container">
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form" name="photo" novalidate>
          <input  className="popup__input"
                  type="url"
                  id="avatar"
                  name="link"
                  placeholder="Ссылка на аватар"
                  required/>
          <span className="popup__error" id="avatar-error"></span>
          <button className="popup__button" name="photo" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>

    <div className="popup popup_type_open-image">
      <div className="popup__image-container">
        <img className="popup__popup-image" src="#" alt="Увеличенное фото"/>
        <button className="popup__close" type="button"></button>
        <h2 className="popup__image-title">Title</h2>
      </div>
    </div>

    <div className="popup popup_type_delete">
      <div className="popup__container">
        <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
        <form className="popup__form" name="delete" novalidate>
          <button className="popup__button" name="card" type="submit">Да</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>

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
