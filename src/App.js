import React, { useState, useEffect } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/journal/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  userProfileFetch,
  userSetId,
  userLogout,
} from "./redux/actions/authActions";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/authComponents/Login";
import RegisterContainer from "./components/authComponents/RegisterContainer";
import RequireAuth from "./components/authComponents/RequireAuth";
import FavoritesContainer from "./components/favorites/FavoritesContainer";
import CocktailContainer from "./components/cocktailComponents/cocktail/CocktailContainer";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./ErrorPage";

function App({ authData, logout, setId, fetchProfile }) {
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleSearch = (name) => {
    setName(name);
    navigate("/");
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    navigate("/");
  };

  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      setId(userId);
      fetchProfile(userId);
    }
  }, [userId, setId, fetchProfile]);

  return (
    <ScrollToTop>
      <ToastContainer />
      <Navigation
        handleSearch={handleSearch}
        authData={authData}
        logout={logout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              filter={filter}
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              authData={authData}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<RegisterContainer isEdit={false} />}
        />
        <Route path="/cocktail/:id" element={<CocktailContainer />} />

        <Route element={<RequireAuth />}>
          <Route path="/favorites/:id" element={<FavoritesContainer />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ScrollToTop>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (userId) => dispatch(userSetId(userId)),
    fetchProfile: (userId) => dispatch(userProfileFetch(userId)),
    logout: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
