import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import Blog from './blog/Blog';
import Noticia from './noticia/Noticia';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Noticia />} />
      </Routes>
    </div>
  );
};

export default App;
