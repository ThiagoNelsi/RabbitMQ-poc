export interface IMessageBroker {
  consume(queue: string, callback: (message: Buffer) => void): any;
}
