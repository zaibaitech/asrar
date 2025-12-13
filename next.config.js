/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Security Headers - DevSecOps Best Practices
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy - Prevent XSS and data injection attacks
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://asrar.app.com",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://*.vercel.live https://asrar.app.com", // Next.js requires unsafe-eval and unsafe-inline, allow Vercel Live
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://asrar.app.com", // Allow Google Fonts
              "img-src 'self' data: https: https://asrar.app.com",
              "font-src 'self' data: https://fonts.gstatic.com https://asrar.app.com", // Allow Google Fonts
              "connect-src 'self' https://azjgakbhovanweelkezt.supabase.co https://api.supabase.co https://generativelanguage.googleapis.com https://nominatim.openstreetmap.org https://vercel.live https://*.vercel.live https://asrar.app.com", // Add Supabase, Google AI, OpenStreetMap Nominatim, Vercel Live, and production domain
              "frame-ancestors 'none'", // Prevent clickjacking
              "base-uri 'self' https://asrar.app.com",
              "form-action 'self' https://asrar.app.com",
            ].join('; '),
          },
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Hide Next.js powered-by header
          {
            key: 'X-Powered-By',
            value: '', // Remove the header by setting empty value
          },
          // Permissions Policy - Restrict browser features
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=(self)',
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'gyroscope=()',
              'accelerometer=()',
            ].join(', '),
          },
          // Cross-Origin policies - Relaxed for Vercel Live compatibility
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
          // Referrer Policy - Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Strict Transport Security - Enforce HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ]
  },
  
  // Remove X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
