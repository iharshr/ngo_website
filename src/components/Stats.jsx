export const Stats = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-lg px-4 md:px-8">
				{/* text - start */}
				<div className="mb-8 md:mb-12">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						OUR IMPACT
					</h2>
					{/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						This is a section of some simple filler text, also known as
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated.
					</p> */}
				</div>
				{/* text - end */}
				<div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
					{/* stat - start */}
					<div className="flex flex-col items-center">
						<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
							2+ LAC
						</div>
						<div className="text-sm text-indigo-200 sm:text-base">children and their families are impacted every year</div>
					</div>
					{/* stat - end */}
					{/* stat - start */}
					<div className="flex flex-col items-center">
						<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
							2000+
						</div>
						<div className="text-sm text-indigo-200 sm:text-base">Villages and slums are reached out to across the country</div>
					</div>
					{/* stat - start */}
					<div className="flex flex-col items-center">
						<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
							400+
						</div>
						<div className="text-sm text-indigo-200 sm:text-base">
						Projects focused on education, healthcare, and women empowerment
						</div>
					</div>
					{/* stat - end */}
					{/* stat - start */}
					<div className="flex flex-col items-center">
						<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
							27+
						</div>
						<div className="text-sm text-indigo-200 sm:text-base">
							States are reached including the remotest area.
						</div>
					</div>
					{/* stat - end */}
				</div>
			</div>
		</div>
	);
};
