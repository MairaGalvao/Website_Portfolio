import React from 'react';
import { Container, Box } from '@mui/material';
import '../css/projANDart.css';
import { ContainerPortfolio } from './ContainerPortfolio';
import '../css/about.css';

const cardData = [
  {
    title: 'The Real Bill',
    buttonText1: 'Demo',
    buttonText2: 'Code',
    line1: 'The Real Bill',
    line2: 'Cost worldwide',
    icon: true,
    numIcons: 3,
    iconPadding: '10px',
    linkGitHub: 'https://github.com/MairaGalvao/TheRealBill_App',
    linkDemo: 'https://therealbill-6c919.web.app/',
    imageUrls:
      'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2934&q=80',
  },
  {
    title: 'Geo Data Map',
    buttonText1: 'Code',
    buttonText2: '',
    line1: 'Geo Data Map',
    line2: 'An interactive map',
    icon: false,
    linkGitHub: 'https://github.com/MairaGalvao/Geo_Data',
    linkDemo: '',
    imageUrls:
      'https://images.unsplash.com/photo-1604351888999-9ea0a2851e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80',
  },

  {
    title: 'Data Analysis',
    buttonText1: 'Code',
    buttonText2: 'Article',
    line1: 'Data Analysis',
    line2: 'Steak data analysis',
    icon: false,
    linkGitHub: 'https://github.com/MairaGalvao/Steak_Risk_Data',
    linkDemo:
      'https://medium.com/swlh/practical-data-analysis-with-pandas-and-seaborn-matplotlib-d1820ab27fd8',
    imageUrls:
      'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
  },

  {
    title: 'Transliteration',
    buttonText1: 'Code',
    buttonText2: 'Article',
    line1: 'Transliteration',
    line2: 'Hebrew into English.',
    icon: false,
    linkGitHub:
      'https://github.com/MairaGalvao/The-Hebrew-Lyric-Transliterate-Ivrit-Sheli-WIP',
    linkDemo: '',
    imageUrls:
      'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  },

  {
    title: 'I Flash Geek',
    buttonText1: 'Code',
    buttonText2: 'Demo',
    line1: 'A flash cards.',
    line2: 'Programming game',
    icon: false,
    linkGitHub: 'https://github.com/MairaGalvao/I_Flash_Geek',
    linkDemo: 'https://iflashgeek.web.app/',
    imageUrls:
      'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  },

  {
    title: 'Location Map Weather',
    buttonText1: 'Code',
    buttonText2: '',
    line1: 'Map Forecast',
    line2: 'With MapBox & Leaflet',
    icon: false,
    linkGitHub: 'https://github.com/MairaGalvao/location-map-weather',
    linkDemo: '',
    imageUrls:
      'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  },

  {
    title: 'Interactive Map Tracker',
    buttonText1: 'Code',
    buttonText2: '',
    line1: 'Map Tracker',
    line2: '',
    icon: false,
    linkGitHub: 'https://github.com/MairaGalvao/map-tracker',
    linkDemo: '',
    imageUrls:
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  },
];

export const DetailsPortfolio = () => {
  return (
    <>
      <Box
        className="header"
        data-aos="fade-down"
        data-aos-duration="2000"
        id="portfolio"
      >
        <h1 className="title">Determination & Willpower.</h1>
        <h1 className="subTitle">A hands-on approach!</h1>
        <p className="text">
          A small galery of recent projects chosen by me. It is only a drop in
          the ocean compared to entire list. Interested to see some more? Visit
          my{' '}
          <a
            target="_blank"
            href="https://github.com/MairaGalvao"
            style={{ color: 'blue' }}
          >
            work{' '}
          </a>{' '}
          page.
        </p>
      </Box>
      <Container style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="card-container">
          {cardData.map((card, index) => (
            <ContainerPortfolio
              key={index}
              title={card.title}
              description={card.line1}
              description2={card.line2}
              numIcons={card.icon ? card.numIcons : 0}
              iconPadding={card.icon ? card.iconPadding : '0px'}
              linkGitHub={card.linkGitHub}
              linkDemo={card.linkDemo}
              linkPicture={card.imageUrls}
              idContainer={`card${index + 1}`}
              idCard={`card${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
