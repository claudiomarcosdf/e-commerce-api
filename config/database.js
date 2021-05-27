module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'zoomdb'),
        username: env('DATABASE_USERNAME', 'zoom'),
        password: env('DATABASE_PASSWORD', 'nandinha07'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
