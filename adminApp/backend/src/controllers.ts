import Controller, { Request, Response } from './Controller';
import RabbitMQServer from './RabbitMQ';

const products: any = [];

Controller.register('GET', '/', (req: Request, res: Response) => {
    res.end('Hello World');
});

Controller.register('GET', '/products', (req: Request, res: Response) => {
    res.end(JSON.stringify(products.reverse()));
});

Controller.register('POST', '/products', async (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);

    const rabbitmq = new RabbitMQServer();
    await rabbitmq.connect();
    rabbitmq.publish('products', JSON.stringify(product));

    res.end(JSON.stringify(product));
});
