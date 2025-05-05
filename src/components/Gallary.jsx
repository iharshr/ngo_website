export const Gallery = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
					Gallery
				</h2>
				<div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
					{/* image - start */}
					<a
						href="#"
						className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
					>
						<img
							src="https://img.freepik.com/free-photo/digital-art-young-students-attending-school-education_23-2151065226.jpg?w=600"
							loading="lazy"
							alt="Photo by Minh Pham"
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						<span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
							Education
						</span>
					</a>
					{/* image - end */}
					{/* image - start */}
					<a
						href="#"
						className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
					>
						<img
							src="https://img.freepik.com/free-vector/flat-hand-drawn-clothing-donation-illustration-with-people_23-2148829663.jpg?h=600"
							loading="lazy"
							alt="Photo by Magicle"
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						<span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
							Cloths
						</span>
					</a>
					{/* image - end */}
					{/* image - start */}
					<a
						href="#"
						className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
					>
						<img
							src="https://img.freepik.com/free-vector/boy-giving-milk-bottle-homeless-man_1308-104998.jpg"
							loading="lazy"
							width="600"
							alt="Photo by Martin Sanchez"
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						<span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
							Food
						</span>
					</a>
					{/* image - end */}
					{/* image - start */}
					<a
						href="#"
						className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
					>
						<img
							src="https://img.freepik.com/free-vector/cartoon-world-humanitarian-day-illustration_23-2148996147.jpg?h=600"
							loading="lazy"
							alt="Photo by Lorenzo Herrera"
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						<span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
							Health
						</span>
					</a>
					{/* image - end */}
				</div>
				<div className="flex items-start justify-between gap-8 sm:items-center">
					<p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
						Want to know more about us? Click the button below to visit our
						About Us section!
					</p>
					<a
						href="/aboutus"
						className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
					>
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
};
