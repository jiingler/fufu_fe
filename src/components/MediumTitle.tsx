import React from 'react';

const MediumTitle: React.FC<{ text: string }> = ({ text }) => {
  return <p className="title-md text-md-start">{text}</p>;
};

export default MediumTitle;
