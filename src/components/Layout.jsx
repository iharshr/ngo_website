import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet /> {/* This renders the matched child route component */}
				<ToastContainer />
			</main>
			<Footer />
		</>
	);
}
