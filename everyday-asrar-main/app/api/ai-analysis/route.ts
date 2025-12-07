import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || process.env.EXPO_PUBLIC_GROQ_API_KEY || ''
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY && !process.env.EXPO_PUBLIC_GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key not configured. Please add GROQ_API_KEY to your .env file.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { calculationData, analysisType, language = 'ar' } = body;

    if (!calculationData) {
      return NextResponse.json(
        { error: 'Calculation data is required' },
        { status: 400 }
      );
    }

    // Build comprehensive prompt based on calculation data
    const prompt = buildAnalysisPrompt(calculationData, analysisType, language);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile', // Latest high-quality model
      temperature: 0.7,
      max_tokens: 2048,
    });

    const analysis = chatCompletion.choices[0]?.message?.content || '';

    return NextResponse.json({
      analysis,
      timestamp: new Date().toISOString(),
      analysisType,
      language
    });

  } catch (error: any) {
    console.error('AI Analysis Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate AI analysis' },
      { status: 500 }
    );
  }
}

function buildAnalysisPrompt(data: any, type: string, language: string): string {
  const isArabic = language === 'ar';
  
  let basePrompt = isArabic 
    ? 'أنت خبير في علم الحروف والأسرار الروحانية الإسلامية. قدم تحليلاً عميقاً وشاملاً بناءً على البيانات التالية:\n\n'
    : 'You are an expert in Islamic spiritual sciences, numerology (Ilm al-Huruf), and esoteric knowledge. Provide a deep, comprehensive analysis based on the following data:\n\n';

  // Add calculation data
  basePrompt += `**${isArabic ? 'بيانات الحساب' : 'Calculation Data'}:**\n`;
  basePrompt += JSON.stringify(data, null, 2);
  basePrompt += '\n\n';

  // Type-specific instructions
  switch (type) {
    case 'name-destiny':
      basePrompt += isArabic
        ? `قدم تحليلاً شاملاً يتضمن:
1. **التفسير الروحي**: معنى الأرقام والحروف في الاسم وعلاقتها بالمصير
2. **نقاط القوة والضعف**: القدرات الطبيعية والتحديات المحتملة
3. **التوجيه الحياتي**: نصائح عملية للنمو الروحي والشخصي
4. **العلاقات والتوافق**: كيف تؤثر هذه الأرقام على العلاقات
5. **التوقيت الإلهي**: أوقات مناسبة للقرارات المهمة
6. **الذكر المناسب**: أذكار وأسماء الله الحسنى المناسبة

اجعل التحليل عميقاً ومفصلاً وملهماً، مع الحفاظ على الأصالة الإسلامية.`
        : `Provide a comprehensive analysis including:
1. **Spiritual Interpretation**: Meaning of numbers and letters in the name and their relation to destiny
2. **Strengths & Weaknesses**: Natural abilities and potential challenges
3. **Life Guidance**: Practical advice for spiritual and personal growth
4. **Relationships & Compatibility**: How these numbers affect relationships
5. **Divine Timing**: Suitable times for important decisions
6. **Appropriate Dhikr**: Recommended remembrances and Divine Names

Make the analysis deep, detailed, and inspiring while maintaining Islamic authenticity.`;
      break;

    case 'life-path':
      basePrompt += isArabic
        ? `حلل مسار الحياة بعمق:
1. **رحلة الحياة الروحية**: المعنى الأعمق لمسار الحياة
2. **الدروس الرئيسية**: ما يجب تعلمه في هذه الحياة
3. **المواهب الفطرية**: القدرات والمهارات الطبيعية
4. **التحديات المتوقعة**: العقبات وكيفية تجاوزها
5. **الهدف الأسمى**: الغاية الروحية والدنيوية
6. **التطبيق العملي**: خطوات عملية للنجاح

اربط كل نقطة بالحكمة الإسلامية والأمثلة القرآنية عندما يكون ذلك مناسباً.`
        : `Analyze the life path deeply:
1. **Spiritual Life Journey**: Deeper meaning of the life path
2. **Key Lessons**: What must be learned in this life
3. **Natural Talents**: Innate abilities and skills
4. **Expected Challenges**: Obstacles and how to overcome them
5. **Ultimate Purpose**: Spiritual and worldly goals
6. **Practical Application**: Actionable steps for success

Connect each point to Islamic wisdom and Quranic examples when appropriate.`;
      break;

    case 'compatibility':
      basePrompt += isArabic
        ? `قدم تحليل توافق شامل:
1. **التوافق الروحي**: العلاقة على المستوى الروحي والعاطفي
2. **نقاط التناغم**: المجالات التي يتوافق فيها الشخصان
3. **التحديات المحتملة**: مجالات الصراع وكيفية حلها
4. **التوازن العنصري**: توافق العناصر (نار، ماء، هواء، تراب)
5. **التوصيات العملية**: نصائح لتقوية العلاقة
6. **الأذكار المشتركة**: أوراد تعزز التوافق والمحبة

كن صادقاً ومتوازناً في التحليل، مع التركيز على النمو والتطوير.`
        : `Provide comprehensive compatibility analysis:
1. **Spiritual Compatibility**: Relationship on spiritual and emotional levels
2. **Harmony Points**: Areas where the two people align
3. **Potential Challenges**: Areas of conflict and how to resolve them
4. **Elemental Balance**: Compatibility of elements (fire, water, air, earth)
5. **Practical Recommendations**: Advice to strengthen the relationship
6. **Shared Dhikr**: Spiritual practices to enhance compatibility and love

Be honest and balanced, focusing on growth and development.`;
      break;

    case 'divine-timing':
      basePrompt += isArabic
        ? `حلل التوقيت الإلهي:
1. **الطاقة الحالية**: حالة الطاقة الروحية في هذا الوقت
2. **الفرص المتاحة**: ما يمكن تحقيقه الآن
3. **المخاطر**: ما يجب تجنبه أو تأجيله
4. **التوجيه الزمني**: أفضل الأوقات للقرارات المختلفة
5. **الممارسات الروحية**: أذكار وعبادات مناسبة لهذا الوقت
6. **النصيحة الحكيمة**: إرشادات عامة للفترة القادمة

اجعل التحليل عملياً وقابلاً للتطبيق في الحياة اليومية.`
        : `Analyze divine timing:
1. **Current Energy**: State of spiritual energy at this time
2. **Available Opportunities**: What can be achieved now
3. **Risks**: What should be avoided or postponed
4. **Temporal Guidance**: Best times for different decisions
5. **Spiritual Practices**: Appropriate dhikr and worship for this time
6. **Wise Counsel**: General guidance for the coming period

Make the analysis practical and applicable to daily life.`;
      break;

    case 'daily-reflection':
      basePrompt += isArabic
        ? `قدم تأمل يومي عميق:
1. **رسالة اليوم**: الدرس الروحي الرئيسي
2. **التوجيه العملي**: كيفية تطبيق هذا في الحياة اليومية
3. **الذكر اليومي**: الأذكار المناسبة لهذا اليوم
4. **التحدي الإيجابي**: نشاط أو ممارسة للنمو
5. **الامتنان**: ما يجب الشكر عليه اليوم
6. **الدعاء**: دعاء خاص بحاجات اليوم

اجعله ملهماً ومحفزاً للعمل الصالح.`
        : `Provide deep daily reflection:
1. **Today's Message**: Main spiritual lesson
2. **Practical Guidance**: How to apply this in daily life
3. **Daily Dhikr**: Appropriate remembrance for today
4. **Positive Challenge**: Activity or practice for growth
5. **Gratitude**: What to be thankful for today
6. **Du'a**: Prayer specific to today's needs

Make it inspiring and motivating for good deeds.`;
      break;

    default:
      basePrompt += isArabic
        ? 'قدم تحليلاً شاملاً وعميقاً للبيانات، مع التركيز على الجوانب الروحية والعملية والإرشادية.'
        : 'Provide a comprehensive and deep analysis of the data, focusing on spiritual, practical, and guidance aspects.';
  }

  basePrompt += isArabic
    ? '\n\nملاحظة: يجب أن يكون التحليل باللغة العربية الفصحى، واضحاً، ومنسقاً بشكل جميل.'
    : '\n\nNote: The analysis should be clear, well-formatted, and inspiring.';

  return basePrompt;
}
