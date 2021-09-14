import React, { useState, useEffect } from "react";
import contactPic from "../images/contactPic.jpg";
import { Box } from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

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
    {
      /* <MsgValidation/> */
    }
    alert(
      "Your message has been delivered to Maíra Galvão! You will hear from her as soon as possible. I appreciate your contact."
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
      <Box id="contactMain" data-aos="fade-down" data-aos-duration="2000">
        <Box style={{ paddingBottom: "100px" }}>
          <form action="#" method="post" id="contact_form" onSubmit={onSubmit}>
            <div class="field" tabindex="1">
              <label for="username" htmlFor="name">
                <i class="fa fa-user"></i>Your Name
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
            <div class="field" tabindex="1">
              <label for="email">
                <i class="fa fa-envelope"></i>Your Email
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
            <div class="field" tabindex="3">
              <label for="message" htmlFor="message">
                <i class="fa fa-edit"></i>
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
              <input type="submit" value="Send Message" id="form_button" />
              {/* <button type="reset">Send Me Message</button> */}
            </div>
            <div
              class="social-media"
              style={{ fontSize: "20px", letterSpacing: "2px" }}
            >
              <span>
                Get In Touch<i class="fas fa-long-arrow-alt-right"></i>
              </span>
              <a
                class="fa fa-linkedin"
                href="https://www.linkedin.com/in/maira-galvao"
                target="blank_"
              ></a>
              <a
                class="fa fa-github"
                href="https://github.com/MairaGalvao_"
                target="blank_"
              ></a>
              <a
                class="fa fa-medium"
                href="https://mairagalvao.medium.com/"
                target="blank_"
              ></a>
            </div>
          </form>
        </Box>

        <Box
          style={{
            paddingRight: "200px",
          }}
        >
          <img
            style={{
              width: "50%",

              height: "50%",
              paddingLeft: "10px",
            }}
            src={contactPic}
          />
        </Box>

        {/* <a class="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank" style="color:#000"></a> */}
      </Box>
    </>
  );
}
