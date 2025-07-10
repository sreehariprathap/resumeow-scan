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
    if (this.isBrowser) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      this.storage.setItem(this.themeKey, theme);
    }
  }

  getTheme(): 'light' | 'dark' {
    const savedTheme = this.storage.getItem(this.themeKey) as 'light' | 'dark';
    return savedTheme || THEME_CONFIG.DEFAULT_THEME;
  }

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  initTheme() {
    if (this.isBrowser) {
      const saved = this.getTheme();
      this.setTheme(saved);
    }
  }
}
