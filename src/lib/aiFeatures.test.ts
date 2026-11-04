import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { AI_CHAT_ENABLED } from './aiFeatures';
import { POST as chat } from '../../app/api/ai-chat/route';
import { POST as analysis } from '../../app/api/ai-analysis/route';

const req = () => new NextRequest('http://localhost/api/x', { method: 'POST', body: '{"message":"hi"}' });

describe('AI features are off by default', () => {
  it('flag is off when NEXT_PUBLIC_AI_CHAT_ENABLED is unset', () => {
    expect(AI_CHAT_ENABLED).toBe(false);
  });
  it('/api/ai-chat and /api/ai-analysis return 404 while disabled', async () => {
    expect((await chat(req())).status).toBe(404);
    expect((await analysis(req())).status).toBe(404);
  });
});
