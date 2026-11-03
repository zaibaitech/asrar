'use client';

import { useState } from 'react';
import { Sparkles, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { requestAIAnalysis, parseAIResponse, type AnalysisRequest } from '../lib/ai-analysis';
import { AI_CHAT_ENABLED } from '@/src/lib/aiFeatures';

interface AIAnalysisProps {
  calculationData: any;
  analysisType: AnalysisRequest['analysisType'];
  language?: 'ar' | 'en';
  buttonText?: string;
  buttonTextEn?: string;
  className?: string;
}

// Disabled by default; see src/lib/aiFeatures.ts
const IS_AI_ENABLED = AI_CHAT_ENABLED;

export default function AIAnalysis(props: AIAnalysisProps) {
  if (!IS_AI_ENABLED) return null;
  return <AIAnalysisInner {...props} />;
}

function AIAnalysisInner({
  calculationData,
  analysisType,
  language = 'ar',
  buttonText = 'احصل على تحليل الذكاء الاصطناعي العميق ✨',
  buttonTextEn = 'Get Deep AI Analysis ✨',
  className = '',
}: AIAnalysisProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const response = await requestAIAnalysis({
        calculationData,
        analysisType,
        language,
      });

      setAnalysis(response.analysis);
      setIsExpanded(true);
    } catch (err: any) {
      setError(err.message || 'فشل في الحصول على التحليل');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const parsedAnalysis = analysis ? parseAIResponse(analysis) : null;

  return (
    <div className={`w-full ${className}`}>
      {/* Analysis Button */}
      {!analysis && (
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm transform bg-emerald-600 hover:bg-emerald-700 min-h-[44px]"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 " />
              <span>{language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>{language === 'ar' ? buttonText : buttonTextEn}</span>
            </>
          )}
        </button>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
          <p className="font-semibold">{language === 'ar' ? 'خطأ:' : 'Error:'}</p>
          <p className="text-sm mt-1">{error}</p>
          {error.includes('API key') && (
            <p className="text-xs mt-2 text-red-600">
              {language === 'ar' 
                ? 'يرجى إضافة مفتاح Gemini API في ملف .env'
                : 'Please add Gemini API key in .env file'}
            </p>
          )}
        </div>
      )}

      {/* Analysis Result */}
      {analysis && parsedAnalysis && (
        <div className="mt-4 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white/60 dark:bg-slate-800/40">
          {/* Header */}
          <div 
            className=" text-white p-4 flex items-center justify-between cursor-pointer bg-indigo-600"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              <h3 className="font-bold text-lg">
                {language === 'ar' ? 'التحليل العميق بالذكاء الاصطناعي' : 'Deep AI Analysis'}
              </h3>
            </div>
            <button className="hover:bg-white/20 p-2 rounded-xl transition-colors min-h-[44px]">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {/* Content */}
          {isExpanded && (
            <div className={`p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {parsedAnalysis.title && (
                <h4 className="text-2xl font-bold text-indigo-900 mb-6">
                  {parsedAnalysis.title}
                </h4>
              )}

              {parsedAnalysis.sections.length > 0 ? (
                <div className="space-y-6">
                  {parsedAnalysis.sections.map((section: { heading: string; content: string }, index: number) => (
                    <div key={index} className="bg-white/70 rounded-xl p-5 shadow-sm">
                      <h5 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        {section.heading}
                      </h5>
                      <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {section.content.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/70 rounded-xl p-5 shadow-sm">
                  <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {parsedAnalysis.rawText}
                  </div>
                </div>
              )}

              {/* Re-analyze Button */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-white/80 hover:bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto shadow-sm min-h-[44px]"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 " />
                      <span>{language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{language === 'ar' ? 'احصل على تحليل جديد' : 'Get New Analysis'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info Notice */}
      {!analysis && !isAnalyzing && (
        <p className={`mt-3 text-sm text-gray-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' 
            ? '💡 سيقوم الذكاء الاصطناعي بتحليل نتائجك بعمق وتقديم رؤى شخصية وإرشادات روحية مفصلة'
            : '💡 AI will deeply analyze your results and provide personalized insights and detailed spiritual guidance'}
        </p>
      )}
    </div>
  );
}
