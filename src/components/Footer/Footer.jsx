import styles from './footer.module.css';

import RubenCV from '../../assets/documents/ruben-castillo-cv.pdf';

import { Link } from 'react-router-dom';

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer>
        <div className={styles.links}>
          <Link target='_blank' to={RubenCV}>
            Resume
          </Link>
          <Link target='_blank' to='https://www.linkedin.com/in/rubenzambrana/'>
            LinkedIn
          </Link>
        </div>
        <p>
          Coded with 💛 by Rubén
          <br />
          {currentYear} ©
        </p>
      </footer>
    </>
  );
}

export default Footer;
