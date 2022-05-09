import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  return (
    <>
      <Categories />
      <NewsList category={params['category'] || 'all'} />
    </>
  );
};

export default NewsPage;
