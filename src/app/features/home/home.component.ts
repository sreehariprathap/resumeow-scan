import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <div class="bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-6 py-16">
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ResumeOw Suite
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M9.75 3.104L8.25 1.5M14.25 3.104L15.75 1.5M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25" />
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-secondary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125-1.125 1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-accent">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </div>
                <h2 class="card-title text-xl mb-2">🚀 ResumeOw Prompter</h2>
                <p class="text-base-content/70 mb-4">
                  Professional AI prompting tool for generating optimized resume content
                </p>
                <div class="badge badge-accent badge-outline">Launch App</div>
                <div class="text-xs text-base-content/50 mt-2 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
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
          <h2 class="text-3xl font-bold text-foreground mb-4">Why Choose ResumeOw?</h2>
          <p class="text-lg text-muted-foreground">
            Everything you need to create, manage, and optimize your professional resumes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6">
            <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">AI-Powered</h3>
            <p class="text-sm text-base-content/70">Advanced AI analysis for optimal resume matching</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-secondary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Organized</h3>
            <p class="text-sm text-base-content/70">Keep all your resumes organized in one place</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-accent">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Analytics</h3>
            <p class="text-sm text-base-content/70">Detailed scoring and improvement suggestions</p>
          </div>

          <div class="text-center p-6">
            <div class="bg-neutral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-neutral">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478a12.06 12.06 0 00-4.5 0m0 0a6.01 6.01 0 01-1.5.189m0-3.5a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0" />
              </svg>
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

}
