'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { generateAudio, isElevenLabsConfigured } from '@/lib/elevenlabs';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Size configurations
const sizeConfig = {
  sm: {
    button: 'w-8 h-8',
    icon: 'w-4 h-4',
    padding: 'p-1.5',
  },
  md: {
    button: 'w-12 h-12',
    icon: 'w-5 h-5',
    padding: 'p-2',
  },
  lg: {
    button: 'w-14 h-14',
    icon: 'w-6 h-6',
    padding: 'p-2.5',
  },
};

export function AudioButton({ text, size = 'md', className = '' }: AudioButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTextRef = useRef<string>('');

  const config = sizeConfig[size];

  const handlePlay = useCallback(async () => {
    // If already playing this text, stop it
    if (state === 'playing' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setState('idle');
      return;
    }

    // If clicking same text while loading, ignore
    if (state === 'loading' && currentTextRef.current === text) return;

    setState('loading');
    currentTextRef.current = text;

    // For demo purposes without API key, use Web Speech API
    if (!isElevenLabsConfigured()) {
      // Fallback to browser's Speech Synthesis
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9;

        utterance.onstart = () => setState('playing');
        utterance.onend = () => setState('idle');
        utterance.onerror = () => setState('error');

        speechSynthesis.speak(utterance);
        return;
      }
    }

    // Use ElevenLabs API
    const result = await generateAudio(text);

    if (result.success && result.audioUrl) {
      const audio = new Audio(result.audioUrl);
      audioRef.current = audio;

      audio.onplay = () => setState('playing');
      audio.onended = () => {
        setState('idle');
        // Clean up blob URL
        URL.revokeObjectURL(result.audioUrl!);
      };
      audio.onerror = () => setState('error');

      audio.play();
    } else {
      setState('error');
      // Fallback to Web Speech API on error
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
        setState('idle');
      }
    }
  }, [state, text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <motion.button
      onClick={handlePlay}
      disabled={state === 'loading'}
      className={`
        ${config.button}
        ${config.padding}
        rounded-full
        flex items-center justify-center
        transition-colors duration-200
        ${state === 'idle' || state === 'error'
          ? 'bg-[#007AFF] hover:bg-[#0A84FF] active:bg-[#0056B3]'
          : state === 'loading'
            ? 'bg-[#007AFF]/70'
            : 'bg-[#34C759]'
        }
        text-white
        disabled:cursor-not-allowed
        ${className}
      `}
      whileTap={{ scale: 0.95 }}
      aria-label={state === 'playing' ? 'Stop audio' : 'Play audio'}
    >
      {state === 'loading' ? (
        <motion.div
          className={config.icon}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.4 31.4" />
          </svg>
        </motion.div>
      ) : state === 'playing' ? (
        <svg className={config.icon} viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : state === 'error' ? (
        <svg className={config.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg className={config.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" />
        </svg>
      )}
    </motion.button>
  );
}
