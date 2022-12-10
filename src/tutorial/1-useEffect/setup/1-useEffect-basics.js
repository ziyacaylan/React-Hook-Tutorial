import React, { useState, useEffect, Fragment } from "react";
// varsayılan olarak her yeniden oluşturma işleminden sonra çalışır
// temizleme işlevi
// ikinci parametre
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Bileşen çağırın");
    if (value >= 1) {
      document.title = `Yeni mesajlar(${value})`;
    }
  }, [value]);

  console.log("Bileşen işlendi");
  return (
    <Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Tıklayın
      </button>
    </Fragment>
  );
};

export default UseEffectBasics;
