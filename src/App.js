import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./Components/layouts/HomeLayout";
import Home from "./Components/pages/Home";
import Details from "./Components/pages/Details";
import Inscription from "./Components/pages/Inscription";
import Connexion from "./Components/pages/Connexion";
import Cart from "./Components/pages/Cart";
import { AuthProvider } from "./Components/context/useAuth";
import PrivateRoute from "./Components/context/privateRoute";
import { CartProvider } from "./Components/context/cartProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Connexion />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route
                path="/acceuil"
                element={<PrivateRoute element={Home} />}
              />
              <Route
                path="/details/:id"
                element={<PrivateRoute element={Details} />}
              />
              <Route path="/panier" element={<PrivateRoute element={Cart} />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
