import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../8-custom-hooks/setup/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// her state veya prop değişikliğinde, bileşen yeniden oluşturulur
const pahaliyiHesapla = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [card, setCard] = useState(0);
  const sepeteEkle = useCallback(() => {
    setCard((c) => c + 1);
  }, [card]);

  const enPahali = useMemo(() => pahaliyiHesapla(products), [products]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Card : {card}</h1>
      <h1>`En Pahalısı : ${enPahali}`</h1>
      <BigList products={products} sepeteEkle={sepeteEkle} />
    </>
  );
};

const BigList = React.memo(({ products, sepeteEkle }) => {
  useEffect(() => {
    console.log("büyük liste çağırıldı");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            sepeteEkle={sepeteEkle}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, sepeteEkle }) => {
  useEffect(() => {
    console.log("Tek çağırıldı");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={sepeteEkle}>Sepete Ekle</button>
    </article>
  );
};
export default Index;
