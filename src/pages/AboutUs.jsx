export function AboutUsPage() {
	return (
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
						What makes our platform truly stand out is our strong focus on simplicity, trust, and impact. We offer a user-friendly experience that allows anyone to donate effortlessly, whether it’s items like clothes, food, or electronics, or money through our secure QR code system. Unlike others, we partner only with verified NGOs to ensure your donations reach the right hands and make a real difference. With features like scheduled doorstep pickups for item donations and real-time tracking with instant notifications, we prioritize your convenience and peace of mind. Our platform isn’t just about giving — it’s about building a bridge between those who want to help and those who need it most, powered by technology, transparency, and a shared mission to uplift lives.
							<br /></p>
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
						We connect kind-hearted donors with trusted NGOs to support those in need. Whether you’re donating items or money, our platform makes giving simple, secure, and impactful. With features like scheduled pickups, real-time tracking, and verified partners, we make sure every donation reaches the right hands.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
