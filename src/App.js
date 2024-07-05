import React, { useState } from "react";
import Navbar from "./components/navbar";
import Productlist from "./components/productlist.js";
import Footer from "./components/footer.js";

function App() {
  let initialProductList = [
    {
      name: "Iphone",
      price: "10",
      quantity: 0,
    },
    {
      name: "One plus",
      price: "20",
      quantity: 0,
    },
    {
      name: "Samsung",
      price: "30",
      quantity: 0,
    }
  ];

  // Use useState to initialize state
  const [productList, setProductList] = useState(initialProductList);
  // const [productList, setQuantity] = useState(0);

  const increment = (index) => {
    const updatedItems = productList.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProductList(updatedItems);
  };
  const decreament = (index) => {
    const updatedItems = productList.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    setProductList(updatedItems);
  };


  function HandleReset() {
    const [productList, setProductList] = useState(initialProductList); // assume initialProductList is defined elsewhere
  
    const resetProductList = productList.map((item) => ({ ...item, quantity: 0 }));
    setProductList(resetProductList);
  }


  return (
    <>
      <Navbar />
      <main className="m-3">
        {/* Pass props correctly to Productlist */}
        <Productlist productList={productList} increamentQuantity={increment} decreamentQunatity={decreament} />
      </main>
      <Footer handleReset={HandleReset} />
    </>
  );
}

export default App;
