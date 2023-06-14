import React from 'react';
import { useRenderContent } from './hooks/useRenderContent';

const MainPage = () => {
  const renderContent = useRenderContent()

  return (
    <div>
      {renderContent}
    </div>
  );
};

export default MainPage;
