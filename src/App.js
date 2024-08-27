import RegisterComponent from './Components/RegisterComponent';
import LoginComponent from './Components/LoginComponent';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import PresentsComponent from './Components/PresentsComponent';
import CreatePresentComponent from './Components/CreatePresentComponent';

let App= ()=> {
  return (
    <div className="main-container">
      <h1>Presents' List</h1>
      <nav >
        <ul className='navbar'>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/presents">My Presents</Link></li>
          <li><Link to="/createPresent">Create New Present</Link></li>
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
            <p>Bienvenido,{localStorage.getItem("userName")}</p>
        }></Route>
        <Route path= "/presents" element={
            <PresentsComponent/>
        }></Route>
        <Route path= "/createPresent" element={
            <CreatePresentComponent/>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
