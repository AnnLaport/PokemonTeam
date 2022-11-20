import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teamedit" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<h2>Sign up of new user!</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
