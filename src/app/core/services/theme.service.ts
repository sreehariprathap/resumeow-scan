import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { THEME_CONFIG } from '../constants/app.constants';
import { safeLocalStorage } from '../../shared/utils/common.utils';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = THEME_CONFIG.STORAGE_KEY;
  private isBrowser: boolean;
  private storage = safeLocalStorage();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  setTheme(theme: 'light' | 'dark') {
    console.log('Setting theme to:', theme, 'isBrowser:', this.isBrowser);
    if (this.isBrowser) {
      // Remove existing theme classes
      document.documentElement.classList.remove('light', 'dark');
      // Add new theme class
      document.documentElement.classList.add(theme);
      // Set data-theme attribute for DaisyUI
      document.documentElement.setAttribute('data-theme', theme);
      // Save to localStorage
      this.storage.setItem(this.themeKey, theme);
      console.log('Theme applied. Current classes:', document.documentElement.className);
      console.log('Current data-theme:', document.documentElement.getAttribute('data-theme'));
    }
  }

  getTheme(): 'light' | 'dark' {
    const savedTheme = this.storage.getItem(this.themeKey) as 'light' | 'dark';
    return savedTheme || THEME_CONFIG.DEFAULT_THEME;
  }

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    console.log('Toggling theme from', current, 'to', next);
    this.setTheme(next);
  }

  initTheme() {
    if (this.isBrowser) {
      const saved = this.getTheme();
      this.setTheme(saved);
    }
  }
}
