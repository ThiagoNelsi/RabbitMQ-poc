export interface IMessageBroker {
  publish(topic: string, message: any): void;
}
