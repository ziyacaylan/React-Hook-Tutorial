import React, { Fragment, useState } from "react";

const UseStateBasics = () => {
  //console.log(useState("hello world"));
  //const value = useState(1)[0];
  //const handler = useState(1)[1];
  //console.log(value, handler);

  const [text, setText] = useState("Rasgele başlık");

  const handleClick = () => {
    setText("Başlık Değişti");
  };

  return (
    <Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick} className="btn">
        Başlığı Değiştir
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
