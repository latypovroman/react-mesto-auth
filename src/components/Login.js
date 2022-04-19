import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <section className="sign">
      <form className="sign__form">
        <h2 className="sign__title">Вход</h2>
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
        <button className="sign__button">Войти</button>
      </form>
    </section>
  );
};

export default Login;
