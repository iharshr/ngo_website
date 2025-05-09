export const Footer = () => {
	return (
		<div className="bg-white pt-4 sm:pt-10 lg:pt-12">
			<footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="flex flex-col items-center border-t pt-6">
					{/* nav - start */}
					<nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
						<div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
							charitybridge@gmail.com
						</div>
						<div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
							+91-34626-34986
						</div>
						<div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
							Rajasthan, India
						</div>
						<a
							href="/admin/ngos"
							className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
						>
							NGO Admin
						</a>
						<a
							href="/admin/donations"
							className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
						>
							Donation Admin
						</a>
					</nav>
					{/* nav - end */}
				</div>
				<div className="text-center text-sm text-gray-400">
					© 2025 - Present CharityBridge. All rights reserved.
				</div>
			</footer>
		</div>
	);
};
