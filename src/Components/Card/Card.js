import "./Card.css";

export default function Card({ imageSrc, text, id, reverse }) {

  // Cambiar la tarjeta a la izquierda o la derecha dependiendo del prop 'reverse'
  const cardClass = reverse ? "card card_reverse" : "card";

  return (
    <>
      <div className="cards-container">
        <div className={cardClass} id={id}>
          <img
            src={imageSrc}
            className="
        card_image"
          />
          <div className="card_text">{text}</div>
        </div>
      </div>
    </>
  );
}
