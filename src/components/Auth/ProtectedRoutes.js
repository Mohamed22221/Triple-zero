import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const useAuth = () => {
  // const user = { loggedIn: null };
  // // console.log('user && user.loggedIn', user && user.loggedIn);
  // return user && user.loggedIn;
  // const { loginM } = useSelector(state => state.isLoggedIn)
  // // console.log('loginM');
  const loggedIn = localStorage.getItem('loggedIn')
  return loggedIn;
};


 const ProtectedRoutesAdmin = (e) => {
  const isAuth = useAuth();
  // console.log('isAuth', isAuth);
  // console.log('e', e);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

// const ProtectedRoutes = (e) => {
//   const isAuth = useAuth();
//   // console.log('isAuth', isAuth);
//   // console.log('e', e);
//   return isAuth === 1 ? <Outlet /> : <Navigate to="/" />;
// };






export default ProtectedRoutesAdmin;
