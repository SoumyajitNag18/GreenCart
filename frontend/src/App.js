import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import banner_eco from "./Components/Assets/banner_eco.png";
import BasicLayout from "./Components/Layouts/BasicLayout";
import LatestCollection from "./Pages/LatestCollection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <BasicLayout>
                <Shop />
              </BasicLayout>
          }/>
          <Route path="/eco-friendly" element={
              <BasicLayout>
                <ShopCategory banner={banner_eco} category="eco-friendly" />
              </BasicLayout>
          }/>
          <Route path="/sustainable" element={
              <BasicLayout>
                <ShopCategory banner={banner_eco} category="sustainable" />
              </BasicLayout>
          }/>
          <Route path="/kid" element={
              <BasicLayout>
                <ShopCategory banner={banner_eco} category="kid" />
              </BasicLayout>
          }/>
          <Route path="/latest-collection" element={
                <BasicLayout>
                  <LatestCollection banner={banner_eco}/>
                </BasicLayout>
          }/>
          <Route path="/product" element={
              <BasicLayout>
                <Product />
              </BasicLayout>
          }>
          <Route path=":productId" element={
                <BasicLayout>
                  <Product />
                </BasicLayout>
          }/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={
              <BasicLayout>
                <LoginSignup />
              </BasicLayout>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;