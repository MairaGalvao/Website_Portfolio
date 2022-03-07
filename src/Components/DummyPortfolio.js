import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projANDart.css";

export function DummyPortfolio({
  title,
  description,
  technologies1,
  technologies2,
  technologies3,
  technologies4,
  Technology1String,
  Technology2String,
  Technology3String,
  Technology4String,
  linkGitHub,
  linkDemo,
  idContainer,
  extraTech,
  extraArrow,
  extraTxt,
  picProject,
  idCard,
  descriptionApp,
  web,
  linkPicture,
  linkArticle
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  return (
    <>
    <Box id={idContainer} class="mainBox">
        <Box data-aos="fade-down" data-aos-duration="2000">
          <Box
            className="cardPortfolio"
            id={idCard}
            data-aos="fade-down"
            data-aos-duration="2000" 
           > 
<ul>

<li class="booking-card" style={{ backgroundImage: linkPicture,

}}> 
    <div class="book-container">
      <div class="content">
      {linkDemo &&  <a href={linkDemo} class="btn">Demo
        

        </a>}

        {linkArticle &&  <a href={linkArticle} class="btn">Article
        

        </a>}
        
          
        

      </div>
    </div>

    
    <div class="informations-container">
      <h2 class="title"> {title}</h2>
      <p class="sub-title">{description}</p>
      
      
    

      <div class="more-information">
        <div class="info-and-date-container">
          
          {/* <div class="box info">
            <svg class="icon" style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
  </svg></div> */}
  {/* <p>Parc des expositions à NANTES</p> */}
          
          {/* <div class="box date">
      
            

          </div> */}
        </div>

        <p class="disclaimer" >{descriptionApp}</p>
        {/* <p class="price"><svg class="icon" style={{width:"24px", height:"24px"}} viewBox="0 0 24 24"> */}


    {/* <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" /> */}

    {linkGitHub && <a   class="fab fa-github" style={{fontWeight:'bold'}} href={linkGitHub}>{"< Code >"}</a>}

    
    {/*<a class="disclaimer"href={linkGitHub}></a>
        <a class="disclaimer" href={linkDemo}></a>
        <a class="disclaimer"src={extraTech}></a> */}


        </div>
    </div>
  </li>
</ul>
</Box>
          </Box>
        </Box>
      
    </>
  );
}
