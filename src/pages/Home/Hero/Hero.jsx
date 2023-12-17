import styles from './hero.module.css';

import flipRubenWebp from '../../../assets/img/ruben-flip.webp';
import flipRubenGif from '../../../assets/img/ruben-flip.gif';
import flipCastilloWebp from '../../../assets/img/castillo-flip.webp';
import flipCastilloGif from '../../../assets/img/castillo-flip.gif';

function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <p>Hello! 👋 I'm</p>
        <div className={styles.flipLetters}>
          <picture srcSet={flipRubenWebp} type='image/webp'>
            <img src={flipRubenGif} alt='Airport flipping letters that spells ruben' />
          </picture>
          <picture srcSet={flipCastilloWebp} type='image/webp'>
            <img src={flipCastilloGif} alt='Airport flipping letters that spells castillo' />
          </picture>
        </div>
      </div>
      <p>
        A <b>UX/UI designer</b> 💻 with a background in Industrial design 🔩
        <br />
        Currently pursuing my Master's Degree in Digital Experience Design at BAU 📚
        <br />
        <br />
        On the side, I'm a casual chef 👨🏻‍🍳, gamer 🕹 and <b>traveler</b> ✈️
      </p>
    </section>
  );
}

export default Hero;
