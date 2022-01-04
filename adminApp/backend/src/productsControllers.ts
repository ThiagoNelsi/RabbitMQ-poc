import Controller, { Request, Response } from './Controller';
import RabbitMQServer from './infra/RabbitMQ';
import { IMessageBroker } from './protocols/IMessageBroker';

const products: any = [];

interface IProps {
  messageBroker: IMessageBroker;
}

export default function productsControllers({ messageBroker }: IProps) {
  Controller.register('GET', '/', (req: Request, res: Response) => {
    res.end('Hello World');
  });

  Controller.register('GET', '/products', (req: Request, res: Response) => {
    res.end(JSON.stringify(products.reverse()));
  });

  Controller.register('POST', '/products', async (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);

    messageBroker.publish('products', JSON.stringify(product));

    res.end(JSON.stringify(product));
  });
}

