import { Link } from 'react-router-dom';
import styles from './projectCard.module.css';

import projectsData from '../../assets/data/projects';

function Home() {
  return (
    <>
      {projectsData.map((project) => (
        <Link to={`${project.title}`} key={project.id}>
          <img src={project.image} alt={`Image of ${project.name}`} />
          <div>
            <p className={styles.title}>{project.name}</p>
            <p className={styles.description}>{project.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Home;
