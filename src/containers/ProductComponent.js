import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	const renderList = products.map((product) => {
		const { id, title, image, price, category } = product;
		return (
			<Link to={`/product/${id}`} style={{ textDecoration: "none" }} key={id}>
				<div className="card">
					<img src={image} alt={title} />
					<div className="card-body">
						<div className="card-title">{title}</div>
						<div className="card-text">${price}</div>
						<div className="meta">{category}</div>
					</div>
				</div>
			</Link>
		);
	});

	return <>{renderList}</>;
};

export default ProductComponent; 