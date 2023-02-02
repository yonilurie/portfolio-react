import { useState } from "react";
import "./App.css";
import { Drawer } from "@mui/material";
function App() {
	const [page, setPage] = useState("home");
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<div className="App">
			<Drawer
				open={showDrawer}
				anchor={"right"}
				hideBackdrop={false}
				onClose={() => setShowDrawer(false)}
			>
				<div className="tabs-container">
					<button>Home</button>
					<button>About</button>
					<button>Projects</button>
					<button>Games</button>
				</div>
			</Drawer>
			<h1>Yonatan Lurie</h1>
			<h2>Full Stack Software Engineer</h2>
			<button
				className="drawer-toggle"
				onClick={() => setShowDrawer((drawer) => !drawer)}
			>
				<span className="material-icons">menu</span>
			</button>
		</div>
	);
}

export default App;
