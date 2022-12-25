import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { DummyPortfolio } from "./DummyPortfolio";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { techOptions } from "../techOptions";
import Button from "@mui/material/Button";
import "../css/projANDart.css";

const animatedComponents = makeAnimated();

export function SmartPortfolio() {
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<Box
				className="header"
				data-aos="fade-down"
				data-aos-duration="2000"
				id="portfolio"
			>
				<h1 className="title">Determination & Willpower.</h1>
				<h1 className="subTitle">A hands-on approach!</h1>
				<p className="text">
					A small galery of recent projects chosen by me. It is only a drop in
					the ocean compared to entire list. Interested to see some more? Visit
					my{" "}
					<a
						target="_blank"
						href="https://github.com/MairaGalvao"
						style={{ color: "blue" }}
					>
						work{" "}
					</a>{" "}
					page.
				</p>
			</Box>

			<Box id="projectPhraseMainBox">
				<Box>
					<Box
						id="mainBoxProjects"
						// style={{
						// 	display: "grid",
						// 	gridTemplateColumns: "1fr 1fr 1fr 1fr",
						// 	gridGap: "40px",
						// 	margin: "0px 50px",
						// }}
					>
						<DummyPortfolio
							title={"The Real Bill"}
							description={"The real cost of living worldwide"}
							descriptionApp={
								"App that provides information about the Living Index - theory based on the Purchasing Power Parity."
							}
							linkPicture={
								"url(https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)"
							}
							linkGitHub={"https://github.com/MairaGalvao/TheRealBillApp"}
							linkDemo={"https://therealbill-6c919.web.app"}
						/>

						<DummyPortfolio
							linkGitHub={"https://github.com/MairaGalvao/Geo_Data"}
							title={"GEO Data"}
							description={"An interactive map using Leaflet"}
							descriptionApp={
								"Lorem Ipsum is simply ddasdasdasdasdasdastry. Lorem Ipsum has been the industry's standard dummy text ever since..."
							}
							linkPicture={
								"url(https://media.istockphoto.com/photos/young-man-planning-a-road-trip-picture-id487081189?s=612x612)"
							}
						/>

						<DummyPortfolio
							title={"Data analysis"}
							description={"Doneness steak data analysis"}
							descriptionApp={
								"Lorem Ipsum is simply ddasdasdasdasdasdastry. Lorem Ipsum has been the industry's standard dummy text ever since..."
							}
							linkPicture={
								"url(https://images.unsplash.com/photo-1551809727-fa6cc87641a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"
							}
							linkGitHub={"https://github.com/MairaGalvao/Steak_Risk_Data"}
							linkArticle={
								"https://medium.com/swlh/practical-data-analysis-with-pandas-and-seaborn-matplotlib-d1820ab27fd8"
							}
						/>

						<DummyPortfolio
							linkPicture={
								"url(data:image/png;base64,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)"
							}
							title={"Ivrit Sheli"}
							description={"Transliteration & Lyrics from the web"}
							descriptionApp={
								"Lorem Ipsum is simply ddasdasdasdasdasdastry. Lorem Ipsum has been the industry's standard dummy text ever since..."
							}
							linkGitHub={"https://github.com/MairaGalvao/ivrit-sheli"}
						/>

						<DummyPortfolio
							linkPicture={
								"url(https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							}
							title={"I Flash Geek "}
							description={"A programming flash cards."}
							descriptionApp={
								"Serverless flashcards app that displays a quiz containing several questions on computer languages."
							}
							linkGitHub={"https://github.com/MairaGalvao/I_Flash_Geek"}
							linkDemo={"https://iflashgeek.web.app/"}
						/>

						{/* {(isAllPicked || isNodePicked || isJSPicked) && (
							<DummyPortfolio
								title={"Health Care Analysis"}
								description={"An analysis of health worldwide."}
								descriptionApp={
									"An app that provides measurements of health care around the world."
								}
								linkGitHub={
									"https://github.com/MairaGalvao/International_Health_Care_Analysis"
								}
							/>
						)} */}
						{/* 
						{(isAllPicked || isPythonPicked || isReactPicked || isJSPicked) && (
							<DummyPortfolio
								title={"Navigation bar & Dashboard"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
								linkGitHub={"https://github.com/MairaGalvao/Navbar_Dashboard"}
							/>
						)} */}
						{/* 
						{(isAllPicked || isReactPicked) && (
							<DummyPortfolio
								title={"Contact Manager"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
								linkGitHub={"https://github.com/MairaGalvao/Contact_Manager"}
							/>
						)} */}
						{/* 
						{isAllPicked && (
							<DummyPortfolio
								title={"SQL Queries"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
							/>
						)} */}

						{/* {(isAllPicked || isJSPicked) && (
							<DummyPortfolio
								title={"Chat Bot"}
								description={"Javascript manual built chat bot"}
								linkGitHub={"https://github.com/MairaGalvao/Chat_Bot"}
							/>
						)} */}
					</Box>
				</Box>
			</Box>
		</>
	);
}
