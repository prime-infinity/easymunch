import Resturant from "../ui/Resturant";
import { useNavigate } from "react-router-dom";

function Resturants() {
  let navigate = useNavigate();
  const enterRest = () => {
    navigate("/in-resturant");
  };

  return (
    <section>
      <div className="container pt-5">
        <div className="row pt-5 justify-content-center pt-md-5">
          <div className="col-12 px-3 my-3 d-block d-md-none">
            <input
              type="text"
              placeholder="Resturants,Foods,Drinks"
              className="form-control input-n-medium bg-theme border-none"
            />
          </div>

          {/*<div className="col-12 pb-md-4 px-4">
            <span className=" fs-20 fw-bold">Our Resturants</span>
          </div>*/}

          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (rest, index) => (
              <Resturant key={index} enterRest={enterRest} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Resturants;
