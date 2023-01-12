import React from "react";
import Createstory from "pages/Createstory";
import Signup1 from "pages/Signup1";
import Signupa from "pages/Signupa";
import Signup from "pages/Signup";
import Login from "pages/Login";
import YourStories1 from "pages/YourStories1";
import YourStories from "pages/YourStories";
import Yourlists from "pages/Yourlists";
import Yourstats from "pages/Yourstats";
import Notofication from "pages/Notofication";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/notofication" element={<Notofication />} />
        <Route path="/yourstats" element={<Yourstats />} />
        <Route path="/yourlists" element={<Yourlists />} />
        <Route path="/yourstories" element={<YourStories />} />
        <Route path="/yourstories1" element={<YourStories1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupa" element={<Signupa />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/createstory" element={<Createstory />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
