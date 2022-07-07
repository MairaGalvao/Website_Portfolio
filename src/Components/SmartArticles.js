import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DummyArticles } from "./DummyArticles";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projANDart.css";

export function SmartArticles() {
	const [isAllPicked, setIsAllPicked] = useState(false);

	function seeAllBtn() {
		setIsAllPicked(true);
	}

	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<Box
				className="articles"
				style={{ padding: "15px" }}
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
						paddingLeft: "50px",

						fontFamily: "Poppins, sans-serif",
					}}
				></Typography>
			</Box>

			<Box className="header" data-aos="fade-down" data-aos-duration="2000">
				<h1>Adaptable, Skillfull and Multilingual</h1>
				<h1>People are the power!</h1>
			</Box>

			<Box
				id="articlesMainBox"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<Box id="articlesBox">
					<DummyArticles
						title={"Data Analysis"}
						titleTip={"A data analysis on a steak Database"}
						image={
							"https://miro.medium.com/max/525/1*gM-I1mhLZS7WN3bs_ZDk_g.png"
						}
						linkMedium={"https://mairagalvao.medium.com"}
						description={"Read"}
					/>

					{isAllPicked && (
						<DummyArticles
							title={"Web Scraping"}
							description={"Coming soon"}
							linkMedium={""}
						/>
					)}
					{isAllPicked && (
						<DummyArticles title={"Coming soon"} description={"Coming soon"} />
					)}

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
		</>
	);
}
