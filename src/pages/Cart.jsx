import React from "react";
import Navbar from "../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../common/format";
import { act_decrease, act_increase } from "../actions/cartAction";

export default function Cart() {
    const dispatch=useDispatch();
    //lay dl tu store ve
    const listCart=useSelector((cart)=>cart.listCart);

    //tinh tong tien cua cac san pham trong gio hang
    const totalPrice=listCart.reduce((total,item)=>{
        return total+item.price*item.quantity;
    },0);

    
    //ham tang so luong san pham
     const handleIncrease =(id)=>{
        dispatch(act_increase(id))
     }
   
    //ham giam so luong san pham trong gio hang
    const handleDecrease=(id)=>{
        dispatch(act_decrease(id))

    }
  return (
    <>
    <Navbar/>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {
                listCart.map((cart)=>(
                    <div key={cart.product_id} className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={cart.image}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{cart.product_name}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                          <button onClick={()=>handleDecrease(cart.product_id)} className="btn btn-link px-2">
                            <i className="fas fa-minus" />
                          </button>
                          <div className="px-2">{cart.quantity}</div>
                          {/* <input
                          value={cart.quantity}
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={2}
                            type="number"
                            className="form-control form-control-sm"
                          /> */}
                          <button 
                          onClick={()=>handleIncrease(cart.product_id)}
                            className="btn btn-link px-2"
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{formatMoney(cart.price)}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger">
                            <i className="fas fa-trash fa-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
             
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="form1">
                      Tổng tiền: {formatMoney(totalPrice)}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
