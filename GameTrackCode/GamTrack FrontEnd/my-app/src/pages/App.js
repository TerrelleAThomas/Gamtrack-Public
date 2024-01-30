import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './AboutUs';
import Contact from "./Contact";
import Search from "./Search";
import {AuthProvider} from "./AuthContext";
import Post from "./Post";
import Selection from "./selection";
import IndiviualPost from "./IndiviualPost";
import SignUp from "./SignUp";
import Login from "./Login";


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
