const Home = () => {
  return (
    <>
      <section>
        <div className="product-creation-container">
          <form className="product-creation">
            <input type="text" name="product-name" id="product-name" />
            <input type="text" name="product-price" id="product-price" />
            <textarea
              name="product-description"
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
