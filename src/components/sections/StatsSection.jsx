import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Download, Layers } from 'lucide-react'

const stats = [
  { id: 1, label: 'Mobile Apps', value: '8+', icon: Smartphone, color: 'text-accent-neon' },
  { id: 2, label: 'Downloads', value: '10,000+', icon: Download, color: 'text-accent-emerald' },
  { id: 3, label: 'Categories', value: '4', icon: Layers, color: 'text-accent-purple' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-background relative z-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card backdrop-blur-md rounded-2xl p-8 border border-border flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`p-4 rounded-full bg-slate-800/50 mb-6 ${stat.color}`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
