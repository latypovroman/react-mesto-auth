function ImagePopup(props) {

  if (!props.card) return null;

  return (
    <div className={props.card ? "popup popup_type_open-image popup_opened" : "popup popup_type_open-image"}>
      <div className="popup__image-container">
        <img className="popup__popup-image" src={props.card.link} alt="Увеличенное фото"/>
        <button className="popup__close" onClick={props.onClose}type="button"></button>
        <h2 className="popup__image-title">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
