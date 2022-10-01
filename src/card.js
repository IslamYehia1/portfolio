import Image from "next/image.js";

function Card({ src, className, title, description }) {
  return (
    <div className={`card ${className}`}>
      <div className="imgWrapper">
        <Image className="img" src={src} layout="fill" />
      </div>
      <div className="cardTextWrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
