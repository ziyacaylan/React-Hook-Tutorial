import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      console.log("formu Gönder");
      const person = { name, email };
      setPeople((people) => {
        return [...people, { name, email }];
      });
      console.log(person);
      console.log(people);
    } else {
      console.log("boş değerler");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="bnt">
            Kişi EKLE
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
