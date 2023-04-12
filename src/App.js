import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUniversity from './universities/AddUniversity';
import EditUniversity from './universities/EditUniversity';
import ViewUniversity from './universities/ViewUniversity';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/addUniversity" element={<AddUniversity />} />
        <Route exact path="/editUniversity/:id" element={<EditUniversity />} />
        <Route exact path="/viewUniversity/:id" element={<ViewUniversity />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
