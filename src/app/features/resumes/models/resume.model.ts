export interface Resume {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  isActive: boolean;
}

export interface ResumeListItem {
  id: string;
  title: string;
  updatedAt: Date;
  tags: string[];
}

export interface CreateResumeRequest {
  title: string;
  content: string;
  tags?: string[];
}

export interface UpdateResumeRequest {
  id: string;
  title?: string;
  content?: string;
  tags?: string[];
}
