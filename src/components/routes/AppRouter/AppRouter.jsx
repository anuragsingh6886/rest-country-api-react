import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "../../../views/CountryDetails";
import HomeView from "../../../views/HomeView";
import CountriesLayout from "../../layouts/CountriesLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountriesLayout />}>
          <Route path="countries" element={<HomeView />} />
          <Route path="" element={<HomeView />} />
          <Route path="countries/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
