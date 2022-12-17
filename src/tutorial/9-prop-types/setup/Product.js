import React from "react";
import PropTyppes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  console.log(image, name, price);
  return (
    <article className="product">
      <img src={url || defaultImage} alt="product" />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTyppes.object.isRequired,
  name: PropTyppes.string.isRequired,
  price: PropTyppes.number.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };
export default Product;
