'use client';

interface JobFiltersProps {
  selectedDepartment: string;
  selectedType: string;
  departments: string[];
  jobTypes: string[];
  onDepartmentChange: (dept: string) => void;
  onTypeChange: (type: string) => void;
}

export default function JobFilters({
  selectedDepartment,
  selectedType,
  departments,
  jobTypes,
  onDepartmentChange,
  onTypeChange,
}: JobFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-12 justify-center">
      {/* Department Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onDepartmentChange('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
            selectedDepartment === 'all'
              ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-lg'
              : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          All Departments
        </button>
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => onDepartmentChange(dept)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedDepartment === dept
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-lg'
                : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTypeChange('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
            selectedType === 'all'
              ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-lg'
              : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          All Types
        </button>
        {jobTypes.map(type => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedType === type
                ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-lg'
                : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
