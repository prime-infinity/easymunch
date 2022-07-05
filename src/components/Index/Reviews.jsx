import ReviewCard from "../../ui/ReviewCard";

function Reviews() {
  return (
    <section>
      <div className="container py-3 my-3">
        <div className="row">
          <div className="col-12 pb-4">
            <div className="font-boldest-second-biggest col-lg-4 col-7">
              What the Foodies say about us ☺️
            </div>
          </div>
        </div>

        {/* review cards */}
        <div className="row  justify-content-center pb-md-5">
          <div className="col-12">
            <div
              className="row flex-nowrap no-scroll-bar"
              style={{ overflowX: "scroll" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <ReviewCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
