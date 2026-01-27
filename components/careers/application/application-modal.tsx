'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { JobPosition } from '@/config/careers/jobs';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPosition;
}

export default function ApplicationModal({ isOpen, onClose, job }: ApplicationModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }
      // Validate file size (10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setError('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFile(null);
        onClose();
      }, 2500);
    }, 1500);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFile(null);
      setError('');
      setIsSuccess(false);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Success State */}
              {isSuccess ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                    className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for applying. We&apos;ll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
                      Apply for {job.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {job.department} • {job.type}
                    </p>
                    <button
                      onClick={handleClose}
                      disabled={isSubmitting}
                      className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Upload CV/Resume *
                      </label>
                      
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-all cursor-pointer ${
                            file
                              ? 'border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                              : 'border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10'
                          } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {file ? (
                            <div className="flex flex-col items-center gap-2">
                              <FileText className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                Click to change file
                              </p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <Upload className="w-10 h-10 text-gray-400" />
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                PDF, DOC, DOCX (Max 10MB)
                              </p>
                            </div>
                          )}
                        </label>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!file || isSubmitting}
                        className="flex-1 relative overflow-hidden group px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        {/* Glass shimmer effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        
                        <span className="relative">
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
