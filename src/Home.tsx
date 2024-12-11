import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/todo-list');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, User!</h1>
      <button onClick={handleStart} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Start
      </button>
    </div>
  );
};

export default Home;
