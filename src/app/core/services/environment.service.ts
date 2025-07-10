import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  get geminiApiKey(): string {
    // In a real app, you'd want to handle this more securely
    // For development, we'll read from a config or environment
    return 'AIzaSyByr8ExyyaXH32Ed03_syEERdCN-Pxj4BU'; // Your API key from .env
  }

  get isDevelopment(): boolean {
    return !this.isProduction;
  }

  get isProduction(): boolean {
    // In Angular, you can use environment files or check other indicators
    return false; // Set to true for production builds
  }

  get apiBaseUrl(): string {
    return this.isProduction
      ? 'https://your-production-api.com'
      : 'http://localhost:3000';
  }
}
