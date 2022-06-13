import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React, { Fragment, useState, useEffect } from 'react'
import RequireAuth from './components/Auth/RequireAuth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Restaurants
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./components/Restaurants/RestaurantDetails/User";
import RestaurantsBlackList from "./components/Restaurants/BlackList";
import AddRestaurant from "./components/Restaurants/AddForm";

// Shipping
import Shipping from "./pages/Shipping";
import ShippingDetails from "./components/Shipping/ShippingDetails/User"
import ShippingBlackList from "./components/Shipping/BlackList";
import AddShipping from "./components/Shipping/AddForm";

// Managers
import Managers from "./pages/Managers";
import ManagerDetails from "./components/Managers/ManagerDetails/User"
import ManagersBlackList from "./components/Managers/BlackList";
import AddManager from "./components/Managers/AddForm";

// Drivers
import Drivers from "./pages/Drivers";
import DriverDetails from "./components/Drivers/DriverDetails/User";
import DriverBlackList from "./components/Drivers/BlackList";
import AddDriver from "./components/Drivers/AddForm";

// Currencies
import Currencies from "./pages/Currencies";
import CurrencyDetails from "./components/Currency/CurrencyDetails/User";
import CurrenciesBlackList from "./components/Currency/BlackList";
import AddCurrency from "./components/Currency/AddForm";

// Quotes
import Quotes from "./pages/Quotes";
import QuotesDetails from "./components/Quotes/QuotesDetails/User";
import QuotesBlackList from "./components/Quotes/BlackList";
import AddQuotes from "./components/Quotes/AddForm";

// Account
import MyAccount from "./pages/Account";
import EditMyAccount from "./components/MyAccount/EditMyAccoutn/EditUser";


// import EditUser from "./components/clint copy/EditUser";
import './styles/glopal-style.scss'
import Setting from "./pages/Setting";
import SidebarLayout from "./components/bars/NotBar";
import ProtectedRoutesAdmin from "./components/Auth/ProtectedRoutes";
import PreLoader from "./Shared/Components/PreLoader/PreLoader";
// import PrecedentClint from "./components/clint copy/PrecedentClint";
function App() {
  const [showBar, setShowBar] = useState(false) //side par
  const [show, setShow] = useState(false) // added clint massige
  const [loader, setLoader] = useState(true);

  const HandelShow = () => {
    setShowBar(!showBar)
  }

  const HandelClose = () => {
    setShowBar(false)
    setShow(false)
  }




  // const ROLES = {
  //   'User': 2001,
  //   'Editor': 1984,
  //   'Admin': 5150
  // }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <StyleApp>
        <BrowserRouter>
          {/* public sliders */}
          <AddRestaurant />
          <AddShipping />
          <AddDriver />
          <AddManager />
          <AddCurrency />
          <AddQuotes />
          <OverLay HandelClose={HandelClose} showBar={showBar} />

          <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutesAdmin />}>
              <Route element={<SidebarLayout />}>
                {/* User routes */}
                <Route path="/" element={<Home HandelShow={HandelShow} />} />
                <Route path="Triple-zero" element={<Home HandelShow={HandelShow} />} />
                <Route path="/setting" element={<Setting />} />

                {/* Start Restaurants Routes */}
                <Route path="restaurants">
                  <Route path="" element={<Restaurants
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":restaurantId" element={<RestaurantDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<RestaurantsBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End Restaurants Routes */}

                {/* Start shipping Routes */}
                <Route path="shipping-companies">
                  <Route path="" element={<Shipping
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":shippingId" element={<ShippingDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<ShippingBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End shipping Routes */}

                {/* Start Managers Routes */}
                <Route path="managers">
                  <Route path="" element={<Managers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":managerId" element={<ManagerDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<ManagersBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End Managers Routes */}

                {/* Start Drivers Routes */}
                <Route path="drivers">
                  <Route path="" element={<Drivers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":driverId" element={<DriverDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<DriverBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End Drivers Routes */}

                {/* Start Currencies Routes */}
                <Route path="currencies">
                  <Route path="" element={<Currencies
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":currencyId" element={<CurrencyDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<CurrenciesBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End Currencies Routes */}

                {/* Start Quotes Routes */}
                <Route path="quotes">
                  <Route path="" element={<Quotes
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":quotesId" element={<QuotesDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="black-list" element={<QuotesBlackList
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                </Route>
                {/* End Quotes Routes */}

                {/* My Account */}
                <Route path="my-account">
                  <Route path="" element={<MyAccount
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="edit" element={<EditMyAccount HandelShow={HandelShow} />} />
                </Route>
              </Route>


            </Route>

          </Routes>
        </BrowserRouter>
      </StyleApp>
    </Fragment>

  );
}
const StyleApp = styled.div`
display: flex;
width: 100%;

`
export default App;
