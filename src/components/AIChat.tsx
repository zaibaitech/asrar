'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, Sparkles, Bot, User } from 'lucide-react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  calculationData: any;
  analysisType: 'name-destiny' | 'life-path' | 'compatibility' | 'divine-timing' | 'daily-reflection' | 'general';
  language?: 'ar' | 'en' | 'fr';
  position?: 'bottom-right' | 'bottom-left';
}

export default function AIChat({
  calculationData,
  analysisType,
  language = 'en',
  position = 'bottom-right',
}: AIChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isArabic = language === 'ar';
  const isFrench = language === 'fr';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize with welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      let content = 'Peace be upon you! 👋\n\nI\'m Cherno, your intelligent spiritual assistant. I can help you understand your results more deeply and answer any questions you have.\n\nHow can I help you today?';
      
      if (isArabic) {
        content = 'السلام عليكم! 👋\n\nأنا شرنو، مساعدك الروحاني الذكي. يمكنني مساعدتك في فهم نتائجك بشكل أعمق والإجابة على أي أسئلة لديك.\n\nكيف يمكنني مساعدتك اليوم؟';
      } else if (isFrench) {
        content = 'Paix sur vous ! 👋\n\nJe suis Cherno, votre assistant spirituel intelligent. Je peux vous aider à comprendre vos résultats plus profondément et répondre à toutes vos questions.\n\nComment puis-je vous aider aujourd\'hui ?';
      }
      
      const welcomeMessage: Message = {
        role: 'assistant',
        content,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, isArabic, isFrench]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          calculationData,
          analysisType,
          language,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      let errorContent = 'Sorry, an error occurred. Please try again.';
      if (isArabic) {
        errorContent = 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.';
      } else if (isFrench) {
        errorContent = 'Désolé, une erreur s\'est produite. Veuillez réessayer.';
      }
      const errorMessage: Message = {
        role: 'assistant',
        content: errorContent,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };

  // Define suggested questions based on analysis type
  const getSuggestedQuestions = () => {
    if (analysisType === 'divine-timing') {
      if (isArabic) {
        return [
          'ما هي الساعة الكوكبية الحالية؟',
          'ما الكوكب الذي يحكم الساعة القادمة؟',
          'ما الكوكب الذي يحكم اليوم؟',
          'هل هذا وقت جيد للدراسة؟',
        ];
      } else if (isFrench) {
        return [
          'Quelle heure planétaire est active maintenant ?',
          'Quelle planète régit la prochaine heure ?',
          'Quelle planète régit aujourd\'hui ?',
          'Est-ce un bon moment pour étudier ?',
        ];
      } else {
        return [
          'What planetary hour is active now?',
          'Which planet rules the next hour?',
          'What planet rules today?',
          'Is this a good time to study?',
        ];
      }
    }
    // Default questions for other analysis types
    if (isArabic) {
      return [
        'ما معنى هذه النتيجة؟',
        'كيف يمكنني تطبيق هذا في حياتي؟',
        'ما هي نقاط قوتي؟',
      ];
    } else if (isFrench) {
      return [
        'Que signifie ce résultat ?',
        'Comment puis-je appliquer cela dans ma vie ?',
        'Quels sont mes points forts ?',
      ];
    } else {
      return [
        'What does this result mean?',
        'How can I apply this in my life?',
        'What are my strengths?',
      ];
    }
  };

  const positionClasses = position === 'bottom-right' 
    ? 'right-4 sm:right-6' 
    : 'left-4 sm:left-6';

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 group`}
          aria-label={isArabic ? 'افتح شرنو' : isFrench ? 'Ouvrir Cherno' : 'Open Cherno'}
        >
          <MessageCircle className="w-6 h-6" />
          <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap">
            {isArabic ? 'اسألني' : isFrench ? 'Posez-moi' : 'Ask me'}
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-200 dark:border-purple-700`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/images/cherno-avatar.jpeg"
                    alt="Cherno"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {isArabic ? 'شرنو' : 'Cherno'}
                </h3>
                <p className="text-xs opacity-90">
                  {isArabic ? 'متصل' : isFrench ? 'En ligne' : 'Online'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label={isArabic ? 'إغلاق' : isFrench ? 'Fermer' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50/50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full overflow-hidden ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    : 'bg-white dark:bg-slate-700 border-2 border-purple-300 dark:border-purple-600'
                }`}>
                  {message.role === 'user' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <Image
                      src="/images/cherno-avatar.jpeg"
                      alt="Cherno"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200'
                  } rounded-2xl p-3 shadow-md`}
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.role === 'user' ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString(isArabic ? 'ar' : 'en', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Suggested Questions - Show after welcome message */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">
                  {isArabic ? 'أسئلة مقترحة:' : isFrench ? 'Questions suggérées :' : 'Suggested questions:'}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {getSuggestedQuestions().slice(0, 4).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInputMessage(question);
                        // Auto-send after a brief delay to show the question in input
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-xs px-3 py-2 bg-white dark:bg-slate-700 hover:bg-purple-50 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 rounded-lg border border-purple-200 dark:border-purple-700 transition-all duration-200 hover:shadow-md hover:border-purple-400 dark:hover:border-purple-500"
                      dir={isArabic ? 'rtl' : 'ltr'}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-white dark:bg-slate-700 border-2 border-purple-300 dark:border-purple-600">
                  <Image
                    src="/images/cherno-avatar.jpeg"
                    alt="Cherno"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white dark:bg-slate-700 rounded-2xl p-3 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-purple-200 dark:border-purple-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isArabic ? 'اكتب سؤالك هنا...' : isFrench ? 'Tapez votre question ici...' : 'Type your question...'}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                dir={isArabic ? 'rtl' : 'ltr'}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                aria-label={isArabic ? 'إرسال' : isFrench ? 'Envoyer' : 'Send'}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              {isArabic 
                ? 'اضغط Enter للإرسال'
                : isFrench
                ? 'Appuyez sur Entrée pour envoyer'
                : 'Press Enter to send'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
