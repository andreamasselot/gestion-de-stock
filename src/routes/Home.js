import { useState } from "react";

const Home = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);
  };
  const handleProductPriceChange = (event) => {
    const value = event.target.value;
    setProductPrice(value);
  };
  const handleProductDescriptionChange = (event) => {
    const value = event.target.value;
    setProductDescription(value);
  };
  return (
    <>
      <section className="container">
        <div className="product-creation-container">
          <form className="product-creation">
            <label for="product-name">Product name:</label>
            <input
              type="text"
              name="product-name"
              id="product-name"
              placeholder="Product name"
              value={productName}
              onChange={handleProductNameChange}
            />
            <label for="product-price">Product price:</label>
            <input
              type="text"
              name="product-price"
              id="product-price"
              placeholder="Product price"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
            <label for="product-description">Product description:</label>
            <textarea
              name="product-description"
              placeholder="Describe the product..."
              id="product-description"
              cols="30"
              rows="10"
              value={productDescription}
              onChange={handleProductDescriptionChange}
            ></textarea>
          </form>
        </div>
        <div className="products-tab"></div>
      </section>
    </>
  );
};
export default Home;
