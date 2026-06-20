import { Project } from '@/config/home/projects';

interface ProjectCardDetailsProps {
  project: Project;
  className?: string;
}

const detailFields = [
  { key: 'problemModality' as const, label: 'Problem + modality' },
  { key: 'coreMethod' as const, label: 'Core method' },
  { key: 'evaluationEmphasis' as const, label: 'Evaluation emphasis' },
];

export default function ProjectCardDetails({ project, className = '' }: ProjectCardDetailsProps) {
  return (
    <dl className={`space-y-3 flex-1 ${className}`}>
      {detailFields.map(({ key, label }) => (
        <div key={key}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
            {label}
          </dt>
          <dd className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            {project[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
