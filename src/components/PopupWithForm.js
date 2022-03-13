function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__button" name={props.name} type="submit">{props.buttonText}</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
