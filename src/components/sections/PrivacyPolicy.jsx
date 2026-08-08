import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, ArrowLeft, HeartPulse, Lock, Eye, Mail, FileText, 
  CheckCircle, Database, Server, UserCheck, Clock, AlertCircle, RefreshCw
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function PrivacyPolicy({ onBack }) {
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
          
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Welcome to <strong className="text-white">{SITE_CONFIG.fullName}</strong>! We value your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and protect your information when you use our software services and mobile products. By using our services, you agree to the terms outlined in this policy.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-6 pt-4 border-t border-border/60">
            <Clock className="w-4 h-4 text-accent-neon" />
            <span>Effective Date: December 10, 2024 | Updated: August 2026</span>
          </div>
        </motion.div>

        {/* Policy Content Sections */}
        <div className="space-y-8">
          
          {/* Section 1: Introduction */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-neon mb-4">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">1. Introduction</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              At {SITE_CONFIG.fullName}, we craft innovative mobile applications spanning RPG fitness trackers, puzzle games, productivity utilities, and educational software. We respect your digital privacy and adhere to international data security standards, including Google Play Developer Policies and Apple App Store Review Guidelines.
            </p>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-purple mb-4">
              <Database className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">2. Information We Collect</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              We collect the following types of information when you use our software:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-accent-neon" /> Personal Info
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Details such as your name, email address, phone number, and contact details provided voluntarily.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-accent-purple" /> Usage Data
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Information on how you interact with our software, including feature usage, performance errors, and system logs.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Server className="w-4 h-4 text-accent-emerald" /> Device Info
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Information about hardware models, operating system versions, unique device identifiers, and network telemetry.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Health Data Collection & Usage */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-emerald mb-4">
              <HeartPulse className="w-6 h-6 text-accent-emerald" />
              <h2 className="text-xl font-display font-bold text-white">
                3. Health Data Collection & Usage
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              For applications that provide health and fitness tracking features (such as <em>Solo Level Up: System Fitness</em>), we access and collect Health-related data. This section comprehensively discloses our practices regarding Health data:
            </p>
            
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <strong className="text-white flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-accent-neon" /> Collection & Access:
                </strong>
                We collect health and fitness related data such as physical activity, exercise routines, step counts, calories burned, heart rate, or related measurements. This data is accessed only with your explicit permission through device sensors (e.g., Google Health Connect, Apple HealthKit) or via your direct manual input.
              </li>
              <li className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <strong className="text-white flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-accent-purple" /> Usage Scope:
                </strong>
                The health data collected is used strictly to power the core functionality of our health and fitness features. We use this data to track your progress, deliver personalized insights, and improve your overall wellness experience within our application.
              </li>
              <li className="bg-slate-900/60 p-4 rounded-xl border border-border/60">
                <strong className="text-white flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-accent-emerald" /> Data Privacy & Security:
                </strong>
                Your health data is treated as highly sensitive personal information. We DO NOT share, sell, rent, or trade your health data with ad networks, data brokers, or other third parties.
              </li>
            </ul>
          </motion.section>

          {/* Section 4: How We Use Your Information */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-neon mb-4">
              <CheckCircle className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">4. How We Use Your Information</h2>
            </div>
            <p className="text-slate-300 text-sm mb-3">We use the information we collect for the following purposes:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-border/40">
                <span className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />
                To provide and maintain our services
              </li>
              <li className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-border/40">
                <span className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />
                To improve app performance & software features
              </li>
              <li className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-border/40">
                <span className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />
                To communicate updates & important product notices
              </li>
              <li className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-border/40">
                <span className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />
                To monitor usage trends & resolve technical bugs
              </li>
              <li className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-border/40 sm:col-span-2">
                <span className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />
                To comply with legal obligations and store platform guidelines
              </li>
            </ul>
          </motion.section>

          {/* Section 5: Data Security */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-purple mb-4">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">5. Data Security</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We take the security of your personal information seriously. We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </motion.section>

          {/* Section 6: Sharing Your Information */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-emerald mb-4">
              <Shield className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">6. Sharing Your Information</h2>
            </div>
            <p className="text-slate-300 text-sm mb-3">
              We do not share your personal information with third parties except in the following circumstances:
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2 shrink-0" />
                When required by law or to comply with valid legal processes and regulatory mandates.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2 shrink-0" />
                To protect our rights, property, safety, or that of our users and the public.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2 shrink-0" />
                With vetted service providers who assist us in operating our services under strict confidentiality agreements.
              </li>
            </ul>
          </motion.section>

          {/* Section 7: Your Rights */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-neon mb-4">
              <UserCheck className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">7. Your Rights</h2>
            </div>
            <p className="text-slate-300 text-sm mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li className="bg-slate-900/50 p-3 rounded-xl border border-border/50">
                <strong className="text-white block mb-1">Right to Access:</strong> Access the personal data we hold about you.
              </li>
              <li className="bg-slate-900/50 p-3 rounded-xl border border-border/50">
                <strong className="text-white block mb-1">Right to Rectify:</strong> Correct inaccurate or incomplete information.
              </li>
              <li className="bg-slate-900/50 p-3 rounded-xl border border-border/50">
                <strong className="text-white block mb-1">Right to Erasure:</strong> Delete personal data subject to legal restrictions.
              </li>
              <li className="bg-slate-900/50 p-3 rounded-xl border border-border/50">
                <strong className="text-white block mb-1">Withdraw Consent:</strong> Revoke processing consent at any time.
              </li>
            </ul>
          </motion.section>

          {/* Section 8: Data Retention */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-purple mb-4">
              <Clock className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">8. Data Retention</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </motion.section>

          {/* Section 9: Children's Privacy */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-emerald mb-4">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">9. Children's Privacy</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Some of our services are not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </motion.section>

          {/* Section 10: Policy Changes */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-neon mb-4">
              <RefreshCw className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">10. Changes to This Privacy Policy</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.
            </p>
          </motion.section>

          {/* Section 11: Contact Us */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 text-accent-purple mb-4">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-display font-bold text-white">11. Contact Us</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              If you have any questions, concerns, or privacy inquiries regarding this Privacy Policy or how we handle your information, please reach out to our team:
            </p>
            <div className="bg-slate-900/80 p-5 rounded-xl border border-border/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-neon" />
                <div className="text-sm">
                  <span className="text-slate-400 font-medium mr-2">Official Support:</span>
                  <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-white font-semibold hover:text-accent-neon transition-colors">
                    {SITE_CONFIG.supportEmail}
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  )
}
