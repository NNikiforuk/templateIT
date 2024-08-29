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
			<div className="day day1">1</div>
			<div className="day day2">2</div>
			<div className="day day3">3</div>
			<div className="day day4">4</div>
			<div className="day day5">5</div>
			<div className="day day6">6</div>
			<div className="day day7">7</div>
			<input
				className="task__name"
				type="text"
				name="taskName"
				value={task.taskName}
				onChange={handleChange}
				placeholder="Task name"
			/>
			<div className="blank blank1" />
			<div className="blank blank2" />
			<div className="blank blank3" />
			<div className="blank blank4" />
			<div className="blank blank5" />
			<div className="blank blank6" />
			<div className="blank blank7" />
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
