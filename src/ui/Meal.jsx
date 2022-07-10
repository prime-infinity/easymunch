import { useState } from "react";
import FakeFoodViewModal from "./FoodViewModal";

function Meal() {
  const [isViewingItem, setIsViewItem] = useState(false);
  const showMealDetail = () => {
    setIsViewItem(true);
  };
  const closeModal = () => {
    setIsViewItem(false);
  };
  return (
    <>
      {isViewingItem && <FakeFoodViewModal closeModal={closeModal} />}
      <div
        className="col-12 col-md-6 col-lg-3 cur-pointer"
        onClick={showMealDetail}
      >
        <div className="card border-0">
          <div className="card-body px-0">
            <img
              src="images/unsplash_MqT0asuoIcU111.png"
              alt=""
              className="img-fluid w-100"
            />
            <h6 className="card-title pt-2 restaurantCardHeader fw-bold text-uppercase mb-1">
              Carlitos way special
            </h6>
            <p className="card-text mb-1 restaurantCardText">
              Lamb ribs/pork ribs with creamy jacket
            </p>
            <div className="fw-bold">₦9,000.00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meal;
