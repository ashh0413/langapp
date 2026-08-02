'use client';

import { motion } from 'framer-motion';
import type { GradeQuality } from '@/types';

interface GradeButtonsProps {
  onGrade: (quality: GradeQuality) => void;
  disabled?: boolean;
}

const grades: { quality: GradeQuality; label: string; sublabel: string; color: string }[] = [
  { quality: 1, label: 'Again', sublabel: '< 1 day', color: '#FF3B30' },
  { quality: 2, label: 'Hard', sublabel: '~1 day', color: '#FF9F0A' },
  { quality: 3, label: 'Good', sublabel: '~3 days', color: '#34C759' },
  { quality: 4, label: 'Easy', sublabel: '~7 days', color: '#007AFF' },
];

export function GradeButtons({ onGrade, disabled = false }: GradeButtonsProps) {
  return (
    <motion.div
      className="grid grid-cols-4 gap-2 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {grades.map((grade, index) => (
        <motion.button
          key={grade.quality}
          onClick={() => onGrade(grade.quality)}
          disabled={disabled}
          className={`
            flex flex-col items-center justify-center
            py-4 px-2 rounded-2xl
            bg-[var(--bg-secondary)] border border-[var(--border)]
            transition-all duration-200
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 hover:border-[var(--accent)]'}
          `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          whileTap={disabled ? {} : { scale: 0.95 }}
        >
          <span
            className="text-base font-semibold mb-1"
            style={{ color: disabled ? '#8E8E93' : grade.color }}
          >
            {grade.label}
          </span>
          <span className="text-xs text-[var(--text-tertiary)]">
            {grade.sublabel}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}
