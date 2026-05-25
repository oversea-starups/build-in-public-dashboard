'use client'

import { useState } from 'react'
import { ArrowLeft, Save, TrendingUp, Users, Globe, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    mrr: 4237,
    users: 312,
    visitors: 15200,
    stars: 89,
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem('openmetrics', JSON.stringify(metrics))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      <nav className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> OpenMetrics
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
            onChange={(v) => setMetrics({ ...metrics, mrr: v })} />
          <MetricInput label="Total Users" icon={<Users className="w-4 h-4" />} value={metrics.users}
            onChange={(v) => setMetrics({ ...metrics, users: v })} />
          <MetricInput label="Monthly Visitors" icon={<Globe className="w-4 h-4" />} value={metrics.visitors}
            onChange={(v) => setMetrics({ ...metrics, visitors: v })} />
          <MetricInput label="GitHub Stars" icon={<Star className="w-4 h-4" />} value={metrics.stars}
            onChange={(v) => setMetrics({ ...metrics, stars: v })} />
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
      </div>
    </main>
  )
}

function MetricInput({ label, icon, value, onChange }: { label: string; icon: React.ReactNode; value: number; onChange: (v: number) => void }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50">
      <label className="flex items-center gap-2 text-sm text-neutral-400 mb-2">{icon} {label}</label>
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))}
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
