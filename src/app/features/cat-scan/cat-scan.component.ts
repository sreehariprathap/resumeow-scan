import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanResultComponent, ScanResultData } from './components/scan-result.component';

@Component({
  selector: 'app-cat-scan',
  standalone: true,
  imports: [CommonModule, FormsModule, ScanResultComponent],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card">
        <div class="container mx-auto px-6 py-8">
          <div class="flex items-center justify-between">
            <div class="text-left">
              <h1 class="text-lg font-bold text-foreground">Cat AI Resume Scanner</h1>
              <p class="text-sm text-muted-foreground">
                Get instant AI-powered analysis of how well your resume matches any job description
              </p>
            </div>
            <div>
              <button
                class="btn btn-circle btn-outline btn-info"
                onclick="info_modal.showModal()"
                title="How it works"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6 py-12">
        <!-- Input Section -->
        <div class="max-w-6xl mx-auto">
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
              </label>
              <textarea
                id="resumeText"
                [(ngModel)]="resumeText"
                class="textarea textarea-bordered w-full h-64 resize-none"
                placeholder="Paste your resume text here..."
              ></textarea>
            </div>
          </div>

          <!-- Scan Button -->
          <div class="flex justify-center mt-8">
            <button
              class="btn btn-primary btn-sm"
              (click)="scanResume()"
              [disabled]="!jobDescription || !resumeText || isScanning"
            >
              <span *ngIf="isScanning" class="loading loading-spinner loading-sm"></span>
              {{ isScanning ? 'Scanning...' : 'Ask Cat AI to Scan' }}
            </button>
          </div>
        </div>

        <!-- Scan Results -->
        <div class="max-w-6xl mx-auto mt-12" *ngIf="scanResult">
          <app-scan-result [resultData]="scanResult"></app-scan-result>
        </div>
      </div>
    </div>

    <!-- How It Works Modal -->
    <dialog id="info_modal" class="modal">
      <div class="modal-box w-11/12 max-w-3xl">
        <h3 class="font-bold text-lg mb-4">🐱 How Cat AI Resume Scanner Works</h3>

        <!-- Steps Section -->
        <div class="mb-6">
          <h4 class="text-md font-semibold mb-4">Process Steps:</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-base-200 rounded-lg">
              <div class="bg-primary rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <span class="text-primary-content font-bold text-sm">1</span>
              </div>
              <h5 class="font-semibold mb-2">Paste Job Description</h5>
              <p class="text-sm text-base-content/70">
                Copy and paste the job description you're interested in applying for
              </p>
            </div>
            <div class="text-center p-4 bg-base-200 rounded-lg">
              <div class="bg-primary rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <span class="text-primary-content font-bold text-sm">2</span>
              </div>
              <h5 class="font-semibold mb-2">Add Your Resume</h5>
              <p class="text-sm text-base-content/70">
                Paste your resume text or upload your resume document
              </p>
            </div>
            <div class="text-center p-4 bg-base-200 rounded-lg">
              <div class="bg-primary rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <span class="text-primary-content font-bold text-sm">3</span>
              </div>
              <h5 class="font-semibold mb-2">Get AI Analysis</h5>
              <p class="text-sm text-base-content/70">
                Our Cat AI analyzes the match and provides detailed feedback
              </p>
            </div>
          </div>
        </div>

        <!-- Analysis Categories -->
        <div class="mb-6">
          <h4 class="text-md font-semibold mb-3">What Cat AI analyzes:</h4>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <span class="badge badge-error badge-sm mt-1">VITAL</span>
              <div>
                <strong>Technical Skills:</strong> Programming languages, frameworks, tools, and technologies
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="badge badge-warning badge-sm mt-1">AVERAGE</span>
              <div>
                <strong>Abilities:</strong> Soft skills like communication, leadership, problem-solving
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="badge badge-neutral badge-sm mt-1">LOW</span>
              <div>
                <strong>Keywords:</strong> Industry terms, methodologies, and buzzwords
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="badge badge-secondary badge-sm mt-1">TITLE</span>
              <div>
                <strong>Qualifications:</strong> Education, certifications, and job titles
              </div>
            </li>
          </ul>
        </div>

        <!-- Scoring System -->
        <div class="mb-6">
          <h4 class="text-md font-semibold mb-3">Scoring system:</h4>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-green-500 rounded"></div>
              <span>80-100: Excellent Match</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>60-79: Good Match</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-orange-500 rounded"></div>
              <span>40-59: Fair Match</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-red-500 rounded"></div>
              <span>0-39: Poor Match</span>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-primary">Got it!</button>
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
  showInfoModal = false;

  ngOnInit() {
    // Remove auto-generation of mock data on init
  }

  openInfoModal() {
    this.showInfoModal = true;
  }

  closeInfoModal() {
    this.showInfoModal = false;
  }

  scanResume() {
    if (!this.jobDescription || !this.resumeText || this.isScanning) {
      return;
    }

    this.isScanning = true;

    // Simulate API call with mock data
    setTimeout(() => {
      this.scanResult = this.generateMockScanResult();
      this.isScanning = false;

      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.querySelector('app-scan-result');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 3000);
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
