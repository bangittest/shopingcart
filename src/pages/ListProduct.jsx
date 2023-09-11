import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../common/format";
import { act_add } from "../actions/cartAction";
import { Link } from "react-router-dom";
import { notification } from "antd";

export default function ListProduct() {
  const listProduct = useSelector((pro) => pro.listProduct);
  const dispatch=useDispatch();
  //ham them san pham vao gio hang
  const handleAddToCart=(product)=>{
    dispatch(act_add(product))//gui thong tin product
    notification.success({
      message: "Thành công",
      description: `${product.product_name} đã được thêm vào giỏ hàng`,
      duration:1.5,
    })
  }
  return (
      <>
        <Navbar />
        <section style={{ backgroundColor: "#eee" }}>
          <div className="text-center container py-5">
            <h4 className="mt-4 mb-5">
              <strong>DANH SÁCH SẢN PHẨM</strong>
            </h4>
            <div className="row">
              {listProduct.map((e, index) => (
                <div key={index} className="col-lg-4 col-md-12 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img src={e.image} width={300} height={300} style={{objectFit:"cover"}} />
                      <Link to={`/product/${e.product_id}`}>
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-3">{e.product_name}</h5>
                      </a>
                      <h6 className="mb-3">{formatMoney(e.price)}</h6>
                      <button onClick={()=>handleAddToCart(e)} className="btn btn-primary">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
        {/* List product end */}
      </>
  );
}
