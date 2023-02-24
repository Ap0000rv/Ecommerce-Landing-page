import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchproductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
      console.log("Err", err);
    })
    dispatch(selectedProduct(response.data));
    }
  
  useEffect(() => {
    if (productId && productId !== "") fetchproductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]) 
  
  return (
    
    <div className='product-detail'>
  {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
    ):  (<>
      <div className="product-image">
          <img src={image} alt="" />
      </div>
      <div className="product-info">
          <div className="title">
              <h4>{title}</h4>
          </div>
          <div className="product-price">
          ${price}
          </div>
          <div className="product-desc">
              {description}
          </div>
          <div className="button"></div>
          <button className="customButton btn btn-primary">
          Add to Cart
          </button>
      </div></>)}
 

  </div>
    
);
};

export default ProductDetail;