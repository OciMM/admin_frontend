import React from 'react';
import { API_URL_FOREIGN_FRONTEND } from '../../api/api';

const ContentTest = () => {
    const iframeStyle = {
        width: '100%',
        height: '100vh',  // 100% высоты видимого экрана
        border: 'none',  // Убираем рамку iframe
      };
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe src={API_URL_FOREIGN_FRONTEND} title="Фронтенд Проект №1" style={iframeStyle}></iframe>
    </div>
  );
};

export default ContentTest;