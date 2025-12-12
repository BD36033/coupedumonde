import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Betting Service is running! 🎯';
  }

  getHealth(): string {
    return JSON.stringify({
      status: 'healthy',
      service: 'betting-service',
      timestamp: new Date().toISOString(),
    });
  }
}