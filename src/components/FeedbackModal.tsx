'use client';

import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Category = 'bug' | 'suggestion' | 'other';
type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Local translations object, following the pattern already used by
 * app/ramadan/RamadanPage.tsx and the calculator feature's copy.ts —
 * small page/feature-scoped copy stays local rather than growing the
 * global src/lib/translations.ts dictionary.
 */
const COPY = {
  en: {
    title: 'Send Feedback',
    subtitle: "Tell us what's working, what's not, or what you'd like to see.",
    categoryLabel: 'What kind of feedback is this?',
    categoryBug: 'Bug report',
    categorySuggestion: 'Suggestion',
    categoryOther: 'Other',
    messageLabel: 'Your feedback',
    messagePlaceholder: 'Describe the issue or your idea…',
    emailLabel: 'Email (optional)',
    emailHelper: "Leave your email if you'd like a reply.",
    emailPlaceholder: 'you@example.com',
    submit: 'Send Feedback',
    submitting: 'Sending…',
    successTitle: 'Thank you!',
    successBody: 'Your feedback has been received.',
    close: 'Close',
    errorGeneric: 'Something went wrong — please try again.',
    errorEmpty: 'Please write a message before sending.',
  },
  fr: {
    title: 'Envoyer un avis',
    subtitle: 'Dites-nous ce qui fonctionne, ce qui ne fonctionne pas, ou ce que vous aimeriez voir.',
    categoryLabel: 'Quel type de retour est-ce ?',
    categoryBug: 'Signaler un bug',
    categorySuggestion: 'Suggestion',
    categoryOther: 'Autre',
    messageLabel: 'Votre avis',
    messagePlaceholder: 'Décrivez le problème ou votre idée…',
    emailLabel: 'E-mail (optionnel)',
    emailHelper: 'Laissez votre e-mail si vous souhaitez une réponse.',
    emailPlaceholder: 'vous@exemple.com',
    submit: 'Envoyer',
    submitting: 'Envoi…',
    successTitle: 'Merci !',
    successBody: 'Votre avis a bien été reçu.',
    close: 'Fermer',
    errorGeneric: 'Une erreur est survenue — veuillez réessayer.',
    errorEmpty: "Veuillez écrire un message avant d'envoyer.",
  },
} as const;

export function FeedbackModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { language } = useLanguage();
  const c = COPY[language === 'fr' ? 'fr' : 'en'];

  const [category, setCategory] = useState<Category>('suggestion');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  function resetAndClose() {
    onClose();
    setStatus('idle');
    setMessage('');
    setEmail('');
    setCategory('suggestion');
    setErrorMsg('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) {
      setErrorMsg(c.errorEmpty);
      return;
    }
    setErrorMsg('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/v1/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          message: trimmed,
          email: email.trim() || undefined,
          pageUrl: window.location.href,
          language,
        }),
      });
      const json = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !json.success) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg(c.errorGeneric);
    }
  }

  const categories: { value: Category; label: string }[] = [
    { value: 'bug', label: c.categoryBug },
    { value: 'suggestion', label: c.categorySuggestion },
    { value: 'other', label: c.categoryOther },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
      onClick={resetAndClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white shadow-2xl dark:bg-slate-800 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{c.title}</h2>
          <button
            onClick={resetAndClose}
            aria-label={c.close}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{c.successTitle}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{c.successBody}</p>
              <button
                onClick={resetAndClose}
                className="mt-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
              >
                {c.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">{c.subtitle}</p>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.categoryLabel}</span>
                <div className="flex gap-2">
                  {categories.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setCategory(opt.value)}
                      className={`flex-1 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                        category === opt.value
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.messageLabel}</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.messagePlaceholder}
                  rows={4}
                  maxLength={2000}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.emailLabel}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400">{c.emailHelper}</span>
              </label>

              {errorMsg && <p className="text-sm text-red-500 dark:text-red-400">{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === 'submitting' || !message.trim()}
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40"
              >
                {status === 'submitting' ? c.submitting : c.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackModal;
