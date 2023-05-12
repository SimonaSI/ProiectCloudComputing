// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
        const image = document.getElementById("image").value;
        const capacitate = document.getElementById("capacitate").value;
        const contact = document.getElementById("contact").value;
        const detalii = document.getElementById("detalii").value;
		const data = {title, description,image,capacitate,contact,detalii};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("title").value = "";
			document.getElementById("description").value = "";
            document.getElementById("image").value = "";
            document.getElementById("capacitate").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("detalii").value = "";
		});
	}

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h5 className="w-[500px] mx-auto text-center text-6xl">NuntApp-etit</h5>
				<p className="w-[1000px] mx-auto text-center mt-4 mb-4 text-3xl">O gustare delicioasă de organizare a nunții!</p>
                <div className="flex w-full justify-center">

				<form className="nunta-form">
					<div className="mb-6">
						<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nume local</label>
						<input type="text" id="title"
						       className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						        required/>
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriere</label>
						<textarea id="description"
						       className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required rows="1"/>
					</div>
                    <div className="mb-6">
						<label htmlFor="capacitate"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capacitate</label>
						<input id="capacitate"
						       className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required />
					</div>
                    <div className="mb-6">
						<label htmlFor="contact"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
						<input id="contact"
						       className="  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required />
					</div>
                    <div className="mb-6">
						<label htmlFor="image"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagine</label>
						<textarea id="image"
						       className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Se adauga URL-ul imaginii" rows="1"/>
					</div>
                    <div className="mb-6">
						<label htmlFor="detalii"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detalii</label>
						<textarea id="detalii"
						       className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Se adauga un link catre site cu mai multe detalii" required rows="1"/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Trimite
					</button>
				</form>
                </div>
			</div>
		</section>
	)
}