import { AlertCircle } from 'lucide-react';

/** Configuration details are for developers only: a production build must never print them. */
export function shouldShowAuthDiagnostics(nodeEnv: string | undefined = process.env.NODE_ENV): boolean {
  return nodeEnv !== 'production';
}

export const AUTH_UNAVAILABLE_MESSAGE = 'Sign-in is temporarily unavailable. Please try again later.';

/**
 * The message the form shows for a failed request. When Supabase is not configured the auth context answers
 * "Supabase not configured": developers see that, visitors of a production build see a plain message.
 */
export function authErrorMessage(
  message: string | undefined,
  fallback: string,
  isConfigured: boolean,
  nodeEnv: string | undefined = process.env.NODE_ENV,
): string {
  if (!isConfigured && !shouldShowAuthDiagnostics(nodeEnv)) return AUTH_UNAVAILABLE_MESSAGE;
  return message || fallback;
}

interface Props {
  urlSet: boolean;
  keySet: boolean;
  /** Overridable for tests; defaults to the build's NODE_ENV. */
  nodeEnv?: string;
}

/** Shown on /auth when Supabase is not configured. Users get a plain message; developers get the checklist. */
export default function SupabaseConfigNotice({ urlSet, keySet, nodeEnv = process.env.NODE_ENV }: Props) {
  const diagnostics = shouldShowAuthDiagnostics(nodeEnv);
  return (
    <div
      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3"
      data-testid="supabase-config-notice"
    >
      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
      <div className="text-xs">
        {diagnostics ? (
          <>
            <p className="text-sm text-red-700 dark:text-red-300 font-medium mb-2">Supabase not configured</p>
            <div className="space-y-1 text-red-600 dark:text-red-400 font-mono">
              <div>URL: {urlSet ? '✓ Set' : '✗ Missing'}</div>
              <div>Key: {keySet ? '✓ Set' : '✗ Missing'}</div>
            </div>
          </>
        ) : (
          <p className="text-sm text-red-700 dark:text-red-300 font-medium">{AUTH_UNAVAILABLE_MESSAGE}</p>
        )}
      </div>
    </div>
  );
}
