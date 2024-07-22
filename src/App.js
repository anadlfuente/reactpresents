import RegisterComponent from './Components/RegisterComponent';
import LoginComponent from './Components/LoginComponent';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

let App= ()=> {
  return (
    <div className="main-container">
      <h1>Presents' List</h1>
      <nav >
        <ul className='navbar'>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path= "/register" element={
            <RegisterComponent/>
        }></Route>
        <Route path= "/login" element={
            <LoginComponent />
        }></Route>
        <Route path= "/" element={
            <p>Índice</p>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
