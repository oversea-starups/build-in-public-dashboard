'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, Globe, Star, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function PublicPage() {
  const [metrics, setMetrics] = useState({ mrr: 4237, users: 312, visitors: 15200, stars: 89 })

  useEffect(() => {
    const saved = localStorage.getItem('openmetrics')
    if (saved) setMetrics(JSON.parse(saved))
  }, [])

  const history = [
    { month: 'Jan', mrr: 1200 }, { month: 'Feb', mrr: 1850 }, { month: 'Mar', mrr: 2400 },
    { month: 'Apr', mrr: 3100 }, { month: 'May', mrr: 3800 }, { month: 'Jun', mrr: metrics.mrr },
  ]
  const maxMrr = Math.max(...history.map(h => h.mrr))

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
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition">
            Visit product <ExternalLink className="w-3 h-3" />
          </a>
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

        <footer className="text-center text-xs text-neutral-600 pt-8 border-t border-neutral-800">
          Powered by OpenMetrics — Build in public
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
