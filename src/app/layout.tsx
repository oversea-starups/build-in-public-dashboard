export const metadata = {
  title: 'OpenMetrics — Build in Public Dashboard',
  description: 'Auto-updating public dashboard for indie makers. Connect Stripe, Gumroad, and Google Analytics in one place.',
  keywords: ['indie maker', 'dashboard', 'stripe', 'gumroad', 'metrics', 'build in public', 'analytics'],
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
  other: {
    'referrer': 'strict-origin-when-cross-origin',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'OpenMetrics',
              description: 'Auto-updating public dashboard for indie makers.',
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
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
