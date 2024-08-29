import { ChangeEvent, useState } from "react";
import "./create.scss";
import Task from "../form/Task";

type FormDataProps = {
	id: number;
	taskName: string;
	goal: string;
};

type InputName = "taskName" | "goal";

const Create = () => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [formData, setFormData] = useState<FormDataProps[]>([
		{
			id: 1,
			taskName: "",
			goal: "",
		},
	]);

	const handlePrint = () => {
		window.print();
	};

	const handleAddingNewTask = () => {
		setFormData((prevFormData) => [
			...prevFormData,
			{
				id: prevFormData.length + 1,
				taskName: "",
				goal: "",
			},
		]);
	};

	const handleTaskChange = (
		id: number,
		inputName: InputName,
		value: string
	) => {
		setFormData((prevFormData) =>
			prevFormData.map((task) =>
				task.id === id ? { ...task, [inputName]: value } : task
			)
		);
	};

	return (
		<main className="create">
			<div className="pdf">
				<div className="pdf__data">
					<input
						className="title"
						type="text"
						name="title"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTitle(e.target.value)
						}
						placeholder="Document title"
					/>
					<input
						className="date"
						type="text"
						name="date"
						value={date}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setDate(e.target.value)
						}
						placeholder="Date"
					/>
				</div>

				<div className="pdf__days">
					<div className="day0"></div>
					<div className="day">1</div>
					<div className="day">2</div>
					<div className="day">3</div>
					<div className="day">4</div>
					<div className="day">5</div>
					<div className="day">6</div>
					<div className="day">7</div>
					<div className="day0"></div>
				</div>

				{formData.map((task) => (
					<Task key={task.id} task={task} onTaskChange={handleTaskChange} />
				))}

				<div className="pdf__btns">
					<div className="add__task">
						<button onClick={handleAddingNewTask}>+</button>
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
