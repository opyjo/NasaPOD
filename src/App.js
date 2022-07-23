import "./App.css";
import { useState } from "react";
import axios from "axios";
import NasaImage from "./component/NasaImage";

function App() {
  const [nasa, setNasa] = useState("");

  const getImage = async () => {
    const res = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=Of6EBkfsyb6Ad0jZnHHDxRzxY9ghy0j0K5acT2q0"
    );
    setNasa(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <h1>Nasa Image</h1>
      <button onClick={getImage}>Get Image</button>
      <NasaImage nasa={nasa} />
    </div>
  );
}

export default App;
