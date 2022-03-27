import "./assets/scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import About from "./Pages/About"
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import SimpleProduct from "./Pages/SimpleProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="SimpleProduct" element={<SimpleProduct />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
