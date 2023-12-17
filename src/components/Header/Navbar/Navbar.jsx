import styles from './navbar.module.css';
import hambIcon from '../../../assets/img/svg/hamb-icon.svg';
import closeIcon from '../../../assets/img/svg/close-icon.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <img src={hambIcon} onClick={showSidebar} alt='Hamburger icon' />
      <nav>
        <img src={closeIcon} alt='Close icon' />
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'about'}>About</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
