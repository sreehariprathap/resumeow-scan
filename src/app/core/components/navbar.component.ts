import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { LucideAngularModule, Moon, Sun, Info, Menu } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <nav class="bg-card border-b border-border shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo Section -->
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-2">
              <img
                src="/Resumeow-d.png"
                alt="ResumeOw"
                class="h-6"
              />
            </div>
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-2">
            <!-- Info Icon -->
            <button
              class="btn btn-ghost btn-sm btn-circle"
              title="Information"
            >
              <lucide-icon [img]="Info" class="h-4 w-4"></lucide-icon>
            </button>

            <!-- Hamburger Menu Icon -->
            <button
              class="btn btn-ghost btn-sm btn-circle"
              title="Menu"
            >
              <lucide-icon [img]="Menu" class="h-4 w-4"></lucide-icon>
            </button>

            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="btn btn-ghost btn-sm btn-circle"
              title="Toggle theme"
            >
              <lucide-icon [img]="currentTheme === 'dark' ? Sun : Moon" class="h-4 w-4"></lucide-icon>
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
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Info = Info;
  readonly Menu = Menu;

  get currentTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme() {
    console.log('Theme toggle clicked, current theme:', this.currentTheme);
    this.themeService.toggleTheme();
    console.log('New theme:', this.themeService.getTheme());
  }
}
