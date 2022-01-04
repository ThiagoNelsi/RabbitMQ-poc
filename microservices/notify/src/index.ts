import RabbitMQServer from "./infra/RabbitMQ";

async function start() {
  const rabbitMQServer = new RabbitMQServer();
  await rabbitMQServer.connect();
  await rabbitMQServer.consume('products', (message) => {
    console.log(message.toString());
  });
}

start();
