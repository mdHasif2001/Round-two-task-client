import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Navbar';
import ToDo from './Pages/ToDo';
import Task from './Pages/Task';
import Calender from './Pages/Calender';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
        <Route path='task' element={<Task></Task>}></Route>
        <Route path='calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
