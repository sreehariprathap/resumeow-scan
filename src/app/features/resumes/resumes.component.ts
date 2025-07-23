import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resumes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card border-b border-border">
        <div class="container mx-auto px-6 py-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-foreground mb-2">My Resumes</h1>
            <p class="text-lg text-muted-foreground">
              Manage and organize your resumes
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6 py-12">
        <div class="max-w-6xl mx-auto">
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              New Resume
            </button>
            <button class="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload Resume
            </button>
          </div>

          <!-- Resumes Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Sample Resume Cards -->
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h2 class="card-title text-base">Software Engineer Resume</h2>
                <p class="text-sm text-base-content/70">Updated 2 days ago</p>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-sm btn-outline">Edit</button>
                  <button class="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h2 class="card-title text-base">Frontend Developer Resume</h2>
                <p class="text-sm text-base-content/70">Updated 1 week ago</p>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-sm btn-outline">Edit</button>
                  <button class="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h2 class="card-title text-base">Full Stack Resume</h2>
                <p class="text-sm text-base-content/70">Updated 2 weeks ago</p>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-sm btn-outline">Edit</button>
                  <button class="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>

            <!-- Add New Resume Card -->
            <div class="card bg-base-100 shadow-lg border-2 border-dashed border-base-300 hover:border-primary cursor-pointer">
              <div class="card-body items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-base-content/50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <h2 class="card-title text-base text-base-content/70">Add New Resume</h2>
                <p class="text-sm text-base-content/50">Create or upload a new resume</p>
              </div>
            </div>
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
export class ResumesComponent implements OnInit {

  ngOnInit() {
    // Initialize component
  }

}
