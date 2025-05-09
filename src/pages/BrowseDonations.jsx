import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const BrowseDonations = () => {
	const [ngos, setNgos] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch NGOs data from the backend API
	useEffect(() => {
		const fetchNgos = async () => {
			try {
				const response = await fetch(
					"http://localhost:5050/api/ngos-confirmed"
				);
				const data = await response.json();
				setNgos(data); // Set the fetched data to the state
				setLoading(false);
			} catch (error) {
				console.error("Error fetching NGOs:", error);
				setLoading(false);
			}
		};
		fetchNgos();
	}, []);

	// If loading, show loading message
	if (loading) {
		return <div>Loading...</div>;
	}

	const showSwal = (ngoId) => {
		withReactContent(Swal)
			.fire({
				title: "Donation Details",
				html: `
					<div style="display: flex; flex-direction: column; gap: 12px; text-align: left; width: 100%; max-width: 500px; ">
						
						<label style="width: 100%;">
							<strong>Donation Type</strong><br />
							<select id="donation-type" class="swal2-input" style="width: 100%;">
								<option value="" disabled selected>Select Type</option>
								<option value="meds">Meds</option>
								<option value="foods">Foods</option>
								<option value="electronics">Electronics</option>
								<option value="cloths">Cloths</option>
								<option value="educations">Educations</option>
							</select>
						</label>
	
						<label style="width: 100%;">
							<strong>Name</strong><br />
							<input id="pickup-name" class="swal2-input" placeholder="Full Name" style="width: 100%;" />
						</label>
	
						<label style="width: 100%;">
							<strong>Address</strong><br />
							<input id="pickup-address" class="swal2-input" placeholder="Pickup Address" style="width: 100%;" />
						</label>
	
						<label style="width: 100%;">
							<strong>Email</strong><br />
							<input id="pickup-email" class="swal2-input" type="email" placeholder="example@mail.com" style="width: 100%;" />
						</label>
	
						<label style="width: 100%;">
							<strong>Phone</strong><br />
							<input id="pickup-phone" class="swal2-input" type="tel" placeholder="+91-XXXXXXXXXX" style="width: 100%;" />
						</label>
	
						<label style="width: 100%;">
							<strong>Pickup Date & Time</strong><br />
							<input id="pickup-datetime" class="swal2-input" type="datetime-local" style="width: 100%;" />
						</label>
	
						<div style="width: 100%;">
							<strong>Parcel Dimensions</strong>
							<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 5px;">
								<label style="width: 100%;">
									<small>Weight (kg)</small><br />
									<input id="pickup-weight" class="swal2-input" type="number" style="width: 100%;" />
								</label>
								<label style="width: 100%;">
									<small>Length (cm)</small><br />
									<input id="pickup-length" class="swal2-input" type="number" style="width: 100%;" />
								</label>
								<label style="width: 100%;">
									<small>Height (cm)</small><br />
									<input id="pickup-height" class="swal2-input" type="number" style="width: 100%;" />
								</label>
							</div>
						</div>
					</div>
				`,
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: "Submit",
				width: "45%",
				preConfirm: () => {
					const data = {
						type: document.getElementById("donation-type").value,
						name: document.getElementById("pickup-name").value,
						address: document.getElementById("pickup-address").value,
						email: document.getElementById("pickup-email").value,
						phone: document.getElementById("pickup-phone").value,
						datetime: document.getElementById("pickup-datetime").value,
						weight: document.getElementById("pickup-weight").value,
						length: document.getElementById("pickup-length").value,
						height: document.getElementById("pickup-height").value,
						ngoId: ngoId, // Pass ngoId here
					};

					if (
						!data.type ||
						!data.name ||
						!data.address ||
						!data.email ||
						!data.phone ||
						!data.datetime
					) {
						Swal.showValidationMessage("Please fill out all required fields.");
						return;
					}
					console.log({ data });
					return data;
				},
			})
			.then((result) => {
				if (result.isConfirmed) {
					const {
						name,
						type,
						address,
						email,
						phone,
						datetime,
						weight,
						length,
						height,
						ngoId, // Capture ngoId
					} = result.value;

					// Create the invoice HTML
					const invoiceHtml = `
						<div style="text-align: left; font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
							<h2 style="color: #4CAF50; margin-bottom: 10px;">Donation Confirmed 🎉</h2>
							<p style="font-size: 16px; margin-bottom: 20px;">Thank you for your generous donation. Here are your details:</p>
	
							<div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #ddd;">
								<h3 style="margin-top: 0; margin-bottom: 10px;">Donor Information</h3>
								<p><strong>Name:</strong> ${name}</p>
								<p><strong>Email:</strong> ${email}</p>
								<p><strong>Phone:</strong> ${phone}</p>
								<p><strong>Donation Type:</strong> ${type}</p>
								<p><strong>Pickup Address:</strong> ${address}</p>
								<p><strong>Pickup Time:</strong> ${new Date(datetime).toLocaleString()}</p>
	
								<hr style="margin: 20px 0;" />
	
								<h3 style="margin-top: 0; margin-bottom: 10px;">Parcel Dimensions</h3>
								<ul style="padding-left: 20px; line-height: 1.6;">
									<li><strong>Weight:</strong> ${weight} kg</li>
									<li><strong>Length:</strong> ${length} cm</li>
									<li><strong>Height:</strong> ${height} cm</li>
								</ul>
							</div>
	
							<p style="margin-top: 30px; font-size: 16px; color: #333;">
								<strong>🙏 Thank you for helping us make a difference!</strong><br />
								We appreciate your kindness and support.
							</p>
						</div>
					`;

					// Show the confirmation dialog
					Swal.fire({
						title: "Success!",
						html: invoiceHtml,
						icon: "success",
						confirmButtonText: "Done",
						width: "45%",
					}).then(() => {
						// After clicking Done, send POST request to the API
						fetch("http://localhost:5050/api/donation", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								name,
								type,
								address,
								email,
								phone,
								datetime,
								weight,
								length,
								height,
								ngoId, // Include ngoId in the request body
							}),
						})
							.then((response) => response.json())
							.then((data) => {
								console.log("Donation submitted successfully:", data);
							})
							.catch((error) => {
								console.error("Error submitting donation:", error);
							});
					});
				}
			});
	};

	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Donations
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						This is a section of some simple filler text, also known as
						placeholder text.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
					{ngos.map((ngo) => (
						<div
							key={ngo.id}
							className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
						>
							<a
								href="#"
								className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
							>
								<img
									src={ngo.image_url}
									loading="lazy"
									alt={ngo.ngo_name}
									className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
								/>
							</a>
							<div className="flex flex-1 flex-col p-4 sm:p-6 justify-between">
								<div>
									<h2 className="mb-2 text-lg font-semibold text-gray-800">
										<a
											href="#"
											className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
										>
											{ngo.ngo_name}
										</a>
									</h2>
									<p className="mb-8 text-gray-500">
										{ngo.message} {/* Display the message */}
									</p>
								</div>
								<div>
									<ul className="mb-6 space-y-2 text-green-400">
										{/* Display Donation Count */}
										<li className="flex items-center justify-between gap-1.5">
											<div className="flex items-center justify-center">
												<span>Total Donations</span>
											</div>
											<span>{ngo.donationCount}</span>
										</li>
									</ul>
									<button
										onClick={() => showSwal(ngo.id)}
										className="cursor-pointer block rounded-lg bg-red-500 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-300 focus-visible:ring active:bg-red-400 md:text-base w-full"
									>
										Donate Now
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
