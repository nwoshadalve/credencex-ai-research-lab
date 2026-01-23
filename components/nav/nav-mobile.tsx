'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

interface MenuItem {
    label: string;
    href: string;
    submenu?: MenuItem[];
    icon?: React.ReactNode;
    highlighted?: boolean;
}

interface NavMobileProps {
    menuItems: MenuItem[];
}

export default function NavMobile({ menuItems }: NavMobileProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleDropdown = (label: string) => {
        setOpenDropdown((current) => (current === label ? null : label));
    };

    const openMenu = () => {
        setIsOpen(true);
        setTimeout(() => setIsAnimating(true), 10);
    };

    const closeMenu = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsOpen(false);
            setOpenDropdown(null);
        }, 300);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
                <nav className="w-full backdrop-blur-2xl backdrop-saturate-150 border-b border-white/20 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 shadow-lg shadow-black/5 dark:shadow-black/40">
                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                        {/* Logo */}
                        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                            <Image
                                src="/logo.png"
                                alt="SentinelX AI Research Lab"
                                width={140}
                                height={50}
                                priority
                                className="h-11 w-auto"
                            />
                        </Link>

                        <div className="flex items-center gap-3">
                            {/* Theme Switcher */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-linear-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-800/30 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700/60 dark:hover:to-slate-700/40 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <Sun size={18} className="text-amber-500" />
                                ) : (
                                    <Moon size={18} className="text-indigo-600" />
                                )}
                            </button>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={openMenu}
                                className="p-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-linear-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-800/30 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700/60 dark:hover:to-slate-700/40 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                aria-label="Open menu"
                            >
                                <Menu size={20} className="text-gray-700 dark:text-gray-300" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Full-Screen Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className={`fixed inset-0 z-50 backdrop-blur-md bg-black/20 dark:bg-black/40 lg:hidden transition-opacity duration-300 ${
                            isAnimating ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={closeMenu}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm backdrop-blur-2xl backdrop-saturate-150 border-r border-white/20 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
                            isAnimating ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-white/10">
                                <Link href="/" onClick={closeMenu} className="flex items-center">
                                    <Image
                                        src="/logo.png"
                                        alt="SentinelX AI Research Lab"
                                        width={140}
                                        height={50}
                                        priority
                                        className="h-11 w-auto"
                                    />
                                </Link>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-linear-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-800/30 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700/60 dark:hover:to-slate-700/40 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                        aria-label="Toggle theme"
                                    >
                                        {theme === 'dark' ? (
                                            <Sun size={18} className="text-amber-500" />
                                        ) : (
                                            <Moon size={18} className="text-indigo-600" />
                                        )}
                                    </button>
                                    <button
                                        onClick={closeMenu}
                                        className="p-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-linear-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-800/30 hover:from-red-50 hover:to-red-100 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                        aria-label="Close menu"
                                    >
                                        <X size={20} className="text-gray-700 dark:text-gray-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {menuItems.map((item) => (
                                    <div key={item.label} className="space-y-1">
                                        {item.submenu ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(item.label)}
                                                    className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                                                        item.highlighted
                                                            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-blue-500 dark:to-purple-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-purple-700 shadow-lg shadow-cyan-500/40 dark:shadow-blue-500/30'
                                                            : openDropdown === item.label
                                                            ? 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/20 shadow-sm'
                                                            : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50/80 dark:hover:bg-blue-500/10'
                                                    }`}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform duration-200 ease-in-out[cubic-bezier(0.4,0,0.2,1)] ${
                                                            openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                                                        }`}
                                                    />
                                                </button>

                                                {/* Submenu */}
                                                <div
                                                    className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out origin-top ${
                                                        openDropdown === item.label
                                                            ? 'max-h-96 opacity-100 scale-y-100'
                                                            : 'max-h-0 opacity-0 scale-y-95'
                                                    }`}
                                                    style={{ transformOrigin: 'top' }}
                                                >
                                                    <div className="pl-2 pt-1 space-y-1">
                                                        {item.submenu.map((subitem) => (
                                                            <Link
                                                                key={subitem.label}
                                                                href={subitem.href}
                                                                onClick={closeMenu}
                                                                className="group relative flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-xl hover:text-blue-600 dark:hover:text-blue-300 hover:bg-linear-to-r hover:from-blue-50 hover:via-blue-50/80 hover:to-green-50/70 dark:hover:from-blue-500/15 dark:hover:via-blue-500/10 dark:hover:to-green-500/10 transition-all duration-200 cursor-pointer"
                                                            >
                                                                <span className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></span>
                                                                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-700/60 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                                                                    {subitem.icon ?? (
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                                                    )}
                                                                </span>
                                                                <span className="flex-1">{subitem.label}</span>
                                                                <svg
                                                                    className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M9 5l7 7-7 7"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                                                    item.highlighted
                                                        ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-blue-500 dark:to-purple-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-purple-700 shadow-lg shadow-cyan-500/40 dark:shadow-blue-500/30'
                                                        : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50/80 dark:hover:bg-blue-500/10'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-gray-200/50 dark:border-white/10">
                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                    © 2026 SentinelX AI Research Lab
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}