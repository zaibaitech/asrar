'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

// Microsoft Clarity (session insights). Masking is set to Strict in the
// Clarity project; personal-data inputs also carry data-clarity-mask="true".
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'yvhwo8871c'

const EXCLUDED_PREFIXES = ['/api', '/admin']

export default function ClarityScript() {
  const pathname = usePathname() || '/'
  if (!CLARITY_ID) return null
  if (EXCLUDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null
  }
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", ${JSON.stringify(CLARITY_ID)});
      `}
    </Script>
  )
}
