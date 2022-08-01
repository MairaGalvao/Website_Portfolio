import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/about.css";
import { saveAs } from "file-saver";
import * as Mui from "@material-ui/core";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export function About() {
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);

	const saveFile = () => {
		saveAs(
			"https://drive.google.com/file/d/1Tn53WQzmyXjh42sUz5AfaM805_Q7FLGG/view?usp=sharing.pdf",
			"example.pdf"
		);
	};
	return (
		<>
			<Mui.Box
				className="profileBox"
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="2500"
				id="about"
			>
				{/* picture in about session  */}
				{/* <Mui.Box className="cardAbout card0" id="maira-pic-animation">
					<Mui.Box className="borderAbout">
						<h2 className="myName">Maíra Galvão</h2>
						<Mui.Box className="iconsSkillsAbout">
							<Mui.Button
								onClick={saveFile}
								id="btnDownload"
								class="fa fa-download"
							>
								Resume
							</Mui.Button>{" "}
						</Mui.Box>
					</Mui.Box>
				</Mui.Box> */}
			</Mui.Box>
		</>
	);
}
