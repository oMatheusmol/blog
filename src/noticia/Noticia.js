import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noticas from '../mock/mockNoticias';

const Noticia = (props) => {
  const [noticia, setNoticia] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setNoticia(noticas.filter((notica) => notica.id === id)[0]);
  }, [id]);

  return noticia ? (
    <div style={{ paddingTop: '300px' }}>
      <h1>{noticia.titulo}</h1>
      <img src={noticia.imagem} alt="notica-imagem" style={{ width: '800px' }} />
      <h3>{noticia.conteudo}</h3>
      <h3>
        {noticia.data} por {noticia.autor}
      </h3>
    </div>
  ) : null;
};

export default Noticia;
