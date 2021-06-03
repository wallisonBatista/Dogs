import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';


const Login = () => {
    const { login } = React.useContext(UserContext);

    //Após logar já ser redirecionado para a rota conta e não continuar mostrando a login
    if(login === true) return <Navigate to="/conta" />

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/criar" element={<LoginCreate />} />
                <Route path="/perdeu" element={<LoginPasswordLost />} />
                <Route path="/resetar" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    )
}

export default Login;
