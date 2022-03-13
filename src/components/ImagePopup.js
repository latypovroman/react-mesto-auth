function ImagePopup() {
  return (
    <div className="popup popup_type_open-image">
      <div className="popup__image-container">
        <img className="popup__popup-image" src="#" alt="Увеличенное фото"/>
        <button className="popup__close" type="button"></button>
        <h2 className="popup__image-title">Title</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
