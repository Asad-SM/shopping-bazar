import React from "react";
import Product from "./products";
import Footer from "./footer";

export default function productList(props) {
  return (
    props.productList.map((product,i)=>{
        return <Product product={product} key={product} increamentquant={props.increamentQuantity} index={i}  decreamentQuantity={props.decreamentQunatity} /> ;
        <Footer resetQuanity={props.HandleReset}  />
      })
    );
}


