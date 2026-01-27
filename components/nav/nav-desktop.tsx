'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

interface MenuItem {
    label: string;
    href: string;
    submenu?: MenuItem[];
    icon?: React.ReactNode;
    highlighted?: boolean;
}

interface NavDesktopProps {
    menuItems: MenuItem[];
}

export default function NavDesktop({ menuItems }: NavDesktopProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    // Prevent hydration mismatch
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const toggleDropdown = (label: string) => {
        setOpenDropdown((current) => (current === label ? null : label));
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
            <nav
                ref={navRef}
                className="w-full backdrop-blur-2xl backdrop-saturate-150 border-b border-white/20 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 shadow-lg shadow-black/5 dark:shadow-black/40"
            >
                <div className="flex items-center justify-around gap-6 px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                        {mounted && (
                            <Image
                                src={theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png'}
                                alt="CredenceX AI Research Lab"
                                width={180}
                                height={65}
                                priority
                                className="h-12 w-auto"
                            />
                        )}
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden lg:flex items-center gap-2 justify-center">
                        {menuItems.map((item) => (
                            <div key={item.label} className="relative">
                                {item.submenu ? (
                                    <button
                                        onClick={() => toggleDropdown(item.label)}
                                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                                            item.highlighted
                                                ? isActive(item.href)
                                                    ? 'bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:to-teal-500 text-white shadow-lg shadow-emerald-500/50 dark:shadow-emerald-400/40 border border-white/30 backdrop-blur-xl'
                                                    : 'bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-blue-500 dark:to-purple-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-purple-700 shadow-lg shadow-cyan-500/40 dark:shadow-blue-500/30'
                                                : isActive(item.href)
                                                ? 'bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-xl border border-blue-400/50 dark:border-blue-300/50 text-blue-700 dark:text-blue-200 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/20'
                                                : openDropdown === item.label
                                                ? 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/20 shadow-sm'
                                                : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50/80 dark:hover:bg-blue-500/10'
                                        }`}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-200 ease-in-out[cubic-bezier(0.4,0,0.2,1)] ${
                                                openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                                            }`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                                            item.highlighted
                                                ? isActive(item.href)
                                                    ? 'bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:to-teal-500 text-white shadow-lg shadow-emerald-500/50 dark:shadow-emerald-400/40 border border-white/30 backdrop-blur-xl'
                                                    : 'bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-blue-500 dark:to-purple-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-purple-700 shadow-lg shadow-cyan-500/40 dark:shadow-blue-500/30'
                                                : isActive(item.href)
                                                ? 'bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-xl border border-blue-400/50 dark:border-blue-300/50 text-blue-700 dark:text-blue-200 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/20'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Modern Dropdown Menu */}
                                {item.submenu && (
                                    <div
                                        className={`absolute top-full left-0 mt-2 w-72 rounded-2xl backdrop-blur-xl border overflow-hidden shadow-2xl ${
                                            openDropdown === item.label
                                                ? 'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 border-gray-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95'
                                                : 'animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-150 pointer-events-none border-transparent opacity-0'
                                        }`}
                                        style={{
                                            transformOrigin: 'top center',
                                        }}
                                    >
                                        <div className="p-3 space-y-1">
                                            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                                {item.label}
                                            </p>
                                            {item.submenu.map((subitem) => {
                                                // Only check query params after mount to avoid hydration mismatch
                                                const isSubmenuActive = mounted
                                                    ? pathname === subitem.href || (subitem.href.includes('?') && typeof window !== 'undefined' && pathname + window.location.search === subitem.href)
                                                    : pathname === subitem.href;
                                                return (
                                                <Link
                                                    key={subitem.label}
                                                    href={subitem.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className={`group relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                                                        isSubmenuActive
                                                            ? 'bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-xl border border-blue-400/50 dark:border-blue-300/50 text-blue-700 dark:text-blue-200 shadow-md shadow-blue-500/20'
                                                            : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-linear-to-r hover:from-blue-50 hover:via-blue-50/80 hover:to-green-50/70 dark:hover:from-blue-500/15 dark:hover:via-blue-500/10 dark:hover:to-green-500/10'
                                                    }`}
                                                >
                                                    <span className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-700/60 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                                                        {subitem.icon ?? <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>}
                                                    </span>
                                                    <span className="flex-1">{subitem.label}</span>
                                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Theme Switcher & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl border border-gray-200/70 dark:border-white/10 bg-linear-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-800/30 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700/60 dark:hover:to-slate-700/40 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {!mounted ? (
                                <Sun size={18} className="text-amber-500" />
                            ) : theme === 'dark' ? (
                                <Sun size={18} className="text-amber-500" />
                            ) : (
                                <Moon size={18} className="text-indigo-600" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}