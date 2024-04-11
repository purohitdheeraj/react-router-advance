import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		async function loadData() {
			try {
				const response = await fetch(
					"https://fakestoreapi.com/products"
				);
				const parsedData = await response.json();
				setProducts(parsedData);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		loadData();
	}, []);

	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<div>
			<h2>Products</h2>
			<div className="products">
				{products.map((product) => {
					return (
						<div className="productCard" key={product.id}>
							{/* here we are passing product data as prop instead of calling another api in product detail */}
							<Link
								to={`/products/${product.id}`}
								state={{ productData: product }}
							>
								<img src={product.image} />
							</Link>
							<h2>{product.title}</h2>
						</div>
					);
				})}
			</div>
			{error && <p>Error Loading Data Sorry!</p>}
		</div>
	);
};

export default Products;
