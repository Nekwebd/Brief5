import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./components/Utils";
import Card from "./components/Card";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

function App() {
  const products = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <Header />
      <ProductForm />
      <div className="content">
        <div className="products-container">
          {!isEmpty(products) &&
            products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
