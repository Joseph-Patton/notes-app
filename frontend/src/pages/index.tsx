import React from 'react';
import UserInterface from '../components/UserInterface';

const Home: React.FC = () => {
  return (
    <div className="main">
      <UserInterface backendName="rust" />
    </div>
  );
};

export default Home;
