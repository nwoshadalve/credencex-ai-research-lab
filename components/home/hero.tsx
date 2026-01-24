'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { heroContent } from '@/config/hero-content';

export default function HeroSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };



    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } }
    };


    // State for client-only random values
    const [particles] = useState(() => {
        if (typeof window === 'undefined') return null;
        return Array.from({ length: 15 }, () => ({
            initialX: Math.random() * window.innerWidth,
            initialY: Math.random() * window.innerHeight,
            animateX: Math.random() * window.innerWidth,
            animateY: Math.random() * window.innerHeight,
            duration: 10 + Math.random() * 10,
        }));
    });
    const [binaryDurations] = useState(() => {
        if (typeof window === 'undefined') return null;
        return Array.from({ length: 8 }, () => 15 + Math.random() * 5);
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                {/* <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/30 dark:bg-white/5 rounded-full blur-3xl"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-300/30 dark:bg-white/5 rounded-full blur-3xl"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gray-300/20 dark:bg-white/3 rounded-full blur-3xl"
                /> */}

                {/* Floating Data Particles */}
                {/* {particles && particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-30"
                        initial={{
                            x: p.initialX,
                            y: p.initialY,
                        }}
                        animate={{
                            x: p.animateX,
                            y: p.animateY,
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                        }}
                    />
                ))} */}

                {/* Neural Network Lines */}
                {/* <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
                    <motion.line
                        x1="10%"
                        y1="20%"
                        x2="30%"
                        y2="80%"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-400 dark:text-gray-600"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.line
                        x1="70%"
                        y1="30%"
                        x2="90%"
                        y2="70%"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-400 dark:text-gray-600"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.line
                        x1="20%"
                        y1="60%"
                        x2="80%"
                        y2="40%"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-400 dark:text-gray-600"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                </svg> */}

                {/* Binary Code Rain Effect */}
                {/* {binaryDurations && binaryDurations.map((duration, i) => (
                    <motion.div
                        key={`binary-${i}`}
                        className="absolute text-xs font-mono text-gray-400/20 dark:text-gray-400/30 select-none"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: '-10%',
                        }}
                        animate={{
                            y: ['0vh', '110vh'],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2,
                        }}
                    >
                        {Array.from({ length: 15 }, () => Math.random() > 0.5 ? '1' : '0').map((bit, idx) => (
                            <div key={idx} className="leading-6">{bit}</div>
                        ))}
                    </motion.div>
                ))} */}

                {/* Pulsing Nodes */}
                {/* {[ 
                    { top: '15%', left: '10%' },
                    { top: '25%', right: '15%' },
                    { bottom: '20%', left: '20%' },
                    { bottom: '30%', right: '10%' },
                    { top: '50%', left: '5%' },
                    { top: '60%', right: '8%' },
                ].map((pos, i) => (
                    <motion.div
                        key={`node-${i}`}
                        className="absolute w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-full"
                        style={pos}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))} */}
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <motion.div 
                className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Welcome Badge */}
                <motion.div 
                    className="flex justify-center mb-8"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6 }}
                >
                    <div className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-gray-300/30 dark:border-white/20 hover:border-gray-400/50 dark:hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-400/30 dark:via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        
                        {/* Pulsing dot */}
                        <div className="relative flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 animate-pulse" />
                            <div className="absolute w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 animate-ping" />
                        </div>
                        
                        {/* Text */}
                        <span className="relative text-sm md:text-base font-heading font-medium bg-linear-to-r from-gray-800 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent tracking-wide">
                            {heroContent.badge.text}
                        </span>
                        
                        {/* Sparkle effect */}
                        <div className="relative">
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div 
                    className="text-center max-w-5xl mx-auto mb-10"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                        <span className="block text-gray-900 dark:text-white mb-4">
                            {heroContent.heading.title}
                        </span>
                    </h1>
                    
                    {/* Description */}
                    <motion.p 
                        className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 px-4 font-body"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {heroContent.description}
                    </motion.p>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    className="flex justify-center"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href={heroContent.cta.href}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 hover:border-gray-400/70 dark:hover:border-white/50 text-gray-900 dark:text-white font-heading font-semibold rounded-xl shadow-lg shadow-gray-400/20 dark:shadow-black/40 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-black/60 transition-all duration-300 overflow-hidden"
                    >
                        {/* Glass shimmer effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        
                        <span className="relative">{heroContent.cta.text}</span>
                        <Play size={18} className="relative group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}