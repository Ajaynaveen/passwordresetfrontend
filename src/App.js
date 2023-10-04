import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgetpassword from "./components/Forgetpassword";
import ResetPassword from "./components/ResetPassword";
import Profile from  "./components/Profile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile/>}/>
         

        </Routes>
      </div>
    </Router>
  );
}

export default App;
