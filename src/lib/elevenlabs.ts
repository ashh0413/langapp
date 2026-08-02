// ============================================
// French Learning App — ElevenLabs Audio Client
// ============================================

// ElevenLabs API configuration
const ELEVENLABS_API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || '';
const ELEVENLABS_VOICE_ID = process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID || 'VR6AewLTigWG4xSOukaG'; // French voice default
const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';

// Audio state management
export type AudioState = 'idle' | 'loading' | 'playing' | 'error';

export interface AudioResult {
  success: boolean;
  audioUrl?: string;
  error?: string;
}

// Check if ElevenLabs is configured
export function isElevenLabsConfigured(): boolean {
  return Boolean(ELEVENLABS_API_KEY);
}

// Generate text-to-speech audio using ElevenLabs API
export async function generateAudio(text: string): Promise<AudioResult> {
  // If no API key, return error
  if (!ELEVENLABS_API_KEY) {
    console.warn('ElevenLabs API key not configured');
    return { success: false, error: 'Audio not configured' };
  }

  try {
    const response = await fetch(`${ELEVENLABS_BASE_URL}/text-to-speech/${ELEVENLABS_VOICE_ID}/stream`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status}`);
    }

    // Convert response to blob URL
    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);

    return { success: true, audioUrl };
  } catch (error) {
    console.error('Failed to generate audio:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate audio'
    };
  }
}

// Preload audio for multiple texts
export async function preloadAudio(texts: string[]): Promise<Map<string, string>> {
  const audioMap = new Map<string, string>();

  // Process in parallel with a limit
  const batchSize = 3;
  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (text) => {
        const result = await generateAudio(text);
        return { text, result };
      })
    );

    results.forEach(({ text, result }) => {
      if (result.success && result.audioUrl) {
        audioMap.set(text, result.audioUrl);
      }
    });
  }

  return audioMap;
}

// Clean up blob URLs to prevent memory leaks
export function revokeAudioUrl(url: string): void {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}
