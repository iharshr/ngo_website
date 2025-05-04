import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutUsPage } from "./pages/AboutUs";
import { Layout } from "./components/Layout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="aboutus" element={<AboutUsPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
