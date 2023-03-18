import Home from './components/Home';
import FavList from './components/FavList ';
import Movie from './components/Movie';
import Navbars from './components/Navbars';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div>
    <Navbars />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FavList' element={<FavList />} />
      <Route path='/movie' element={<Movie />} />

    </Routes>
    </div>
  );
}

export default App;
