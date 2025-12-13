'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { Mail, Lock, UserPlus, LogIn, Eye, EyeOff, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AsrarLogo from '@/src/components/AsrarLogo';

type AuthMode = 'signin' | 'signup' | 'reset';

export default function AuthPage() {
  const router = useRouter();
  const { signInWithEmail, signUpWithEmail, resetPassword } = useAuth();
  const { t } = useLanguage();
  
  const [mode, setMode] = useState<AuthMode>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      if (mode === 'reset') {
        const { error } = await resetPassword(email);
        if (error) {
          setError(error.message || 'Failed to send password reset email');
        } else {
          setSuccess('Password reset email sent! Check your inbox.');
          setTimeout(() => {
            setMode('signin');
            setSuccess(null);
          }, 3000);
        }
      } else if (mode === 'signup') {
        const { error } = await signUpWithEmail(email, password);
        if (error) {
          setError(error.message || 'Failed to create account');
        } else {
          setSuccess('Account created! Setting up your profile...');
          setTimeout(() => {
            router.push('/profile/setup');
          }, 1500);
        }
      } else {
        const { error } = await signInWithEmail(email, password);
        if (error) {
          setError(error.message || 'Failed to sign in');
        } else {
          setSuccess('Successfully signed in!');
          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Auth Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex justify-center">
              <AsrarLogo size={64} variant="icon" element="aether" animate={true} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {mode === 'signin' && 'Welcome Back'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'reset' && 'Reset Password'}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {mode === 'signin' && 'Sign in to continue your journey'}
              {mode === 'signup' && 'Join Asrār today'}
              {mode === 'reset' && 'Enter your email to reset your password'}
            </p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700 dark:text-green-300">{success}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password (not shown for reset) */}
            {mode !== 'reset' && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {mode === 'signup' && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Must be at least 6 characters
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-indigo-400 disabled:to-purple-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {mode === 'signin' && <><LogIn className="w-5 h-5" /> Sign In</>}
                  {mode === 'signup' && <><UserPlus className="w-5 h-5" /> Create Account</>}
                  {mode === 'reset' && <><Mail className="w-5 h-5" /> Send Reset Link</>}
                </>
              )}
            </button>
          </form>

          {/* Mode Switchers */}
          <div className="mt-8 text-center space-y-3">
            {mode === 'signin' && (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                  >
                    Sign up
                  </button>
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <button
                    onClick={() => setMode('reset')}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                </p>
              </>
            )}

            {mode === 'signup' && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                >
                  Sign in
                </button>
              </p>
            )}

            {mode === 'reset' && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Remember your password?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>

          {/* Optional Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              Authentication is optional. You can{' '}
              <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                use this app
              </Link>{' '}
              without an account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
