import { Outlet } from "react-router-dom";
import { useDispatch /*, useSelector*/ } from "react-redux";
import { getAuth } from "./redux/silces/authSlice";
import { useEffect } from "react";

import Header from "./components/Header";
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
