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

  let history = useHistory();

  return (
    <>
      <div className="phraseMain" id="home">
        <div id="phraseHomeContainer">
          {/* <h1 id="name">Maira Galvao</h1> */}
          <h1 id="profession">I am a Full Stack Developer based in Tel Aviv</h1>

          <p id="phrase">
            I bring ideas to life with code. 
          </p>
          <div>
            <Link className="contactHome" id="btn"
			to="contact"
			spy={true}
			smooth={true}
			onClick={() => {
			  history.push("/contact");
			}}
			>
              Contact me
            </Link>
          </div>
        </div>
      </div>
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
