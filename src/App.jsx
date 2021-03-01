import React, { useState } from "react";
import Film from "./components/Film";
import People from "./components/People";
import Homepage from "./components/Homepage";

const App = () => {
  const [filmButton, setFilmButton] = useState(false);
  const [peopleButton, setPeopleButton] = useState(false);

  let toggleFilms = () => {
    setFilmButton(true);
    setPeopleButton(false);
  };
  let togglePeople = () => {
    setFilmButton(false);
    setPeopleButton(true);
  };

  if (filmButton)
    return (
      <main className="container">
        <img
          className="mx-auto d-block col-md-4"
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Studio Ghibli logo"
        />
        <section className=" row justify-content-center">
          <button onClick={() => toggleFilms()} className="btn btn-link btn-lg">
            Films
          </button>
          <button onClick={() => togglePeople()} className="btn btn-link btn-lg">
            People
          </button>
        </section>
        <section className=" row justify-content-center">
          <Film />
        </section>
      </main>
    );
  else if (peopleButton)
    return (
      <main className="container">
        <img
          className="mx-auto d-block col-md-4"
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Studio Ghibli logo"
        />
        <section className=" row justify-content-center">
          <button onClick={() => toggleFilms()} className="btn btn-link btn-lg">
            Films
          </button>
          <button onClick={() => togglePeople()} className="btn btn-link btn-lg">
            People
          </button>
        </section>
        <section className="row justify-content-center">
          <People />
        </section>
      </main>
    );
  else {
    return (
      <>
        <img
          className="mx-auto d-block mt-5 col-md-4"
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Studio Ghibli logo"
        />
        <main className="container text-center ">
          <Homepage />
          <section>
            <button onClick={() => toggleFilms()} className="btn btn-link btn-lg">
              Films
            </button>

            <button onClick={() => togglePeople()} className="btn btn-link btn-lg">
              People
            </button>
          </section>
        </main>
      </>
    );
  }
};

export default App;
