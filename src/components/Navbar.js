import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  let data = useCart();
const navigate = useNavigate();
const handleLogout= ()=>{
localStorage.removeItem("token");
navigate("/")
}


  return (
    
  
            <nav className="navbar navbar-expand-lg navbar-dark  position-sticky "
                style={{ backgroundColor:"#5D9C59", boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FineDine</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item ">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/about">About</Link>  {/* index.css - nav-link color white */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/reservation">Reservation</Link>  {/* index.css - nav-link color white */}
                            </li>
                            
                           
          {(localStorage.getItem("token")) ?
         <li className="nav-item">
         <Link className ="nav-link active fs-5" aria-current ="page" to="/myOrder">My Orders</Link> 
         </li>
         : ""}
         
        </ul>
        {(!localStorage.getItem("token")) ?
      <div className='d-flex'>
      
            <Link className="btn bg-white text-sucess margin mx-1" to="/createuser">Signup</Link>
            <Link className="btn bg-white text-sucess margin mx-1" to="/Login">Login</Link>
         
          
    </div>
    :
    <div>
    <div className='btn bg-white text-sucess mx-2' onClick= {() =>{setCartView(true)}}>
     My Cart{" "}
     <Badge pill bg = "danger" > {data.length} </Badge>
        </div>
    {cartView? <Modal onClose={()=> setCartView(false)}><Cart/></Modal>:null}
    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
      Logout
        </div>
        </div>
}
    </div>
    </div>
  </nav>
 
  )
}


