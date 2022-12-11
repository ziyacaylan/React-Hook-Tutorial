import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const kaldirilmisKisi = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} kaldirilmisKisi={kaldirilmisKisi} />
    </section>
  );
};

const List = ({ people, kaldirilmisKisi }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            kaldirilmisKisi={kaldirilmisKisi}
          />
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name, kaldirilmisKisi }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => kaldirilmisKisi(id)}>Kaldır</button>
    </div>
  );
};
export default PropDrilling;
