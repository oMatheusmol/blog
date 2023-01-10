import { useEffect, useState } from 'react';
import backgroud from '../images/background.webp';
import './Home.css';
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="home">
      <div className="home-text">
        <p
          className="home-text-titulo"
          style={{
            fontFamily: 'Stick No Bills',
            fontSize: width > 1500 ? `150px` : width > 1200 ? '140px' : width > 900 ? '100px' : width > 750 ? '80px' : '55px',
            'padding-top': width > 1500 ? '100px' : width > 1200 ? '120px' : '150px',
          }}
        >
          <div
            style={{
              paddingLeft:
                width > 1500 ? `270px` : width > 1200 ? '260px' : width > 900 ? '175px' : width > 750 ? '170px' : '120px',
            }}
          >
            WEB
          </div>{' '}
          <div>DEVELOPER</div>
        </p>
        <div className="space"></div>
        <p
          className="home-text-frase"
          style={{
            fontFamily: 'VT323',
            color: 'white',
            'padding-top':
              width > 1500 ? `740px` : width > 1200 ? '600px' : width > 900 ? '435px' : width > 750 ? '380px' : '325px',
            fontSize: width > 1500 ? `70px` : width > 1200 ? '50px' : width > 900 ? '45px' : width > 750 ? '40px' : '35px',
          }}
        >
          SOU DESENVOLVEDOR WEB COM BASE NO BRASIL. TENHO MUITOS ANOS DE EXPERIÊNCIA EM CONSULTORIA EM DIVERSAS ÁREAS DA
          TECNOLOGIA DA INFORMAÇÃO. SOU APAIXONADO POR MÚSICA, ARTE E TECNOLOGIA.
        </p>
        <div>CONTACT ME</div>
      </div>
    </div>
  );
};

export default Home;
