import { Fragment } from "react";

const ErrorExample = () => {
  let title = "rasgele başlık";
  const handleClick = () => {
    title = "selam millet";
    console.log(title);
  };

  return (
    <Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Başlığı Değiştir
      </button>
    </Fragment>
  );
};

export default ErrorExample;
