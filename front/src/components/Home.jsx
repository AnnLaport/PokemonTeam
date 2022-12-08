import React from 'react'
import {Outlet, NavLink} from 'react-router-dom';

function Home() {
  return (
    <div className="teamedit">
      <nav className="navbar navbar-expand-lg navbar-light"
           style={{background: '#e3f2fd'}}>
        <NavLink className="navbar-brand" to="">
          PokemonTeam
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="stadistics">
                Stadistics <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="teamedit">
                Edit your team!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="cerrarsesion">
                Cerrar Sesion 
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home