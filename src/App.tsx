import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/pages/Home";
import Create from "./components/pages/create";

{
	/* <a href="https://vitejs.dev" target="_blank">
	<img src={viteLogo} className="logo" alt="Vite logo" />
</a>; */
}

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/create" element={<Create />}></Route>
				</Routes>
				<footer className="footer">@{new Date().getFullYear()}</footer>
			</Router>
		</div>
	);
}

export default App;
