export const Support = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
					{/* image - start */}
					<div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
						<img
							src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
							loading="lazy"
							alt="Photo by Andras Vas"
							className="h-full w-full object-cover object-center"
						/>
					</div>
					{/* image - end */}
					{/* content - start */}
					<div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
						<h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
						Frequently Asked Questions (FAQs)
						</h2>
						<p className="mb-1 max-w-md text-gray-600">
                        Q1. How can I make a donation? 
						</p>
						<p className="mb-8 max-w-md text-gray-600">
						A: Simply register as a donor, choose a donation type (items or money), and follow the steps. For money donations, you can pay via QR code. For items, schedule a pickup.
						</p>
						<p className="mb-1 max-w-md text-gray-600">
						Q2. How do I register my NGO?
						</p>
						<p className="mb-8 max-w-md text-gray-600">
						A: Click on the “Register NGO” button, fill in your organization details, and submit the form. Our team will review and approve your request shortly.
						</p>
						<p className="mb-1 max-w-md text-gray-600">
						Q3. Is my money donation safe?	
						</p>
						<p className="mb-8 max-w-md text-gray-600">
						A: Yes, we use secure QR-based payment systems, and your donation goes directly to the registered NGO you choose.	
						</p>
						<div className="mt-auto">
							<a
								href="#"
								className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
							>
								Contact support
							</a>
						</div>
					</div>
					{/* content - end */}
				</div>
			</div>
		</div>
	);
};
