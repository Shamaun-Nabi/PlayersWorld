import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./CMP/About/About";
import AllPlayers from "./CMP/AllPlayers/AllPlayers";
import Header from "./CMP/Header/Header";
import Home from "./CMP/Home/Home";
import Login from "./CMP/Login/Login";
import Notfound from "./CMP/Notfound/Notfound";
import Players from "./CMP/Players/Players";
import Profile from "./CMP/Profile/Profile";
import Register from "./CMP/Register/Register";
import Team from "./CMP/Team/Team";
import RequireAuth from "./RequireAuth/RequireAuth";
function App() {
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="players"
          element={
            <RequireAuth>
              <Players />
            </RequireAuth>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="team" element={
          <RequireAuth>
            <Team />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
