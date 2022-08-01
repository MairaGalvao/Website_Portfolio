import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import * as Mui from "@material-ui/core";
import "../css/navBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

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
			<div class="navBar">
				{/* <p
					style={{
						fontSize: "30px",
						font: "italic small-caps bold 12px/30px Georgia, serif",
					}}
				>
					Smiles are the only language everyone understands! Then start your day
					with a smile.
				</p> */}
				<h1 id="title">Maíra Galvão | Developer</h1>{" "}
				<nav>
					<Link
						className="link"
						to="home"
						spy={true}
						smooth={true}
						onClick={() => {
							history.push("/");
						}}
					>
						<a>Home</a>
					</Link>
					<Link
						className="link"
						to="about"
						spy={true}
						smooth={true}
						onClick={() => {
							history.push("/about");
						}}
					>
						<a>About</a>
					</Link>
					<Link
						className="link"
						to="portfolio"
						spy={true}
						smooth={true}
						onClick={() => {
							history.push("/portfolio");
						}}
					>
						<a>Portfolio</a>
					</Link>
					<Link
						className="link"
						to="articles"
						spy={true}
						smooth={true}
						onClick={() => {
							history.push("/articles");
						}}
					>
						<a>Extras</a>
					</Link>
					<Link
						className="link"
						to="contact"
						spy={true}
						smooth={true}
						onClick={() => {
							history.push("/contact");
						}}
					>
						<a>Contact</a>
					</Link>
					<div class="animation start-home"></div>
				</nav>
			</div>
		</>
	);
}
