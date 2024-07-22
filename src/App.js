import './App.css';
import { Route, Routes } from 'react-router-dom';

let App= ()=> {
  return (
    <div className="App">
      <h1>Hola</h1>
      <Routes>
        <Route path= "/register" element={
            <p>Register</p>
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
