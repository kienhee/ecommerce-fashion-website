import "./assets/scss/App.scss";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import Bill from "./Pages/Bill";
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
            <Route path="detail/:id" element={<Detail />} />
            <Route path="billing" element={<Bill />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
