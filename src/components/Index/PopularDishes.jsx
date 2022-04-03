import PopularDish from "../../ui/PopularDish";

function PopularDishes() {
  return (
    <section className="first-section">
      <div className="container-fluid my-5 px-lg-5">
        <h3 className="fw-bold mb-4">Popular Dishes</h3>

        <div
          className="row flex-nowrap example"
          style={{ overflowX: "scroll" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <PopularDish key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDishes;
