import React, { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  return (
    <>
      {people.map((person) => (
        <div className="col-md-12" key={`people-card-${person.id}`}>
          <div className="card shadow my-2">
            <div className="card-body p-5">
              <h4 className="card-title">Character's Name: {person.name} </h4>
              <p className="card-subtitle">Character's Age: {person.age}</p>
              <p className="card-text">Character's gender: {person.gender}</p>
              <a href={person.url} target="_blank">
                Click to read more about this person.
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default People;
