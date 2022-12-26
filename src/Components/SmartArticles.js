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
				<h1 className="title">Adaptable & Multilingual</h1>
				<h1 class="subTitle">People are the power!</h1>
				<p className="text">
					Here are a few side projects I've worked on recently.
				</p>
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
						gitHubLink={""}

					/>

					<DummyArticles
						topic={"Volunteer"}
						title={
							" The Public Knowledge Workshop  Anyway | Frontend Developer"
						}
						titleTip={
							"Our goal is moving towards Vision Zero - no fatalities or serious injuries involving road traffic."
						}
						image={
							"https://media-exp1.licdn.com/dms/image/C4E0BAQGlZyYEvlhPZg/company-logo_200_200/0/1519913284124?e=1668038400&v=beta&t=OZNWSx5nJ2cCHZAsljWLVeRJ9rzzuatm-qsqElHLrok"
						}
						linkMedium={"https://www.hasadna.org.il/"}
						description={"Read"}
						date={"July 2022"}
						location={"Tel Aviv, Israel"}
						ps={"** work in progress"}
						projectPic={projectPic}
						gitHubLink={""}

					/>
					<DummyArticles
						topic={"Hackathon"}
						gitHubLink={"https://github.com/MairaGalvao/Hackthon_Zurich"}
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
