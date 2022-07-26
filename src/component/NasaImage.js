import React from "react";
import "./NasaImage.css";

const NasaImage = ({ nasa }) => {
  return (
    <div>
      <p className="text text1">{nasa.title}</p>
      <p className="text">Image description/explanation:{nasa.explanation}</p>
      {nasa.media_type === "image" ? (
        <div className="container">
          <img height="500rem" width="500rem" src={nasa.url} alt={nasa.title} />
        </div>
      ) : (
        <div className="container">
          <iframe
            src={nasa.url}
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
