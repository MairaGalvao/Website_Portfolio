import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


export function ArticlesComponent({ linkMedium, title, description, image, titleTip}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>

    <figure data-aos="fade-down" data-aos-duration="2000"
>
      <svg
        version="1.1"
      >
        <defs>
          <filter id="outline" mask="url(#mask)">
            <feFlood floodColor="#ecf0f1" result="base" />
            <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
            <feComposite in="base" operator="in" />
            <feBlend in="SourceGraphic" mode="normal" />
            <feDropShadow stdDeviation="6" />
          </filter>
        </defs>
      </svg>

      <img alt='Article'src={image} className="img"/>

      <figcaption>
        <span>The</span>
        <span>{title}</span>
        <span>{description}</span>

      </figcaption>


{linkMedium && <button > <a id='articleLink' href={linkMedium}> Read me!
    
      </a>


      </button>}
    </figure>
    </>
  );
}
