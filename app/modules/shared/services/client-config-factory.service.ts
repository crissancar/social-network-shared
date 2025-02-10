import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export class ClientConfigFactory {
	static create(name: string, queue: string): ClientProviderOptions {
		return {
			name,
			transport: Transport.RMQ,
			options: {
				urls: ['amqps://qagxqjke:XuoOJiC3RCN2C0E_oNuEWv1KZ6y4NGem@rat.rmq2.cloudamqp.com/qagxqjke'],
				queue,
				queueOptions: {
					durable: false,
				},
			},
		};
	}
}
