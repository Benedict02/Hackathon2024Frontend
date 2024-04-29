import "./App.css";
import { Routes, Route } from "react-router-dom";
import VoteDisplay from "./page/VoteDisplay";
import About from "./page/About";
import LogInForm from "./page/Login";
import Stats from "./page/Stats";
import NoPage from "./page/NoPage";
import SignUpForm from "./page/SignUp";
import Jadwal from "./page/Jadwal";
import Landing from "./page/Landing";
import ChainDisplay from "./page/ChainDisplay";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route index path="home" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<SignUpForm />}></Route>
        <Route path="login" element={<LogInForm />} />
        <Route path="vote" element={<VoteDisplay />} />
        <Route path="stats" element={<Stats />} />
        <Route path="jadwal" element={<Jadwal />} />
        <Route path="chain" element={<ChainDisplay />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
