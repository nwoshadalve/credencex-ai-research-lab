import Image from 'next/image';

interface ThemeLogoProps {
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ThemeLogo({
  alt = 'CredenceX AI Research Lab',
  width = 180,
  height = 65,
  className = 'h-12 w-auto',
  priority = false,
}: ThemeLogoProps) {
  return (
    <>
      <Image
        src="/logos/logo-light.png"
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`${className} dark:hidden`}
      />
      <Image
        src="/logos/logo-dark.png"
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
