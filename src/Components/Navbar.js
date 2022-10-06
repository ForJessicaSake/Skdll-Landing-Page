import logo from "../Images/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between mr-10 pr-28 pl-28">

      <section>
        <img src={logo} alt="'logo" className="w-12" />
      </section>

      <ul className="nav-links flex justify-between w-80 font-medium">
        <li>
          <a href="/" className="border-b-2 border-green">Home</a>
        </li>

        <li>
          <a href="#newsletter">Newsletter</a>
        </li>

        <li>
          <a href="/features">Features</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
