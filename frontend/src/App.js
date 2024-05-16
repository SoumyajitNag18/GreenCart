import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import banner_eco from "./Components/Assets/banner_eco.png";
import banner_sust from "./Components/Assets/banner_sust.png";
import BasicLayout from "./Components/Layouts/BasicLayout";
import LatestCollection from "./Pages/LatestCollection";
import HeroWithoutSorting from "./Components/MiniComps/HeroWithoutSorting";
import TnC from "./Pages/TnC";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Razorpay from "./Pages/Razorpay";
import Help from "./Pages/Help";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BasicLayout>
                <Shop />
              </BasicLayout>
            }
          />
          <Route
            path="/eco-friendly"
            element={
              <BasicLayout>
                <ShopCategory banner={banner_eco} category="eco-friendly" />
              </BasicLayout>
            }
          />
          <Route
            path="/sustainable"
            element={
              <BasicLayout>
                <ShopCategory banner={banner_sust} category="sustainable" />
              </BasicLayout>
            }
          />
          <Route
            path="/greentour"
            element={<HeroWithoutSorting category="greentour" />}
          />
          <Route
            path="/latest-collection"
            element={
              <BasicLayout>
                <LatestCollection banner={banner_eco} />
              </BasicLayout>
            }
          />
          <Route
            path="/product"
            element={
              <BasicLayout>
                <Product />
              </BasicLayout>
            }
          >
            <Route
              path=":productId"
              element={
                <BasicLayout>
                  <Product />
                </BasicLayout>
              }
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={
              <BasicLayout>
                <LoginSignup />
              </BasicLayout>
            }
          />
          <Route
            path="/tnc"
            element={
              <BasicLayout>
                <TnC />
              </BasicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <BasicLayout>
                <About />
              </BasicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <BasicLayout>
                <Contact />
              </BasicLayout>
            }
          />
          <Route path="/razorpay" element={<Razorpay />} />
          <Route
            path="/help"
            element={
              <BasicLayout>
                <Help />
              </BasicLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
