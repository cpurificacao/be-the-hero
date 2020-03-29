<p align="center">
  <img src="https://imgur.com/VB8Zpj4.png" align="center" alt="Be The hero" />
</p>

<br/>

<h3 align="center">
  Cadastre sua ONG, poste seus casos e encontre heróis para ajudar na sua causa!
</h3>

<br/>

# Visão geral

*Be The Hero* é uma aplicação que surgiu com o intuito de pôr em prática conhecimentos adquiridos acerca de **arquitetura de software, testes de integração e unitários e conceitos relacionados ao consumo de web-services e API's**.

## Dependências

### Back-End

- **celebrate**

  Utilizado para implementação de *validações* de entrada de dados na API.

- **cors**

  Útil para melhorias de segurança da API e configurações dos *CORS*.

- **cross-env**

  Ajudou na integração com *TDD*, pois possibilitou a configuração de *variáveis de ambiente* para alternância entre ambiente teste e produção.

- **express**

  Principal ferramenta para criação, estruturação e consumo dos *web-services*.

- **knex**

  Responsável pela conversão *ORM* do banco de dados e inclusive implementação das *migrations* para versionamento do banco.

- **sqlite3**

  Cliente do banco *SQLite* utilizado para permanência dos dados.

- **nodemon**

  Atuou em cooperação com o *express* monitorando em tempo real as alterações do servidor e acelerando o processo de desenvolvimento.

- **jest**

  Principal ferramenta para implementação dos *testes unitários e de integração*, possibilitando a integração com *TDD*.

- **supertest**

  Contribuiu para melhor funcionamento dos *testes de integração* executando requisições teste para o *web-service*.

### Front-End

- **axios**

  Cliente HTTP que possibilitou a comunicação *client-server* e consumo da *API*.

- **react**

  Principal biblioteca responsável pela construção das *views* e componentização.

- **react-dom**

  Depedência do *react* para renderização dos componentes na web.

- **react-icons**

  Ícones componentizados para montagem das *views*.

- **react-router-dom**

  Gerenciador de roteamento e navegação em formato *SPA* para o *react*.

- **react-scripts**

  Biblioteca para execução dos *scripts* da aplicação (ex.: `yarn start` ou `npm start`).

## Licença

[MIT &copy; 2020 Carlos Purificação](LICENSE)
