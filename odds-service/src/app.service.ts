import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Odds Service is running! 🎲';
  }

  getHealth(): string {
    return JSON.stringify({
      status: 'healthy',
      service: 'odds-service',
      timestamp: new Date().toISOString(),
    });
  }
}