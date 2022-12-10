import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}

      <h1>{text || "ziya"}</h1>
      <button className="btn" onClick={() => setIsError((s) => !s)}>
        ToggleError
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>Hata var...!</p>
      ) : (
        <div>
          <h2>Hata Yok...</h2>
        </div>
      )}
      {/* {text && <h1>hello world</h1>} */}
      {/* {!text && <h1>hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;
