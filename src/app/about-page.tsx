import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss";

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="outer-container">
      <div className="about-container">
        <div className="about-content">
          {}
          <h2>{filmDetails?.original_title}</h2>
          <img src={filmDetails?.movie_banner} alt={filmDetails?.title} />
          <h3>{filmDetails?.description}</h3>
          <h4>Director: {filmDetails?.director}</h4>
          <h5>Producer: {filmDetails?.producer}</h5>
          <h5>Released Date: {filmDetails?.release_date}</h5>

          <button onClick={handleBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
