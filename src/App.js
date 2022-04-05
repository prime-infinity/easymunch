import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";

import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
