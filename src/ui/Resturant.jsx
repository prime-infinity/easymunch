function Resturant({ enterRest }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card border-0 p-2 cur-pointer" onClick={enterRest}>
        <img src="images/road_runnerRes.png" alt="" className="img-fluid" />
        <div className="card-body px-0">
          <div className="row d-flex justify-content-between">
            <div className="col-10">
              <h6 className="card-title restaurantCardHeader fw-bold text-uppercase">
                Woods by road runner
              </h6>
            </div>
            <div className="col-2 pe-2">
              <p className="card-text rating-text">
                <span className="rounded-circle p-1 bg-gr">4.5</span>
              </p>
            </div>
          </div>

          <p className="card-text restaurantCardText">
            Continental cuisines, finger foods, cocktails, wines and
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resturant;
