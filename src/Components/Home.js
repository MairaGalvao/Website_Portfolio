import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/home.css";
import * as Mui from "@material-ui/core";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

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
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML =
			".experienceWithTypewrite > .experienceWithLoop { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	}, []);
	let history = useHistory();

	return (
		<>
			<Mui.Box id="home" data-aos="fade-in">
				<details class="navBarMobile">
					<summary></summary>
					<nav class="menu">
						<Link
							to="home"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/");
							}}
						>
							Home
						</Link>
						{/* <Link
							to="about"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/about");
							}}
						>
							About
						</Link> */}
						<Link
							to="portfolio"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/portfolio");
							}}
						>
							Work
						</Link>
						<Link
							to="articles"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/articles");
							}}
						>
							Projects
						</Link>{" "}
						<Link
							to="contact"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/contact");
							}}
						>
							Contact
						</Link>{" "}
					</nav>
				</details>
				{/* <div id="homeMobile" className="mobileBox">
					<p
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "30px",
						}}
					>
						Maíra Galvão
					</p>
					<p style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
						Web Developer
					</p>
				</div> */}
			</Mui.Box>
			{/* <div className="mobilePhrase" id="home">
				{" "}
				<h1>Full Stack Developer</h1>
				<h2>Maíra Galvão</h2>
			</div> */}
			{/* <Mui.Button onClick={saveFile} id="btnDownload" class="fa fa-download">
				Resume
			</Mui.Button>{" "} */}

			{/* <Mui.Box id="phraseCoverBox">
				<Mui.Typography className="wordCarousel" data-aos="fade-in">
					<Mui.Box className="divAbout"></Mui.Box>
					<Mui.Box className="divAbout">
						<Mui.ListItem
							className="flip3"
							style={{
								display: "flex",
								flexWrap: "wrap",
								listStyle: "none",
								paddingLeft: "400px",
								flexDirection: "column",
							}}
						>
							<Mui.ListItem className="listWords">
								My name is Maíra!{" "}
							</Mui.ListItem>
							<Mui.ListItem className="listWords">
								I am a Full Stack Developer.
							</Mui.ListItem>
							<Mui.ListItem className="listWords">
								Nice to e-meet you! 👋
							</Mui.ListItem>
						</Mui.ListItem>
					</Mui.Box>
				</Mui.Typography>
				<Mui.Box className="homePhraseExperience">
					<Mui.Typography
						style={{
							height: "45px",
							letterSpacing: "1px",
							marginTop: "200px",
							left: "0",
							display: "flex",
							justifyContent: "flex-start",
							paddingTop: "150px",
							paddingLeft: "50px",
						}}
						class="experienceWithLoop"
					>
						<span style={{ marginRight: "11px" }}>Experienced with</span>
						<Link
							href=""
							className="experienceWithTypewrite"
							data-period="2000"
							data-type='[ "CSS3", "React", "Javascript", "Python", "SQL", "HTML5", "Redux", "Node.JS", "MongoDB", "Puppeteer", "Material UI"]'
						>
							<span className="experienceWithLoop"></span>
						</Link>
					</Mui.Typography>
				</Mui.Box>
			</Mui.Box> */}
		</>
	);
}
