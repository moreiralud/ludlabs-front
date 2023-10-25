import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = Cookies.get('authenticated')  === 'true';
      if (!isAuthenticated) {

        // Se o cookie de autenticação não existir, redirecione o usuário para a página de login
        navigate('/');
      }
    }, []);
  
    return (
      <div>
        {/* Conteúdo da Dashboard */}
      </div>
    );
  }

export default Dashboard;
