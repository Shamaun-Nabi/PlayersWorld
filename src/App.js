import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./CMP/About/About";
import AllPlayers from "./CMP/AllPlayers/AllPlayers";
import Header from "./CMP/Header/Header";
import Home from "./CMP/Home/Home";
import Login from "./CMP/Login/Login";
import Notfound from "./CMP/Notfound/Notfound";
import Players from "./CMP/Players/Players";
import PlayersInfo from "./CMP/PlayersInfo/PlayersInfo";
import Register from "./CMP/Register/Register";
import Team from "./CMP/Team/Team";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allplayers" element={<AllPlayers />} />
        <Route path="playersinfo" element={<PlayersInfo />} />
        <Route path="players" element={<Players />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
