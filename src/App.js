import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useDispatch /*, useSelector*/ } from "react-redux";
import { getAuth } from "./redux/silces/authSlice";
import { useEffect } from "react";

import Resturants from "./views/Resturants";
import Checkout from "./views/Checkout";

import Header from "./components/Header";
import InResturant from "./views/InResturant";
import BecomeVendor from "./views/BecomeVendor";
import UserDashboard from "./views/UserDashboard";
import Vendor from "./components/vendor/Vendor";
import VendorOrders from "./components/vendor/routes/VendorOrders";
import VendorMenu from "./components/vendor/routes/VendorMenu";
//import Footer from "./components/Footer";

function App() {
  //const authState = useSelector((state) => state.auth.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;
