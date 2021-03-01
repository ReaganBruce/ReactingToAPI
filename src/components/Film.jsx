import React, { useState, useEffect } from "react";

const Film = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  return (
    <>
      {films.map((film) => (
        <div className="col-md-12" key={`films-card-${film.id}`}>
          <div className="card shadow my-2">
            <div className="card-body p-5">
              <h4 className="card-title">{film.title}</h4>
              <hr className="border border-primary"></hr>
              <p className="card-subtitle">Film Director: {film.director}</p>
              <hr></hr>
              <p className="card-subtitle">Film Producer: {film.producer}</p>
              <hr></hr>
              <p className="card-text">{film.description}</p>
              <hr></hr>
              <p className="card-text">Rotten Tomatoes score: {film.rt_score}%</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Film;
