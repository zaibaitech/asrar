import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || process.env.EXPO_PUBLIC_GROQ_API_KEY || ''
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY && !process.env.EXPO_PUBLIC_GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key not configured.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { message, calculationData, analysisType, language = 'ar', conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const isArabic = language === 'ar';

    // Build context-aware system prompt
    const systemPrompt = buildSystemPrompt(calculationData, analysisType, isArabic);

    // Build conversation messages
    const messages: any[] = [
      {
        role: 'system',
        content: systemPrompt,
      },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      {
        role: 'user',
        content: message,
      },
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 300, // Limit to concise responses
      top_p: 0.9,
    });

    const response = chatCompletion.choices[0]?.message?.content || '';

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get response' },
      { status: 500 }
    );
  }
}

function buildSystemPrompt(data: any, type: string, isArabic: boolean): string {
  const basePrompt = isArabic
    ? `أنت مساعد روحاني خبير في علم الحروف والأسرار الروحانية الإسلامية. أنت تساعد المستخدمين على فهم نتائجهم بشكل أعمق والإجابة على أسئلتهم.

المبادئ الأساسية:
- كن دافئاً ومتعاطفاً ومفيداً
- قدم إجابات واضحة ومختصرة وموجزة (2-4 جمل كحد أقصى)
- ركز فقط على النقاط الأكثر صلة بالسؤال
- تجنب التكرار أو التفاصيل الزائدة
- استخدم الحكمة الإسلامية باختصار
- ركز على التطبيق العملي والنمو الروحي
- كن صادقاً ومباشراً
- تجنب التنبؤات المحددة أو الوعود المطلقة

معلومات نتائج المستخدم:
${JSON.stringify(data, null, 2)}

نوع التحليل: ${type}

مهم جداً: اجعل إجاباتك مختصرة وموجزة ومركزة. لا تكرر المعلومات. أجب مباشرة على السؤال المحدد فقط.`
    : `You are an expert spiritual assistant specialized in Islamic spiritual sciences and numerology (Ilm al-Huruf). You help users understand their results more deeply and answer their questions.

Core Principles:
- Be warm, empathetic, and helpful
- Provide clear, concise, and brief answers (2-4 sentences maximum)
- Focus only on the most relevant points to the question
- Avoid repetition or excessive details
- Use Islamic wisdom briefly
- Focus on practical application and spiritual growth
- Be honest and direct
- Avoid specific predictions or absolute promises

User's Results Information:
${JSON.stringify(data, null, 2)}

Analysis Type: ${type}

VERY IMPORTANT: Keep your answers short, concise, and focused. Don't repeat information. Answer only the specific question asked.`;

  return basePrompt;
}
