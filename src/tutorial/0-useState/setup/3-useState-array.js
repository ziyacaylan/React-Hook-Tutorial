import React, { Fragment } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <Fragment>
      {people.map((person) => {
        const { id, name } = person;
        //console.log(name);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">
              Kaldır
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Temizle
      </button>
    </Fragment>
  );
};

export default UseStateArray;
