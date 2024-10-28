
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Logoipsum</h1>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="get-in-touch">Get In Touch</button>
        </div>
      </nav>
      <div className="header-content">
        <h2>About</h2>
        <p>Home / About</p>
      </div>
    </header>
  );
}

export default Header;
