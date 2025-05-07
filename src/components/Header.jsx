export const Header = () => {
	return (
		<div className="bg-white pb-3 sm:pb-2 lg:pb-3">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header className="mb-4 flex items-center justify-between py-4 md:py-8">
					{/* logo - start */}
					<a
						href="/"
						className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
						aria-label="logo"
					>
						<img
							src="/logo.png"
							loading="lazy"
							width={95}
							height={94}
							alt="Photo by Radu Florin"
							className="h-full w-full object-cover object-center"
						/>
						CharityBridge
					</a>
					{/* logo - end */}
					{/* nav - start */}
					<nav className="hidden gap-12 lg:flex">
						<a
							href="/"
							className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700"
						>
							Home
						</a>
						<a
							href="/donations"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Donate
						</a>
						<a
							href="/joinus"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Join Us
						</a>
						<a
							href="/aboutus"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							About Us
						</a>
					</nav>
					{/* nav - end */}
					{/* buttons - start */}
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
						Menu
					</button>
					{/* buttons - end */}
				</header>
			</div>
		</div>
	);
};
