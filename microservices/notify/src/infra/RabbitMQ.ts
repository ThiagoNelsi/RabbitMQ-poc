import { Connection, Channel, connect } from 'amqplib';
import { IMessageBroker } from '../protocols/IMessageBroker';

const DEFAULT_URL = 'amqp://admin:admin@rabbitmq:5672'

export default class RabbitMQServer implements IMessageBroker {

  private connection: Connection;
  private channel: Channel;

  constructor(private url: string = DEFAULT_URL) { }

  async connect(): Promise<void> {
    this.connection = await connect(this.url);
    this.channel = await this.connection.createChannel();
  }

  consume(queue: string, callback: (message: Buffer) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message?.content || Buffer.from(''));
      this.channel.ack(message);
    });
  }
}

