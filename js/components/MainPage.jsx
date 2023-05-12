// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h5 className="w-[500px] mx-auto text-center text-6xl">NuntApp-etit</h5>
				<p className="w-[1000px] mx-auto text-center mt-4 mb-4 text-3xl">O gustare delicioasă de organizare a nunții!</p>
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="card-container block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{record.description}
							</p>
                            <div className="info-container">
                            <div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
								Capacitate: {record.capacitate}
							</p>
                            </div>
                            <div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
								Contact: {record.contact}
							</p>
                            </div>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            <img src={record.image} alt="Fun fact image" />
							</p>
							<div className={"flex justify-center w-full mt-4"}>
                            <button type="button"
								        id={record._id}
								        onClick={() => window.location.href = record.detalii}
								        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Detalii
								</button>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Stergere
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}