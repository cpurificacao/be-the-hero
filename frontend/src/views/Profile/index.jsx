import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiHeart } from 'react-icons/fi';

import api from '../../services/api';
import './styles/index.css';

import LogoImg from '../../assets/logo.svg';

function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  const [incidents, setIncidents] = useState([]);

  function loadIncidents() {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(res => {
      setIncidents(res.data);
    });
  }

  useEffect(loadIncidents, [ongId]);

  function deleteIncident(id) {
    api.delete(`incidents/${id}`, {
      headers: {
        Authorization: ongId
      }
    }).then(_ => {
      setIncidents(incidents.filter(incident => incident.id !== id));
    }).catch(err => {
      alert('Ocorreu um erro ao deletar o caso, tente novamente.');
    });
  }

  function logout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={logout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button" onClick={() => deleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>

            <button type="button" id="donate">
              <FiHeart size={16} color="#e02041" />
              <strong>CONTRIBUIR</strong>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;