import React from 'react';

interface TitleProps {
  text: string;
  color?: string;
  size?: string;
}

const Titulo: React.FC<TitleProps> = ({ text, color = 'black', size = '24px' }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', width: '100vw', paddingTop: '20px' }}>
      <h1 style={{ color, fontSize: size, textAlign: 'center' }}>
        {text}
      </h1>
    </div>
  );
};

export default Titulo;