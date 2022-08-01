import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import Directors from './components/Directors/Directors';
import Studios from './components/Studios/Studios';


function App() {
  return (
    <Router>
      <div className='content'>
        <Routes>
          <Route path="*" element={<Layout/>} >
            <Route path="movies/*" element={<Movies/>} />
            <Route path="actors/*" element={<Actors/>} />
            <Route path="directors/*" element={<Directors/>} />
            <Route path="studios/*" element={<Studios/>} />
            <Route index element={
                <div>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Chaplin_The_Kid.jpg' alt='poster' 
                       className='content-image'/>
                </div>
              } /> 
            <Route path="*" element={<Navigate to="/movies" replace={true} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



//* Route - маршрут
//* path - шлях
//* при завантаженні Layout - <div>Home</div> буде завантажуватись разом з ним завдяки index
//* Navigate - перенаправлення, у випадку помилкового посилання
//* replace={true} - відображення перенаправлення в історії