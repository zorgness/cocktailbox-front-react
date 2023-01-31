import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
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
import RequireAuth from "./components/authComponents/RequireAuth";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./ErrorPage";
import Loader from "./components/Loader";

const Login = lazy(() => import("./components/authComponents/Login"));
const RegisterContainer = lazy(() =>
  import("./components/authComponents/RegisterContainer")
);
const FavoritesContainer = lazy(() =>
  import("./components/favorites/FavoritesContainer")
);
const CocktailContainer = lazy(() =>
  import("./components/cocktailComponents/cocktail/CocktailContainer")
);

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
      <Suspense fallback={<Loader />}>
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
      </Suspense>
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
