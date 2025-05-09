import "./XFollowedCard.css";
import { useState } from 'react'
// Forma 1 de recuperar imagenes, ejemplo JoseLeal2818
// const imageSrc = `https://unavatar.io/github/${userName}`;

// Forma 2
// {`https://unavatar.io/github/${userName}`}

export function XFollowedCard({ children, userName }) {
  // (Estado interno) Estado del boton, primer valor estado inicial, segundo valor el que va a estar cambiando
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonSeguir = isFollowing ? "btnFollowing" : "btnFollow";

  const handleCick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="miniCard">
      <header className="infoImg">
        <img alt="El avatar" src={`https://unavatar.io/github/${userName}`} />
        <div className="info">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <button  className={buttonSeguir} onClick={handleCick}>{text}</button>
    </article>
  );
}
