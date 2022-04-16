import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";

function App() {
  const phrase = "this is a test profileID phrase";
  return (
    <Router>
      {/* what is universally shown */}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={"/profile/placeholderID/" + phrase}>Profile</Link>
      </nav>
      {/* specific routes to specific pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:profileID/:profileName" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
