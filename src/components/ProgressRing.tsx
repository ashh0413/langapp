'use client';

import { motion } from 'framer-motion';

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: 'blue' | 'green' | 'purple' | 'orange';
  showLabel?: boolean;
  className?: string;
}

const colorMap = {
  blue: '#007AFF',
  green: '#34C759',
  purple: '#AF52DE',
  orange: '#FF9F0A',
};

export function ProgressRing({
  progress,
  size = 80,
  strokeWidth = 6,
  color = 'blue',
  showLabel = true,
  className = '',
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E5EA"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorMap[color]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </svg>
      {/* Center Label */}
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#1C1C1E]">
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );
}
