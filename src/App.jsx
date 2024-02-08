import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import "../src/App.css";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle'",
  });

  const isLoggedIn = loggedInUser !== null;
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
