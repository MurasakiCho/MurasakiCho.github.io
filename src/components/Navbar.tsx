function Navbar() {
  return(
    <nav className="navbar">
      <a href="#" className="logo">
        briana<span>.</span>dev
      </a>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-contact">
        Let's connect ↗
      </a>
    </nav>

    
  )
}

export default Navbar;