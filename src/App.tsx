import "./App.css";
import { useState } from "react";
function App() {
	const [showContact, setShowContact] = useState(false);

	const toggleContact = () => {
		if (showContact) {
			let contact = document.getElementById("contact");
			contact?.classList.add("fade-out");
			let contactContainer = document.getElementById("contact-container");
			contactContainer?.classList.add("fade-out");
			const timeout = setTimeout(() => {
				setShowContact((show) => !show);
			}, 500);
			return () => clearTimeout(timeout);
		} else {
			setShowContact((show) => !show);
		}
	};

	return (
		<div className="App">
			{showContact && <Contact toggleContact={toggleContact} />}
			<nav>
				<div>
					<a
						href="/src/assets/YonatanLurieResume.pdf"
						target="_blank"
						referrerPolicy="no-referrer"
					>
						resume
					</a>
				</div>
				<button onClick={toggleContact}>contact me</button>
			</nav>
			<section className="who-am-i">
				<h1>yonatan lurie</h1>
				<h2>full stack software engineer</h2>
			</section>
		</div>
	);
}

export default App;

function Contact({ toggleContact }) {
	return (
		<div className="contact-container" id="contact-container">
			<div className="contact" id="contact">
				<button className="exit-contact" onClick={toggleContact}>
					X
				</button>
				<h2>Contact me</h2>
				<form action="https://formspree.io/f/xgeqapga" method="POST">
					<label htmlFor="email">Your email:</label>
					<input type="email" name="email" id="email" required />
					<label htmlFor="message">Your message:</label>
					<textarea name="message" id="message" required></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
