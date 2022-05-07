import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>리액트 라우터 사용방법 익히기</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
