import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded shadow">
          <Link className="navbar-brand text-white" to="/">
            <img src="/logo192.png" alt="Octofit Logo" className="App-logo me-2" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow p-4">
              <h2 className="card-title text-center mb-3">Welcome to Octofit Tracker!</h2>
              <p className="card-text text-center">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
              <div className="d-flex justify-content-center">
                <Link to="/activities" className="btn btn-success mx-2">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-info mx-2">Leaderboard</Link>
                <Link to="/teams" className="btn btn-warning mx-2">Teams</Link>
                <Link to="/users" className="btn btn-primary mx-2">Users</Link>
                <Link to="/workouts" className="btn btn-danger mx-2">Workouts</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
