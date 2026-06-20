export type OpportunityCategory =
  | 'Research Internships'
  | 'Student Collaborations'
  | 'Visiting Advisor'
  | 'Industry Partnerships';

export type OpportunityType = 'Internship' | 'Collaboration' | 'Contract' | 'Volunteer';

export interface JobPosition {
  id: number;
  title: string;
  category: OpportunityCategory;
  type: OpportunityType;
  location: string;
  remote: boolean;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  compensation: string;
  postedDate: string;
}

export const OPPORTUNITIES_BANNER =
  'These are not always paid jobs. Depending on funding and fit, an opportunity may be an internship, student collaboration, contract, or volunteer role. Each posting explains the likely format.';

export const DEFAULT_COMPENSATION =
  'Depends on funding, role, location, and agreed scope.';

export const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Research Internship: Medical Imaging AI',
    category: 'Research Internships',
    type: 'Internship',
    location: 'Remote / Hybrid',
    remote: true,
    experience: 'Graduate student or advanced undergraduate',
    description:
      'This is for students who want hands-on research experience with medical imaging AI. Work is usually narrow in scope: run experiments, clean up code, check results, and write down what worked and what did not.',
    responsibilities: [
      'Help prepare datasets, run model experiments, and review outputs',
      'Keep clear notes so results can be repeated by another person',
      'Join regular research check-ins with a mentor',
      'Contribute to reports or papers when the work is substantial enough',
    ],
    requirements: [
      'Currently studying computer science, engineering, biomedical engineering, or a related field',
      'Comfortable writing Python and using at least one ML framework',
      'Interest in medical imaging, evaluation, or explainable AI',
      'Able to commit to a clear work period, usually 3 to 6 months',
    ],
    niceToHave: [
      'A course project or small research project in computer vision',
      'Experience using Git and keeping experiment notes',
      'Careful attitude toward health-related data and claims',
    ],
    compensation: DEFAULT_COMPENSATION,
    postedDate: '2026-01-15',
  },
  {
    id: 2,
    title: 'Student Collaboration: Multimodal and Clinical AI',
    category: 'Student Collaborations',
    type: 'Collaboration',
    location: 'Remote',
    remote: true,
    experience: 'MS/PhD student',
    description:
      'This is for graduate students whose thesis, capstone, or independent research overlaps with our work. We can help shape a focused question and review progress, but the project should also make sense for your university requirements.',
    responsibilities: [
      'Agree on a focused research question before starting',
      'Run experiments and maintain code and notes others can follow',
      'Share progress in periodic reviews',
      'Contribute to a paper or report if the work reaches that stage',
    ],
    requirements: [
      'Enrolled in an MS or PhD program',
      'Advisor approval if your program requires it',
      'Basic research experience in machine learning, medical imaging, or related topics',
      'Willingness to report negative results and limitations clearly',
    ],
    niceToHave: [
      'A preprint, publication, or serious course project in a related area',
      'Experience with multimodal learning, calibration, or explainability',
      'Familiarity with ethics review when working near health topics',
    ],
    compensation: DEFAULT_COMPENSATION,
    postedDate: '2026-02-01',
  },
  {
    id: 3,
    title: 'Visiting Research Advisor',
    category: 'Visiting Advisor',
    type: 'Contract',
    location: 'Remote / Occasional on-site',
    remote: true,
    experience: 'Senior researcher or faculty',
    description:
      'This is for senior researchers, clinicians, and domain experts who can give occasional guidance on research direction, evaluation, or responsible use. It is not a standing staff role.',
    responsibilities: [
      'Review research plans, evaluation choices, or draft manuscripts',
      'Point out gaps, risks, and overclaims before work is shared publicly',
      'Join occasional discussions on ethics, governance, or clinical relevance',
      'Make introductions only where there is a clear and appropriate fit',
    ],
    requirements: [
      'Established expertise in AI, medical imaging, health informatics, or related fields',
      'Track record of peer-reviewed research or responsible technology guidance',
      'Availability for occasional advisory calls or written feedback',
      'Comfort with a small-lab advisory format',
    ],
    niceToHave: [
      'Experience with regulatory, clinical workflow, or hospital IT constraints',
      'Prior industry and academia collaboration or startup advisory background',
      'Interest in open, reproducible research communication',
    ],
    compensation: DEFAULT_COMPENSATION,
    postedDate: '2026-01-20',
  },
  {
    id: 4,
    title: 'Industry Partnership: Applied AI Pilot',
    category: 'Industry Partnerships',
    type: 'Contract',
    location: 'Remote / Hybrid',
    remote: true,
    experience: 'Organization or team lead',
    description:
      'This is for organizations that want a small research pilot with clear boundaries. Good fits include evaluation studies, prototype review, model assessment, or a limited proof of concept.',
    responsibilities: [
      'Agree on the problem, success criteria, and data limits before work starts',
      'Provide domain context and safe evaluation examples where possible',
      'Join milestone reviews and help review limitations before results are shared',
      'Align on IP, publication, and data handling terms before work begins',
    ],
    requirements: [
      'Clear institutional or company contact with authority to explore collaboration',
      'Defined use case in AI, health, security, or another high-stakes area',
      'Willingness to document assumptions, limitations, and non-clinical status where applicable',
      'Mutual agreement on scope before technical work starts',
    ],
    niceToHave: [
      'Prior experience with research collaborations or SBIR-style pilots',
      'Internal data governance or legal contact for agreement review',
      'Interest in reproducible evaluation rather than unsupported deployment claims',
    ],
    compensation: DEFAULT_COMPENSATION,
    postedDate: '2026-02-10',
  },
];

export const getJobsByCategory = (category: OpportunityCategory): JobPosition[] => {
  return jobPositions.filter((job) => job.category === category);
};

export const getJobsByType = (type: OpportunityType): JobPosition[] => {
  return jobPositions.filter((job) => job.type === type);
};

export const getRemoteJobs = (): JobPosition[] => {
  return jobPositions.filter((job) => job.remote);
};

export const getJobById = (id: number): JobPosition | undefined => {
  return jobPositions.find((job) => job.id === id);
};

export const getAllCategories = (): OpportunityCategory[] => {
  return Array.from(new Set(jobPositions.map((job) => job.category)));
};

export const getAllJobTypes = (): OpportunityType[] => {
  return Array.from(new Set(jobPositions.map((job) => job.type)));
};

export const getJobsCount = (): { total: number } => ({
  total: jobPositions.length,
});
