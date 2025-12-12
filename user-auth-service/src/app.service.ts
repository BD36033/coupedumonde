import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'User Auth Service is running! 👤';
  }

  getHealth(): string {
    return JSON.stringify({
      status: 'healthy',
      service: 'user-auth-service',
      timestamp: new Date().toISOString(),
    });
  }
}