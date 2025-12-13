'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, LogIn, UserPlus, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'signin' | 'signup' | 'reset';

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithEmail, signUpWithEmail, resetPassword, isConfigured } = useAuth();
  const [mode, setMode] = useState<AuthMode>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  if (!isConfigured) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Authentication Not Configured
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="text-slate-600 dark:text-slate-300 space-y-2">
            <p>Supabase authentication is not configured for this application.</p>
            <p className="text-sm">To enable authentication, please set up Supabase and add your credentials to the environment variables.</p>
          </div>
        </div>
      </div>
    );
  }

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
            onClose();
            setEmail('');
            setPassword('');
            setSuccess(null);
            // Redirect to profile setup
            window.location.href = '/profile/setup';
          }, 1500);
        }
      } else {
        const { error } = await signInWithEmail(email, password);
        if (error) {
          setError(error.message || 'Failed to sign in');
        } else {
          setSuccess('Successfully signed in!');
          setTimeout(() => {
            onClose();
            setEmail('');
            setPassword('');
            setSuccess(null);
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

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError(null);
    setSuccess(null);
  };

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    resetForm();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 max-w-md w-full my-8" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {mode === 'signin' && 'Sign In'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'reset' && 'Reset Password'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-700 dark:text-green-300">{success}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password Field (not shown for reset) */}
          {mode !== 'reset' && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
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
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
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
        <div className="mt-6 text-center space-y-3">
          {mode === 'signin' && (
            <>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Don't have an account?{' '}
                <button
                  onClick={() => switchMode('signup')}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <button
                  onClick={() => switchMode('reset')}
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
                onClick={() => switchMode('signin')}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          )}

          {mode === 'reset' && (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Remember your password?{' '}
              <button
                onClick={() => switchMode('signin')}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

        {/* Optional Note */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Authentication is optional. You can use this app without an account.
          </p>
        </div>
      </div>
    </div>
  );
}
