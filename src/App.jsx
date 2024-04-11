import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

// open Products page to see <Link state in action /> thank you !!

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/products" />}
				/>

				<Route
					path="/products"
					index
					element={<Products />}
				/>
				<Route
					path="/products/:id"
					element={<ProductDetail />}
				/>
			</Routes>
		</>
	);
}

export default App;
