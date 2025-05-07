import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutUsPage } from "./pages/AboutUs";
import { JoinUsPage } from "./pages/JoinUsPage";
import { Layout } from "./components/Layout";
import { AdminNgos } from "./pages/AdminNgos";
import { AdminDonations } from "./pages/AdminDonations";
import { BrowseDonations } from "./pages/BrowseDonations";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="aboutus" element={<AboutUsPage />} />
					<Route path="joinus" element={<JoinUsPage />} />
					<Route path="donations" element={<BrowseDonations />} />
					<Route path="/admin/ngos" element={<AdminNgos />} />
					<Route path="/admin/donations" element={<AdminDonations />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
