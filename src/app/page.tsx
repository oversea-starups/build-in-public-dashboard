'use client'

import { TrendingUp, Eye, Share2, ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <nav className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">OpenMetrics</span>
          </div>
          <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white transition">Dashboard</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <TrendingUp className="w-3 h-3" /> Build in public, automatically
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Your metrics.<br />
          <span className="text-emerald-400">Always current.</span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-xl mb-8">
          Stop screenshotting Stripe every Monday. Connect your revenue, traffic, and product data — 
          then share a live public dashboard that updates itself.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg transition">
            Create your dashboard <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/public/demo"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 rounded-lg transition">
            See demo
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<BarChart3 className="w-6 h-6" />} title="Connect your data" desc="Stripe, Gumroad, Google Analytics, GitHub — all in one place." />
          <FeatureCard icon={<Eye className="w-6 h-6" />} title="Auto-updating charts" desc="Charts refresh automatically. No more manual screenshots." />
          <FeatureCard icon={<Share2 className="w-6 h-6" />} title="Public or private" desc="Share a live link with your community, or keep it to yourself." />
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        Built in public by an indie maker.
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">{icon}</div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{desc}</p>
    </div>
  )
}
