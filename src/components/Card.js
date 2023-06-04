import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import {  useNavigate } from "react-router-dom";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let navigate = useNavigate();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");



  
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  
  const handleQty = (e) => {
      setQty(e.target.value);
  }
  const handleOptions = (e) => {
      setSize(e.target.value);
  }





  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.foodItem.img,
        });
        // console.log(data)
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img,
    });
    return;
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div className="container p-3 mb-2  bg-gradient " style={{ backgroundColor: "#5D9C59"}}>
    <div id="menu">
    

      <div className="card-box card mt-3"  >
        <img src={props.foodItem.img} className=" card-img-top" alt="..." style={{ maxHeight: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
           <p className="card-text">{props.foodItem.description}</p> 
          
          <div className='container w-100 p-0'>
            <select className="m-2 h-100 w-20  text-black rounded" style={{ backgroundColor:"#5D9C59", select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 text-black rounded" style={{backgroundColor:"#5D9C59", select: "#FF0000" }} onClick={handleClick} ref={priceRef} onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5'>
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-info justify-center ms-2 `} style= {{backgroundColor:"#5D9C59"}}onClick={handleAddToCart}>Add to Cart</button>
         
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
          
        </div>
      </div>
    </div>
    
    </div>

  











  )
  //   <div id="menu">
  //     <div
  //       className="card mt-3 mb-5  "
  //       style={{ width: "18rem", maxHeight: "360px", objectFit: "fill" }}
  //     >
  //       <img
  //         src={props.foodItem.img}
  //         className="card-img-top"
  //         alt="..."
  //         style={{ height: "190px", objectFit: "fill" }}
  //       />
  //       <div className="card-body">
  //         <h5 className="card-title">{props.foodItem.name}</h5>
  //         <p className="card-text">{props.foodItem.description}</p>
  //         <div className="container w-100">
  //           <select
  //             className="m-2 h-100  bg-success rounded"
  //             onChange={(e) => setQty(e.target.value)}
  //           >
  //             {Array.from(Array(10), (e, i) => {
  //               return (
  //                 <option key={i + 1} value={i + 1}>
  //                   {" "}
  //                   {i + 1}{" "}
  //                 </option>
  //               );
  //             })}
  //           </select>
  //           <select
  //             className="m-2 h-100 bg-success rounded"
  //             ref={priceRef}
  //             onChange={(e) => setSize(e.target.value)}
  //           >
  //             {priceOptions.map((data) => {
  //               return (
  //                 <option key={data} value={data}>
  //                   {data}
  //                 </option>
  //               );
  //             })}
  //           </select>
  //           <div className="d-inline h-100 fs-5">रु{finalPrice}/-</div>
  //         </div>
  //       </div>
  //       <hr></hr>
  //       <button
  //         className={"btn btn-success justify-center ms-2"}
  //         onClick={handleAddToCart}
  //       >
  //         Add To Cart
  //       </button>
  //     </div>
  //   </div>
  // );
}
//
