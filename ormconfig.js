module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'classmanager',
  entities: ['dist/**/*.entity.js'],
  logging: true,
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: true,
  cli: {
    migrationsDir: './src/migrations',
  },
};
