import React from 'react';
import ContentLoader from 'react-content-loader';

export const BarChartPlaceholder = () => {
  return (
    <ContentLoader
      height={145}
      width={165}
      speed={2}
      primaryColor="#6a6d70"
      secondaryColor="#d9d9d9"
      primaryOpacity={0.3}
    >
      <rect x="20" y="10" width="1" height="135" />
      <rect x="20" y="20" width="85" height="15" />
      <rect x="20" y="40" width="117" height="15" />
      <rect x="20" y="60" width="67" height="15" />
      <rect x="20" y="80" width="75" height="15" />
      <rect x="20" y="100" width="125" height="15" />
      <rect x="20" y="120" width="60" height="15" />
    </ContentLoader>
  );
};
