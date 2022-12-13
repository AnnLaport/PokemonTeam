import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Signin from './components/Signin';
import Home from './components/Home';
import Tabla from './components/Tabla';
import Stadistics from './components/Stadistics';
import Cerrarsesion from './components/Cerrarsesion';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pokemonteam/" element={<Home />}>
            <Route path="" element={<h1>Home</h1>} />
            <Route path="teamedit" element={<Tabla />} />
            <Route path="stadistics" element={<Stadistics />} />
            <Route path="cerrarsesion" element={<Cerrarsesion />} />
        </Route>
        <Route path="/register" element={<h2>Sign up of new user!</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
