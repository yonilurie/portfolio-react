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
		<div className="App" aria-hidden={showContact}>
			{showContact && <Contact toggleContact={toggleContact} />}
			<nav>
				<a
					href="/src/assets/YonatanLurieResume.pdf"
					target="_blank"
					referrerPolicy="no-referrer"
					className="nav-item"
				>
					Resume
				</a>

				<button onClick={toggleContact} className="nav-item">
					Contact Me
				</button>
			</nav>
			<section className="who-am-i">
				<div>
					<h1>Yonatan Lurie</h1>
					<h2>Full Stack Software Engineer</h2>
				</div>
				<p>
					After graduating from the University of Washington with a
					B.A. majoring in Psychology, I changed career paths and
					began studying software development. I attended the App
					Academy boot camp and gained 1000+ hours of experience
					learning about computer science and creating multiple
					full-stack projects.
				</p>
			</section>
			<section className="skills">
				<h3>Skills</h3>
				<div className="skill-images">
					<img src="/src/assets/js.png" className="img-skill"></img>
					<img src="/src/assets/css.png" className="img-skill"></img>
					<img src="/src/assets/html.png" className="img-skill"></img>
					<img
						src="/src/assets/python.png"
						className="img-skill"
					></img>
					<img src="/src/assets/post.png" className="img-skill"></img>
					<img
						src="/src/assets/flask.png"
						className="img-skill"
					></img>
					<img
						src="/src/assets/sequelize.png"
						className="img-skill"
					></img>
					<img src="/src/assets/sqla.png" className="img-skill"></img>
					<img
						src="/src/assets/react.png"
						className="img-skill"
					></img>
					<img
						src="/src/assets/redux.png"
						className="img-skill"
					></img>
					<img src="/src/assets/node.png" className="img-skill"></img>
					<img
						src="/src/assets/express.png"
						className="img-skill"
					></img>
				</div>
			</section>
			<section className="projects">
				<h3>projects</h3>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
				<div className="single-project">
					<p>Name</p>
					<div>
						<img />
						<div>Tools</div>
						<div>description</div>
					</div>
				</div>
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
					<label htmlFor="email">Your email</label>
					<input type="email" name="email" id="email" required />
					<label htmlFor="message">Your message</label>
					<textarea name="message" id="message" required></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
