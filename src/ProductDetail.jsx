import { Link, useLocation } from "react-router-dom";

const ProductDetail = () => {
	// see we are not calling api
	// also we dont need params here
	// nice na ? useLocation handles it
	// do star this repo if you learned something new thank you :D

	const { state } = useLocation();
	const { productData } = state;

	return (
		<div>
			<Link to="..">Back to products</Link>
			<h3>ProductDetail</h3>
			<h4>title : {productData.title}</h4>
			<img src={productData.image} />
			<p>description : {productData.description}</p>
		</div>
	);
};

export default ProductDetail;
