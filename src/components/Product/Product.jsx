import React, { useEffect, useState } from "react";
import "./Product.css";
    import axios from "axios"

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="product-container">
      {products.length > 0 &&
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  );
};
export default Product;