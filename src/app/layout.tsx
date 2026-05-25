export const metadata = {
  title: 'OpenMetrics — Build in Public Dashboard',
  description: 'Auto-updating public dashboard for indie makers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
