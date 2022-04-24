import InRestCat from "../ui/InRestCat";
import Meal from "../ui/Meal";

function InResturant() {
  return (
    <section>
      <div className="container pt-5">
        {/** intro text */}
        <div className="row">
          <div className="col-9 col-md-6 col-lg-4 mt-4 ms-md-3 ms-2 ms-lg-5">
            <div className="h3 fw-bolder">WOODS BY ROAD RUNNERS</div>
            <div className="p">
              Continental cuisines, finger foods, cocktails, wines and spirits
            </div>
          </div>
        </div>

        {/** contacts */}
        <div className="row ps-lg-5 ps-2 ps-md-3 ">
          {/** text web */}
          <div className="col-12 d-none d-md-block pt-2">
            <span>
              <img src="images/Vector green.png" alt="" />
              <span className="text-success ps-1">
                Open <span className="fw-bold text-secondary ps-1 pe-1">|</span>{" "}
              </span>
            </span>
            <span className="text-muted">
              <img src="images/Vector location.png" alt="" />
              <span className="ps-1">
                107 Boundary Road, GRA Benin City{" "}
                <span className="fw-bold text-secondary ps-1 pe-1">|</span>
              </span>
            </span>
            <span className="text-muted ps-1">
              <img src="images/Vector telephone.png" alt="" />
              <span className="ps-1">0907 000 0000</span>
            </span>
          </div>

          {/*text mobile */}
          <div className="pt-3 d-block d-md-none">
            <img src="images/Vector location.png" alt="" />
            <span className="ps-1">107 Boundary Road, GRA Benin City</span>
          </div>
          <div className="col-12 d-block d-md-none">
            <div className="pt-2">
              <img src="images/Vector telephone.png" alt="" />
              <span className="ps-1"></span>0907 000 0000
            </div>

            <div className="pt-2">
              <img src="images/Vector green.png" alt="" />
              <span className="text-success ps-1">Open </span>
            </div>
          </div>
        </div>

        {/** category buttons */}
        <div
          className="row py-3 mt-md-3  flex-nowrap example"
          style={{ overflowX: "scroll" }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rest, index) => (
            <InRestCat key={index} />
          ))}
        </div>

        {/** means */}
        <div className="row pt-3 ">
          {/** summer lunch  */}
          <div className=" fw-bold text-white h4">
            <small className="px-2 py-1 bg-black">SUMMER LUNCH</small>
          </div>
        </div>
        <div className="row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((rest, index) => (
            <Meal key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InResturant;
