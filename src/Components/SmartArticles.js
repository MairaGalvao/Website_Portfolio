import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DummyArticles } from "./DummyArticles";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projANDart.css";
import projectPic from "../images/projectPic.jpg";
import hackathon from "../images/hackathon.jpg";

export function SmartArticles() {
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<Box
				className="articles"
				style={{ padding: "10px" }}
				id="articles"
				data-aos="fade-right"
				data
			>
				<Typography
					style={{
						fontSize: "100px",
						fontWeight: "bold",
						fontFamily: "monospace",
						color: "white",
						display: "flex",
						marginBottom: "45px",
						paddingLeft: "40px",
						paddingRight: "40px",

						fontFamily: "Poppins, sans-serif",
					}}
				></Typography>
			</Box>

			<Box className="header" data-aos="fade-down" data-aos-duration="2000">
				<h1>Adaptable, Skillfull and Multilingual</h1>
				<h1>People are the power!</h1>
				<p>Here are a few side projects I've worked on recently.</p>
			</Box>

			<Box
				id="articlesMainBox"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					paddingTop: "100px",
					padding: "10px",
				}}
			>
				<Box id="articlesBox">
					<DummyArticles
						topic={"Article"}
						title={"Data Analysis"}
						titleTip={"Exploratory data analysis on a Steak Risk dataset "}
						image={
							"https://miro.medium.com/max/525/1*gM-I1mhLZS7WN3bs_ZDk_g.png"
						}
						linkMedium={"https://mairagalvao.medium.com"}
						description={"Read"}
						date={"Dec 2020"}
						location={"Online"}
						projectPic={projectPic}
					/>

					<DummyArticles
						topic={"Volunteer"}
						title={"Anyway | Full Stack Developer"}
						titleTip={
							"An interactive map and information on Traffic accidents in israel."
						}
						image={""}
						linkMedium={"https://www.hasadna.org.il/"}
						description={"Read"}
						date={"July 2022"}
						location={"Tel Aviv, Israel"}
						ps={"** work in progress"}
						projectPic={projectPic}
					/>
					<DummyArticles
						topic={"Hackathon"}
						title={"HackZurich"}
						titleTip={
							"HackZurich is the largest and most prestigious hackathon in Europe."
						}
						image={hackathon}
						linkMedium={"https://hackzurich.com/"}
						description={"About"}
						date={"September 2022"}
						location={"Zürich, Switzerland"}
						ps={"** work in progress"}
						projectPic={projectPic}
					/>
				</Box>
			</Box>
		</>
	);
}
