import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NasaImage from "./component/NasaImage";
import NasaImageByDate from "./component/NasaImageByDate";
const URL =
  "https://api.nasa.gov/planetary/apod?api_key=Of6EBkfsyb6Ad0jZnHHDxRzxY9ghy0j0K5acT2q0";

function App() {
  const [nasa, setNasa] = useState("");
  const [date, setDate] = useState("");
  const [showNasa, setShowNasa] = useState(false);
  const [dateNasa, setDateNasa] = useState("");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=Of6EBkfsyb6Ad0jZnHHDxRzxY9ghy0j0K5acT2q0`
      );
      setNasa(res.data);
      console.log(res.data);
    };
    getImage();
  }, []);

  const getDataByDate = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=Of6EBkfsyb6Ad0jZnHHDxRzxY9ghy0j0K5acT2q0&date=${date}`
    );
    setShowNasa(true);
    setDateNasa(response.data);
  };

  return (
    <div>
      <div>
        <h1 className="header">nasa picture of the day</h1>
      </div>

      <NasaImage nasa={nasa} />
      {
        <div className="container container2">
          <h1 className="header">
            Find the picture of the day for a previous date
          </h1>
          <label className="text" htmlFor="date">
            Select Date
          </label>
          <input
            className="text"
            type="date"
            onChange={dateHandler}
            value={date}
            id="date"
          />
          <button className="btn" onClick={getDataByDate}>
            Get Image
          </button>
          {showNasa && <NasaImageByDate dateNasa={dateNasa} />}
        </div>
      }
    </div>
  );
}

export default App;
