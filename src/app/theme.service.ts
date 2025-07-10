import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = 'theme-mode';

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
  }

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  initTheme() {
    const saved = this.getTheme();
    this.setTheme(saved);
  }
}
