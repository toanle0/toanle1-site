import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { rateLimit } from 'next-rate-limit';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 5 requests per minute per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(req: NextRequest) {
  try {
    // Rate limit check
    await limiter.check(req, 5, 'ROAST_API_TOKEN');

    const { resume } = await req.json();

    // Basic abuse protection
    if (!resume || resume.length > 4000) {
      return NextResponse.json({ result: 'Invalid resume. Must be under 4000 characters.' }, { status: 400 });
    }

    const prompt = `
You are a brutally honest tech recruiter. Roast this resume like Gordon Ramsay on a bad day.
Be direct, funny, but also insightful. Point out cliches, red flags, and give suggestions.

Resume:
${resume}
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert tech recruiter who gives ruthless but helpful feedback.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 500,
    });

    const roast = response.choices[0].message.content;
    return NextResponse.json({ result: roast });
  } catch (error: any) {
    if (error.status === 429) {
      return NextResponse.json({ result: 'Too many requests. Try again in a bit.' }, { status: 429 });
    }

    console.error('[ROAST_ERROR]', error);
    return NextResponse.json({ result: 'Server error. Try again later.' }, { status: 500 });
  }
}
