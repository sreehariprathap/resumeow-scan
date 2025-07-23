import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GlobalResumeService, GlobalResume } from '../services/global-resume.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faSearch, faEye, faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-global-resumes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card ">
        <div class="container mx-auto px-6 py-8">
          <div class="text-center">
            <div class="text-left flex justify-start gap-5 items-center">
              <button
                class="btn btn-circle btn-sm btn-ghost tooltip tooltip-bottom"
                data-tip="Back"
                (click)="goBack()">
                <fa-icon [icon]="'arrow-left'"></fa-icon>
              </button>
              <div>
                <h1 class="text-lg font-bold text-foreground">Global Resumes</h1>
                <p class="text-sm text-muted-foreground">
                  Browse all resumes in the system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6 py-8">
        <div class=" mx-auto">
          <!-- Stats and Actions -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title">Total Resumes</div>
                  <div class="stat-value text-primary">{{ filteredResumes.length }}</div>
                </div>
              </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <!-- Category Filter -->
              <select
                class="select select-bordered w-full sm:w-auto"
                [(ngModel)]="selectedCategory"
                (ngModelChange)="onFilterChange()">
                <option value="">All Categories</option>
                <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
              </select>

              <!-- Search -->
              <div class="join">
                <input
                  class="input input-bordered join-item w-full sm:w-auto"
                  placeholder="Search resumes..."
                  [(ngModel)]="searchQuery"
                  (ngModelChange)="onFilterChange()" />
                <button class="btn btn-outline join-item" (click)="onFilterChange()">
                  <fa-icon [icon]="'search'" class="w-5 h-5"></fa-icon>
                </button>
              </div>
            </div>
          </div>

          <!-- Resumes Table -->
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body p-0">
              <div class="overflow-x-auto">
                <table class="table table-zebra">
                  <thead>
                    <tr>
                      <th class="w-16">ID</th>
                      <th class="w-32">Category</th>
                      <th>Resume Preview</th>
                      <th class="w-40">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let resume of filteredResumes; trackBy: trackByResumeId">
                      <td class="font-mono text-sm">{{ resume.id }}</td>
                      <td>
                        <div class="badge badge-outline">{{ resume.category }}</div>
                      </td>
                      <td>
                        <div class="max-w-md">
                          <p class="text-sm text-base-content/80 line-clamp-2 mb-2">
                            {{ getPreviewText(resume.resume_str) }}
                          </p>
                          <div class="text-xs text-base-content/60">
                            Length: {{ resume.resume_str.length }} characters
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex gap-2">
                          <button
                            class="btn btn-sm btn-outline tooltip"
                            data-tip="View Resume"
                            (click)="viewResume(resume)">
                            <fa-icon [icon]="'eye'" class="w-4 h-4"></fa-icon>
                          </button>
                          <button
                            class="btn btn-sm btn-primary tooltip"
                            data-tip="Use for Scan"
                            (click)="useForScan(resume)">
                            <fa-icon [icon]="'bolt'" class="w-4 h-4"></fa-icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-6">
            <div class="join">
              <button class="join-item btn">«</button>
              <button class="join-item btn btn-active">1</button>
              <button class="join-item btn">2</button>
              <button class="join-item btn">3</button>
              <button class="join-item btn">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Resume Preview Modal -->
    <dialog #resumeModal class="modal">
      <div class="modal-box max-w-4xl max-h-[80vh]">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-bold text-lg">Resume Preview</h3>
          <button class="btn btn-sm btn-circle btn-ghost" (click)="closeResumeModal()">✕</button>
        </div>

        <div class="tabs tabs-boxed mb-4">
          <button
            class="tab"
            [class.tab-active]="previewMode === 'text'"
            (click)="previewMode = 'text'">
            Text View
          </button>
          <button
            class="tab"
            [class.tab-active]="previewMode === 'html'"
            (click)="previewMode = 'html'">
            HTML View
          </button>
        </div>

        <div class="bg-base-200 p-4 rounded-lg max-h-96 overflow-y-auto">
          <div *ngIf="previewMode === 'text'" class="whitespace-pre-wrap text-sm">
            {{ selectedResume?.resume_str }}
          </div>
          <div *ngIf="previewMode === 'html'" [innerHTML]="selectedResume?.resume_html" class="prose max-w-none">
          </div>
        </div>

        <div class="modal-action">
          <button class="btn btn-outline" (click)="closeResumeModal()">Close</button>
          <button class="btn btn-primary" (click)="useForScan(selectedResume!)">Use for Scan</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button type="button" (click)="closeResumeModal()"></button>
      </form>
    </dialog>
  `,
  styles: [`
    :host {
      display: block;
    }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class GlobalResumesComponent implements OnInit {
  resumes: GlobalResume[] = [];
  filteredResumes: GlobalResume[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  selectedResume: GlobalResume | null = null;
  previewMode: 'text' | 'html' = 'text';

  constructor(
    private router: Router,
    private globalResumeService: GlobalResumeService,
    private faLibrary: FaIconLibrary
  ) {
    faLibrary.addIcons(faArrowLeft, faSearch, faEye, faBolt);
  }

  ngOnInit() {
    // Load resumes from service
    this.globalResumeService.getResumes().subscribe(resumes => {
      this.resumes = resumes;
      this.filteredResumes = resumes;
    });

    // Load categories
    this.categories = this.globalResumeService.getCategories();
  }

  onFilterChange() {
    this.globalResumeService.searchResumes(this.searchQuery, this.selectedCategory)
      .subscribe(resumes => {
        this.filteredResumes = resumes;
      });
  }

  goBack() {
    this.router.navigate(['/resumes']);
  }

  trackByResumeId(index: number, resume: GlobalResume): number {
    return resume.id;
  }

  getPreviewText(text: string): string {
    return text.substring(0, 150) + (text.length > 150 ? '...' : '');
  }

  viewResume(resume: GlobalResume) {
    this.selectedResume = resume;
    this.previewMode = 'text';
    const modal = document.getElementById('resumeModal') as HTMLDialogElement;
    modal?.showModal();
  }

  closeResumeModal() {
    const modal = document.getElementById('resumeModal') as HTMLDialogElement;
    modal?.close();
    this.selectedResume = null;
  }

  useForScan(resume: GlobalResume) {
    // Navigate to scan page with resume data
    this.router.navigate(['/scan'], {
      queryParams: {
        resumeId: resume.id,
        source: 'global'
      }
    });
  }
}
