import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";

import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
