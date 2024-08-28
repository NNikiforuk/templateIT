import { useState } from "react";
import "./create.scss";

const Create = () => {
	const [formData, setFormData] = useState({
		title: "",
		date: "",
		taskName: "",
		goal: "",
	});

	const handleChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handlePrint = () => {
		window.print();
	};

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
				<form className="pdf__form">
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
						value={formData.taskName}
						onChange={(e: any) => handleChange(e)}
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
						value={formData.goal}
						onChange={(e: any) => handleChange(e)}
						placeholder="Goal"
					/>
				</form>
				<button className="btn" onClick={handlePrint}>
					Generate PDF
				</button>
			</div>
		</main>
	);
};

export default Create;
