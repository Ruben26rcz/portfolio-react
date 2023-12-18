import styles from './hero.module.css';

import flipRuben from '../../../assets/img/ruben-flip.webp';
import flipCastillo from '../../../assets/img/castillo-flip.webp';

function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.helloText}>
          <b>Hello! 👋 I'm</b>
        </p>
        <div className={styles.flipLetters}>
          <img src={flipRuben} alt='Airport flipping letters that spells ruben' />
          <img src={flipCastillo} alt='Airport flipping letters that spells castillo' />
        </div>
      </div>
      <p>
        A <b>UX/UI designer</b> 💻 with a background in Industrial design 🔩
        <br />
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
