import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface GlobalResume {
  id: number;
  resume_str: string;
  resume_html: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalResumeService {
  private resumesSubject = new BehaviorSubject<GlobalResume[]>([]);
  public resumes$ = this.resumesSubject.asObservable();

  constructor() {
    // Initialize with mock data - in real app, this would fetch from API
    this.loadMockData();
  }

  private loadMockData() {
    const mockResumes: GlobalResume[] = [
      {
        id: 1,
        category: 'Software Engineer',
        resume_str: 'John Doe\nSoftware Engineer\n\nExperience:\n- Senior Software Engineer at Tech Corp (2020-2023)\n- Full Stack Developer at StartupXYZ (2018-2020)\n- Junior Developer at WebSolutions (2016-2018)\n\nSkills:\n- JavaScript, TypeScript, Python, Java\n- React, Angular, Node.js, Express\n- PostgreSQL, MongoDB, Redis\n- AWS, Docker, Kubernetes\n\nEducation:\n- B.S. Computer Science, State University (2016)',
        resume_html: '<h1>John Doe</h1><h2>Software Engineer</h2><h3>Experience:</h3><ul><li>Senior Software Engineer at Tech Corp (2020-2023)</li><li>Full Stack Developer at StartupXYZ (2018-2020)</li><li>Junior Developer at WebSolutions (2016-2018)</li></ul><h3>Skills:</h3><ul><li>JavaScript, TypeScript, Python, Java</li><li>React, Angular, Node.js, Express</li><li>PostgreSQL, MongoDB, Redis</li><li>AWS, Docker, Kubernetes</li></ul><h3>Education:</h3><ul><li>B.S. Computer Science, State University (2016)</li></ul>'
      },
      {
        id: 2,
        category: 'Frontend Developer',
        resume_str: 'Jane Smith\nFrontend Developer\n\nExperience:\n- Lead Frontend Developer at UX Studios (2021-2023)\n- React Developer at WebTech (2019-2021)\n- UI Developer at DesignCo (2017-2019)\n\nSkills:\n- React, Vue.js, Angular\n- HTML5, CSS3, SASS/SCSS\n- JavaScript, TypeScript\n- Webpack, Vite, Parcel\n- Figma, Adobe XD\n\nEducation:\n- B.A. Graphic Design, Art Institute (2017)',
        resume_html: '<h1>Jane Smith</h1><h2>Frontend Developer</h2><h3>Experience:</h3><ul><li>Lead Frontend Developer at UX Studios (2021-2023)</li><li>React Developer at WebTech (2019-2021)</li><li>UI Developer at DesignCo (2017-2019)</li></ul><h3>Skills:</h3><ul><li>React, Vue.js, Angular</li><li>HTML5, CSS3, SASS/SCSS</li><li>JavaScript, TypeScript</li><li>Webpack, Vite, Parcel</li><li>Figma, Adobe XD</li></ul><h3>Education:</h3><ul><li>B.A. Graphic Design, Art Institute (2017)</li></ul>'
      },
      {
        id: 3,
        category: 'Backend Developer',
        resume_str: 'Mike Johnson\nBackend Developer\n\nExperience:\n- Senior Backend Engineer at DataCorp (2020-2023)\n- API Developer at CloudSoft (2018-2020)\n- Database Developer at InfoSys (2016-2018)\n\nSkills:\n- Python, Java, Go, C#\n- Django, Spring Boot, .NET Core\n- PostgreSQL, MySQL, MongoDB\n- Redis, Elasticsearch\n- AWS, Azure, GCP\n- Docker, Kubernetes, Terraform\n\nEducation:\n- M.S. Computer Science, Tech University (2016)',
        resume_html: '<h1>Mike Johnson</h1><h2>Backend Developer</h2><h3>Experience:</h3><ul><li>Senior Backend Engineer at DataCorp (2020-2023)</li><li>API Developer at CloudSoft (2018-2020)</li><li>Database Developer at InfoSys (2016-2018)</li></ul><h3>Skills:</h3><ul><li>Python, Java, Go, C#</li><li>Django, Spring Boot, .NET Core</li><li>PostgreSQL, MySQL, MongoDB</li><li>Redis, Elasticsearch</li><li>AWS, Azure, GCP</li><li>Docker, Kubernetes, Terraform</li></ul><h3>Education:</h3><ul><li>M.S. Computer Science, Tech University (2016)</li></ul>'
      },
      {
        id: 4,
        category: 'Full Stack',
        resume_str: 'Sarah Wilson\nFull Stack Developer\n\nExperience:\n- Full Stack Engineer at InnovateTech (2021-2023)\n- Web Developer at DigitalFlow (2019-2021)\n- Junior Full Stack at CodeWorks (2017-2019)\n\nSkills:\n- Frontend: React, Vue.js, TypeScript\n- Backend: Node.js, Express, Python, Django\n- Databases: MongoDB, PostgreSQL\n- DevOps: Docker, AWS, CI/CD\n- Mobile: React Native\n\nEducation:\n- B.S. Information Technology, Metro University (2017)',
        resume_html: '<h1>Sarah Wilson</h1><h2>Full Stack Developer</h2><h3>Experience:</h3><ul><li>Full Stack Engineer at InnovateTech (2021-2023)</li><li>Web Developer at DigitalFlow (2019-2021)</li><li>Junior Full Stack at CodeWorks (2017-2019)</li></ul><h3>Skills:</h3><ul><li>Frontend: React, Vue.js, TypeScript</li><li>Backend: Node.js, Express, Python, Django</li><li>Databases: MongoDB, PostgreSQL</li><li>DevOps: Docker, AWS, CI/CD</li><li>Mobile: React Native</li></ul><h3>Education:</h3><ul><li>B.S. Information Technology, Metro University (2017)</li></ul>'
      },
      {
        id: 5,
        category: 'DevOps Engineer',
        resume_str: 'Alex Chen\nDevOps Engineer\n\nExperience:\n- Senior DevOps Engineer at CloudNative (2020-2023)\n- Infrastructure Engineer at ScaleTech (2018-2020)\n- System Administrator at NetworkSol (2016-2018)\n\nSkills:\n- AWS, Azure, GCP\n- Kubernetes, Docker, Helm\n- Terraform, Ansible, Puppet\n- Jenkins, GitLab CI, GitHub Actions\n- Monitoring: Prometheus, Grafana, ELK\n- Languages: Python, Bash, Go\n\nEducation:\n- B.S. Network Engineering, State Tech (2016)',
        resume_html: '<h1>Alex Chen</h1><h2>DevOps Engineer</h2><h3>Experience:</h3><ul><li>Senior DevOps Engineer at CloudNative (2020-2023)</li><li>Infrastructure Engineer at ScaleTech (2018-2020)</li><li>System Administrator at NetworkSol (2016-2018)</li></ul><h3>Skills:</h3><ul><li>AWS, Azure, GCP</li><li>Kubernetes, Docker, Helm</li><li>Terraform, Ansible, Puppet</li><li>Jenkins, GitLab CI, GitHub Actions</li><li>Monitoring: Prometheus, Grafana, ELK</li><li>Languages: Python, Bash, Go</li></ul><h3>Education:</h3><ul><li>B.S. Network Engineering, State Tech (2016)</li></ul>'
      },
      {
        id: 6,
        category: 'Data Scientist',
        resume_str: 'Emily Rodriguez\nData Scientist\n\nExperience:\n- Senior Data Scientist at AI Innovations (2021-2023)\n- ML Engineer at DataFlow (2019-2021)\n- Data Analyst at Analytics Pro (2017-2019)\n\nSkills:\n- Python, R, SQL\n- Machine Learning: scikit-learn, TensorFlow, PyTorch\n- Data Visualization: Matplotlib, Seaborn, Plotly\n- Big Data: Spark, Hadoop, Kafka\n- Cloud: AWS SageMaker, Google Cloud ML\n- Statistics, A/B Testing\n\nEducation:\n- M.S. Data Science, Analytics University (2017)\n- B.S. Mathematics, State College (2015)',
        resume_html: '<h1>Emily Rodriguez</h1><h2>Data Scientist</h2><h3>Experience:</h3><ul><li>Senior Data Scientist at AI Innovations (2021-2023)</li><li>ML Engineer at DataFlow (2019-2021)</li><li>Data Analyst at Analytics Pro (2017-2019)</li></ul><h3>Skills:</h3><ul><li>Python, R, SQL</li><li>Machine Learning: scikit-learn, TensorFlow, PyTorch</li><li>Data Visualization: Matplotlib, Seaborn, Plotly</li><li>Big Data: Spark, Hadoop, Kafka</li><li>Cloud: AWS SageMaker, Google Cloud ML</li><li>Statistics, A/B Testing</li></ul><h3>Education:</h3><ul><li>M.S. Data Science, Analytics University (2017)</li><li>B.S. Mathematics, State College (2015)</li></ul>'
      },
      {
        id: 7,
        category: 'Product Manager',
        resume_str: 'David Kim\nProduct Manager\n\nExperience:\n- Senior Product Manager at TechFlow (2020-2023)\n- Product Owner at StartupHub (2018-2020)\n- Business Analyst at CorpSolutions (2016-2018)\n\nSkills:\n- Product Strategy, Roadmapping\n- Agile, Scrum, Kanban\n- User Research, A/B Testing\n- Analytics: Google Analytics, Mixpanel\n- Wireframing: Figma, Sketch\n- SQL, Basic Python\n\nEducation:\n- MBA, Business School (2016)\n- B.S. Engineering, Tech Institute (2014)',
        resume_html: '<h1>David Kim</h1><h2>Product Manager</h2><h3>Experience:</h3><ul><li>Senior Product Manager at TechFlow (2020-2023)</li><li>Product Owner at StartupHub (2018-2020)</li><li>Business Analyst at CorpSolutions (2016-2018)</li></ul><h3>Skills:</h3><ul><li>Product Strategy, Roadmapping</li><li>Agile, Scrum, Kanban</li><li>User Research, A/B Testing</li><li>Analytics: Google Analytics, Mixpanel</li><li>Wireframing: Figma, Sketch</li><li>SQL, Basic Python</li></ul><h3>Education:</h3><ul><li>MBA, Business School (2016)</li><li>B.S. Engineering, Tech Institute (2014)</li></ul>'
      },
      {
        id: 8,
        category: 'Designer',
        resume_str: 'Lisa Park\nUX/UI Designer\n\nExperience:\n- Senior UX Designer at DesignStudio (2021-2023)\n- UI Designer at CreativeFlow (2019-2021)\n- Graphic Designer at VisualWorks (2017-2019)\n\nSkills:\n- Design Tools: Figma, Sketch, Adobe Creative Suite\n- Prototyping: InVision, Principle, Framer\n- User Research, Usability Testing\n- HTML/CSS basics\n- Design Systems, Accessibility\n\nEducation:\n- M.A. Interaction Design, Art College (2017)\n- B.F.A. Visual Communication, Design University (2015)',
        resume_html: '<h1>Lisa Park</h1><h2>UX/UI Designer</h2><h3>Experience:</h3><ul><li>Senior UX Designer at DesignStudio (2021-2023)</li><li>UI Designer at CreativeFlow (2019-2021)</li><li>Graphic Designer at VisualWorks (2017-2019)</li></ul><h3>Skills:</h3><ul><li>Design Tools: Figma, Sketch, Adobe Creative Suite</li><li>Prototyping: InVision, Principle, Framer</li><li>User Research, Usability Testing</li><li>HTML/CSS basics</li><li>Design Systems, Accessibility</li></ul><h3>Education:</h3><ul><li>M.A. Interaction Design, Art College (2017)</li><li>B.F.A. Visual Communication, Design University (2015)</li></ul>'
      }
    ];

    this.resumesSubject.next(mockResumes);
  }

  getResumes(): Observable<GlobalResume[]> {
    return this.resumes$;
  }

  getResumeById(id: number): GlobalResume | undefined {
    return this.resumesSubject.value.find(resume => resume.id === id);
  }

  searchResumes(query: string, category?: string): Observable<GlobalResume[]> {
    return new Observable(observer => {
      const allResumes = this.resumesSubject.value;
      let filteredResumes = allResumes;

      // Filter by category if provided
      if (category && category !== '') {
        filteredResumes = filteredResumes.filter(resume =>
          resume.category.toLowerCase() === category.toLowerCase()
        );
      }

      // Filter by search query if provided
      if (query && query.trim() !== '') {
        const searchTerm = query.toLowerCase();
        filteredResumes = filteredResumes.filter(resume =>
          resume.resume_str.toLowerCase().includes(searchTerm) ||
          resume.category.toLowerCase().includes(searchTerm)
        );
      }

      observer.next(filteredResumes);
      observer.complete();
    });
  }

  // Method to get unique categories
  getCategories(): string[] {
    const resumes = this.resumesSubject.value;
    const categories = resumes.map(resume => resume.category);
    return [...new Set(categories)].sort();
  }
}
