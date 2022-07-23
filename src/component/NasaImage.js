import React from "react";

const NasaImage = ({ nasa }) => {
  return (
    <div>
      <p>{nasa.title}</p>
      <p>{nasa.explanation}</p>
      <img src={nasa.url} alt={nasa.title} />
    </div>
  );
};

export default NasaImage;
