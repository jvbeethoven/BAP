const Hapi = require(`hapi`);
const inert = require(`inert`);
const Path = require(`path`);

// const server = new Hapi.Server();
// server.connection({port: 3000, host: `localhost`});
//
// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hapi World!');
//     }
// });
//
// server.start((err) => {
//
//     if (err) {
//         throw err;
//     }
//     console.log(`Server running at: ${server.info.uri}`);
// });

const server = new Hapi.Server({
  port: 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, `public`)
    }
  }
});

const provision = async () => {

  await server.register(inert);

  server.route({
    method: `GET`,
    path: `/{param*}`,
    handler: {
      directory: {
        path: `.`,
        redirectToSlash: true,
        index: true,
      }
    }
  });

  await server.start();

  console.log(`Server running at:`, server.info.uri);
};

provision();
