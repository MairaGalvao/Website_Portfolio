import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_3nir9cd", "template_43w1rg5", toSend, "Au4ZJV5hRzPj2cSXG")
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
  const saveFile = () => {
    saveAs(
      "https://www.figma.com/design/b6SURXWqNx8cnaU3uJ3iF6/Maira-Galvao-Software-Engineer?node-id=0-1&t=7Fb3yz6yEYEw3ajU-1",
      "Maira Galvao Software Engineer.pdf"
      
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
        <form id="contact_form" ref={form} onSubmit={onSubmit}>
        <h2 style={{ paddingBottom: "10px" }}>Keep in touch</h2>

          <label>Name</label>
          <input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="reply_to"
            required
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            required
            value={toSend.message}
            onChange={handleChange}
          />
          <div className="formButtons"id="sendBtn">
            <input type="submit" value="Send" id="sendBtn" />
            <input
              onClick={saveFile}
              type="submit"
              value="Download CV"
              id="resumeBtn"
            />

            
          </div>
        </form>
      

      <Box className="picContact">
        <img
          id="picContact"
          style={{
            float: "right",

            paddingRight: "0",
            width: "60%",
          }}
          src={contactPic}
        />
      </Box>
      </div>
    </>
  );
}
