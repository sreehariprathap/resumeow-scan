import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGlobe, faPlus, faUpload, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resumes',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card ">
        <div class="container mx-auto px-6 py-8">
          <div class="text-center">
              <div class="text-left flex justify-between items-center">
                <div>
                 <h1 class="text-lg font-bold text-foreground">Resumes </h1>
                <p class="text-sm text-muted-foreground">
                  Storage space for your resumes, with AI-powered analysis and job matching
                </p>
                </div>
                <button
                class="btn btn-circle btn-sm flex justify-center items-center btn-ghost tooltip tooltip-bottom"
                data-tip="View Global Resumes"
                (click)="navigateToGlobal()">
                <fa-icon [icon]="faGlobe"></fa-icon>
              </button>
              </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6 py-12">
        <div class=" mx-auto">
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="btn btn-primary">
              <fa-icon [icon]="faPlus"></fa-icon>
              New Resume
            </button>
            <button class="btn btn-outline">
              <fa-icon [icon]="faUpload"></fa-icon>
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
                  <button class="btn btn-sm btn-outline"><fa-icon [icon]="faEdit"></fa-icon> Edit</button>
                  <button class="btn btn-sm btn-primary"><fa-icon [icon]="faEye"></fa-icon> View</button>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h2 class="card-title text-base">Frontend Developer Resume</h2>
                <p class="text-sm text-base-content/70">Updated 1 week ago</p>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-sm btn-outline"><fa-icon [icon]="faEdit"></fa-icon> Edit</button>
                  <button class="btn btn-sm btn-primary"><fa-icon [icon]="faEye"></fa-icon> View</button>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h2 class="card-title text-base">Full Stack Resume</h2>
                <p class="text-sm text-base-content/70">Updated 2 weeks ago</p>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-sm btn-outline"><fa-icon [icon]="faEdit"></fa-icon> Edit</button>
                  <button class="btn btn-sm btn-primary"><fa-icon [icon]="faEye"></fa-icon> View</button>
                </div>
              </div>
            </div>

            <!-- Add New Resume Card -->
            <div class="card bg-base-100 shadow-lg border-2 border-dashed border-base-300 hover:border-primary cursor-pointer">
              <div class="card-body items-center text-center">
                <fa-icon [icon]="faPlus" class="w-12 h-12 text-base-content/50"></fa-icon>
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
  faGlobe = faGlobe;
  faPlus = faPlus;
  faUpload = faUpload;
  faEdit = faEdit;
  faEye = faEye;

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize component
  }

  navigateToGlobal() {
    this.router.navigate(['/resumes/global']);
  }
}
