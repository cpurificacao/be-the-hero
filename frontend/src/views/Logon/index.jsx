import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';
import './styles/index.css';

import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  function logon(e) {
    e.preventDefault();

    const data = {
      id
    }

    api.post('sessions', data)
      .then(res => {
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', res.data.name);

        history.push('/profile');
      })
      .catch(err => {
        alert('Ocorreu um erro ao logar, tente novamente.');
      })
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be The Hero" />

        <form onSubmit={logon}>
          <h1>Faça seu logon</h1>

          <input type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;
