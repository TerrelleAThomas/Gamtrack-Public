import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from '../Gamer/AboutUs';
import Contact from "../Gamer/Contact";
import Search from "../Gamer/Search";
import {AuthProvider} from "./AuthContext";
import Post from "../Gamer/Post";
import Selection from "../Gamer/selection";
import IndiviualPost from "../Gamer/IndiviualPost";
import SignUp from "./SignUp";
import Login from "./Login";
import Pairing from "../Gamer/Pairing";
import UserProfile from "../Gamer/UserProfile";
import Recommendation from "../Gamer/Recommendation";


function App() {
  return (
      <Router>
        <AuthProvider>
          <Navbar />
          <div className="container mt-3">
            <Routes>
              <Route path="/Sign" element={<SignUp />} />
              <Route path="/" element={<Selection />} />
              <Route path="/LoginIn" element={<Login/>} />
              <Route path="/About Us" element={<AboutUs/>} />
              <Route path="/" element={<Pairing />} />
              <Route path="/" element={<UserProfile />} />
              <Route path="/" element={<Recommendation />} />
              <Route path="/Search"  element={<Search/>} />
              <Route path="/"          element={<Post/>} />
              <Route path="/" element={<IndiviualPost/>} />
              <Route path="/Contact"  element={<Contact/>} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
  );
}

export default App;
