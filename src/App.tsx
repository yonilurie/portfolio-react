import "./App.css";
import { useState } from "react";
function App() {
	const [showContact, setShowContact] = useState(false);

	function toggleContact() {
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
					href="YonatanLurieResume.pdf"
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
					<h2>Full Stack Software Developer</h2>
				</div>
				<p>
					I'm a Full Stack software developer whose journey into the tech world began after earning a bachelor's degree in psychology. 
					My fascination with technology led me to an intensive coding bootcamp, where I immersed myself in full stack web development, 
					mastering a range of modern technologies. This transformative experience paved the way for my role at the University of Washington, 
					where I currently apply my skills as a Full Stack Developer, tackling diverse challenges and contributing to meaningful projects. 
				</p>
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
								href="https://github.com/Hansen-G/TheGramme"
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
						<img src="thegramme-img.png"></img>
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
						<img src="teddir-img.png"></img>
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
						<img src="abnb-img.png"></img>
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
							Features include a color-changing keyboard to reflect previous user guesses, 
							a persistent dark mode toggle for improved user experience, 
							and a feature for players to easily share their game results. 
						</p>
					</div>
					<a
						href="https://nyt-wordle-clone.netlify.app/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="wordle-img.png"></img>
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
						<p>The game of Boggle. Players have 3 minutes to find as many words as possible on the board</p>
						<p>
							Using TypeScript I implemented an algorithm to uncover every word possibility on the Boggle board, 
							and integrated the Free Dictionary API for quick access to word definitions. 
						</p>
					</div>

					<a
						href="https://boggle-yonilurie.netlify.app/"
						target="_blank"
						referrerPolicy="no-referrer"
						className="project-img"
					>
						<img src="boggle-img.png"></img>
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
						<img src="etch-img.png"></img>
					</a>
				</div>
			</section>
						<section className="skills">
				<h3>Skills</h3>
				<div className="skills-breakdown-container">
					<div className="column">
						<div>JavaScript</div>
						<div>C#</div>
						<div>TypeScript</div>
						<div>CSS</div>
						<div>HTML</div>
						<div>Python</div>
					</div>
					<div className="column">
						<div>VS/VS Code</div>
						<div>ASP.NET</div>
						<div>React/Redux</div>
						<div>Express.js</div>
						<div>jQuery</div>
						<div>Node.js</div>
					</div>
					<div className="column">
						<div>SQLITE</div>
						<div>Postgres</div>
						<div>React/Redux</div>
						<div>Microsoft SQL Server</div>
						<div>Flask</div>
						<div>NPM</div>
					</div>
				</div>

				{/* <div className="skill-images">
					<img src="js.png" className="img-skill"></img>
					<img src="css.png" className="img-skill"></img>
					<img src="html.png" className="img-skill"></img>
					<img src="python.png" className="img-skill"></img>
					<img src="post.png" className="img-skill"></img>
					<img src="flask.png" className="img-skill"></img>
					<img src="sequelize.png" className="img-skill"></img>
					<img src="sqla.png" className="img-skill"></img>
					<img src="react.png" className="img-skill"></img>
					<img src="redux.png" className="img-skill"></img>
					<img src="node.png" className="img-skill"></img>
					<img src="express.png" className="img-skill"></img>
				</div> */}
			</section>
			<footer></footer>
		</div>
	);
}

export default App;

interface ContactProps {
	toggleContact: Function;
}

function Contact({ toggleContact }: ContactProps) {
	return (
		<div className="contact-container" id="contact-container">
			<div className="contact" id="contact">
				<button
					className="exit-contact"
					onClick={() => toggleContact()}
				>
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
