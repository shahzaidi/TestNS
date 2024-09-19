import './App.css';
import ProductsList from './components/ProductsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from './components/Login';
import Signup from './components/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Private from './utils/Private';
import Public from './utils/Public';

function App() {
  return (
    <Router>
    <div className="App container" >
      <Routes>
      <Route exact path="/" element={<Private><ProductsList /></Private>} />
    <Route exact path="/products" element={<Private><ProductsList /></Private>} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<Signup />} />
    </Routes>
     <ToastContainer />
    </div>
    </Router>
  );
}

export default App;
