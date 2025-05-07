import { toast } from "react-toastify";

export const JoinUsPage = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Collect form data
		const formData = new FormData(e.target);
		const data = {
			ngo_name: formData.get("ngo_name"),
			type_ngo: formData.get("type_ngo"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			address: formData.get("address"),
			personal_name: formData.get("personal_name"),
			personal_email: formData.get("personal_email"),
			personal_phone: formData.get("personal_phone"),
			message: formData.get("message"),
			image_url: formData.get("image_url"), // Image URL field
		};

		// Validate required fields
		if (!data.ngo_name || !data.email || !data.phone || !data.message) {
			toast.error("Please fill out all required fields.");
			return;
		}

		try {
			// API POST call
			const response = await fetch("http://127.0.0.1:5050/api/ngo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form data.");
			}

			const responseData = await response.json();
			toast.success("Thank you for joining!");
			console.log("Response Data:", responseData); // Handle the response as needed
		} catch (error) {
			toast.error(`Error: ${error.message}`);
		}
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				{/* text - start */}
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Join Our Network
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						Be a part of a growing community that believes in the power of
						giving. Whether you’re an NGO looking for support or a donor ready
						to make a difference, our platform connects you with people who
						care. Together, we can build a stronger, more compassionate world —
						one donation, one connection at a time.
					</p>
				</div>

				<h3 className="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
					Ngo Details
				</h3>
				<form
					onSubmit={handleSubmit}
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
							htmlFor="email"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Official Email*
						</label>
						<input
							name="email"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div>
						<label
							htmlFor="phone"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Official Phone No.*
						</label>
						<input
							name="phone"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="address"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Official Address
						</label>
						<input
							name="address"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					{/* Person Details */}
					<div className="sm:col-span-2">
						<h3 className="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
							Personal Details
						</h3>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="personal_name"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Name*
						</label>
						<input
							name="personal_name"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div>
						<label
							htmlFor="personal_email"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Official Email*
						</label>
						<input
							name="personal_email"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>
					<div>
						<label
							htmlFor="personal_phone"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Official Phone No.*
						</label>
						<input
							name="personal_phone"
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
						/>
					</div>

					{/* Image URL */}
					<div className="sm:col-span-2">
						<label
							htmlFor="image_url"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
						>
							Image URL (Optional)
						</label>
						<input
							name="image_url"
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							placeholder="Paste image URL here"
						/>
					</div>

					<div className="flex items-center justify-between sm:col-span-2">
						<button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base w-full">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
