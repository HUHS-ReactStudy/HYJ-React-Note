import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const NewsRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NewsPage />}>
          <Route path=":category" element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NewsRouter;
