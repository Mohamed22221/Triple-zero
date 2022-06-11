import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React, { Fragment, useState, useEffect } from 'react'
import RequireAuth from './components/Auth/RequireAuth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";

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



import ClintDrivers from "./components/drivers/Clint";
import Account from "./pages/Account";
import './styles/glopal-style.scss'
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SidebarLayout from "./components/bars/NotBar";
import ProtectedRoutesAdmin from "./components/Auth/ProtectedRoutes";
import Drivers from "./pages/Drivers";
import PreLoader from "./Shared/Components/PreLoader/PreLoader";
import ActiveDrivers from "./components/drivers/ActiveDrivers";
import Managers from "./pages/Managers";
import Manager from "./components/managers/Manager"
import AddDrivers from "./components/drivers/AddDrivers";
import AddManager from "./components/managers/AddManager";
import Currencies from "./pages/Currencies";
import AddCurrency from "./components/Currency/AddCurrency";
import OneCurrency from "./components/Currency/OneCurrency";
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




  const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }

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
          <AddDrivers />
          <AddManager />
          <AddCurrency />
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


               
                {/* <Route path="shipping-companies" element={<Shipping HandelShow={HandelShow} />} />
                <Route path="shipping-companies/blackList" element={<DisActiveBlackList />} />
                <Route path="/shipping-companies" element={<ClintShipping HandelShow={HandelShow}
                  HandelClose={HandelClose} />} >
                  <Route path=":id" element={<ClintShipping
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />} >
                  </Route>
                </Route> */}

                {/*Drivers */}
                <Route path="Drivers" element={<Drivers HandelShow={HandelShow} />} />
                <Route path="Drivers/ActiveDrivers" element={<ActiveDrivers />} />
                <Route path="/Drivers/clint" element={<ClintDrivers HandelShow={HandelShow}

                  HandelClose={HandelClose} />} >
                  <Route path=":clintid" element={<ClintDrivers
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />} >
                  </Route>
                </Route>
                {/*currencies */}
                <Route path="Currencies" element={<Currencies HandelShow={HandelShow} />} />
                <Route path="/Currencies/clint" element={<OneCurrency HandelShow={HandelShow}
                  HandelClose={HandelClose} />} >
                  <Route path=":clintid" element={<OneCurrency
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />} >
                  </Route>
                </Route>
                {/*Managers */}
                <Route path="Managers" element={<Managers HandelShow={HandelShow} />} />
                <Route path="/Managers/clint" element={<Manager HandelShow={HandelShow}
                  HandelClose={HandelClose} />} >
                  <Route path=":clintid" element={<Manager
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />} >
                  </Route>
                </Route>

                {/*Account */}
                <Route path="/Account" element={<Account
                  HandelShow={HandelShow}
                  HandelClose={HandelClose} />} />

                {/* <Route path="/EditUser" element={<EditUser HandelShow={HandelShow} />} >
                  <Route path="/EditUser/:userid" element={<EditUser />} />
                </Route> */}

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
