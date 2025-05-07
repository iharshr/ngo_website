import React, { useEffect, useState } from "react";

export const AdminDonations = () => {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch the donations data from the API
		fetch("http://localhost:5050/api/donations")
			.then((response) => response.json())
			.then((data) => {
				setDonations(data.donations); // Assuming the response has a 'donations' key
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching donations:", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading donations...</div>;
	}

	return (
		<div style={{ padding: "20px" }}>
			<h1>Donation List</h1>
			{donations.length === 0 ? (
				<p>No donations available.</p>
			) : (
				<ul style={{ listStyleType: "none", paddingLeft: 0 }}>
					{donations.map((donation) => (
						<li
							key={donation.id}
							style={{
								border: "1px solid #ddd",
								padding: "15px",
								margin: "10px 0",
								borderRadius: "8px",
								backgroundColor: "#f9f9f9",
							}}
						>
							<h3>
								{donation.name} - {donation.type}
							</h3>
							<p>
								<strong>Address:</strong> {donation.address}
							</p>
							<p>
								<strong>Email:</strong> {donation.email}
							</p>
							<p>
								<strong>Phone:</strong> {donation.phone}
							</p>
							<p>
								<strong>Pickup Time:</strong>{" "}
								{new Date(donation.datetime).toLocaleString()}
							</p>
							<p>
								<strong>Weight:</strong> {donation.weight} kg
							</p>
							<p>
								<strong>Dimensions:</strong> {donation.length} x{" "}
								{donation.height} cm
							</p>
							<p>
								<strong>NGO ID:</strong> {donation.ngoId}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
