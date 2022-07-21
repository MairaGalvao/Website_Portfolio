import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import * as Mui from "@material-ui/core";
import "../css/navBar.css";

export default function NavBar() {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};
	const scrollToTop = () => {
		history.push("/");
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	window.addEventListener("scroll", toggleVisible);
	let history = useHistory();

	return (
		<>
			<Mui.Button
				id="btnBackToTop"
				style={{
					color: "#3c5e68",
				}}
			>
				<FaArrowCircleUp
					onClick={scrollToTop}
					style={{ display: visible ? "inline" : "none" }}
				/>
			</Mui.Button>

			<Mui.Box className="navContainer" id="navBar">
				<Mui.Box className="navMenu">
					<Mui.Box className="logo">Maíra Galvão</Mui.Box>

					<Mui.Box className="itemsNav">
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

						<Link
							className="itemsBtn"
							to="about"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/about");
							}}
						>
							About
						</Link>

						<Link
							className="itemsBtn"
							to="portfolio"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/portfolio");
							}}
						>
							Portfolio
						</Link>

						<Link
							className="itemsBtn"
							to="articles"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/articles");
							}}
						>
							Articles
						</Link>

						<Link
							className="itemsBtn"
							to="contact"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/contact");
							}}
						>
							Contact
						</Link>
					</Mui.Box>
				</Mui.Box>
			</Mui.Box>
		</>
	);
}
