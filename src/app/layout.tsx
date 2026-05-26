export const metadata = {
  title: 'OpenMetrics — Build in Public Dashboard',
  description: 'Auto-updating public dashboard for indie makers. Connect Stripe, Gumroad, RevenueCat and Google Analytics in one place. Build in public with transparency.',
  keywords: ['indie maker', 'dashboard', 'stripe', 'gumroad', 'revenuecat', 'metrics', 'build in public', 'open startup', 'analytics', 'transparent metrics'],
  authors: [{ name: 'OpenMetrics' }],
  creator: 'OpenMetrics',
  metadataBase: new URL('https://oversea-starups.github.io'),
  alternates: {
    canonical: '/build-in-public-dashboard',
  },
  openGraph: {
    title: 'OpenMetrics — Build in Public Dashboard',
    description: 'Auto-updating public dashboard for indie makers. Connect Stripe, Gumroad, and Google Analytics.',
    url: 'https://oversea-starups.github.io/build-in-public-dashboard',
    siteName: 'OpenMetrics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenMetrics — Build in Public Dashboard',
    description: 'Auto-updating public dashboard for indie makers.',
    creator: '@openmetrics',
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
    icon: '/build-in-public-dashboard/favicon.svg',
    shortcut: '/build-in-public-dashboard/favicon.svg',
    apple: '/build-in-public-dashboard/favicon.svg',
  },
  manifest: '/build-in-public-dashboard/manifest.json',
  other: {
    'referrer': 'strict-origin-when-cross-origin',
    'theme-color': '#10b981',
  },
}

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
              name: 'OpenMetrics',
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
        {/* Plausible Analytics — DSGVO-compliant, lightweight */}
        <script defer data-domain="oversea-starups.github.io" data-api="/build-in-public-dashboard/api/event" src="https://plausible.io/js/script.js" />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
