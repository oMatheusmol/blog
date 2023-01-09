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
    <div>
      <h1>{noticia.titulo}</h1>
      <img src={noticia.imagem} alt="notica-imagem" />
      <h3>{noticia.conteudo}</h3>
    </div>
  ) : null;
};

export default Noticia;
