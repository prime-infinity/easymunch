import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch /*, useSelector*/ } from "react-redux";
import { getAuth } from "./redux/silces/authSlice";
import { useEffect } from "react";

import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import Resturants from "./views/Resturants";

import Header from "./components/Header";
import InResturant from "./views/InResturant";
//import Footer from "./components/Footer";

function App() {
  //const authState = useSelector((state) => state.auth.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resturants" element={<Resturants />} />
        <Route path="/in-resturant" element={<InResturant />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
