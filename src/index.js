import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import Resturants from "./views/Resturants";
import InResturant from "./views/InResturant";
import BecomeVendor from "./views/BecomeVendor";
import Checkout from "./views/Checkout";
import CheckoutDetails from "./components/Checkout/CheckoutDetails";
import CheckoutAddress from "./components/Checkout/CheckoutAddress";
import CheckoutReview from "./components/Checkout/CheckoutReview";
import UserDashboard from "./views/UserDashboard";
import UserProfile from "./components/UserDashboard/routes/UserProfile";
import UserOrderHistory from "./components/UserDashboard/routes/UserOrderHistory";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resturants" element={<Resturants />} />
            <Route path="/in-resturant" element={<InResturant />} />
            <Route path="/vendor" element={<BecomeVendor />} />
            <Route path="/checkout" element={<Checkout />}>
              <Route path="details" element={<CheckoutDetails />} />
              <Route path="address" element={<CheckoutAddress />} />
              <Route path="review" element={<CheckoutReview />} />
            </Route>
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="history" element={<UserOrderHistory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
