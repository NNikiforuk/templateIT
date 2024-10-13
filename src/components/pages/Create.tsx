import { ChangeEvent, useEffect, useState } from "react";
import "./create.scss";
import Task from "../form/Task";
import Navigation from "../navigation/Navigation";

type FormDataProps = {
	id: number;
	taskName: string;
	goal: string;
};

type InputName = "taskName" | "goal";

const Create = () => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [disableButton, setDisableButton] = useState(false);
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

		if (formData.length === 10) {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	};

	useEffect(() => {
		if (formData.length >= 10) {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	}, [disableButton]);

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
			<Navigation />
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

				<form>
					{formData.map((task) => (
						<Task key={task.id} task={task} onTaskChange={handleTaskChange} />
					))}
				</form>

				<div className="pdf__btns no__print">
					<div className={`add__task ${disableButton && "add__task-disabled"}`}>
						<button disabled={disableButton} onClick={handleAddingNewTask}>
							+
						</button>
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
