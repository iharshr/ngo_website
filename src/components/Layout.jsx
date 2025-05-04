import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet /> {/* This renders the matched child route component */}
			</main>
			<Footer />
		</>
	);
}
