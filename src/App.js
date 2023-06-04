
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import About from './components/About';

import Reservation from './components/Reservation';



function App() {
  return (
    <CartProvider>
   <Router>
      <div>
        <Routes>
         <Route index path="/" element={<Home/>} />
         <Route exact path="/login" element={<Login/>} />
         <Route  exact path="/createuser" element={<Signup/>} />
         <Route exact path="/myOrder" element={<MyOrder/>} />
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/reservation" element={<Reservation/>} />
        </Routes>
      </div>
    </Router>


    </CartProvider>
 
  
   
  );
}

export default App;
