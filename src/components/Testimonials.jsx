export const Testimonials = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
					What others say about us
				</h2>
				<div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
					{/* quote - start */}
					<div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
						<div className="text-center text-gray-600">
							“I’m so glad I found this platform! It made donating clothes and essentials so easy. The team was super responsive, and I felt like my small contribution really made a big impact.”
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
							<div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
								<img
									src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
									loading="lazy"
									alt="Photo by Radu Florin"
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div>
								<div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
								Riya S., Donor
								</div>
								{/* <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
									CEO / Datadrift
								</p> */}
							</div>
						</div>
					</div>
					{/* quote - end */}
					{/* quote - start */}
					<div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
						<div className="text-center text-gray-600">
							“Working with this NGO has been a life-changing experience. The dedication of the team and the joy of helping those in need truly inspired me. I’m proud to be a part of this journey.”
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
							<div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
								<img
									src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
									loading="lazy"
									alt="Photo by christian ferrer"
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div>
								<div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
									KAman K., Volunteer
								</div>
								{/* <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
									CFO / Dashdash
								</p> */}
							</div>
						</div>
					</div>
					{/* quote - end */}
					{/* quote - start */}
					<div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
						<div className="text-center text-gray-600">
							“This platform has connected us with so many kind-hearted donors. The process is smooth, organized, and incredibly helpful for our cause. It’s heartwarming to see people come together for good.”
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
							<div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
								<img
									src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
									loading="lazy"
									alt="Photo by Ayo Ogunseinde"
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div>
								<div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
								Sneha M., NGO Partner
								</div>
								{/* <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
									CTO / Uptime
								</p> */}
							</div>
						</div>
					</div>
					{/* quote - end */}
				</div>
			</div>
		</div>
	);
};
