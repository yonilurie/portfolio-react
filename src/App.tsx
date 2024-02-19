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
			// Disable scroll
			let html = document.querySelector("html");
			html?.classList.remove("disable-scroll")
			let body = document.querySelector("body");
			body?.classList.remove("disable-scroll")
			const timeout = setTimeout(() => {
				setShowContact((show) => !show);
			}, 500);
			return () => clearTimeout(timeout);
		} else {
			setShowContact((show) => !show);
			// Reenable scroll
			let html = document.querySelector("html");
			html?.classList.add("disable-scroll")
			let body = document.querySelector("body");
			body?.classList.add("disable-scroll")
		}
	};

// When the user scrolls the page, execute myFunction
window.onscroll = function() { toggleNavSticky(); };

// Add the sticky class to the header and adjust width when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position and reset width to 100%
function toggleNavSticky(): void {
	// Get the header
	const header: HTMLElement | null = document.querySelector("nav");
	// Get the offset position of the navbar
	const sticky: number = header?.offsetTop ?? 0;
	if (window.pageYOffset > sticky) {
    header?.classList.add("sticky-narrow");
  } else {
    header?.classList.remove("sticky-narrow");
  }
}
	
	

	return (
		<div className="App" aria-hidden={showContact}>
			{showContact && <Contact toggleContact={toggleContact} />}
			<div className='sticky'>
				<nav className='nav'>
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
			</div>
		<div className='content'>
			<section className="who-am-i">
				<div>
					<h1>Yonatan Lurie</h1>
					<h2>Full-Stack Software Developer</h2>
				</div>
				<p>
					My journey into tech began after earning a bachelor's degree in psychology. 
					I transitioned into development by attending an intensive full-stack coding bootcamp where I learned a range of modern technologies.  
					I currently apply my skills as a full-stack web developer at the Univeristy of Washington. 
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
					<div className='skills-flex'>
					<div className="row">
						<div><strong>Languages:</strong> JavaScript, C#, TypeScript, CSS/HTML, Python</div>
					</div>
					<div className="row">
						<div><strong>Libraries: </strong> React/Redux, jQuery, Dapper, SQLAlchemy, Sequelize</div>
					</div>
					<div className="row">
						<div><strong>Frameworks:</strong> ASP.NET Core, Kendo UI, Express, Flask</div>
					</div>
					<div className="row">
						<div><strong>Tools:</strong> Visual Studio/Visual Studio Code, GitHub, Git, Jira, SSMS, Postman</div>
						</div>
				</div>
				</section>
			</div>
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
