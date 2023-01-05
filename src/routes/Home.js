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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productName);
  };
  return (
    <>
      <section className="container">
        <div className="product-creation-container">
          <form className="product-creation" onSubmit={handleSubmit}>
            <label htmlFor="product-name">Product name:</label>
            <input
              type="text"
              name="product-name"
              id="product-name"
              placeholder="Product name"
              value={productName}
              onChange={handleProductNameChange}
            />
            <label htmlFor="product-price">Product price:</label>
            <input
              type="text"
              name="product-price"
              id="product-price"
              placeholder="Product price"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
            <label htmlFor="product-description">Product description:</label>
            <textarea
              name="product-description"
              placeholder="Describe the product..."
              id="product-description"
              cols="30"
              rows="10"
              value={productDescription}
              onChange={handleProductDescriptionChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="products-tab">
          <table className="tab">
            <thead>
              <th>Product name</th>
              <th>Product price</th>
              <th>Product description</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              <tr>EMPTY</tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Home;
