const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true'
const basePath = isCustomDomain ? '' : '/build-in-public-dashboard'
const domain = isCustomDomain ? 'indiemetrics.com' : 'oversea-starups.github.io'
const canonicalPath = isCustomDomain ? '/' : '/build-in-public-dashboard'

export const metadata = {
  title: 'IndieMetrics — Build in Public Dashboard',
  description: 'Auto-updating public dashboard for indie makers. Connect Stripe, Gumroad, RevenueCat and Google Analytics in one place. Build in public with transparency.',
  keywords: ['indie maker', 'dashboard', 'stripe', 'gumroad', 'revenuecat', 'metrics', 'build in public', 'open startup', 'analytics', 'transparent metrics'],
  authors: [{ name: 'IndieMetrics' }],
  creator: 'IndieMetrics',
  metadataBase: new URL(`https://${domain}`),
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: 'IndieMetrics — Build in Public Dashboard',
    description: 'Auto-updating public dashboard for indie makers. Connect Stripe, Gumroad, and Google Analytics.',
    url: `https://${domain}${canonicalPath}`,
    siteName: 'IndieMetrics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndieMetrics — Build in Public Dashboard',
    description: 'Auto-updating public dashboard for indie makers.',
    creator: '@indiemetrics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
  manifest: `${basePath}/manifest.json`,
  other: {
    'referrer': 'strict-origin-when-cross-origin',
    'theme-color': '#10b981',
  },
}

import './globals.css'
import { ErrorBoundary } from '@/components/error-boundary'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://plausible.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'IndieMetrics',
              description: 'Auto-updating public dashboard for indie makers. Build in public with transparency.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.7',
                ratingCount: '89',
              },
            }),
          }}
        />
        <script defer data-domain={domain} data-api={`${basePath}/api/event`} src="https://plausible.io/js/script.js" />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
