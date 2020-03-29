const knex = require('knex');
const config = require('../../knexfile');

const cfg = process.env.TEST_ENV ? config.test : config.development;

const conn = knex(cfg);

module.exports = conn;
