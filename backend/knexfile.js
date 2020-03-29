// Update with your config settings.

module.exports = {

  /**
   * Configurações para o ambiente de desenvolvimento.
  */
  development: {
    client: 'sqlite3', // Cliente do banco.
    connection: { // Configurações de conexão.
      filename: './src/database/db.sqlite' // Arquivo para armazenamento dos dados.
    },
    migrations: { // Configurações das migrations.
      directory: './src/database/migrations' // Diretório para armazenamento das migrations.
    },
    useNullAsDefault: true // Por padrão o sqlite não suporta o valor nulo como valor padrão das tabelas.
  },

  /**
   * Configurações para o ambiente de teste.
  */
  test: {
    client: 'sqlite3', // Cliente do banco.
    connection: { // Configurações de conexão.
      filename: './src/database/test.sqlite' // Arquivo para armazenamento dos dados.
    },
    migrations: { // Configurações das migrations.
      directory: './src/database/migrations' // Diretório para armazenamento das migrations.
    },
    useNullAsDefault: true // Por padrão o sqlite não suporta o valor nulo como valor padrão das tabelas.
  },

  /**
   * Configurações para o ambiente de produção.
  */
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
