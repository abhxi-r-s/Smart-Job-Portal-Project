// Basic React UI Template for AI Study Planner

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Planner } from "./pages/Planner";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </div>
    </Router>
  );
}

// Example Navbar.jsx
// src/components/Navbar.jsx
import { Link } from "react-router-dom";
export const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between">
    <h1 className="text-xl font-bold">StudyPlanner AI</h1>
    <div className="space-x-4">
      <Link to="/" className="text-blue-600">Home</Link>
      <Link to="/planner" className="text-blue-600">Planner</Link>
      <Link to="/login" className="text-blue-600">Login</Link>
    </div>
  </nav>
);

// Example Home.jsx
// src/pages/Home.jsx
export const Home = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-semibold">Welcome to StudyPlanner AI</h2>
    <p className="mt-4 text-gray-600">
      Create personalized study schedules with a touch of AI.
    </p>
  </div>
);

// Other pages like Login.jsx, Signup.jsx, Planner.jsx can follow a similar pattern.
