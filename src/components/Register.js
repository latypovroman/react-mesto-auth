import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
  return (
      <section className="sign">
      <form className="sign__form">
        <h2 className="sign__title">Регистрация</h2>
        <input
          className="sign__input"
          type="email"
          placeholder="Email"
          name=""
          id=""/>
        <span></span>
        <input
          className="sign__input"
          type="password"
          placeholder="Пароль"
          name=""
          id=""/>
        <span></span>
        <button className="sign__button">Зарегистрироваться</button>
        <p className="sign__redirect-text">Уже зарегистрированы?
          <Link to="Login.js" className="sign__redirect-link">Войти</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
