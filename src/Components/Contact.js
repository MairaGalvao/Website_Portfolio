import React, { useState, useEffect } from "react";
import contactPic from "../images/contactPicLightBackground.jpg";
import { Box } from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/contact.css";
import { saveAs } from "file-saver";

init("user_gqMmkiihxMb3zWbl0pRBo");

export function Contact() {
	const onSubmit = (e) => {
		e.preventDefault();
		send(
			"service_80iz61s",
			"template_43w1rg5",
			toSend,
			"user_gqMmkiihxMb3zWbl0pRBo"
		)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	const [toSend, setToSend] = useState({
		from_name: "",
		message: "",
		reply_to: "",
	});

	const deliveryMsg = () => {
		alert(
			"Your message has been delivered to Maíra Galvão! You will hear from her as soon. I appreciate your contact. Have a great day"
		);
	};
	const saveFile = () => {
		saveAs(
			"https://drive.google.com/file/d/1Tn53WQzmyXjh42sUz5AfaM805_Q7FLGG/view?usp=sharing.pdf",
			"example.pdf"
		);
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<section class="contact">
				<div class="form-box">
					<h2 style={{ paddingBottom: "10px" }}>Keep in touch</h2>
					<form action="">
						<div class="form-item">
							<label for="name">Your name:</label>
							<input type="text" name="name" id="name" />
						</div>
						<div class="form-item">
							<label for="email">Your email:</label>
							<input type="email" name="email" id="email" />
						</div>
						<div class="form-item">
							<label for="message">Your message:</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="7"
							></textarea>
						</div>
						<div class="form-item">
							<input type="submit" value="Submit" id="submit" />
							<button
								onClick={saveFile}
								id="btnDownload"
								class="fa fa-download"
							>
								Resume
							</button>{" "}
						</div>
					</form>
				</div>
			</section>
			<Box className="picContact">
				<img
					id="picContact"
					style={{
						float: "right",
						paddingTop: "100px",
						paddingRight: "150px",
						paddingBottom: "150px",
					}}
					src={contactPic}
				/>
			</Box>
		</>
	);
}
