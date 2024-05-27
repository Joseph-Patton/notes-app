import React from 'react';
import UserInterface from '../components/UserInterface';

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <UserInterface backendName="rust" />
      </div>
    </main>
  );
};

export default Home;