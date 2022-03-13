function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__button" name={props.name} type="submit">{props.buttonText}</button>
        </form>
        <button className="popup__close" onClick={props.onClose} type="button"></button>
      </div>
    </div>
  )
}

export default PopupWithForm;