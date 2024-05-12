import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Dashboard from './components/Dashboard/Dashboard';
// import ClassList from './components/Class/ClassList';
// import StudentList from './components/Student/StudentList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={< Login />} />
          {/* <Route path="/register" element={< Register />} /> */}
          {/* <Route path="/dashboard" element={< Dashboard />} /> */}
          {/* <Route path="/classes" element={< ClassList />} /> */}
          {/* <Route path="/students" element={< StudentList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
