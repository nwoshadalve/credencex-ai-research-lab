import { Clock, ExternalLink } from 'lucide-react';
import Button from '@/components/common/button';
import {
  getPaperLinkLabel,
  isExternalPaperLink,
  Publication,
} from '@/config/home/publications';

interface PublicationPaperActionProps {
  publication: Publication;
  className?: string;
}

export default function PublicationPaperAction({
  publication,
  className = '',
}: PublicationPaperActionProps) {
  const label = getPaperLinkLabel(publication);

  if (isExternalPaperLink(publication.paperLink)) {
    return (
      <div className={`mt-auto ${className}`}>
        <Button
          variant="glass"
          size="sm"
          icon={ExternalLink}
          iconPosition="right"
          onClick={() => window.open(publication.paperLink, '_blank')}
          className="w-full"
        >
          {label}
        </Button>
      </div>
    );
  }

  return (
    <div className={`mt-auto ${className}`}>
      <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200/70 bg-gray-50/80 px-4 py-2 text-sm font-semibold text-gray-600 backdrop-blur-sm dark:border-gray-700/70 dark:bg-gray-800/60 dark:text-gray-300">
        <Clock className="h-4 w-4 shrink-0" />
        <span>{label}</span>
      </div>
    </div>
  );
}
