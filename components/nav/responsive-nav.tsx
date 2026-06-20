'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { MenuItem } from '@/config/common/menu-items';

const NavDesktop = dynamic(() => import('@/components/nav/nav-desktop'), { ssr: false });
const NavMobile = dynamic(() => import('@/components/nav/nav-mobile'), { ssr: false });

const DESKTOP_BREAKPOINT = 1024;

interface ResponsiveNavProps {
  menuItems: MenuItem[];
}

export default function ResponsiveNav({ menuItems }: ResponsiveNavProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  if (isDesktop === null) {
    return (
      <>
        <div className="hidden lg:block h-16" aria-hidden="true" />
        <div className="lg:hidden h-16" aria-hidden="true" />
      </>
    );
  }

  return isDesktop ? (
    <NavDesktop menuItems={menuItems} />
  ) : (
    <NavMobile menuItems={menuItems} />
  );
}
