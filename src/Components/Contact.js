import React, { useState, useEffect } from "react";
import contactPic from "../images/contactPic.jpg";
import { Box } from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/contact.css";

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
			<Box
				style={{ paddingTop: "10px" }}
				id="contact"
				data-aos="fade-down"
				data-aos-duration="2000"
			>
				<Box
					className="headerContact"
					data-aos="fade-down"
					data-aos-duration="2000"
					style={{ display: "flex", justifyContent: "space-around" }}
				>
					<h1 style={{ fontWeight: "bold" }}>Drop me a message!</h1>
				</Box>
				<Box>
					<Box style={{ display: "flex" }} id="formBox">
						<form
							style={{ display: "flex", left: "100px" }}
							action="#"
							method="post"
							id="contact_form"
							onSubmit={onSubmit}
						>
							<div class="field" tabIndex="1">
								<label for="username" htmlFor="name">
									<i class="fa fa-user" style={{ paddingRight: "10px" }}></i>
									Your Name
								</label>
								<input
									type="text"
									placeholder="Name"
									name="from_name"
									id="name_input"
									style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
									required
									value={toSend.from_name}
									onChange={handleChange}
									type="text"
									placeholder="e.g. Maíra Galvão"
									required
								/>
							</div>
							<div class="field" tabIndex="1">
								<label for="email">
									<i
										class="fa fa-envelope"
										style={{ paddingRight: "10px" }}
									></i>
									Your Email
								</label>
								<input
									id="email_input"
									name="reply_to"
									placeholder="Your email"
									required
									value={toSend.reply_to}
									onChange={handleChange}
									type="text"
									placeholder="email@domain.com"
									required
								/>
							</div>
							<div class="field" tabIndex="3">
								<label for="message" htmlFor="message">
									<i class="fa fa-edit" style={{ paddingRight: "10px" }}></i>
									Your Message
								</label>
								<textarea
									name="message"
									type="text"
									placeholder="Your message"
									id="message_input"
									cols="20"
									rows="1"
									required
									value={toSend.message}
									onChange={handleChange}
									name="message"
									placeholder="type here"
									required
								></textarea>
							</div>
							<div onClick={deliveryMsg}>
								<input
									type="submit"
									value="Send Message"
									id="form_button"
									style={{ backgroundColor: "black", color: "white" }}
								/>
							</div>
							<div
								class="social-media"
								style={{
									fontSize: "20px",
									letterSpacing: "2px",
									paddingLeft: "10px",
								}}
							></div>
						</form>
					</Box>
				</Box>
				<Box className="picContact">
					<img id="picContact" style={{ float: "right" }} src={contactPic} />
				</Box>
			</Box>
		</>
	);
}
