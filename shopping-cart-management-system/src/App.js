import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const Cart = React.lazy(() => import("./components/Cart"));
const Home = React.lazy(() => import("./components/Home"));
const Login = React.lazy(() => import("./components/LoginPage"));

function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
