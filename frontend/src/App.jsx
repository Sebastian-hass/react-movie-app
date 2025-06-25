import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {
  const movieNumber = 1;
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App
