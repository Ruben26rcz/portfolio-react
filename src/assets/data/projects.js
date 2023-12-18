import moodyMovieImg from '../img/moody-movie-cover.webp';
import travelBeyondImg from '../img/travel-beyond-cover.webp';
import aventuraliaImg from '../img/aventuralia-cover.webp';
import dataPetImg from '../img/moody-movie-cover.webp';
import compuTechImg from '../img/moody-movie-cover.webp';
const projectImages = [moodyMovieImg, travelBeyondImg, aventuraliaImg, dataPetImg, compuTechImg];

const projectsData = [
  {
    id: 1,
    name: 'Moody Movie',
    description: 'An app that matches your mood with a movie',
    image: projectImages[0],
  },
  {
    id: 2,
    name: 'Travel Beyond',
    description: 'Space travel landing page',
    image: projectImages[1],
  },
  {
    id: 3,
    name: 'Aventuralia',
    description: 'A web for a travel company',
    image: projectImages[2],
  },
  {
    id: 4,
    name: 'DataPet',
    description: `App for managing your pet's health`,
    image: projectImages[3],
  },
  {
    id: 5,
    name: 'CompuTech',
    description: 'React marketplace of gaming accesories',
    image: projectImages[4],
  },
];

export default projectsData;
