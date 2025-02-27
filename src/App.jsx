import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="auth/sign-in" element={<SignIn/>}/>
          <Route path="auth/sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
