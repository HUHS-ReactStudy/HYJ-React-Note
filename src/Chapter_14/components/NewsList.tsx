import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePromise from '../hooks/usePromise';
import { Article, NewsData } from '../interfaces';
import NewsItem from './NewsItem';

const NewsListContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList: React.FC<{ category: string }> = ({ category }) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get<NewsData>(
      `${proxyUrl}https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=` + process.env.REACT_APP_NEWS_API_KEY,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }, [category]);

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListContainer>에러 발생!</NewsListContainer>;
  }

  if (loading) {
    return <NewsListContainer>대기중...</NewsListContainer>;
  }

  if (!response.data) {
    return null;
  }

  return (
    <NewsListContainer>
      {(response.data.articles as Article[]).map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
