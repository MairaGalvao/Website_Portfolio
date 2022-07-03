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

const animatedComponents = makeAnimated();

export function SmartPortfolio() {
	const [selectedTechProject, setSelectedTechProject] = useState(false);
	const [isReactPicked, setIsReactPicked] = useState(false);
	const [isPythonPicked, setIsPythonPicked] = useState(false);
	const [isNodePicked, setIsNodePicked] = useState(false);
	const [isJSPicked, setIsJSPicked] = useState(false);
	const [isAllPicked, setIsAllPicked] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);

	function seeAllBtn() {
		setIsAllPicked(true);
	}

	const handleChange = (e) => {
		const myArr = e.map((item, i) => {
			return item.label;
		});
		setSelectedTechProject(myArr);

		myArr.map((item, i) => {
			if (item == "React") {
				setIsReactPicked(true);
				setIsEmpty(false);
			} else if (item == "Python") {
				setIsPythonPicked(true);
				setIsEmpty(false);
			} else if (item == "Node.js") {
				setIsNodePicked(true);
				setIsEmpty(false);
			} else if (item == "Javascript") {
				setIsJSPicked(true);
				setIsEmpty(false);
			} else if (selectedTechProject == false) {
				setIsEmpty(false);
			}

			return item[i];
		});
	};

	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<Box
				className="portfolio"
				id="portfolio"
				data-aos="fade-right"
				style={{ paddingTop: "180px" }}
			>
				<Typography
					style={{
						fontSize: "100px",
						fontWeight: "bold",
						fontFamily: "monospace",
						color: "white",
						display: "flex",
						paddingLeft: "50px",
						position: "absolute",
						fontFamily: "Poppins, sans-serif",
					}}
				></Typography>
			</Box>
			<Box className="selectTechBox">
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<Select
						closeMenuOnSelect={false}
						components={animatedComponents}
						defaultValue={[techOptions[0], techOptions[1]]}
						placeholder="Filter by technology"
						isMulti
						options={techOptions}
						onChange={handleChange}
					/>
				</Box>
			</Box>
			<Box id="projectPhraseMainBox">
				<Box className="header" data-aos="fade-down" data-aos-duration="2000">
					<h1>Persistence, Determination, Willpower</h1>
					<h1>A hands-on approach!</h1>
				</Box>

				<Box>
					<Box
						id="mainBoxProjects"
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr",
							gridGap: "40px",
							margin: "0px 50px",
						}}
					>
						{(isReactPicked ||
							isNodePicked ||
							isJSPicked ||
							isAllPicked ||
							isEmpty) && (
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
						)}

						{(isReactPicked || isEmpty) && (
							<DummyPortfolio
								linkGitHub={"https://github.com/MairaGalvao/Geo_Data"}
								title={"GEO Data"}
								description={"GEO Data Map"}
								descriptionApp={"Coming soon"}
								linkPicture={
									"url(https://media.istockphoto.com/photos/young-man-planning-a-road-trip-picture-id487081189?s=612x612)"
								}
								linkGitHub={"https://github.com/MairaGalvao/Geo_Data"}
							/>
						)}

						{(isPythonPicked || isAllPicked || isEmpty) && (
							<DummyPortfolio
								title={"Data analysis"}
								description={"Doneness steak data analysis"}
								descriptionApp={
									"A data analysis based on correlations and comparisons among the samples."
								}
								linkPicture={
									"url(https://images.unsplash.com/photo-1551809727-fa6cc87641a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"
								}
								linkGitHub={"https://github.com/MairaGalvao/Steak_Risk_Data"}
								linkArticle={
									"https://medium.com/swlh/practical-data-analysis-with-pandas-and-seaborn-matplotlib-d1820ab27fd8"
								}
							/>
						)}

						{(isAllPicked || isReactPicked || isEmpty) && (
							<DummyPortfolio
								linkPicture={
									"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d20IuUMfp3kytjSMv5YmFLKY9wMctG1AN0rwhv1kS5unmGdfifdLOMbfJzDI8NshMu0&usqp=CAU)"
								}
								title={"Web Scraping"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
							/>
						)}

						{(isAllPicked || isJSPicked || isNodePicked) && (
							<DummyPortfolio
								title={"I Flash Geek "}
								description={"A programming flash cards."}
								descriptionApp={
									"Serverless flashcards app that displays a quiz containing several questions on computer languages."
								}
								linkGitHub={"https://github.com/MairaGalvao/I_Flash_Geek"}
								linkDemo={"https://iflashgeek.web.app/"}
							/>
						)}

						{(isAllPicked || isNodePicked || isJSPicked) && (
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
						)}

						{(isAllPicked || isPythonPicked || isReactPicked || isJSPicked) && (
							<DummyPortfolio
								title={"Navigation bar & Dashboard"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
								linkGitHub={"https://github.com/MairaGalvao/Navbar_Dashboard"}
							/>
						)}

						{(isAllPicked || isReactPicked) && (
							<DummyPortfolio
								title={"Contact Manager"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
								linkGitHub={"https://github.com/MairaGalvao/Contact_Manager"}
							/>
						)}

						{isAllPicked && (
							<DummyPortfolio
								title={"SQL Queries"}
								description={"Coming soon"}
								descriptionApp={"Coming soon"}
							/>
						)}

						{(isAllPicked || isJSPicked) && (
							<DummyPortfolio
								title={"Chat Bot"}
								description={"Javascript manual built chat bot"}
								linkGitHub={"https://github.com/MairaGalvao/Chat_Bot"}
							/>
						)}
					</Box>
					<Box
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
						}}
					>
						<Button
							variant="contained"
							class="seeAllBtn"
							onClick={seeAllBtn}
							style={{ fontSize: "22px", cursor: "pointer" }}
						>
							{" "}
							See all{" "}
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
