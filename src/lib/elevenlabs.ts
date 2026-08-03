// Client-side helper for the app's server-side ElevenLabs proxy.

export type AudioState = 'idle' | 'loading' | 'playing' | 'error';

export interface AudioResult {
  success: boolean;
  audioUrl?: string;
  error?: string;
}

export async function generateAudio(text: string): Promise<AudioResult> {
  if (!text.trim()) {
    return { success: false, error: 'Text is required' };
  }

  try {
    const response = await fetch('/api/audio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      return {
        success: false,
        error: body?.error ?? `Audio request failed (${response.status})`,
      };
    }

    const blob = await response.blob();
    return { success: true, audioUrl: URL.createObjectURL(blob) };
  } catch (error) {
    console.error('Failed to generate audio:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate audio',
    };
  }
}

export async function preloadAudio(texts: string[]): Promise<Map<string, string>> {
  const audioMap = new Map<string, string>();
  const batchSize = 3;

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (text) => ({ text, result: await generateAudio(text) }))
    );

    results.forEach(({ text, result }) => {
      if (result.success && result.audioUrl) {
        audioMap.set(text, result.audioUrl);
      }
    });
  }

  return audioMap;
}

export function revokeAudioUrl(url: string): void {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}
