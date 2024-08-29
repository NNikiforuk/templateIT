import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Navigation from "./components/navigation/Navigation";

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="create" element={<Create />}></Route>
				</Routes>
				<footer className="footer no__print">
					@{new Date().getFullYear()} Template IT
				</footer>
			</Router>
		</div>
	);
}

export default App;
