import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScanResultComponent, ScanResultData } from './components/scan-result.component';
import { GlobalResumeService } from '../resumes/services/global-resume.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faInfoCircle,
  faArrowLeft,
  faLock,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cat-scan',
  standalone: true,
  imports: [CommonModule, FormsModule, ScanResultComponent, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card">
        <div class="container mx-auto px-6 py-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <button
                *ngIf="isFromGlobalResumes"
                class="btn btn-ghost btn-circle"
                (click)="goBackToGlobal()">
                <fa-icon [icon]="'arrow-left'" class="w-6 h-6"></fa-icon>
              </button>
              <div class="text-left">
                <h1 class="text-lg font-bold text-foreground">Cat AI Resume Scanner</h1>
                <p class="text-sm text-muted-foreground">
                  Get instant AI-powered analysis of how well your resume matches any job description
                  <span *ngIf="isFromGlobalResumes" class="badge badge-outline badge-sm ml-2">Using Global Resume</span>
                </p>
              </div>
            </div>
            <div>
              <button
                class="btn btn-circle btn-outline btn-info"
                onclick="info_modal.showModal()"
                title="How it works"
              >
                <fa-icon [icon]="'info-circle'" class="w-6 h-6"></fa-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6">
        <!-- Input Section -->
        <div class="mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Job Description Input -->
            <div class="space-y-4">
              <label for="jobDescription" class="block text-sm font-medium">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                [(ngModel)]="jobDescription"
                class="textarea textarea-bordered w-full h-64 resize-none"
                placeholder="Paste the job description here..."
              ></textarea>
            </div>

            <!-- Resume Text Input -->
            <div class="space-y-4">
              <label for="resumeText" class="block text-sm font-medium">
                Resume Text
                <span *ngIf="isFromGlobalResumes" class="text-xs text-base-content/60">(Pre-loaded from Global Database)</span>
              </label>
              <textarea
                id="resumeText"
                [(ngModel)]="resumeText"
                class="textarea textarea-bordered w-full h-64 resize-none"
                [class.textarea-disabled]="isFromGlobalResumes"
                [readonly]="isFromGlobalResumes"
                placeholder="Paste your resume text here..."
              ></textarea>
              <div *ngIf="isFromGlobalResumes" class="text-xs text-base-content/60 flex items-center gap-2">
                <fa-icon [icon]="'lock'" class="w-4 h-4"></fa-icon>
                This resume is loaded from the global database and cannot be edited here.
              </div>
            </div>
          </div>

          <!-- Scan Button -->
          <div class="flex justify-center mt-8">
            <button
              class="btn btn-primary btn-sm"
              (click)="scanResume()"
              [disabled]="!jobDescription || !resumeText || isScanning"
            >
              <fa-icon *ngIf="isScanning" [icon]="'spinner'" class="animate-spin"></fa-icon>
              {{ isScanning ? 'Scanning...' : 'Ask Cat AI to Scan' }}
            </button>
          </div>
        </div>

        <!-- Scan Results -->
        <div class="max-w-6xl mx-auto mt-12" *ngIf="scanResult">
          <app-scan-result [resultData]="scanResult"></app-scan-result>
        </div>
      </div>
    </div>    <!-- How It Works Modal -->
    <dialog id="info_modal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-3">🐱 How Cat AI Works</h3>

        <!-- Steps Section -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold mb-3">Process:</h4>
          <div class="grid grid-cols-3 gap-2 text-xs">
            <div class="text-center p-2 bg-base-200 rounded">
              <div class="bg-primary rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                <span class="text-primary-content font-bold text-xs">1</span>
              </div>
              <h5 class="font-semibold mb-1 text-xs">Job Description</h5>
              <p class="text-xs text-base-content/70">
                Paste job posting
              </p>
            </div>
            <div class="text-center p-2 bg-base-200 rounded">
              <div class="bg-primary rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                <span class="text-primary-content font-bold text-xs">2</span>
              </div>
              <h5 class="font-semibold mb-1 text-xs">Resume Text</h5>
              <p class="text-xs text-base-content/70">
                Add your resume
              </p>
            </div>
            <div class="text-center p-2 bg-base-200 rounded">
              <div class="bg-primary rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                <span class="text-primary-content font-bold text-xs">3</span>
              </div>
              <h5 class="font-semibold mb-1 text-xs">AI Analysis</h5>
              <p class="text-xs text-base-content/70">
                Get match score
              </p>
            </div>
          </div>
        </div>

        <!-- Analysis Categories -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold mb-2">Analysis Categories:</h4>
          <div class="space-y-1 text-xs">
            <div class="flex items-center gap-2">
              <span class="badge badge-error badge-xs p-1">VITAL</span>
              <span>Technical Skills</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge badge-warning badge-xs p-1">AVG</span>
              <span>Soft Skills</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge badge-neutral badge-xs p-1">LOW</span>
              <span>Keywords</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge badge-secondary badge-xs p-1">TITLE</span>
              <span>Qualifications</span>
            </div>
          </div>
        </div>

        <!-- Scoring System -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold mb-2">Score Ranges:</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-green-500 rounded"></div>
              <span>80-100: Excellent</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>60-79: Good</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-orange-500 rounded"></div>
              <span>40-59: Fair</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-red-500 rounded"></div>
              <span>0-39: Poor</span>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-sm btn-primary">Got it!</button>
          </form>
        </div>
      </div>
    </dialog>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CatScanComponent implements OnInit {
  jobDescription = '';
  resumeText = '';
  isScanning = false;
  scanResult: ScanResultData | null = null;
  isFromGlobalResumes = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalResumeService: GlobalResumeService,
    private faLibrary: FaIconLibrary
  ) {
    faLibrary.addIcons(faInfoCircle, faArrowLeft, faLock, faSpinner);
  }

  ngOnInit() {
    // Check for query parameters to pre-populate resume
    this.route.queryParams.subscribe(params => {
      if (params['resumeId'] && params['source'] === 'global') {
        this.isFromGlobalResumes = true;
        const resumeId = parseInt(params['resumeId']);
        const resume = this.globalResumeService.getResumeById(resumeId);
        if (resume) {
          this.resumeText = resume.resume_str;
        }
      }
    });
  }

  goBackToGlobal() {
    this.router.navigate(['/resumes/global']);
  }

  scanResume() {
    if (!this.jobDescription || !this.resumeText || this.isScanning) {
      return;
    }
  }

  private generateMockScanResult(): ScanResultData {
    // This would normally come from your Cat AI API
    return {
      score: 78,
      technicalSkills: {
        required: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Git'],
        foundInResume: ['JavaScript', 'React', 'Git'],
        foundInJobDescription: ['JavaScript', 'React', 'Node.js', 'TypeScript']
      },
      abilities: {
        required: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'],
        foundInResume: ['Problem Solving', 'Team Collaboration'],
        foundInJobDescription: ['Problem Solving', 'Communication', 'Leadership']
      },
      otherKeywords: {
        required: ['Agile', 'Scrum', 'REST API', 'Database'],
        foundInResume: ['Agile', 'REST API'],
        foundInJobDescription: ['Agile', 'Scrum', 'Database']
      },
      titleAndDegree: {
        required: ['Bachelor\'s Degree', 'Computer Science', 'Software Engineer'],
        foundInResume: ['Bachelor\'s Degree', 'Computer Science'],
        foundInJobDescription: ['Software Engineer', 'Computer Science']
      }
    };
  }
}
