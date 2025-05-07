import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const articles = [
	{
		title: "New trends in Tech",
		image:
			"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
		author: "Mike Lane",
		authorImage:
			"https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64",
		donation_amount: 200,
		date: "July 19, 2021",
	},
	{
		title: "Working with legacy stacks",
		image:
			"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
		author: "Jane Jackobs",
		authorImage:
			"https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64",
		donation_amount: 200,
		date: "April 07, 2021",
	},
	{
		title: "10 best smartphones for devs",
		image:
			"https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
		author: "Tylor Grey",
		authorImage:
			"https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64",
		donation_amount: 200,
		date: "March 15, 2021",
	},
	{
		title: "8 High performance Notebooks",
		image:
			"https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
		author: "Ann Park",
		authorImage:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64",
		donation_amount: 200,
		date: "January 27, 2021",
	},
];

export const BrowseDonations = () => {
	const showSwal = () => {
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
					} = result.value;

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

					Swal.fire({
						title: "Success!",
						html: invoiceHtml,
						icon: "success",
						confirmButtonText: "Done",
						width: "45%",
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
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
					{articles.map((article, index) => (
						<div
							key={index}
							className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
						>
							<a
								href="#"
								className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
							>
								<img
									src={article.image}
									loading="lazy"
									alt={article.title}
									className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
								/>
							</a>
							<div className="flex flex-1 flex-col p-4 sm:p-6">
								<h2 className="mb-2 text-lg font-semibold text-gray-800">
									<a
										href="#"
										className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
									>
										{article.title}
									</a>
								</h2>
								<p className="mb-8 text-gray-500">
									This is a section of some simple filler text, also known as
									placeholder text. It shares some characteristics of a real
									written text.
								</p>
								<ul className="mb-6 space-y-2 text-green-400">
									{/* feat - start */}
									<li className="flex items-center justify-between gap-1.5">
										<div className="flex items-center justify-center">
											<span>Total Pledges</span>
										</div>
										<span>{article.donation_amount}</span>
									</li>
									{/* feat - end */}
								</ul>
								<button
									onClick={showSwal}
									className="cursor-pointer block rounded-lg bg-red-500 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-300 focus-visible:ring active:bg-red-400 md:text-base"
								>
									Donate Now
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
