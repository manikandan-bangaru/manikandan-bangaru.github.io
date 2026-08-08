import React from 'react'
import { motion } from 'framer-motion'
import Atropos from 'atropos/react'
import { Sparkles, Cpu, Trophy, Compass, ShieldCheck, Globe } from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function AboutSection() {
  const highlights = [
    {
      title: "Top-Tier Mobile UX",
      desc: "Native-level responsiveness and intuitive modern design.",
      icon: Sparkles,
      color: "text-accent-neon",
      bgGradient: "from-sky-950/40 via-slate-900/90 to-slate-950/90 border-sky-500/30 hover:border-sky-400 shadow-[0_10px_25px_rgba(14,165,233,0.15)]"
    },
    {
      title: "Commitment to Quality",
      desc: "Extensively tested puzzle logic & real-time telemetry.",
      icon: ShieldCheck,
      color: "text-accent-emerald",
      bgGradient: "from-emerald-950/40 via-slate-900/90 to-slate-950/90 border-emerald-500/30 hover:border-emerald-400 shadow-[0_10px_25px_rgba(16,185,129,0.15)]"
    },
    {
      title: "Innovative Mobile Games",
      desc: "Gamified RPG fitness quests & mind-sharpening puzzles.",
      icon: Trophy,
      color: "text-amber-400",
      bgGradient: "from-amber-950/40 via-slate-900/90 to-slate-950/90 border-amber-500/30 hover:border-amber-400 shadow-[0_10px_25px_rgba(245,158,11,0.15)]"
    },
    {
      title: "Essential Utilities",
      desc: "Habit trackers & academic student organizers.",
      icon: Cpu,
      color: "text-accent-purple",
      bgGradient: "from-purple-950/40 via-slate-900/90 to-slate-950/90 border-purple-500/30 hover:border-purple-400 shadow-[0_10px_25px_rgba(139,92,246,0.15)]"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#090d16] via-slate-950 to-[#090d16] relative border-t border-slate-800/80 overflow-hidden">

      {/* 3D Background Lighting & Ambient Mesh Glows */}
      <div className="absolute top-1/2 left-0 w-[35rem] h-[35rem] bg-gradient-to-r from-accent-neon/15 to-accent-purple/15 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[35rem] h-[35rem] bg-gradient-to-l from-accent-emerald/15 to-accent-purple/15 rounded-full blur-[140px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

          {/* "Our Vision" Column */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <Compass className="w-4 h-4 text-accent-purple" />
                <span>Strategic Roadmap</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-neon to-accent-emerald">Vision</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-300 mb-8 font-sans leading-relaxed"
              >
                With an unyielding passion for technology and a steadfast commitment to excellence, we aim to redefine the mobile landscape by providing top-notch digital experiences that empower users daily.
              </motion.p>
            </div>

            {/* 3D Interactive Pillars Grid with Rich Gradient Backgrounds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Atropos key={item.title} className="atropos-vision-card rounded-2xl overflow-hidden" shadow={false} highlight={true}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + (idx * 0.08) }}
                      className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl rounded-2xl p-5 border transition-all duration-300 h-full flex flex-col justify-between shadow-lg group`}
                    >
                      <div className="flex items-center gap-3 mb-2" data-atropos-offset="4">
                        <div className={`p-2.5 rounded-xl bg-slate-950/90 border border-white/10 ${item.color} group-hover:scale-110 transition-transform shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-bold text-white text-sm" data-atropos-offset="3">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed" data-atropos-offset="2">
                        {item.desc}
                      </p>
                    </motion.div>
                  </Atropos>
                )
              })}
            </div>
          </div>

          {/* "Crafting the Future" 3D Spotlight Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full flex"
          >
            <Atropos className="atropos-craft-card w-full h-full rounded-3xl overflow-hidden" shadow={true} highlight={true}>
              <div className="relative rounded-3xl overflow-hidden border border-accent-neon/40 p-1 bg-gradient-to-tr from-accent-purple/50 via-accent-neon/40 to-accent-emerald/50 shadow-2xl h-full flex flex-col justify-between">

                <div className="bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 backdrop-blur-xl rounded-[22px] p-8 sm:p-10 relative z-10 h-full flex flex-col justify-between overflow-hidden">

                  {/* Glowing 3D Glass Orbs in Card Background */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent-neon/25 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-purple/25 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-accent-emerald text-xs font-bold uppercase tracking-wider mb-6 shadow-md" data-atropos-offset="6">
                      <Sparkles className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>Studio Mission</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6 leading-tight" data-atropos-offset="5">
                      Crafting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-sky-400 to-accent-purple">Future</span>
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8" data-atropos-offset="3">
                      <strong className="text-white">{SITE_CONFIG.fullName}</strong> is an independent app studio dedicated to engineering high-performance mobile software. We combine gamified mechanics, elegant UI/UX design, and robust offline logic to deliver products that millions love to use every single day.
                    </p>
                  </div>

                  {/* 3D Highlight Box inside Card */}
                  <div className="bg-slate-950/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between flex-wrap gap-4 shadow-inner" data-atropos-offset="4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-neon/20 to-accent-purple/20 border border-accent-neon/40 flex items-center justify-center text-accent-neon shadow-md">
                        <Globe className="w-5 h-5 text-accent-neon" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Global Reach</div>
                        <div className="text-white font-bold text-sm">Worldwide Distribution</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-emerald-500/30 text-xs text-accent-emerald font-semibold shadow-md">
                      <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                      Active
                    </div>
                  </div>

                </div>
              </div>
            </Atropos>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
