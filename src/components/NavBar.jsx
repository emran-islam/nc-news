import { Link } from "react-router-dom";

export default function NavBar({ setLinkClicked }) {
  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={handleLinkClick}>
        Home
      </Link>
      <Link to="/articles" onClick={handleLinkClick}>
        Articles
      </Link>
      <Link to="/topics" onClick={handleLinkClick}>
        Topics
      </Link>
    </nav>
  );
}
