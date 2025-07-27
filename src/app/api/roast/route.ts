import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { resume } = await req.json();

    if (!resume) {
      return NextResponse.json({ result: 'No resume provided.' }, { status: 400 });
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
        { role: 'system', content: 'You are an expert tech recruiter who gives ruthless but helpful feedback.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 500,
    });

    const roast = response.choices[0].message.content;
    return NextResponse.json({ result: roast });
  } catch (error) {
    console.error('[ROAST_ERROR]', error);
    return NextResponse.json({ result: 'Server error. Try again later.' }, { status: 500 });
  }
}
