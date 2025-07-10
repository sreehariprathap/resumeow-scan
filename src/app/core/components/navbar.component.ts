import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { LucideAngularModule, Moon, Info, Menu } from 'lucide-angular';

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
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
              title="Toggle theme"
            >
              <lucide-icon [img]="Moon" class="h-4 w-4"></lucide-icon>
            </button>
            
            <!-- Info Icon -->
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
              title="Information"
            >
              <lucide-icon [img]="Info" class="h-4 w-4"></lucide-icon>
            </button>

            <!-- Hamburger Menu Icon -->
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
              title="Menu"
            >
              <lucide-icon [img]="Menu" class="h-4 w-4"></lucide-icon>
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
  readonly Info = Info;
  readonly Menu = Menu;
}
