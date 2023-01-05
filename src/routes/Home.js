const Home = () => {
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
            />
            <label for="product-price">Product price:</label>
            <input
              type="text"
              name="product-price"
              id="product-price"
              placeholder="Product price"
            />
            <label for="product-description">Product description:</label>
            <textarea
              name="product-description"
              placeholder="Describe the product..."
              id="product-description"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>
        <div className="products-tab"></div>
      </section>
    </>
  );
};
export default Home;
