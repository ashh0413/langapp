const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';
const MAX_TEXT_LENGTH = 1000;

export async function POST(request: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;

  if (!apiKey || !voiceId) {
    return Response.json(
      { error: 'ElevenLabs API key or voice ID is not configured' },
      { status: 503 }
    );
  }

  let body: { text?: unknown };

  try {
    body = (await request.json()) as { text?: unknown };
  } catch {
    return Response.json({ error: 'Invalid JSON request' }, { status: 400 });
  }

  const text = typeof body.text === 'string' ? body.text.trim() : '';

  if (!text) {
    return Response.json({ error: 'Text is required' }, { status: 400 });
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return Response.json(
      { error: `Text must be ${MAX_TEXT_LENGTH} characters or fewer` },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${ELEVENLABS_BASE_URL}/text-to-speech/${encodeURIComponent(voiceId)}/stream`,
      {
        method: 'POST',
        headers: {
          Accept: 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
        cache: 'no-store',
      }
    );

    if (!response.ok || !response.body) {
      console.error('ElevenLabs request failed with status:', response.status);
      return Response.json({ error: 'ElevenLabs could not generate audio' }, { status: 502 });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('content-type') ?? 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('ElevenLabs request failed:', error);
    return Response.json({ error: 'Audio service is unavailable' }, { status: 502 });
  }
}
