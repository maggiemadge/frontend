import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/HomeComponent";
import Login from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
import Profile from "./components/pages/ProfileComponent";
import PrivateRoute from "./PrivateRoute";
import { Guard, ProtectedRoute } from "./Guard";
import Header from "./components/layouts/Header";

function Switch() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" render={(props) => <Navigate to={{ pathname: "/home" }} />} />
        <Route path="/home" element={Home} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        {/*Redirect if not authenticated */}
        <Route exact path="/user" element={<ProtectedRoute />}>
          <Route exact path={`/user/view-profile`} element={<Profile />} />
          <Route exact path="/user" render={(props) => <Navigate to={{ pathname: `${props.match.path}/view-profile` }} />} />
        </Route>
        {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} /> */}
      </Routes>
    </>
  );
}
export default Switch;
