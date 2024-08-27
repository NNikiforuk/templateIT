import { useState } from "react";
import "./create.scss";

const Create = () => {
	const [formData, setFormData] = useState({
		title: "",
		taskName: "",
		blank1: "",
		blank2: "",
		blank3: "",
		blank4: "",
		blank5: "",
		blank6: "",
		blank7: "",
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
			<form className="pdf">
				<input
					className="pdf__title"
					type="text"
					name="title"
					value={formData.title}
					onChange={(e: any) => handleChange(e)}
					placeholder="Document title"
				/>
				<div className="pdf__form">
					<div className="label">Task name</div>
					<div className="qty qty0">Day</div>
					<div className="qty qty1">1</div>
					<div className="qty qty2">2</div>
					<div className="qty qty3">3</div>
					<div className="qty qty4">4</div>
					<div className="qty qty5">5</div>
					<div className="qty qty6">6</div>
					<div className="qty qty7">7</div>
					<input
						className="task__name"
						type="text"
						name="taskName"
						value={formData.taskName}
						onChange={(e: any) => handleChange(e)}
						placeholder="Task name"
					/>
					<input
						className="blank1"
						type="text"
						name="blank1"
						value={formData.blank1}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank2"
						type="text"
						name="blank2"
						value={formData.blank2}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank3"
						type="text"
						name="blank3"
						value={formData.blank3}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank4"
						type="text"
						name="blank4"
						value={formData.blank4}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank5"
						type="text"
						name="blank5"
						value={formData.blank5}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank6"
						type="text"
						name="blank6"
						value={formData.blank6}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="blank7"
						type="text"
						name="blank7"
						value={formData.blank7}
						onChange={(e: any) => handleChange(e)}
					/>
					<input
						className="goal"
						type="text"
						name="goal"
						value={formData.goal}
						onChange={(e: any) => handleChange(e)}
						placeholder="Goal"
					/>
				</div>
				<div className="add__row">+</div>
			</form>
			<button className="btn" onClick={handlePrint}>Generate PDF</button>
		</main>
	);
};

export default Create;
