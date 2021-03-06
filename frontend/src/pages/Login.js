import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }){
    const [username, setUserName] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', { 
            username,
        });
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={logo} alt="tindev"/>
            <input 
                placeholder="Digite seu usuário do GitHub"
                value={username}
                onChange={e => setUserName(e.target.value)}
            />
            <button type="subtmit">Entrar</button>
        </form>
        </div>
    );
}