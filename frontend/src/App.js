import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />} /> 
          {/* <Route path="/classes" element={< ClassList />} /> */}
          {/* <Route path="/students" element={< StudentList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
