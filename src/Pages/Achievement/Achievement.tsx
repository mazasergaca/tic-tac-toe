import React from 'react';
import Container from 'src/components/Container/Container';
import Link from 'src/components/Link/Link';

const Achievement = () => {
  return (
    <Container>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontSize: 28, textAlign: 'center', marginBottom: '30px' }}>
          Section "Achievements" in developing
        </p>
        <Link to="/menu" size={24} bgc={'#45ff9f '}>
          Back
        </Link>
      </div>
    </Container>
  );
};

export default Achievement;
