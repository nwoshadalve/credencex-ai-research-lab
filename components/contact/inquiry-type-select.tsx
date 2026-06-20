'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import {
  contactConfig,
  ContactInquiryTypeId,
} from '@/config/common/contact';

interface InquiryTypeSelectProps {
  value: ContactInquiryTypeId | '';
  onChange: (value: ContactInquiryTypeId) => void;
  error?: string;
}

export default function InquiryTypeSelect({ value, onChange, error }: InquiryTypeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = value
    ? contactConfig.inquiryTypes.find((type) => type.id === value)
    : undefined;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (id: ContactInquiryTypeId) => {
    onChange(id);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id="inquiryType"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`relative w-full px-4 py-3 pr-10 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 text-left transition-all duration-200 focus:ring-2 outline-none cursor-pointer ${
          error
            ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : isOpen
              ? 'border-blue-500 dark:border-blue-400 focus:border-blue-500 focus:ring-blue-500/20'
              : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
        }`}
      >
        <span
          className={`block text-sm truncate ${
            selected ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {selected?.label ?? contactConfig.formFields.inquiryType.placeholder}
        </span>
        <ChevronDown
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="inquiryType"
          className="absolute z-30 mt-2 w-full max-h-72 overflow-auto rounded-xl backdrop-blur-2xl bg-white/95 dark:bg-gray-950/95 border-2 border-gray-300/70 dark:border-white/10 shadow-xl shadow-blue-500/10 dark:shadow-black/50 py-1.5"
        >
          {contactConfig.inquiryTypes.map((type) => {
            const isSelected = value === type.id;

            return (
              <li key={type.id} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(type.id)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-150 ${
                    isSelected
                      ? 'bg-blue-50/90 dark:bg-blue-950/50'
                      : 'hover:bg-gray-100/90 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-medium ${
                          isSelected
                            ? 'text-blue-700 dark:text-blue-300'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {type.label}
                      </span>
                      {type.description && (
                        <span className="block text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                          {type.description}
                        </span>
                      )}
                    </span>
                    {isSelected && (
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
