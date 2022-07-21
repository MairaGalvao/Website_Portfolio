import Box from "@material-ui/core/Box";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/home.css";
import { saveAs } from "file-saver";

export function Home() {
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);

	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = "";
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML =
			'<span class="experienceWithLoop">' + this.txt + "</span>";

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.loopNum++;
			delta = 100;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};

	useEffect(() => {
		var elements = document.getElementsByClassName("experienceWithTypewrite");
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute("data-type");
			var period = elements[i].getAttribute("data-period");
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML =
			".experienceWithTypewrite > .experienceWithLoop { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	}, []);

	const saveFile = () => {
		saveAs(
			"https://drive.google.com/file/d/1Tn53WQzmyXjh42sUz5AfaM805_Q7FLGG/view?usp=sharing.pdf",
			"example.pdf"
		);
	};

	return (
		<>
			<div id="home" data-aos="fade-in">
				{" "}
			</div>

			{/* <div class="w3-center w3-light-grey w3-padding-16 w3-hide-large w3-hide-medium">
				<div class="w3-bar w3-light-grey">
					<a href="#" class="w3-bar-item w3-button">
						Home
					</a>
					<a href="#portfolio" class="w3-bar-item w3-button">
						Portfolio
					</a>
					<a href="#contact" class="w3-bar-item w3-button">
						Contact
					</a>
				</div>
			</div> */}
			<div className="downloadMain">
				<button onClick={saveFile} class="btn">
					<i style={{ color: "white" }} class="fa fa-download"></i> Resume
				</button>
			</div>
			<Box id="phraseCoverBox">
				<h4 className="wordCarousel" data-aos="fade-in">
					<Box className="divAbout">
						<ul
							className="flip"
							style={{
								display: "flex",
								flexWrap: "wrap",
								listStyle: "none",
								padding: "0",
								justifyContent: "center",
							}}
						>
							<li className="listWords">Hello!</li>
						</ul>
					</Box>
					<Box className="divAbout">
						<ul
							className="flip3"
							style={{
								display: "flex",
								flexWrap: "wrap",
								listStyle: "none",
								padding: "0",
								flexDirection: "column",
							}}
						>
							<li className="listWords">My name is Maíra! </li>
							<li className="listWords">I am a Full Stack Developer.</li>
							<li className="listWords">Nice to e-meet you! 👋</li>
						</ul>
					</Box>
				</h4>
				<div className="homePhraseExperience">
					<h1
						style={{
							height: "45px",
							letterSpacing: "1px",
							marginTop: "320px",
							left: "0",
							display: "flex",
							justifyContent: "flex-start",
							paddingTop: "100px",
							paddingLeft: "50px",
						}}
						class="experienceWithLoop"
					>
						<span style={{ marginRight: "11px" }}>Experienced with</span>
						<a
							href=""
							className="experienceWithTypewrite"
							data-period="2000"
							data-type='[ "CSS3", "React", "Javascript", "Python", "SQL", "HTML5", "Redux", "Node.JS", "MongoDB", "RESTful API", "GIT", "Pycharm", "visual studio", "GitHub", "Django"]'
						>
							<span className="experienceWithLoop"></span>
						</a>
					</h1>
				</div>
			</Box>
		</>
	);
}
