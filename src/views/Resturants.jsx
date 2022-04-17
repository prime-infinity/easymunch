import Resturant from "../ui/Resturant";

function Resturants() {
  return (
    <section>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-11 my-3 d-block d-md-none">
            <input
              type="text"
              placeholder="search"
              className="form-control rounded-pill bg-gr border-none"
            />
          </div>

          <div className="col-12">
            <div className="h4 fw-bolder mt-3">OUR RESTAURANTS</div>
          </div>

          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (rest, index) => (
              <Resturant key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Resturants;
