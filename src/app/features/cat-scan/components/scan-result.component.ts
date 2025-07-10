import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ScanResultData {
  score: number;
  technicalSkills: {
    required: string[];
    foundInResume: string[];
    foundInJobDescription: string[];
  };
  abilities: {
    required: string[];
    foundInResume: string[];
    foundInJobDescription: string[];
  };
  otherKeywords: {
    required: string[];
    foundInResume: string[];
    foundInJobDescription: string[];
  };
  titleAndDegree: {
    required: string[];
    foundInResume: string[];
    foundInJobDescription: string[];
  };
}

@Component({
  selector: 'app-scan-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
      <!-- Score Section -->
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-foreground mb-4">Resume Match Score</h2>
        <div class="relative w-32 h-32 mx-auto mb-4">
          <!-- Progress Circle -->
          <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <!-- Background Circle -->
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              stroke-width="8"
              fill="none"
              class="text-muted"
            />
            <!-- Progress Circle -->
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="url(#gradient)"
              stroke-width="8"
              fill="none"
              stroke-linecap="round"
              [style.stroke-dasharray]="circumference"
              [style.stroke-dashoffset]="strokeDashoffset"
              class="transition-all duration-1000 ease-out"
            />
            <!-- Gradient Definition -->
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" [style.stop-color]="getScoreColor(0)" />
                <stop offset="50%" [style.stop-color]="getScoreColor(50)" />
                <stop offset="100%" [style.stop-color]="getScoreColor(100)" />
              </linearGradient>
            </defs>
          </svg>
          <!-- Score Text -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-3xl font-bold text-foreground">{{ resultData?.score || 0 }}</span>
          </div>
        </div>
        <p class="text-lg font-medium" [style.color]="getScoreColor(resultData?.score || 0)">
          {{ getScoreLabel(resultData?.score || 0) }}
        </p>
      </div>

      <!-- Detailed Breakdown -->
      <div class="space-y-8" *ngIf="resultData">
        <!-- Technical Skills -->
        <div class="border-b border-border pb-6">
          <h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">
            <span class="bg-red-500 text-white px-2 py-1 rounded-sm text-xs mr-2">VITAL</span>
            Technical Skills
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 class="font-medium text-foreground mb-2">Required Skills</h4>
              <ul class="space-y-1">
                <li *ngFor="let skill of resultData.technicalSkills.required"
                    class="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {{ skill }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Resume</h4>
              <ul class="space-y-1">
                <li *ngFor="let skill of resultData.technicalSkills.foundInResume"
                    class="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                  {{ skill }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Job Description</h4>
              <ul class="space-y-1">
                <li *ngFor="let skill of resultData.technicalSkills.foundInJobDescription"
                    class="text-sm text-blue-700 bg-blue-50 p-2 rounded border border-blue-200">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Abilities -->
        <div class="border-b border-border pb-6">
          <h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">
            <span class="bg-yellow-500 text-white px-2 py-1 rounded-sm text-xs mr-2">AVERAGE</span>
            Abilities
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 class="font-medium text-foreground mb-2">Required Abilities</h4>
              <ul class="space-y-1">
                <li *ngFor="let ability of resultData.abilities.required"
                    class="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {{ ability }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Resume</h4>
              <ul class="space-y-1">
                <li *ngFor="let ability of resultData.abilities.foundInResume"
                    class="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                  {{ ability }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Job Description</h4>
              <ul class="space-y-1">
                <li *ngFor="let ability of resultData.abilities.foundInJobDescription"
                    class="text-sm text-blue-700 bg-blue-50 p-2 rounded border border-blue-200">
                  {{ ability }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Other Keywords -->
        <div class="border-b border-border pb-6">
          <h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">
            <span class="bg-gray-500 text-white px-2 py-1 rounded-sm text-xs mr-2">LOW</span>
            Other Keywords
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 class="font-medium text-foreground mb-2">Required Keywords</h4>
              <ul class="space-y-1">
                <li *ngFor="let keyword of resultData.otherKeywords.required"
                    class="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {{ keyword }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Resume</h4>
              <ul class="space-y-1">
                <li *ngFor="let keyword of resultData.otherKeywords.foundInResume"
                    class="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                  {{ keyword }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Job Description</h4>
              <ul class="space-y-1">
                <li *ngFor="let keyword of resultData.otherKeywords.foundInJobDescription"
                    class="text-sm text-blue-700 bg-blue-50 p-2 rounded border border-blue-200">
                  {{ keyword }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Title & Degree -->
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">
            <span class="bg-purple-500 text-white px-2 py-1 rounded-sm text-xs mr-2">TITLE</span>
            Title & Degree
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 class="font-medium text-foreground mb-2">Required Qualifications</h4>
              <ul class="space-y-1">
                <li *ngFor="let qualification of resultData.titleAndDegree.required"
                    class="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {{ qualification }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Resume</h4>
              <ul class="space-y-1">
                <li *ngFor="let qualification of resultData.titleAndDegree.foundInResume"
                    class="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                  {{ qualification }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Found in Job Description</h4>
              <ul class="space-y-1">
                <li *ngFor="let qualification of resultData.titleAndDegree.foundInJobDescription"
                    class="text-sm text-blue-700 bg-blue-50 p-2 rounded border border-blue-200">
                  {{ qualification }}
                </li>
              </ul>
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
export class ScanResultComponent {
  @Input() resultData: ScanResultData | null = null;

  readonly circumference = 2 * Math.PI * 50; // radius = 50

  get strokeDashoffset(): number {
    const score = this.resultData?.score || 0;
    const progress = score / 100;
    return this.circumference * (1 - progress);
  }

  getScoreColor(score: number): string {
    if (score >= 80) return '#22c55e'; // green-500
    if (score >= 60) return '#eab308'; // yellow-500
    if (score >= 40) return '#f97316'; // orange-500
    return '#ef4444'; // red-500
  }

  getScoreLabel(score: number): string {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    if (score >= 40) return 'Fair Match';
    return 'Poor Match';
  }
}
