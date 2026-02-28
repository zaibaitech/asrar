/**
 * Share Button Component
 * =======================
 * Button to share progress on social media
 */

'use client';

import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Twitter as X, Facebook, Send } from 'lucide-react';
import type { ShareData } from '../sharing';
import { shareContent, getSocialShareUrls } from '../sharing';

interface ShareButtonProps {
  shareData: ShareData;
  language?: 'en' | 'fr';
  variant?: 'icon' | 'button' | 'full';
  className?: string;
}

const translations = {
  en: {
    share: 'Share',
    shareProgress: 'Share Progress',
    copied: 'Copied!',
    linkCopied: 'Link copied to clipboard',
    shareVia: 'Share via',
    whatsapp: 'WhatsApp',
    twitter: 'X (Twitter)',
    facebook: 'Facebook',
    telegram: 'Telegram',
  },
  fr: {
    share: 'Partager',
    shareProgress: 'Partager le Progrès',
    copied: 'Copié!',
    linkCopied: 'Lien copié dans le presse-papiers',
    shareVia: 'Partager via',
    whatsapp: 'WhatsApp',
    twitter: 'X (Twitter)',
    facebook: 'Facebook',
    telegram: 'Telegram',
  },
};

export function ShareButton({ 
  shareData, 
  language = 'en', 
  variant = 'button',
  className = '',
}: ShareButtonProps) {
  const t = translations[language];
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const result = await shareContent(shareData);
    
    if (result.success && result.method === 'clipboard') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    
    setShowMenu(false);
  };

  const handleSocialShare = (platform: 'whatsapp' | 'twitter' | 'facebook' | 'telegram') => {
    const urls = getSocialShareUrls(shareData);
    window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=600');
    setShowMenu(false);
  };

  const baseClasses = 'inline-flex items-center gap-2 transition-all duration-200';
  
  const variantClasses = {
    icon: 'p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700',
    button: 'px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium',
    full: 'px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg',
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          if (typeof navigator !== 'undefined' && 'share' in navigator) {
            handleShare();
          } else {
            setShowMenu(!showMenu);
          }
        }}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        title={t.shareProgress}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            {variant !== 'icon' && <span>{t.copied}</span>}
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4" />
            {variant !== 'icon' && <span>{variant === 'full' ? t.shareProgress : t.share}</span>}
          </>
        )}
      </button>

      {/* Share menu dropdown (only shown if no native share) */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50">
            <p className="text-xs text-slate-500 dark:text-slate-400 px-3 py-2 font-medium">
              {t.shareVia}
            </p>
            
            <button
              onClick={() => handleSocialShare('whatsapp')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-left transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {t.whatsapp}
              </span>
            </button>
            
            <button
              onClick={() => handleSocialShare('twitter')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors"
            >
              <X className="w-5 h-5 text-slate-900 dark:text-white" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {t.twitter}
              </span>
            </button>
            
            <button
              onClick={() => handleSocialShare('facebook')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-left transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {t.facebook}
              </span>
            </button>
            
            <button
              onClick={() => handleSocialShare('telegram')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 text-left transition-colors"
            >
              <Send className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {t.telegram}
              </span>
            </button>

            <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
              <button
                onClick={handleShare}
                className="w-full px-3 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
              >
                {t.linkCopied}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
