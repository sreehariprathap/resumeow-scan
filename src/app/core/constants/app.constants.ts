// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.example.com',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3
} as const;

// Gemini API Configuration
export const GEMINI_CONFIG = {
  API_KEY: '', // Will be set from environment
  MODEL: 'gemini-pro',
  BASE_URL: 'https://generativelanguage.googleapis.com/v1beta'
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  STORAGE_KEY: 'theme-mode',
  DEFAULT_THEME: 'light' as const,
  AVAILABLE_THEMES: ['light', 'dark'] as const
} as const;

// Application Constants
export const APP_CONFIG = {
  NAME: 'ResumeOw Scan',
  VERSION: '1.0.0',
  DEFAULT_LANGUAGE: 'en'
} as const;
