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
					href="https://github.com/yonilurie"
					target="_blank"
					referrerPolicy="no-referrer"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/yonilurie/"
					target="_blank"
					referrerPolicy="no-referrer"
				>
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
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
				<h3>Projects</h3>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Instagram Clone</h4>
						<div className="project-links">
							<a
								href="https://thegramme.herokuapp.com/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://github.com/yonilurie/instagram-clone"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<code>
							(JavaScript, Python, React, Redux, Flask,
							SQLAlchemy, CSS)
						</code>
						<p>
							Features include, user authentication, creating and
							editing posts, creating and editing comments, liking
							posts as well as comments, and following other
							users.
						</p>
					</div>

					<a
						href="https://thegramme.herokuapp.com/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/thegramme-img.png"></img>
					</a>
				</div>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Reddit Clone</h4>
						<div className="project-links">
							<a
								href="https://teddir.herokuapp.com/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://github.com/yonilurie/reddit-clone"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<code>
							(JavaScript, Python, React, Redux, Flask,
							SQLAlchemy, CSS)
						</code>
						<p>
							Features include, user authentication, creating and
							editing posts, creating and editing comments, nested
							comments, liking posts as well as comments, creating
							a subreddit along with subreddit customization, and
							a search feature.
						</p>
						<p>All images are hosted using AWS.</p>
					</div>

					<a
						href="https://teddir.herokuapp.com/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/teddir-img.png"></img>
					</a>
				</div>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Airbnb Clone</h4>
						<div className="project-links">
							<a
								href="https://a-bnb.herokuapp.com/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://github.com/yonilurie/airbnb-clone"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<p>
							<code>
								(JavaScript, React, Redux, Express, Sequelize,
								CSS)
							</code>
						</p>
						<p>
							Features include, user authentication, creating and
							editing rooms, creating and editing reviews, and
							booking a stay at other users places.
						</p>
						<p>
							Additionally, the Google Maps API is used to show
							exactly where a room is on the map. All images are
							also hosted using AWS.
						</p>
					</div>
					<a
						href="https://a-bnb.herokuapp.com/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/abnb-img.png"></img>
					</a>
				</div>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Wordle</h4>
						<div className="project-links">
							<a
								href="https://nyt-wordle-clone.netlify.app/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://github.com/yonilurie/Wordle"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<p>
							<code>(TypeScript, React, CSS)</code>
						</p>
						<p>
							This app is a clone of the New York Times Wordle
							game. A word is picked at random and the user has 6
							attempts to guess it correctly.
						</p>
						<p>
							Each guess has the opportunity to reveal
							information. Each letter in the users guess that is
							in the word will be colored in gold. Each letter
							that is in the same place as the word will be green.
							All other letters will be grey.
						</p>
					</div>
					<a
						href="https://nyt-wordle-clone.netlify.app/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/wordle-img.png"></img>
					</a>
				</div>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Boggle</h4>
						<div className="project-links">
							<a
								href="https://boggle-yonilurie.netlify.app/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://github.com/yonilurie/Boggle"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<p>
							<code>(TypeScript, React, CSS)</code>
						</p>
						<p>The game of Boggle.</p>
						<p>
							A 4X4 board of letters is generated, the user has 3
							minutes to find as many words comprised of adjacent
							cells as possible.
						</p>
					</div>

					<a
						href="https://boggle-yonilurie.netlify.app/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/boggle-img.png"></img>
					</a>
				</div>
				<div className="single-project">
					<div className="single-project-info">
						<h4>Etch-A-Sketch</h4>
						<div className="project-links">
							<a
								href="https://inspiring-gumption-0c3a95.netlify.app/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Live Site
							</a>
							<a
								href="https://yonilurie.github.io/Etch-A-Sketch-Web/"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								GitHub
							</a>
						</div>
						<p>
							<code>(JavaScript, HTML, CSS)</code>
						</p>
						<p>
							Etch-A-Sketch is supposed to simulate an
							Etch-A-Sketch. Slide your mouse across the canvas to
							paint whatever you like.
						</p>
						<p>
							Features include rainbow mode, a color picker,
							eraser, and an option to resize the canvas.
						</p>
					</div>

					<a
						href="https://inspiring-gumption-0c3a95.netlify.app/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="/src/assets/etch-img.png"></img>
					</a>
				</div>
			</section>
			<footer></footer>
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
