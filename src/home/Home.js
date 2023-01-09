import { useEffect, useState } from 'react';
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
            fontSize: width > 1500 ? `150px` : '100px',
            'padding-top': width > 1500 ? '0px' : '100px',
          }}
        >
          <div style={{ paddingLeft: `200px` }}>WEB</div> <div>DEVELOPER</div>
        </p>
        <div className="space"></div>
        <p className="home-text-frase" style={{ fontFamily: 'VT323', color: 'white', fontSize: width > 1500 ? `60px` : '40px' }}>
          SOU DESENVOLVEDOR WEB COM BASE NO BRASIL. TENHO MUITOS ANOS DE EXPERIÊNCIA EM CONSULTORIA EM DIVERSAS ÁREAS DA
          TECNOLOGIA DA INFORMAÇÃO. SOU APAIXONADO POR MÚSICA, ARTE E TECNOLOGIA.
        </p>
        <div>CONTACT ME</div>
      </div>
    </div>
  );
};

export default Home;
