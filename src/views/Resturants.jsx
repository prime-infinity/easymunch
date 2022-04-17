import Resturant from "../ui/Resturant";

function Resturants() {
  return (
    <section>
      <div className="container pt-5">
        <div className="row">
          <div className="h3 fw-bolder">OUR RESTAURANTS</div>
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
