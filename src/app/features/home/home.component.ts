import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faFileText,
  faLink,
  faExternalLinkAlt,
  faMagic,
  faThLarge,
  faChartBar,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <div class="bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-6 py-16">
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resumeow Suite
            </h1>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your complete toolkit for resume management, AI-powered scanning, and professional prompting
            </p>
          </div>

          <!-- Main Navigation Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <!-- Cat Scan Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                 routerLink="/scan">
              <div class="card-body items-center text-center p-8">
                <div class="bg-primary/10 rounded-full p-6 mb-4 group-hover:bg-primary/20 transition-colors">
                  <fa-icon [icon]="'search'" class="w-12 h-12 text-primary"></fa-icon>
                </div>
                <h2 class="card-title text-xl mb-2">🐱 Cat AI Scanner</h2>
                <p class="text-base-content/70 mb-4">
                  AI-powered resume analysis and job matching with instant feedback and scoring
                </p>
                <div class="badge badge-primary badge-outline">Get Started</div>
              </div>
            </div>

            <!-- Resumes Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                 routerLink="/resumes">
              <div class="card-body items-center text-center p-8">
                <div class="bg-secondary/10 rounded-full p-6 mb-4 group-hover:bg-secondary/20 transition-colors">
                  <fa-icon [icon]="'file-text'" class="w-12 h-12 text-secondary"></fa-icon>
                </div>
                <h2 class="card-title text-xl mb-2">📄 My Resumes</h2>
                <p class="text-base-content/70 mb-4">
                  Manage, organize, and maintain multiple versions of your professional resumes
                </p>
                <div class="badge badge-secondary badge-outline">Manage</div>
              </div>
            </div>

            <!-- Prompter Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <a href="https://prompter-five.vercel.app/" target="_blank" class="card-body items-center text-center p-8">
                <div class="bg-accent/10 rounded-full p-6 mb-4 group-hover:bg-accent/20 transition-colors">
                  <fa-icon [icon]="'link'" class="w-12 h-12 text-accent"></fa-icon>
                </div>
                <h2 class="card-title text-xl mb-2">🚀 ResumeOw Prompter</h2>
                <p class="text-base-content/70 mb-4">
                  Professional AI prompting tool for generating optimized resume content
                </p>
                <div class="badge badge-accent badge-outline">Launch App</div>
                <div class="text-xs text-base-content/50 mt-2 flex items-center gap-1">
                  <fa-icon [icon]="'external-link-alt'" class="w-3 h-3"></fa-icon>
                  External App
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="container mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">Why Choose Resumeow?</h2>
          <p class="text-lg text-muted-foreground">
            Everything you need to create, manage, and optimize your professional resumes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6">
            <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <fa-icon [icon]="'magic'" class="w-8 h-8 text-primary"></fa-icon>
            </div>
            <h3 class="text-lg font-semibold mb-2">AI-Powered</h3>
            <p class="text-sm text-base-content/70">Advanced AI analysis for optimal resume matching</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <fa-icon [icon]="'th-large'" class="w-8 h-8 text-secondary"></fa-icon>
            </div>
            <h3 class="text-lg font-semibold mb-2">Organized</h3>
            <p class="text-sm text-base-content/70">Keep all your resumes organized in one place</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <fa-icon [icon]="'chart-bar'" class="w-8 h-8 text-accent"></fa-icon>
            </div>
            <h3 class="text-lg font-semibold mb-2">Analytics</h3>
            <p class="text-sm text-base-content/70">Detailed scoring and improvement suggestions</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-neutral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <fa-icon [icon]="'trophy'" class="w-8 h-8 text-neutral"></fa-icon>
            </div>
            <h3 class="text-lg font-semibold mb-2">Professional</h3>
            <p class="text-sm text-base-content/70">Tools designed for career advancement</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent {

  constructor(private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(
      faSearch,
      faFileText,
      faLink,
      faExternalLinkAlt,
      faMagic,
      faThLarge,
      faChartBar,
      faTrophy
    );
  }

}
