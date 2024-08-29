import { ChangeEvent } from "react";
import "./task.scss";

type TaskData = {
	id: number;
	taskName: string;
	goal: string;
};

type InputName = "taskName" | "goal";

type TaskProps = {
	task: TaskData;
	onTaskChange: (id: number, inputName: InputName, value: string) => void;
};

const Task = ({ task, onTaskChange }: TaskProps) => {

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.name as InputName;
		const value = e.target.value;
		onTaskChange(task.id, inputName, value);
	};

	return (
		<form className="form">
			<input
				className="task__name"
				type="text"
				name="taskName"
				value={task.taskName}
				onChange={handleChange}
				placeholder="Task name"
			/>
			<div className="blank" />
			<div className="blank" />
			<div className="blank" />
			<div className="blank" />
			<div className="blank" />
			<div className="blank" />
			<div className="blank" />
			<input
				className="goal"
				type="text"
				name="goal"
				value={task.goal}
				onChange={handleChange}
				placeholder="Goal"
			/>
		</form>
	);
};

export default Task;
