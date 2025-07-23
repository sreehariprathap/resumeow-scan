import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { LucideAngularModule, Moon, Sun, Home, Menu } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <nav class="bg-card border-b border-border shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo Section -->
          <div class="flex items-center space-x-3">
            <a routerLink="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img
                src="/Resumeow-d.png"
                alt="ResumeOw"
                class="h-6"
              />
           </a>
          </div>

          <!-- Center Navigation -->
          <div class="hidden md:flex items-center space-x-6">
            <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}"
               class="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a routerLink="/scan" routerLinkActive="text-primary"
               class="text-sm font-medium hover:text-primary transition-colors">
              Cat Scan
            </a>
            <a routerLink="/resumes" routerLinkActive="text-primary"
               class="text-sm font-medium hover:text-primary transition-colors">
              Resumes
            </a>
            <a href="https://prompter-five.vercel.app/" target="_blank"
               class="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Prompter
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-2">
            <!-- Home Icon (Mobile) -->
            <a routerLink="/" class="btn btn-ghost btn-sm btn-circle md:hidden" title="Home">
              <lucide-icon [img]="Home" class="h-4 w-4"></lucide-icon>
            </a>

            <!-- Mobile Menu Dropdown -->
            <div class="dropdown dropdown-end md:hidden">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm btn-circle">
                <lucide-icon [img]="Menu" class="h-4 w-4"></lucide-icon>
              </div>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a routerLink="/scan">🐱 Cat Scan</a></li>
                <li><a routerLink="/resumes">📄 Resumes</a></li>
                <li><a href="https://prompter-five.vercel.app/" target="_blank">🚀 Prompter</a></li>
              </ul>
            </div>

            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="btn btn-ghost btn-sm btn-circle"
              title="Toggle theme"
            >
              <lucide-icon [img]="currentTheme === 'dark' ? Sun : Moon" class="h-4 w-4"></lucide-icon>
            </button>
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
  readonly Home = Home;
  readonly Menu = Menu;

  get currentTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
