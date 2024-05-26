import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckoutPizza from "./pages/checkoutPizza";
import CheckoutBurger from "./pages/checkoutBurger";
import CheckoutShawarma from "./pages/checkoutShawara";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="checkoutPizza" element={<CheckoutPizza/>} />
          <Route path="checkoutBurger" element={<CheckoutBurger/>} />
          <Route path="checkoutShawarma" element={<CheckoutShawarma/>} />

      </Routes>
    </BrowserRouter>
);

