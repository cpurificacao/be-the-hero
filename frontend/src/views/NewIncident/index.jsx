import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles/index.css';

import LogoImg from '../../assets/logo.svg';

function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  const data = {
    title,
    description,
    value
  }

  function postIncident(e) {
    e.preventDefault();

    api.post('incidents', data, {
      headers: {
        Authorization: ongId
      }
    })
      .then(_ => {
        const postAgain = window.confirm('Caso cadastrado com sucesso.\n\nDeseja cadastrar outro?');

        !postAgain && history.push('/profile');
      }).catch(err => {
        alert('Ocorreu um erro ao cadastrar, tente novamente.');
      })
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para casos cadastrados
          </Link>
        </section>
        <form onSubmit={postIncident}>
          <input type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição do caso"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input type="text"
            placeholder="Valor (R$)"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;