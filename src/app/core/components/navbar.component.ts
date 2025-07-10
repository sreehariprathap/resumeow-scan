import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-card border-b border-border shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo Section -->
          <div class="flex items-center space-x-3">
            <div class="flex flex-col items-center p-2">
              <img
                src="/Resumeow-d.png"
                alt="ResumeOw"
                class="h-8"
              />
            </div>
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-4">
            <!-- Theme Toggle -->
            <button
              (click)="themeService.toggleTheme()"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
              title="Toggle theme"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- User Menu -->
        
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
  public themeService = inject(ThemeService);
}
