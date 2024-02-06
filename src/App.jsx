import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import "../src/App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}
