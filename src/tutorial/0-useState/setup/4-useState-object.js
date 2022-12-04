import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Ziya");
  const [age, setAge] = useState(40);
  const [message, setMessage] = useState("i am a front-end developer");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };

  // return <h2>useState object example</h2>;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Mesajı Değiştir
      </button>
    </>
  );
};

export default UseStateObject;
