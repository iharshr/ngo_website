import React, { useEffect, useState } from "react";

export const AdminDonations = () => {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch donations from the API
		fetch("http://localhost:5050/api/donations")
			.then((response) => response.json())
			.then((data) => {
				setDonations(data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Error fetching donations");
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Donations List</h1>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{donations.map((donation) => (
					<li
						key={donation.id}
						className="border border-gray-200 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-gray-800">
								{donation.name}
							</h2>
							<p className="text-sm text-gray-500">{donation.type}</p>
							<div className="mt-4 space-y-1 text-gray-700">
								<p>
									<span className="font-semibold">Address:</span>{" "}
									{donation.address}
								</p>
								<p>
									<span className="font-semibold">Weight:</span>{" "}
									{donation.weight} kg
								</p>
								<p>
									<span className="font-semibold">Dimensions:</span>{" "}
									{donation.length} x {donation.height} x {donation.weight}
								</p>
								<p>
									<span className="font-semibold">Datetime:</span>{" "}
									{new Date(donation.datetime).toLocaleString()}
								</p>
							</div>
						</div>

						<div className="bg-gray-50 p-4 rounded-lg border-t border-gray-200">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								NGO Details
							</h3>
							<div className="text-gray-700 space-y-1 text-sm">
								<p>
									<span className="font-semibold">Name:</span>{" "}
									{donation.ngo.ngo_name}
								</p>
								<p>
									<span className="font-semibold">Type:</span>{" "}
									{donation.ngo.type_ngo}
								</p>
								<p>
									<span className="font-semibold">Email:</span>{" "}
									{donation.ngo.email}
								</p>
								<p>
									<span className="font-semibold">Phone:</span>{" "}
									{donation.ngo.phone}
								</p>
								<p>
									<span className="font-semibold">Address:</span>{" "}
									{donation.ngo.address}
								</p>
								<p>
									<span className="font-semibold">Message:</span>{" "}
									{donation.ngo.message}
								</p>
								<p>
									<span className="font-semibold">Status:</span>{" "}
									{donation.ngo.status}
								</p>
							</div>
							{donation.ngo.image_url && (
								<img
									src={donation.ngo.image_url}
									alt={donation.ngo.ngo_name}
									className="mt-4 rounded-lg shadow-md object-cover w-full h-40"
								/>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
