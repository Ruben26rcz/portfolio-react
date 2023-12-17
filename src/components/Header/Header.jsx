import memojiWebM from '../../assets/video/memoji-ruben.webm';
import memojiMov from '../../assets/video/memoji-ruben-video.mp4';
import memojiImg from '../../assets/img/memoji-ruben.png';

import Navbar from './Navbar/Navbar';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <a href='#top'>
        <video className={styles.memoji} autoPlay muted poster={memojiImg} alt='Memoji of ruben moving'>
          <source src={memojiMov} type='video/mp4; codecs="hvc1"' />
          <source src={memojiWebM} type='video/webm' />
        </video>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
