function PopularDish() {
  return (
    <div className="col-7 col-md-4 col-lg-3 ">
      <div
        className="card border-0 popular-dishes-bg border-r-5"
        style={{ backgroundImage: "url(images/popular-dishes1.png)" }}
      >
        <div className="card-body backg-lin-grad border-r-5">
          <h5 className="card-title text-white text-center mt-5 pt-5">
            Italian Pasta
          </h5>
          <p className="card-text text-white text-center">12,456 &#11088;</p>
          <p className="text-uppercase text-white">
            <small>Mashed potatoes with T-bone steak...</small>
          </p>
          <div className="row py-2">
            <div className="col-6">
              <span className="h5 fw-bold text-white">₦ 9,000</span>
            </div>
            <div className="col-6 text-end">
              <span className="p-2 bg-light rounded-3">
                <img
                  src="images/cart-vector.png"
                  alt=""
                  className="img-fluid"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDish;
