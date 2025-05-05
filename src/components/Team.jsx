export const Team = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				{/* text - start */}
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Meet our Team
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						Behind every act of kindness is a team of passionate individuals
						dedicated to making a real difference in the lives of those in need.
						Meet the hearts and minds who drive our mission forward with
						compassion, commitment, and purpose.
					</p>
				</div>
				{/* text - end */}
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
					{/* person - start */}
					<div>
						<div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
							<img
								// src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=500"
								src="/mudra.JPG"
								loading="lazy"
								height="auto"
								width="500"
								alt="Photo by Radu Florin"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div>
							<div className="font-bold text-indigo-500 md:text-lg">
								Mudra Rathore
							</div>
							{/* <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
								Founder / CEO
							</p> */}
							{/* social - start */}
							<div className="flex">
								<div className="flex gap-4">
									<a
										href="#"
										target="_blank"
										className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
									>
										<svg
											className="h-5 w-5"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</a>
								</div>
							</div>
							{/* social - end */}
						</div>
					</div>
					{/* person - end */}
					{/* person - start */}
					<div>
						<div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
							<img
								src="/shikha.JPG"
								loading="lazy"
								height="auto"
								width="500"
								alt="Photo by christian ferrer"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div>
							<div className="font-bold text-indigo-500 md:text-lg">
								Shikha Bisht
							</div>
							{/* <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
								CFO
							</p> */}
							{/* social - start */}
							<div className="flex">
								<div className="flex gap-4">
									<a
										href="#"
										target="_blank"
										className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
									>
										<svg
											className="h-5 w-5"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</a>
								</div>
							</div>
							{/* social - end */}
						</div>
					</div>
					{/* person - end */}
					{/* person - start */}
					<div>
						<div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
							<img
								src="/kritika.png"
								loading="lazy"
								height="auto"
								width="auto"
								alt="Photo by Ayo Ogunseinde"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div>
							<div className="font-bold text-indigo-500 md:text-lg">
								Kritika Sharma
							</div>
							{/* <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
								CTO
							</p> */}
							{/* social - start */}
							<div className="flex">
								<div className="flex gap-4">
									<a
										href="#"
										target="_blank"
										className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
									>
										<svg
											className="h-5 w-5"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</a>
								</div>
							</div>
							{/* social - end */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
