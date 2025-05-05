import { toast } from "react-toastify";

export const JoinUsPage = () => {
	return (
		<>
			<JoinUsContent />

			{/* --- Form --- */}
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					{/* text - start */}
					<div className="mb-10 md:mb-16">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Join Our Network
						</h2>
						<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated.
						</p>
					</div>
					<h3 className="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
						Ngo Details
					</h3>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							toast.info("Form Sumbited ");
							toast.success("Thank You ");
						}}
						className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
					>
						<div className="sm:col-span-2">
							<label
								htmlFor="ngo_name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Ngo Name*
							</label>
							<input
								name="ngo_name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="type_ngo"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Type Of Ngo
							</label>
							<input
								name="type_ngo"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div>
							<label
								htmlFor="first-name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Official Email*
							</label>
							<input
								name="first-name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div>
							<label
								htmlFor="last-name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Official Phone No.*
							</label>
							<input
								name="last-name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="company"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Official Address
							</label>
							<input
								name="company"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						{/* Person Details */}

						<div className="sm:col-span-2">
							<h3 className="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl items-center justify-center">
								Personal Details
							</h3>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="ngo_name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Name*
							</label>
							<input
								name="ngo_name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div>
							<label
								htmlFor="first-name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Official Email*
							</label>
							<input
								name="first-name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div>
							<label
								htmlFor="last-name"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Official Phone No.*
							</label>
							<input
								name="last-name"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
							>
								Message*
							</label>
							<textarea
								name="message"
								className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
								defaultValue={""}
							/>
						</div>
						<div className="flex items-center justify-between sm:col-span-2">
							<button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base w-full">
								Send
							</button>
						</div>
						<p className="text-xs text-gray-400">
							By signing up to our newsletter you agree to our{" "}
							<a
								href="#"
								className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
							>
								Privacy Policy
							</a>
							.
						</p>
					</form>
				</div>
			</div>
			{/* --- Form --- */}
		</>
	);
};

const JoinUsContent = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					<div>
						<div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
							<img
								src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
								loading="lazy"
								alt="Photo by Martin Sanchez"
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
					<div className="md:pt-8">
						<p className="text-center font-bold text-indigo-500 md:text-left">
							Who we are
						</p>
						<h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
							Our competitive advantage
						</h1>
						<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated. It may be used to
							display a sample of fonts or generate text for testing. Filler
							text is dummy text which has no meaning however looks very similar
							to real text.
							<br />
							<br />
							This is a section of some simple filler text, also known as
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
						</p>
						<h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
							About us
						</h2>
						<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated. It may be used to
							display a sample of fonts or generate text for testing. Filler
							text is dummy text which has no meaning however looks very similar
							to real text.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
