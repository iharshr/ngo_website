export const Support = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				{/* text - start */}
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Frequently asked questions
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
					Have questions? We’re here to help! Browse through some of the most commonly asked questions below.
					</p>
				</div>
				{/* text - end */}
				<div className="grid gap-4 sm:grid-cols-2 md:gap-8">
					{/* question - start */}
					<div className="rounded-lg bg-gray-100 p-5">
						<div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
							<h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
							How do I donate items or money?
							</h3>
							<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<p className="text-gray-500">
						Simply register or log in, choose your donation type, and follow the steps. You can schedule a pickup for items or scan a QR code for money donations.
						</p>
					</div>
					{/* question - end */}
					{/* question - start */}
					<div className="rounded-lg bg-gray-100 p-5">
						<div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
							<h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
							Is my donation safe?
							</h3>
							<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<p className="text-gray-500">
						Yes, we only work with verified NGOs and use secure payment methods to ensure your contribution is handled safely.
						</p>
					</div>
					{/* question - end */}
					{/* question - start */}
					<div className="rounded-lg bg-gray-100 p-5">
						<div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
							<h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
							How do I register my NGO?
							</h3>
							<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<p className="text-gray-500">
						Click on the “Join Us” button, fill in the required details, and our team will review your application.						</p>
					</div>
					{/* question - end */}
					{/* question - start */}
					<div className="rounded-lg bg-gray-100 p-5">
						<div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
							<h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
							Who receives my donation?
							</h3>
							<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<p className="text-gray-500">
						Your donation is sent directly to verified NGOs that support individuals and families in need.						</p>
					</div>
					{/* question - end */}
				</div>
			</div>
		</div>
	);
};
