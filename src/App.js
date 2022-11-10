import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import NotFound from './components/NotFound';
import Tabla from './components/Tabla';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teamedit" element={<Tabla />} />
        <Route path="/register" element={<h2>Sign up of new user!</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
