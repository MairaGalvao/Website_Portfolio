import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projANDart.css";

export function DummyArticles({
  linkMedium,
  title,
  description,
  image,
  titleTip,
  topic,
  date,
  location,
  ps,
  projectPic,
  gitHubLink,
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <img src={image} />
          </div>
          <div class="card-body">
            <span class="tag tag-teal">{topic}</span>
            <h4>{title}</h4>
            <p>{titleTip}</p>
            <div class="user">
              <img src={projectPic} alt="user" />
              <div class="user-info">
                <h5>
                  <a href={linkMedium}>About</a>
                </h5>
                <h5>
                  <a href={gitHubLink}>GitHub</a>
                </h5>
                <small>{date}</small>
                <h6>{location}</h6>
                {ps && <p>{ps}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
