import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register.jsx/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllMovies from "./pages/AllMovies/AllMovies";
import SharedReview from "./pages/SharedReview/SharedReview";
import AllReviews from "./pages/AllReviews/AllReviews";
import EditProfile from "./pages/EditProfile/EditProfile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import CreateReview from "./component/CreateReview";
import DeleteReview from "./component/DeleteReview";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />}>
          <Route path="allmovies" element={<AllMovies />} />
          <Route path="sharedReview" element={<SharedReview />} />
          <Route path="allReviews" element={<AllReviews />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="changePass" element={<ChangePassword />} />
          <Route path="createReview" element={<CreateReview/>}/>
           <Route path="deleteReview" element={<DeleteReview/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
