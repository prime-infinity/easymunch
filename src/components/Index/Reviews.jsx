import ReviewCard from "../../ui/ReviewCard";

function Reviews() {
  return (
    <section>
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-12 ps-lg-5 ps-4 pb-4">
            <div className="h1 fw-bold col-lg-4 col-7">
              What the Foodies say about us ☺️
            </div>
          </div>
        </div>

        {/* review cards */}
        <div
          className="row flex-nowrap example pb-md-5 ps-lg-5"
          style={{ overflowX: "scroll" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
