import React, { useState, useEffect } from "react";
import contactPic from "../images/contactPic.jpg";
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
			<div class="form-box" id="contact">
				<h2 style={{ paddingBottom: "10px" }}>Keep in touch</h2>
				<form action="#" method="post" id="contact_form" onSubmit={onSubmit}>
					<div class="form-item">
						<label for="name">Your name:</label>
						<input
							type="text"
							name="from_name"
							id="name_input"
							style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
							required
							value={toSend.from_name}
							onChange={handleChange}
							placeholder="e.g. Maíra Galvão"
						/>
					</div>
					<div class="form-item">
						<label for="email">Your email:</label>
						<input
							id="email_input"
							name="reply_to"
							required
							value={toSend.reply_to}
							onChange={handleChange}
							type="text"
							placeholder="email@domain.com"
						/>
					</div>
					<div class="form-item">
						<label for="message">Your message:</label>
						<textarea
							cols="30"
							rows="7"
							name="message"
							type="text"
							placeholder="Your message"
							id="message_input"
							required
							value={toSend.message}
							onChange={handleChange}
						></textarea>
					</div>
					<div
						class="form-item"
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<button onClick={saveFile} id="btnDownload" class="fa fa-download">
							Resume
						</button>{" "}
						<button
							type="submit"
							value="Submit"
							id="submit"
							onClick={deliveryMsg}
						>
							{" "}
							Submit
						</button>
					</div>
				</form>
			</div>

			<Box className="picContact">
				<img
					id="picContact"
					style={{
						float: "right",
						paddingTop: "100px",
						paddingRight: "0",
						width: "60%",
					}}
					src={contactPic}
				/>
			</Box>
		</>
	);
}
