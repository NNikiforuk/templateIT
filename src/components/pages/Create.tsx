import { ChangeEvent, useState } from "react";
import "./create.scss";
import Task from "../form/Task";

const Create = () => {
	const [formData, setFormData] = useState({
		title: "",
		date: "",
		taskName: "",
		goal: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handlePrint = () => {
		window.print();
	};

	const handleAddingTask = () => {
		
	}

	return (
		<main className="create">
			<div className="pdf">
				<div className="pdf__data">
					<input
						className="title"
						type="text"
						name="title"
						value={formData.title}
						onChange={(e: any) => handleChange(e)}
						placeholder="Document title"
					/>
					<input
						className="date"
						type="text"
						name="date"
						value={formData.date}
						onChange={(e: any) => handleChange(e)}
						placeholder="Date"
					/>
				</div>

				<Task formData={formData} handleChange={handleChange} />

				<div className="pdf__btns">
					<div className="add__task">
						<button onClick={handleAddingTask}>+</button>
					</div>
					<div className="generate__pdf">
						<button className="btn" onClick={handlePrint}>
							Generate PDF
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Create;
