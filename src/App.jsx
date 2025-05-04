import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutUsPage } from "./pages/AboutUs";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link> |<Link to="/aboutus">About</Link> |
				<Link to="/contact">Contact</Link>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
