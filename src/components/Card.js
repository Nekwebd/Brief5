import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../actions/products.action";
import { isEmpty } from "./Utils";

const Card = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState({ ...product });
  const dispatch = useDispatch();

  // const deleteProduct = () => {}
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = async (e) => {
    dispatch(editProduct(editedContent));
    setIsEditing(false);
  };
  const handleTitleChange = (e) => {
    setEditedContent({ ...editedContent, title: e.target.value });
  };

  const handleDescChange = (e) => {
    setEditedContent({ ...editedContent, description: e.target.value });
  };

  const handleCategoriesChange = (e) => {
    setEditedContent({ ...editedContent, categories: e.target.value });
  };
  const handleBasePriceChange = (e) => {
    setEditedContent({ ...editedContent, basePrice: e.target.value });
  };
  const handleSalePriceChange = (e) => {
    setEditedContent({ ...editedContent, salePrice: e.target.value });
  };
  const handleImageUrlChange = (e) => {
    setEditedContent({ ...editedContent, imageUrl: e.target.value });
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent({ ...product });
  };

  return (
    !isEmpty(product) && (
      <div className="card">
        {isEditing ? (
          <div className="edit">
            <input
              type="text"
              value={editProduct.title}
              onChange={handleTitleChange}
            />
            <textarea
              value={editProduct.description}
              onChange={handleDescChange}
            ></textarea>
            <input
              type="text"
              value={editProduct.categories}
              onChange={handleCategoriesChange}
            />
            <input
              type="text"
              value={editProduct.imageUrl}
              onChange={handleImageUrlChange}
            />
            <input
              type="number"
              value={editProduct.basePrice}
              onChange={handleBasePriceChange}
            />
            <input
              type="number"
              value={editProduct.salePrice}
              onChange={handleSalePriceChange}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.categories}</p>
            <img src={product.imageUrl} alt="{product.title}"></img>
            <p>Base Price : {product.basePrice}€</p>
            <p>Sale Price : {product.salePrice}€</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => dispatch(deleteProduct(product.id))}>
              Delete
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default Card;
