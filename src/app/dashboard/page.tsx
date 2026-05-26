'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Save, TrendingUp, Users, Globe, Star, ArrowRight, Plug, CreditCard, ShoppingBag, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    mrr: 4237,
    users: 312,
    visitors: 15200,
    stars: 89,
  })
  const [saved, setSaved] = useState(false)
  const [sources, setSources] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const saved = localStorage.getItem('indiemetrics')
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

  const handleSave = () => {
    try {
      localStorage.setItem('openmetrics', JSON.stringify(metrics))
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch {
      // localStorage not available
    }
  }

  const toggleSource = (key: string) => {
    setSources(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const dataSources = [
    { key: 'stripe', name: 'Stripe', icon: <CreditCard className="w-5 h-5" />, desc: 'Revenue & MRR', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { key: 'gumroad', name: 'Gumroad', icon: <ShoppingBag className="w-5 h-5" />, desc: 'Sales & customers', color: 'text-pink-400', bg: 'bg-pink-500/10' },
    { key: 'revenuecat', name: 'RevenueCat', icon: <Smartphone className="w-5 h-5" />, desc: 'Mobile subscriptions', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  ]

  return (
    <main className="min-h-screen bg-neutral-950">
      <nav className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> IndieMetrics
          </Link>
          <Link href="/public/demo" className="text-sm text-emerald-400 hover:text-emerald-300 transition">
            View public page →
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-white mb-2">Your Dashboard</h1>
        <p className="text-neutral-400 mb-8">Update your metrics. They'll reflect instantly on your public page.</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <MetricInput label="MRR ($)" icon={<TrendingUp className="w-4 h-4" />} value={metrics.mrr}
            onChange={(v) => setMetrics({ ...metrics, mrr: Math.max(0, v) })} />
          <MetricInput label="Total Users" icon={<Users className="w-4 h-4" />} value={metrics.users}
            onChange={(v) => setMetrics({ ...metrics, users: Math.max(0, v) })} />
          <MetricInput label="Monthly Visitors" icon={<Globe className="w-4 h-4" />} value={metrics.visitors}
            onChange={(v) => setMetrics({ ...metrics, visitors: Math.max(0, v) })} />
          <MetricInput label="GitHub Stars" icon={<Star className="w-4 h-4" />} value={metrics.stars}
            onChange={(v) => setMetrics({ ...metrics, stars: Math.max(0, v) })} />
        </div>

        <button onClick={handleSave}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg transition">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save metrics'}
        </button>

        <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
          <h3 className="font-semibold text-white mb-4">Live preview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="MRR" value={`$${metrics.mrr.toLocaleString()}`} trend="+12%" />
            <MetricCard label="Users" value={metrics.users.toLocaleString()} trend="+8%" />
            <MetricCard label="Visitors" value={`${(metrics.visitors / 1000).toFixed(1)}K`} trend="+23%" />
            <MetricCard label="Stars" value={metrics.stars.toString()} trend="+5%" />
          </div>
        </div>

        {/* Data Sources */}
        <div className="mt-12">
          <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Connect Data Sources</h3>
          <div className="space-y-3">
            {dataSources.map((source) => (
              <div key={source.key} className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${source.bg} flex items-center justify-center ${source.color}`}>
                    {source.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white">{source.name}</p>
                    <p className="text-xs text-neutral-500">{source.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSource(source.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                    sources.has(source.key)
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  {sources.has(source.key) ? <><Plug className="w-3.5 h-3.5" /> Connected</> : 'Connect'}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-600 mt-3">Data sources sync automatically once connected. API keys are stored securely in your browser.</p>
        </div>

        {/* Embed Code */}
        <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
          <h3 className="font-semibold text-white mb-4">Embed on your site</h3>
          <p className="text-sm text-neutral-400 mb-3">Copy this code to embed your public dashboard:</p>
          <pre className="p-4 bg-neutral-950 rounded-lg text-xs text-neutral-400 overflow-x-auto font-mono border border-neutral-800">
            {`<iframe src="https://indiemetrics.com/public/demo" width="100%" height="600" frameborder="0"></iframe>`}
          </pre>
        </div>
      </div>
    </main>
  )
}

function MetricInput({ label, icon, value, onChange }: { label: string; icon: React.ReactNode; value: number; onChange: (v: number) => void }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50">
      <label className="flex items-center gap-2 text-sm text-neutral-400 mb-2">{icon} {label}</label>
      <input type="number" min={0} value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-emerald-500/50 text-lg font-semibold" />
    </div>
  )
}

function MetricCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="p-4 rounded-lg bg-neutral-800/50">
      <p className="text-xs text-neutral-500 mb-1">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-emerald-400 mt-1">{trend}</p>
    </div>
  )
}
