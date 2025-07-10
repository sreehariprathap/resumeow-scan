import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HlmButtonDirective } from '../../../../libs/ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmInputDirective } from '../../../../libs/ui/ui-input-helm/src/lib/hlm-input.directive';
import { HlmLabelDirective } from '../../../../libs/ui/ui-label-helm/src/lib/hlm-label.directive';
import { ScanResultComponent, ScanResultData } from './components/scan-result.component';

@Component({
  selector: 'app-cat-scan',
  standalone: true,
  imports: [CommonModule, FormsModule, HlmButtonDirective, HlmInputDirective, HlmLabelDirective, ScanResultComponent],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header Section -->
      <div class="bg-card border-b border-border">
        <div class="container mx-auto px-6 py-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-foreground mb-4">Cat AI Resume Scanner</h1>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant AI-powered analysis of how well your resume matches any job description
            </p>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="container mx-auto px-6 py-12">
        <div class="max-w-4xl mx-auto mb-12">
          <h2 class="text-2xl font-semibold text-foreground mb-6 text-center">How It Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span class="text-primary-foreground font-bold">1</span>
              </div>
              <h3 class="font-semibold text-foreground mb-2">Paste Job Description</h3>
              <p class="text-muted-foreground text-sm">
                Copy and paste the job description you're interested in applying for
              </p>
            </div>
            <div class="text-center">
              <div class="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span class="text-primary-foreground font-bold">2</span>
              </div>
              <h3 class="font-semibold text-foreground mb-2">Add Your Resume</h3>
              <p class="text-muted-foreground text-sm">
                Paste your resume text or upload your resume document
              </p>
            </div>
            <div class="text-center">
              <div class="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span class="text-primary-foreground font-bold">3</span>
              </div>
              <h3 class="font-semibold text-foreground mb-2">Get AI Analysis</h3>
              <p class="text-muted-foreground text-sm">
                Our Cat AI analyzes the match and provides detailed feedback
              </p>
            </div>
          </div>
        </div>

        <!-- Input Section -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Job Description Input -->
            <div class="space-y-4">
              <label hlmLabel for="jobDescription" class="block text-sm font-medium">
                Job Description
              </label>
              <textarea
                hlmInput
                id="jobDescription"
                [(ngModel)]="jobDescription"
                class="w-full h-64 resize-none"
                placeholder="Paste the job description here..."
              ></textarea>
            </div>

            <!-- Resume Text Input -->
            <div class="space-y-4">
              <label hlmLabel for="resumeText" class="block text-sm font-medium">
                Resume Text
              </label>
              <textarea
                hlmInput
                id="resumeText"
                [(ngModel)]="resumeText"
                class="w-full h-64 resize-none"
                placeholder="Paste your resume text here..."
              ></textarea>
            </div>
          </div>

          <!-- Scan Button -->
          <div class="flex justify-center mt-8">
            <button

              (click)="scanResume()"
              [disabled]="!jobDescription || !resumeText || isScanning"
              class="px-8 py-3"
            >
              {{ isScanning ? 'Scanning...' : 'Ask Cat AI to Scan' }}
            </button>
          </div>
        </div>

        <!-- Scan Results -->
        <div class="max-w-6xl mx-auto mt-12" >
          <app-scan-result [resultData]="scanResult"></app-scan-result>
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
export class CatScanComponent {
  jobDescription = '';
  resumeText = '';
  isScanning = false;
  scanResult: ScanResultData | null = null;

  ngOnInit() {
    this.generateMockScanResult();
  }

  scanResume() {
    console.log('Scanning resume...');
    if (!this.jobDescription || !this.resumeText || this.isScanning) {
      return;
    }

    this.isScanning = true;

    // Simulate API call with mock data
    setTimeout(() => {
      this.scanResult = this.generateMockScanResult();
      this.isScanning = false;
    }, 2000);
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
