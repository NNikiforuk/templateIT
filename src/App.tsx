import "./App.scss";
import Header from "./components/header/Header";
import Price from "./components/sections/Price";
import Whatsthat from "./components/sections/Whatsthat";

{
	/* <a href="https://vitejs.dev" target="_blank">
	<img src={viteLogo} className="logo" alt="Vite logo" />
</a>; */
}

function App() {
	return (
		<div className="App">
			<Header />
			<Price />
			<Whatsthat />
		</div>
	);
}

export default App;
