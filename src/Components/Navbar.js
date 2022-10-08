import {useState} from 'react'
import logo from "../Images/logo.png";
import { FaBars } from 'react-icons/fa'


function Navbar() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <nav className="flex justify-between mr-10 pr-28 pl-28">
      <section className='flex justify-between'>
        <img src={logo} alt="'logo" className="w-12" />

       <div className='hidden xxs:block xxm:block xms:block'><FaBars/></div> 
      </section>

      <ul className="nav-links flex justify-between w-80 font-medium xxs:absolute xxm:absolute xms:absolute">
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
