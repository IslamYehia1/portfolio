import Image from "next/image.js";

function Card({ src, href, className, title, description }) {
  return (
    <a href={href} className={`card ${className}`} target="_blank">
      <div className="imgWrapper">
        <Image
          className="img"
          src={src}
          layout="fill"
          alt={`${title} screenshot`}
        />
      </div>
      <div className="cardTextWrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Card;
