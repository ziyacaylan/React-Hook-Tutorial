import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  // const handleUpdate = () => {
  //   setValue((p) => p + 1);
  // };
  const handleReset = () => {
    setValue(0);
  };
  const karmasikArtis = () => {
    setTimeout(() => {
      setValue((pre) => pre + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Normal Sayaç</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Azalt
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue((p) => p + 1)}>
          Arttır
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Karmaşık Sayaç</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={karmasikArtis}>
          Sonra Arttır
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
