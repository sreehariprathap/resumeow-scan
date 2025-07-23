import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resume, ResumeListItem, CreateResumeRequest, UpdateResumeRequest } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private mockResumes: Resume[] = [
    {
      id: '1',
      title: 'Software Engineer Resume',
      content: 'Mock resume content for software engineer position...',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-07-21'),
      tags: ['software', 'engineer', 'javascript', 'angular'],
      isActive: true
    },
    {
      id: '2',
      title: 'Frontend Developer Resume',
      content: 'Mock resume content for frontend developer position...',
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-07-16'),
      tags: ['frontend', 'react', 'css', 'html'],
      isActive: true
    },
    {
      id: '3',
      title: 'Full Stack Resume',
      content: 'Mock resume content for full stack developer position...',
      createdAt: new Date('2024-01-30'),
      updatedAt: new Date('2024-07-09'),
      tags: ['fullstack', 'nodejs', 'database', 'api'],
      isActive: true
    }
  ];

  getResumes(): Observable<ResumeListItem[]> {
    const resumeList = this.mockResumes.map(resume => ({
      id: resume.id,
      title: resume.title,
      updatedAt: resume.updatedAt,
      tags: resume.tags
    }));
    return of(resumeList);
  }

  getResumeById(id: string): Observable<Resume | undefined> {
    const resume = this.mockResumes.find(r => r.id === id);
    return of(resume);
  }

  createResume(request: CreateResumeRequest): Observable<Resume> {
    const newResume: Resume = {
      id: Date.now().toString(),
      title: request.title,
      content: request.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: request.tags || [],
      isActive: true
    };
    this.mockResumes.push(newResume);
    return of(newResume);
  }

  updateResume(request: UpdateResumeRequest): Observable<Resume | null> {
    const index = this.mockResumes.findIndex(r => r.id === request.id);
    if (index === -1) {
      return of(null);
    }

    const existingResume = this.mockResumes[index];
    const updatedResume: Resume = {
      ...existingResume,
      title: request.title || existingResume.title,
      content: request.content || existingResume.content,
      tags: request.tags || existingResume.tags,
      updatedAt: new Date()
    };

    this.mockResumes[index] = updatedResume;
    return of(updatedResume);
  }

  deleteResume(id: string): Observable<boolean> {
    const index = this.mockResumes.findIndex(r => r.id === id);
    if (index === -1) {
      return of(false);
    }

    this.mockResumes.splice(index, 1);
    return of(true);
  }
}
