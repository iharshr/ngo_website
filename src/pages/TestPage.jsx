export const TestPage = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-lg px-4 md:px-8">
				{/* text - start */}
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Choose a Bundle
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						This is a section of some simple filler text, also known as
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated.
					</p>
				</div>
				{/* text - end */}
				<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
					{/* left side - start */}
					<div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
						<div className="mb-4">
							<h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
								Basic Bundle
							</h3>
							<p className="text-gray-300">Ebook</p>
						</div>
						<div className="mb-4 space-x-2">
							<span className="text-4xl font-bold text-gray-100">$29</span>
							<span className="text-2xl text-gray-300 line-through">$49</span>
						</div>
						<ul className="mb-6 space-y-2 text-gray-300">
							{/* feat - start */}
							<li className="flex items-center gap-1.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 shrink-0"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Ebook</span>
							</li>
							{/* feat - end */}
							{/* feat - start */}
							<li className="flex items-center gap-1.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 shrink-0"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Multiple examples</span>
							</li>
							{/* feat - end */}
							{/* feat - start */}
							<li className="flex items-center gap-1.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 shrink-0"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Basic support</span>
							</li>
							{/* feat - end */}
						</ul>
						<a
							href="#"
							className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base"
						>
							Get the Basic Bundle
						</a>
					</div>
					{/* left side - end */}
				</div>
			</div>
		</div>
	);
};
