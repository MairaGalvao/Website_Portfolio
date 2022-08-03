import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import * as Mui from "@material-ui/core";
import "../css/navBar.css";
import * as React from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<Mui.Box className="navContainer" id="navBar">
				<Mui.Box className="logo">Maíra Galvão</Mui.Box>
				<Mui.Box className="navMenu">
					<Mui.Box className="itemsNav">
						<Link
							className="itemsBtn"
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
							className="itemsBtn"
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
							className="itemsBtn"
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
							className="itemsBtn"
							to="articles"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/articles");
							}}
						>
							Projects
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
