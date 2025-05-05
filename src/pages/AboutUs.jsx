export function AboutUsPage() {
	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
						<div>
							<div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
								<img
									src="/about_us_image.png"
									loading="lazy"
									alt="Photo by Martin Sanchez"
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="md:pt-8">
							{/* <p className="text-center font-bold text-indigo-500 md:text-left">
							Who we are
						</p> */}
							<h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
								Our competitive advantage🏆
							</h1>
							<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
								What makes our platform truly stand out is our strong focus on
								simplicity, trust, and impact. We offer a user-friendly
								experience that allows anyone to donate effortlessly, whether
								it’s items like clothes, food, or electronics, or money through
								our secure QR code system. Unlike others, we partner only with
								verified NGOs to ensure your donations reach the right hands and
								make a real difference. With features like scheduled doorstep
								pickups for item donations and real-time tracking with instant
								notifications, we prioritize your convenience and peace of mind.
								Our platform isn’t just about giving — it’s about building a
								bridge between those who want to help and those who need it
								most, powered by technology, transparency, and a shared mission
								to uplift lives.
								<br />
							</p>
							{/* <p>This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is{" "}
							<a
								href="#"
								className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
							>
								random
							</a>{" "}
							or otherwise generated. It may be used to display a sample of
							fonts or generate text for testing. Filler text is dummy text
							which has no meaning however looks very similar to real text.
						</p> */}
							<h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
								About us
							</h2>
							<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
								We connect kind-hearted donors with trusted NGOs to support
								those in need. Whether you’re donating items or money, our
								platform makes giving simple, secure, and impactful. With
								features like scheduled pickups, real-time tracking, and
								verified partners, we make sure every donation reaches the right
								hands.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="flex overflow-hidden rounded-lg bg-gray-100">
						{/* image - start */}
						<div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
							<img
								src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
								loading="lazy"
								alt="Photo by mymind"
								className="absolute inset-0 h-full w-full object-cover object-center"
							/>
						</div>
						{/* image - end */}
						{/* content - start */}
						<div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
							<div className="flex w-full flex-col items-center sm:block">
								<div className="mb-4 sm:mb-8">
									<h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">
										Get the latest updates
									</h2>
									<p className="text-center text-gray-500 sm:text-left">
										Sign up for our newsletter
									</p>
								</div>
								<form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
									<input
										placeholder="Email"
										className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
									/>
									<button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
										Send
									</button>
								</form>
								<p className="text-center text-xs text-gray-400 sm:text-left">
									By signing up to our newsletter you agree to our{" "}
									<a
										href="#"
										className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
									>
										Term of Service
									</a>{" "}
									and{" "}
									<a
										href="#"
										className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
									>
										Privacy Policy
									</a>
									.
								</p>
							</div>
						</div>
						{/* content - end */}
					</div>
				</div>
			</div>
		</>
	);
}
