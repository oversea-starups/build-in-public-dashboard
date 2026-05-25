'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, Globe, Star, ArrowLeft, ExternalLink, Copy, Check } from 'lucide-react'
import Link from 'next/link'

export default function PublicPage() {
  const [metrics, setMetrics] = useState({ mrr: 4237, users: 312, visitors: 15200, stars: 89 })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('openmetrics')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed && typeof parsed === 'object' && 'mrr' in parsed) {
          setMetrics(parsed)
        }
      }
    } catch {
      // Invalid localStorage data, ignore
    }
  }, [])

  const history = [
    { month: 'Jan', mrr: 1200 }, { month: 'Feb', mrr: 1850 }, { month: 'Mar', mrr: 2400 },
    { month: 'Apr', mrr: 3100 }, { month: 'May', mrr: 3800 }, { month: 'Jun', mrr: metrics.mrr },
  ]
  const maxMrr = Math.max(...history.map(h => h.mrr))

  const copyEmbed = () => {
    const code = `<iframe src="https://oversea-starups.github.io/build-in-public-dashboard/public/demo" width="100%" height="600" frameborder="0"></iframe>`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">OpenMetrics Demo</h1>
              <p className="text-sm text-neutral-500">Building in public since 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/oversea-starups/build-in-public-dashboard" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition">
              Visit product <ExternalLink className="w-3 h-3" />
            </a>
            <button onClick={copyEmbed}
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition">
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Embed code copied' : 'Copy embed code'}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <PublicMetric icon={<TrendingUp className="w-4 h-4" />} label="MRR" value={`$${metrics.mrr.toLocaleString()}`} />
          <PublicMetric icon={<Users className="w-4 h-4" />} label="Users" value={metrics.users.toLocaleString()} />
          <PublicMetric icon={<Globe className="w-4 h-4" />} label="Visitors/mo" value={`${(metrics.visitors / 1000).toFixed(1)}K`} />
          <PublicMetric icon={<Star className="w-4 h-4" />} label="GitHub Stars" value={metrics.stars.toString()} />
        </div>

        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 mb-8">
          <h2 className="text-lg font-semibold text-white mb-6">Revenue growth</h2>
          <div className="flex items-end gap-3 h-48">
            {history.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-emerald-500/20 rounded-t-lg relative overflow-hidden" style={{ height: `${(h.mrr / maxMrr) * 100}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-emerald-500/60 rounded-t-lg" style={{ height: '100%' }} />
                </div>
                <span className="text-xs text-neutral-500">{h.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Recent milestones</h2>
          <div className="space-y-4">
            {[
              { date: 'Jun 2026', text: 'Crossed $4K MRR' },
              { date: 'May 2026', text: '100 GitHub stars' },
              { date: 'Apr 2026', text: 'Launched on Product Hunt' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs text-neutral-500 w-20 shrink-0">{m.date}</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-sm text-neutral-300">{m.text}</span>
              </div>
            ))}
          </div>
        </div>

        <footer className="text-center text-xs text-neutral-600 pt-8 border-t border-neutral-800">
          Powered by <Link href="/" className="hover:text-neutral-400 transition">OpenMetrics</Link> — <a href="https://github.com/oversea-starups/build-in-public-dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition">Build in public</a>
        </footer>
      </div>
    </main>
  )
}

function PublicMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-center">
      <div className="flex justify-center text-neutral-500 mb-2">{icon}</div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-neutral-500 mt-1">{label}</p>
    </div>
  )
}
