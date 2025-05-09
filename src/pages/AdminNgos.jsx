import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AdminNgos = () => {
	const [ngos, setNgos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchNGOs();
	}, []);

	const fetchNGOs = async () => {
		try {
			const response = await fetch("http://localhost:5050/api/ngos");
			const data = await response.json();
			setNgos(data);
		} catch (error) {
			console.error("Error fetching NGOs:", error);
		} finally {
			setLoading(false);
		}
	};

	const updateStatus = async (id, status) => {
		try {
			await fetch(`http://localhost:5050/api/ngos-change-status/${id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ status }),
			});

			setNgos((prev) =>
				prev.map((ngo) => (ngo.id === id ? { ...ngo, status } : ngo))
			);
			toast.success(`Ngo status changed to : ${status}`);
		} catch (error) {
			toast.error(`some error occured`);
			console.error("Error updating status:", error);
		}
	};

	if (loading) {
		return <p className="text-center mt-10">Loading NGOs...</p>;
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold text-center mb-6">NGO Requests</h1>
			{ngos.length === 0 ? (
				<p className="text-center">No NGOs found.</p>
			) : (
				<ul className="space-y-6">
					{ngos.map((ngo) => (
						<li
							key={ngo.id}
							className="border rounded-xl p-5 bg-white shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-1 flex justify-between items-start"
						>
							<div>
								<h2 className="text-xl font-semibold">{ngo.ngo_name}</h2>
								<p className="text-gray-600">
									{ngo.email} | {ngo.phone}
								</p>
								<p className="text-sm text-gray-500">
									Status:{" "}
									<span
										className={`font-medium ${
											ngo.status === "confirmed"
												? "text-green-600"
												: "text-yellow-600"
										}`}
									>
										{ngo.status}
									</span>
								</p>
							</div>
							<div className="flex gap-3">
								<button
									className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
									onClick={() => updateStatus(ngo.id, "confirmed")}
								>
									Approve
								</button>
								<button
									className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
									onClick={() => updateStatus(ngo.id, "pending")}
								>
									Disapprove
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
