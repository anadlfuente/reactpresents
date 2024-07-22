import RegisterComponent from './Components/RegisterComponent';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

let App= ()=> {
  return (
    <div className="main-container">
      <h1>Hola</h1>
      <nav >
        <ul className='navbar'>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Index</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path= "/register" element={
            <RegisterComponent/>
        }></Route>
        <Route path= "/login" element={
            <p>Login</p>
        }></Route>
        <Route path= "/" element={
            <p>Índice</p>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
