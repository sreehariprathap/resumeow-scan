import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import UI library components
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCardDirective } from '@spartan-ng/helm/card';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';

// Components, directives, and pipes will be added here as they're created
const SHARED_COMPONENTS: any[] = [
  // Add shared components here
];

const SHARED_DIRECTIVES: any[] = [
  // Add shared directives here
];

const SHARED_PIPES: any[] = [
  // Add shared pipes here
];

const UI_COMPONENTS = [
  HlmButtonDirective,
  HlmCardDirective,
  HlmIconDirective,
  HlmInputDirective
];

@NgModule({
  imports: [
    CommonModule,
    ...UI_COMPONENTS
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES
  ],
  exports: [
    CommonModule,
    ...UI_COMPONENTS,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES
  ]
})
export class SharedModule { }
