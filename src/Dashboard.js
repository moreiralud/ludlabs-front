import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(Cookies.get('authenticated') !== 'true'){
      navigate('/');
    }
  });

  const handleLogout = () => {
    Cookies.remove('authenticated');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="dashboard_box">
        <h1>Seja Bem-Vindo!</h1>
        <p>O login foi bem-sucedido! Agora você está na página de boas-vindas.</p>
        <Button variant="primary" onClick={handleLogout}>
          Sair
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
