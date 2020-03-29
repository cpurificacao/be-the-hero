const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

// Categoriza o teste
describe('ONG', () => {
  // Executa algo antes de todos os testes serem executados.
  beforeAll(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });
  
  // Executa algo depois de todos os testes serem executados.
  afterAll(async () => {
    conn.destroy();
  })

  // Documenta o que se pretende com este teste
  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        "name": "LBV",
        "email": "contato@lbv.org",
        "whatsapp": "71991660557",
        "city": "Salvador",
        "uf": "BA"
      });

    // Testa a existência da propriedade "id" na resposta da requisição
    expect(res.body).toHaveProperty('id');
    // Testa se o comprimento da propriedade "id" é igual a "8 bits"
    expect(res.body.id).toHaveLength(8);
  });
});
