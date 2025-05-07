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
			<ul className="space-y-6">
				{donations.map((donation) => (
					<li
						key={donation.id}
						className="border border-gray-200 p-4 rounded-lg bg-white shadow-md"
					>
						<div className="mb-4">
							<h2 className="text-xl font-semibold">{donation.name}</h2>
							<p className="text-gray-500">{donation.type}</p>
							<p className="text-gray-700 mt-2">Address: {donation.address}</p>
							<p className="text-gray-700 mt-2">Weight: {donation.weight} kg</p>
							<p className="text-gray-700 mt-2">
								Dimensions: {donation.length}x{donation.height}x
								{donation.weight}
							</p>
							<p className="text-gray-700 mt-2">
								Datetime: {new Date(donation.datetime).toLocaleString()}
							</p>
						</div>

						<div className="mt-4 p-4 bg-gray-100 rounded-lg">
							<h3 className="font-semibold text-lg">NGO Details</h3>
							<p className="text-gray-700">Name: {donation.ngo.ngo_name}</p>
							<p className="text-gray-700">Type: {donation.ngo.type_ngo}</p>
							<p className="text-gray-700">Email: {donation.ngo.email}</p>
							<p className="text-gray-700">Phone: {donation.ngo.phone}</p>
							<p className="text-gray-700">Address: {donation.ngo.address}</p>
							<p className="text-gray-700">Message: {donation.ngo.message}</p>
							<p className="text-gray-700">Status: {donation.ngo.status}</p>
							{donation.ngo.image_url && (
								<img
									src={donation.ngo.image_url}
									alt={donation.ngo.ngo_name}
									className="mt-4 rounded-lg shadow-md"
								/>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
