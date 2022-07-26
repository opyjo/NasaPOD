import React from "react";
import "./NasaImage.css";

const NasaImage = ({ dateNasa }) => {
  return (
    <div>
      <p className="text text1">{dateNasa.title}</p>
      <p className="text">
        Image description/explanation:{dateNasa.explanation}
      </p>
      {dateNasa.media_type === "image" ? (
        <div className="container">
          <img
            height="500rem"
            width="500rem"
            src={dateNasa.url}
            alt={dateNasa.title}
          />
        </div>
      ) : (
        <div className="container">
          <iframe
            src={dateNasa.url}
            frameBorder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
    </div>
  );
};

export default NasaImage;
