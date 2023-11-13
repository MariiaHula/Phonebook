import React from 'react';
import ContentLoader from 'react-content-loader';

const HeadBodyGrid = ({ ...rest }) => (
  <ContentLoader height="1000" width="1100" viewBox="0 20 255 200" {...rest}>
    <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
    <rect x="15" y="50" rx="4" ry="4" width="350" height="150" />
    <rect x="15" y="230" rx="4" ry="4" width="170" height="20" />
    <rect x="60" y="230" rx="4" ry="4" width="170" height="20" />
  </ContentLoader>
);

HeadBodyGrid.metadata = {
  name: 'Didier Munezero',
  github: 'didiermunezero',
  description: 'Grid for content of head and body',
  filename: 'HeadBodyGrid',
};

export default HeadBodyGrid;
