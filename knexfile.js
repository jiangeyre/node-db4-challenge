// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for SQLite
    connection: {
      filename: './data/dev.sqlite3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    // SQLite will not enforce foreign key constraints by default
    // ONLY NEEDED FOR SQLITE
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done); // tur on foreign key enforcement
        },
    },
  }
};
