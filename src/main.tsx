import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import './styles/global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';
import { Post } from './components/Post';
import { Posts } from './components/Posts';
import { Products } from './components/Products';
import { Redirect } from './components/Redirect';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/posts' element={<Posts />} >
          <Route path=':id' element={<Post />} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
