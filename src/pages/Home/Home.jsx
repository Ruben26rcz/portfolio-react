import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import styles from './home.module.css';

function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Projects />
    </main>
  );
}

export default Home;
