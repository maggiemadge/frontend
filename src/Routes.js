import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/HomeComponent";
// import Login from "./components/pages/LoginComponent";
import Login from "pages/Login"
import Register from "./components/pages/RegisterComponent";
import Profile from "./components/pages/ProfileComponent";
import Text from "components/pages/test";
// import Page404 from "pages/404";
// import PrivateRoute from "./PrivateRoute";
import { ProtectedRoute } from "./Guard";
// import Header from "./components/layouts/Header";

function Switch() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* <Route exact path="/" render={(props) => <Navigate to={{ pathname: "/home" }} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Text />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        {/*Redirect if not authenticated */}
        <Route exact path="/user" element={<ProtectedRoute />}>
          <Route exact path={`/user/view-profile`} element={<Profile />} />
          <Route exact path="/user" render={(props) => <Navigate to={{ pathname: `${props.match.path}/view-profile` }} />} />
        </Route>
        {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} /> */}
        {/* <Route element={<Page404 />} /> */}
      </Routes>
    </>
  );
}
export default Switch;
