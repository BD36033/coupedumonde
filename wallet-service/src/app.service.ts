import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Wallet Service is running! 💰';
  }

  getHealth(): string {
    return JSON.stringify({
      status: 'healthy',
      service: 'wallet-service',
      timestamp: new Date().toISOString(),
    });
  }
}