import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutUsPage } from "./pages/AboutUs";
import { JoinUsPage } from "./pages/JoinUsPage";
import { TestPage } from "./pages/TestPage";
import { Layout } from "./components/Layout";
import { BrowseDonations } from "./pages/BrowseDonations";
import { ListNgoRequest } from "./pages/ListNgoRequest";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="aboutus" element={<AboutUsPage />} />
					<Route path="joinus" element={<JoinUsPage />} />
					<Route path="donations" element={<BrowseDonations />} />
					<Route path="test" element={<TestPage />} />
					<Route path="/admin/ngo-list" element={<ListNgoRequest />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
