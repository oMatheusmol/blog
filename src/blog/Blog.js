import { useEffect, useState } from 'react';
import './Blog.css';
import noticias from '../mock/mockNoticias';
import { Link } from 'react-router-dom';

const estiloTitulo = {
  margin: '10%',
};

const estiloDataAutor = {
  margin: '10%',
};

const estilo = {
  display: 'flex',
  flexWrap: 'wrap',
};

const Blog = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const estiloBloco = {
    width: width < 600 ? '100%' : '45%',
    margin: '1%',
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="noticias" style={estilo}>
      {noticias.map((noticia) => (
        <div key={noticia.id} style={estiloBloco} className="noticia-block">
          <Link to={noticia.id} key={noticia.id}>
            <img src={noticia.imagem} className="noticia-image" alt="imagem" style={{ width: '500px' }} />
            <h2 className="noticia-titulo" style={estiloTitulo}>
              {noticia.titulo}
            </h2>
            <p className="noticia-data-autor" style={estiloDataAutor}>
              {noticia.data} por {noticia.autor}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
