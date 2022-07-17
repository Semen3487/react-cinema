import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import Directors from './components/Directiors/Directors';
import Studios from './components/Studios/Studios';


function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="movies/*" element={<Movies/>} />
            <Route path="actors/*" element={<Actors/>} />
            <Route path="directors/*" element={<Directors/>} />
            <Route path="studios/*" element={<Studios/>} />
            <Route index element={<div>Home</div>} />
            <Route path="*" element={<Navigate to="/movies" replace={true} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
