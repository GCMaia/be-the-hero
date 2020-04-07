// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite '
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
    debug: true,
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'root',
      password: 'gabriel101'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'root',
      password: 'gabriel101'
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
