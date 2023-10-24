import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/products.action";
import { isEmpty } from "./Utils";

const ProductForm = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const productData = {
      title: form.current[0].value,
      description: form.current[1].value,
      categories: form.current[2].value,
      basePrice: form.current[3].value,
      salePrice: form.current[4].value,
      imageUrl: form.current[5].value,
    };
    if (
      isEmpty(productData.title) ||
      isEmpty(productData.description) ||
      isEmpty(productData.categories) ||
      isEmpty(productData.basePrice) ||
      isEmpty(productData.salePrice) ||
      isEmpty(productData.imageUrl)
    ) {
      alert("Veuillez remplir les champs");
      form.current.reset();
      return;
    }

    dispatch(addProduct(productData));
    dispatch(getProducts());
    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <div>
          <input type="text" placeholder="Titre de l'article" />
          <br />
          <textarea placeholder="Description de l'article"></textarea>
          <br />
          <input type="text" placeholder="Catégorie de l'article" />
          <br />
          <input type="number" placeholder="Prix de base de l'article" />
          <br />
          <input type="number" placeholder="Prix soldé de l'article" />
          <br />
          <textarea placeholder="Url de l'image de l'article"></textarea>
          <br />
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
