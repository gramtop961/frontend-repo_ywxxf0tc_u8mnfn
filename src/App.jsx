import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Menu, X, Rocket, Shield, Zap, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Why Us', href: '#why' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center space-x-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 ring-1 ring-white/10">
                <Rocket className="h-5 w-5 text-violet-300" />
              </span>
              <span className="text-white text-lg font-semibold tracking-wide">NeonOrbit</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Log in</a>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition">
                Get started
              </a>
            </div>

            <button aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-neutral-900 shadow-2xl border-l border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 ring-1 ring-white/10">
                  <Rocket className="h-5 w-5 text-violet-300" />
                </span>
                <span className="text-white text-lg font-semibold">NeonOrbit</span>
              </div>
              <button aria-label="Close menu" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-gray-200 hover:text-white hover:bg-white/5 transition">
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white">Log in</a>
                <a href="#contact" className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition">Get started</a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b12] via-[#0c0b18] to-[#0b0b12]" />

      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.25),rgba(0,0,0,0))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_100%_0%,rgba(236,72,153,0.18),rgba(0,0,0,0))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200">
                Next‑gen business experiences
              </span>
              <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Build. Launch. Scale.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300">
                  At cyberpunk speed.
                </span>
              </h1>
              <p className="mt-6 text-gray-300 text-lg max-w-xl">
                We craft immersive, high-performance digital products that feel like the future. From brand sites to complex apps—delivered fast.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-white font-medium shadow-lg shadow-violet-500/20 hover:opacity-90 transition">
                  Start a project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
                  Explore solutions
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-violet-300" /> Enterprise‑grade</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-fuchsia-300" /> Blazing fast</div>
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-cyan-300" /> Global scale</div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[460px] sm:h-[520px] lg:h-[560px] rounded-2xl ring-1 ring-white/10 overflow-hidden bg-black/20">
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Solutions() {
  const items = [
    { title: 'Smart Websites', desc: 'Marketing sites engineered for conversion with motion, 3D, and world‑class performance.', icon: Rocket },
    { title: 'Secure Platforms', desc: 'Auth, payments, and dashboards built with enterprise‑grade security.', icon: Shield },
    { title: 'Lightning Apps', desc: 'React + edge‑ready APIs shipped with sub‑second interactions.', icon: Zap },
  ]
  return (
    <section id="solutions" className="relative py-24 bg-[linear-gradient(180deg,#0b0b12_0%,#0b0b12_40%,#0f0d1a_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-[70%] bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Solutions that hit business goals</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">We combine design, engineering, and strategy to deliver outcomes—not just pages.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(200px_200px_at_var(--x)_var(--y),rgba(168,85,247,0.15),transparent)]" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-violet-600/30 to-fuchsia-600/30 ring-1 ring-white/10 mb-4">
                <Icon className="h-5 w-5 text-violet-200" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">{desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-violet-300 hover:text-violet-200">Learn more <ArrowRight className="ml-1 h-4 w-4" /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const points = [
    'Senior‑level team only',
    'Design + build under one roof',
    'Transparent pricing and timelines',
    'Performance, accessibility, SEO baked in',
  ]
  return (
    <section id="why" className="relative py-24 bg-[#0f0d1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">We ship outcomes, not deliverables</h2>
            <p className="mt-4 text-gray-400">Our process blends strategy, brand, and engineering to move the metrics that matter for your business.</p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-500/10 p-1">
              <div className="rounded-2xl bg-[#0b0b12] p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="mt-1 text-xs text-gray-400">Client retention</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl font-bold text-white">2.3x</div>
                    <div className="mt-1 text-xs text-gray-400">Avg. conversion lift</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl font-bold text-white"><span className="align-top text-base mr-1">~</span>3w</div>
                    <div className="mt-1 text-xs text-gray-400">From kickoff to launch</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl font-bold text-white">100</div>
                    <div className="mt-1 text-xs text-gray-400">Core Web Vitals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[linear-gradient(180deg,#0f0d1a_0%,#0b0b12_100%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">No surprises. Scale up or down as your needs evolve.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-white font-semibold">Launch</h3>
            <div className="mt-2 text-4xl font-extrabold text-white">$4,900<span className="text-base text-gray-400 font-medium"> / project</span></div>
            <ul className="mt-6 space-y-3 text-gray-300 text-sm">
              <li>Brand landing page</li>
              <li>3 sections + contact</li>
              <li>Basic animations</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Choose</a>
          </div>
          <div className="relative rounded-2xl border border-fuchsia-400/30 bg-gradient-to-b from-fuchsia-500/10 to-violet-500/10 p-6">
            <div className="absolute -top-3 right-6 rounded-full bg-fuchsia-500 text-white text-xs px-2 py-0.5">Popular</div>
            <h3 className="text-white font-semibold">Scale</h3>
            <div className="mt-2 text-4xl font-extrabold text-white">$9,900<span className="text-base text-gray-200 font-medium"> / project</span></div>
            <ul className="mt-6 space-y-3 text-gray-100 text-sm">
              <li>Multi‑page site or app</li>
              <li>Advanced motion + 3D</li>
              <li>Analytics + SEO setup</li>
              <li>Performance budget</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-white hover:opacity-90">Choose</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-white font-semibold">Enterprise</h3>
            <div className="mt-2 text-4xl font-extrabold text-white">Custom</div>
            <ul className="mt-6 space-y-3 text-gray-300 text-sm">
              <li>End‑to‑end product team</li>
              <li>Compliance & security</li>
              <li>SLA & priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Talk to us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b0b12] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 ring-1 ring-white/10">
            <Rocket className="h-5 w-5 text-violet-300" />
          </span>
          <span className="text-white font-semibold">NeonOrbit</span>
        </div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} NeonOrbit Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell us about your project</h2>
          <p className="mt-3 text-gray-400">Get a tailored plan, timeline, and quote. We’ll reply within 24 hours.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600" placeholder="Full name" />
            <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600" placeholder="Work email" />
          </div>
          <input className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600" placeholder="Company / Website" />
          <textarea rows={4} className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600" placeholder="What are you building?" />
          <button className="mt-4 inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-white font-medium hover:opacity-90">Request proposal <ArrowRight className="ml-2 h-5 w-5" /></button>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <Navbar />
      <Hero />
      <Solutions />
      <WhyUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
