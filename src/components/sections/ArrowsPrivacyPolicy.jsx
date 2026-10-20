import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield, ArrowLeft, Database, Megaphone, Mail, AlertCircle, Lock, RefreshCw, Clock, Smartphone
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

const sections = [
  {
    icon: Database,
    color: 'text-accent-neon',
    title: '1. Information We Collect',
    body: (
      <>
        <p className="mb-3">
          We do <strong className="text-white">not</strong> ask for, collect or store any personal information such as your name, email address, phone number or contacts. The App has no user accounts and no servers of its own.
        </p>
        <p>
          Your game progress (level reached, stars, hints) and settings (sound, vibration, dark mode, grid dots) are stored <strong className="text-white">only on your device</strong>. They are deleted when you uninstall the App.
        </p>
      </>
    ),
  },
  {
    icon: Megaphone,
    color: 'text-accent-purple',
    title: '2. Advertising',
    body: (
      <>
        <p className="mb-3">
          The App is free and shows ads provided by <strong className="text-white">Google AdMob</strong> (Google LLC). To show ads, measure them and prevent fraud, the Google Mobile Ads SDK may automatically collect:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            <>your device's <strong className="text-white">advertising identifier</strong> (Android Advertising ID),</>,
            <><strong className="text-white">approximate location</strong> derived from your IP address,</>,
            <>information about <strong className="text-white">interactions</strong> with ads and the App,</>,
            <><strong className="text-white">diagnostic and performance</strong> information (for example crash information).</>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-3">
          This information is processed by Google under its own privacy policy:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-neon hover:underline">policies.google.com/privacy</a> and{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent-neon hover:underline">policies.google.com/technologies/ads</a>.
        </p>
        <p className="mb-3">
          In the European Economic Area, the UK, Switzerland and some US states, the App asks for your consent through Google's consent form before personalised ads are shown. You can change your choice at any time in the App under <strong className="text-white">Settings → Privacy settings</strong> (shown where required).
        </p>
        <p>
          You can also reset or delete your advertising ID, or opt out of personalised ads, in your device settings (<strong className="text-white">Settings → Google → Ads</strong>, or <strong className="text-white">Settings → Privacy → Ads</strong> depending on your device).
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    color: 'text-accent-emerald',
    title: '3. Feedback by Email',
    body: (
      <p>
        If you choose to send feedback from the App, it opens your own email app with a pre-filled message. Nothing is sent unless you send that email yourself. We use emails you send only to reply to you and to improve the App.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    color: 'text-accent-neon',
    title: '4. Children',
    body: (
      <p>
        The App is a general-audience puzzle game and is not directed at children under 13. We do not knowingly collect personal information from children.
      </p>
    ),
  },
  {
    icon: Lock,
    color: 'text-accent-purple',
    title: '5. Data Security',
    body: (
      <p>
        The App does not transmit personal information to us. Data collected by the Google Mobile Ads SDK is encrypted in transit.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    color: 'text-accent-emerald',
    title: '6. Changes to This Policy',
    body: (
      <p>
        We may update this policy from time to time. Changes will be posted on this page with a new "Last updated" date.
      </p>
    ),
  },
]

export default function ArrowsPrivacyPolicy({ onBack }) {
  return (
    <main className="py-12 bg-background min-h-screen relative text-slate-200">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-accent-neon/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-card hover:bg-slate-800 border border-border text-slate-300 hover:text-accent-neon transition-all shadow-md group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-accent-neon" />
          <span>Back to Mobile Apps Showcase</span>
        </button>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-border mb-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 text-accent-neon mb-3 font-semibold uppercase tracking-wider text-xs">
            <Shield className="w-5 h-5 text-accent-emerald" />
            <span>Official Legal Document</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/apps/arrows.png"
              alt="Arrows - Puzzle Escape icon"
              width="64"
              height="64"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white/10 shadow-xl"
            />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white">
              Arrows Privacy Policy
            </h1>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            This privacy policy explains how <strong className="text-white">Arrows - Puzzle Escape</strong> (the "App"), published by <strong className="text-white">{SITE_CONFIG.name}</strong> ("we", "us"), handles information. If you have questions, contact us at{' '}
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-accent-neon hover:underline">{SITE_CONFIG.supportEmail}</a>.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 mt-6 pt-4 border-t border-border/60">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-neon" />
              Last updated: 20 October 2026
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-accent-purple" />
              com.magiban.org.arrows.puzzle
            </span>
          </div>
        </motion.div>

        {/* Policy Content Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => {
            const Icon = section.icon
            return (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * (i + 1) }}
                className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
              >
                <div className={`flex items-center gap-3 mb-4 ${section.color}`}>
                  <Icon className="w-6 h-6" />
                  <h2 className="text-xl font-display font-bold text-white">{section.title}</h2>
                </div>
                <div className="text-slate-300 text-sm leading-relaxed">{section.body}</div>
              </motion.section>
            )
          })}

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * (sections.length + 1) }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-purple mb-4">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">7. Contact</h2>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-xl border border-border/80 flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-accent-neon shrink-0" />
              <span className="text-slate-400 font-medium">{SITE_CONFIG.name}:</span>
              <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-white font-semibold hover:text-accent-neon transition-colors">
                {SITE_CONFIG.supportEmail}
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
