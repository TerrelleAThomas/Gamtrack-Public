import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from '../Gamer/AboutUs';
import Contact from "../Gamer/Contact";
import Search from "../Gamer/Search";
import {AuthProvider} from "./AuthContext";
import IndiviualPost from "../Gamer/IndiviualPost";
import SignUp from "./SignUp";
import Login from "./Login";
import Pairing from "../Gamer/Pairing";
import UserProfile from "../Gamer/UserProfile";
import AdminDashboard from "../Admin/Admin Dashboard";
import AdminReports from "../Admin/Report";
import UserManagement from "../Admin/Search";
import UserDatabase from "../Admin/User";
import SiteAdminDashboard from "../Admin (SITE)/SiteAdmin Dashboard";
import AnnouncementPage from "../Admin (SITE)/Annoucement";
import GameManagement from "../Admin (SITE)/Game";
import PostCommentModeration from "../Admin (SITE)/Moderation";
import FriendshipPage from "../Gamer/FriendshipList";
import Message from "../Gamer/Message";
import RecommendedGames from "../Gamer/Recommendation";
import PostPage from "../Gamer/Post";


function App() {
  return (
      <AuthProvider>

        <Router>

          <Routes>

            <Route element={<Login />} path='/'/>
            <Route element={<Login />} path='/login'/>
            <Route element={<SignUp />} path='/signup'/>

            <Route element={<UserRoute />}>
              <Route element={<AboutUs />} path='User' />
              <Route element={<Pairing />} path='pairing' />
              <Route element={<Search />} path='search' />
              <Route element={<PostPage />} path='post' />
              <Route element={<Contact />} path='contact' />
              <Route element={<Message />} path='message' />
              <Route element={<UserProfile />} path='Profile' />
              <Route element={<FriendshipPage />} path='Friendship' />
              <Route element={<IndiviualPost />} path='Individual' />
              <Route element={<RecommendedGames />} path='Games' />
            </Route>

            <Route element={<SiteAdminRoute />}>
              <Route element={<SiteAdminDashboard />} path='/Site' />
              <Route element={<AnnouncementPage />} path='/Announcement' />
                <Route element={<GameManagement />} path='/Game' />
                  <Route element={<PostCommentModeration />} path='Moderation' />
            </Route>


            <Route element={<AdminRoute/>}>
              <Route element={<AdminDashboard />} path='/AdminDashboard' />
              <Route element={<UserManagement />} path='/UserManagement' />
              <Route element={<AdminReports />} path='/Reports' />
              <Route element={<UserDatabase />} path='Database' />

            </Route>

          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;