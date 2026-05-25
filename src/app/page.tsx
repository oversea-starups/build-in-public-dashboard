'use client'

import { TrendingUp, Eye, Share2, ArrowRight, BarChart3, Check, Twitter, Star, Quote, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      <nav className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">OpenMetrics</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white transition">Dashboard</Link>
            <Link href="/public/demo" className="text-sm text-neutral-400 hover:text-white transition">Demo</Link>
            <Link href="/dashboard"
              className="text-sm px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition">
              Get started
            </Link>
          </div>
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

        {/* Social Proof */}
        <div className="mt-12 flex items-center gap-4 text-sm text-neutral-500">
          <div className="flex -space-x-2">
            {['bg-emerald-400', 'bg-sky-400', 'bg-amber-400', 'bg-rose-400'].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-neutral-950 flex items-center justify-center text-xs font-bold text-neutral-950`}>
                {['TK', 'JD', 'AL', 'MK'][i]}
              </div>
            ))}
          </div>
          <p>Trusted by <span className="text-neutral-300 font-medium">89+</span> indie makers</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">How it works</h2>
        <p className="text-neutral-500 text-center mb-12 max-w-lg mx-auto">Connect once. Share everywhere. No more manual screenshots.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<BarChart3 className="w-6 h-6" />} title="Connect your data" desc="Stripe, Gumroad, Google Analytics, GitHub — all in one place." />
          <FeatureCard icon={<Eye className="w-6 h-6" />} title="Auto-updating charts" desc="Charts refresh automatically. No more manual screenshots." />
          <FeatureCard icon={<Share2 className="w-6 h-6" />} title="Public or private" desc="Share a live link with your community, or keep it to yourself." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Loved by indie makers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Testimonial
            quote="I used to screenshot Stripe every Monday for my build-in-public thread. Now I just share my OpenMetrics link."
            author="Tom K."
            role="Solo founder, DevTools"
          />
          <Testimonial
            quote="My community loves seeing live revenue numbers. It's built more trust than any marketing campaign."
            author="Sarah M."
            role="Indie maker, SaaS"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Simple pricing</h2>
        <p className="text-neutral-500 text-center mb-12">Start free. Upgrade when you need more data sources.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50">
            <h3 className="text-lg font-semibold text-white mb-2">Free</h3>
            <p className="text-3xl font-bold text-white mb-4">$0</p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 1 data source</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Public dashboard</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Manual metrics</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Basic charts</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium">Popular</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Creator</h3>
            <p className="text-3xl font-bold text-white mb-4">$12<span className="text-base font-normal text-neutral-400">/mo</span></p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 3 data sources</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Auto-sync (hourly)</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Revenue charts</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom domain</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Remove branding</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50">
            <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
            <p className="text-3xl font-bold text-white mb-4">$29<span className="text-base font-normal text-neutral-400">/mo</span></p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Unlimited sources</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Real-time sync</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Team access (5)</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> API access</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-20 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Frequently asked</h2>
        <div className="space-y-6">
          <FaqItem
            q="Which data sources do you support?"
            a="Currently Stripe, Gumroad, RevenueCat, GitHub, and Google Analytics. We're adding new integrations every month based on user requests."
          />
          <FaqItem
            q="Can I make my dashboard private?"
            a="Yes — every dashboard is private by default. You choose which metrics to make public via a shareable link."
          />
          <FaqItem
            q="How often does data sync?"
            a="Free plan updates when you manually refresh. Creator syncs hourly. Pro syncs in real-time via webhooks."
          />
          <FaqItem
            q="Is my revenue data secure?"
            a="We use read-only API keys and never store your raw transaction data. Only aggregated metrics are saved."
          />
        </div>
      </section>

      {/* CTA + Newsletter */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stop screenshotting your metrics.</h2>
        <p className="text-neutral-400 mb-8">Join indie makers building in public.</p>
        <Link href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition mb-8">
          Start for free <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="max-w-md mx-auto">
          <p className="text-sm text-neutral-500 mb-3">Get indie maker tips + product updates. No spam.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-emerald-500/50 text-sm"
            />
            <button type="submit"
              className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2">
              {subscribed ? <><Check className="w-4 h-4 text-emerald-400" /> Subscribed</> : <><Mail className="w-4 h-4" /> Subscribe</>}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-white">OpenMetrics</span>
              </div>
              <p className="text-sm text-neutral-500">Auto-updating public dashboard for indie makers.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><Link href="/dashboard" className="hover:text-neutral-300 transition">Dashboard</Link></li>
                <li><Link href="/public/demo" className="hover:text-neutral-300 transition">Demo</Link></li>
                <li><a href="#" className="hover:text-neutral-300 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-neutral-300 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-neutral-300 transition">Integrations</a></li>
                <li><a href="#" className="hover:text-neutral-300 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Connect</h4>
              <div className="flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://github.com/oversea-starups/build-in-public-dashboard" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition">
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
            <p>Built in public by an indie maker.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-neutral-400 transition">Privacy</a>
              <a href="#" className="hover:text-neutral-400 transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition">
      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">{icon}</div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{desc}</p>
    </div>
  )
}

function Testimonial({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
      <Quote className="w-6 h-6 text-emerald-500/40 mb-3" />
      <p className="text-neutral-300 mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="text-sm font-medium text-white">{author}</p>
        <p className="text-xs text-neutral-500">{role}</p>
      </div>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h3 className="font-medium text-white mb-2">{q}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{a}</p>
    </div>
  )
}
