import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NoMatch from './pages/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
