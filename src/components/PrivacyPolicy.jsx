import { MailIcon } from './Icons'
import { SITE_CONFIG } from '../constants/siteConfig'

const toc = [
  'Introduction',
  'Information we collect',
  'Health data',
  'How we use information',
  'Data security',
  'Sharing your information',
  'Your rights',
  'Data retention',
  'Children’s privacy',
  'Policy changes',
  'Contact us',
]

const Section = ({ n, title, children }) => (
  <section id={`s${n}`} className="pp-sec reveal">
    <h2><span className="n">{String(n).padStart(2, '0')}</span>{title}</h2>
    {children}
  </section>
)

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="pp-top">
        <div className="wrap">
          <p className="eyebrow in" style={{ '--d': '0s' }}>LEGAL</p>
          <h1 className="disp h1 in" style={{ '--d': '.06s' }}>Privacy Policy</h1>
          <p className="pp-intro in" style={{ '--d': '.14s' }}>
            Welcome to {SITE_CONFIG.name}! We value your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and protect your information when you use our software services and mobile products. By using our services, you agree to the terms outlined in this policy.
          </p>
          <div className="tags in" style={{ '--d': '.22s' }}>
            <span className="tag">Effective: December 10, 2024</span>
            <span className="tag">Updated: August 2026</span>
          </div>
        </div>
      </section>

      <div className="wrap pp-layout">
        <aside className="pp-side in" style={{ '--d': '.3s' }}>
          <p className="label">ON THIS PAGE</p>
          <nav className="toc" aria-label="Sections">
            {toc.map((label, i) => (
              <a key={label} href={`#s${i + 1}`}><span>{i + 1}</span>{label}</a>
            ))}
          </nav>
        </aside>

        <div className="pp-main">
          <Section n={1} title="Introduction">
            <p>At {SITE_CONFIG.name}, we craft innovative mobile applications spanning RPG fitness trackers, puzzle games, productivity utilities, and educational software. We respect your digital privacy and adhere to international data security standards, including Google Play Developer Policies and Apple App Store Review Guidelines.</p>
          </Section>

          <Section n={2} title="Information We Collect">
            <p>We collect the following types of information when you use our software:</p>
            <div className="boxes g3">
              <div className="box"><h3>Personal Info</h3><p>Details such as your name, email address, phone number, and contact details provided voluntarily.</p></div>
              <div className="box"><h3>Usage Data</h3><p>Information on how you interact with our software, including feature usage, performance errors, and system logs.</p></div>
              <div className="box"><h3>Device Info</h3><p>Information about hardware models, operating system versions, unique device identifiers, and network telemetry.</p></div>
            </div>
          </Section>

          <Section n={3} title="Health Data Collection & Usage">
            <p>For applications that provide health, fitness, or habit tracking features (such as <em>Solo Level Up: System Fitness</em> and <em>Habit Tracker: Atmos Sphere</em>), we access and collect health-related data. This section comprehensively discloses our practices regarding Health data:</p>
            <div className="boxes">
              <div className="box"><h3>Collection &amp; Access</h3><p>We collect health and fitness related data such as physical activity, exercise routines, step counts, calories burned, heart rate, or related measurements. This data is accessed only with your explicit permission through device sensors (e.g., Google Health Connect, Apple HealthKit) or via your direct manual input.</p></div>
              <div className="box"><h3>Usage Scope</h3><p>The health data collected is used strictly to power the core functionality of our health and fitness features. We use this data to track your progress, deliver personalized insights, and improve your overall wellness experience within our application.</p></div>
              <div className="box"><h3>Data Privacy &amp; Security</h3><p>Your health data is treated as highly sensitive personal information. We DO NOT share, sell, rent, or trade your health data with ad networks, data brokers, or other third parties.</p></div>
            </div>
          </Section>

          <Section n={4} title="How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list">
              <li>To provide and maintain our services</li>
              <li>To improve app performance &amp; software features</li>
              <li>To communicate updates &amp; important product notices</li>
              <li>To monitor usage trends &amp; resolve technical bugs</li>
              <li>To comply with legal obligations and store platform guidelines</li>
            </ul>
          </Section>

          <Section n={5} title="Data Security">
            <p>We take the security of your personal information seriously. We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          </Section>

          <Section n={6} title="Sharing Your Information">
            <p>We do not share your personal information with third parties except in the following circumstances:</p>
            <ul className="list">
              <li>When required by law or to comply with valid legal processes and regulatory mandates.</li>
              <li>To protect our rights, property, safety, or that of our users and the public.</li>
              <li>With vetted service providers who assist us in operating our services under strict confidentiality agreements.</li>
            </ul>
          </Section>

          <Section n={7} title="Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <div className="boxes g2">
              <div className="box"><h3>Right to Access</h3><p>Access the personal data we hold about you.</p></div>
              <div className="box"><h3>Right to Rectify</h3><p>Correct inaccurate or incomplete information.</p></div>
              <div className="box"><h3>Right to Erasure</h3><p>Delete personal data subject to legal restrictions.</p></div>
              <div className="box"><h3>Withdraw Consent</h3><p>Revoke processing consent at any time.</p></div>
            </div>
          </Section>

          <Section n={8} title="Data Retention">
            <p>We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </Section>

          <Section n={9} title="Children's Privacy & Families Policy Compliance">
            <p>We take children's privacy with utmost seriousness. For our child-directed educational applications, specifically <strong>Kiddoz: Early Learning &amp; Stories</strong> (<em>com.magiban.org.kiddoz</em>), we strictly comply with the Google Play Families Policy and the Children's Online Privacy Protection Act (COPPA):</p>
            <ul className="list">
              <li><span><strong>Zero Personal Data Collection:</strong> We do not collect, request, or store any personally identifiable information (PII) from children.</span></li>
              <li><span><strong>No Ad Tracking or Identifiers:</strong> In accordance with Google Play Families Policy, our children's apps do not transmit Advertising IDs (AAID), device identifiers, or telemetric data to third parties.</span></li>
              <li><span><strong>100% On-Device Operation:</strong> Story progress, audio playback, drawing canvases, and tracing metrics are processed entirely offline on the user's local device.</span></li>
            </ul>
            <p className="note">For our other general-audience services, we do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal information, please contact us immediately so we can remove it.</p>
          </Section>

          <Section n={10} title="Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.</p>
          </Section>

          <Section n={11} title="Contact Us">
            <p>If you have any questions, concerns, or privacy inquiries regarding this Privacy Policy or how we handle your information, please reach out to our team:</p>
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="btn btn-accent pp-mail"><MailIcon size={18} />{SITE_CONFIG.supportEmail}</a>
          </Section>
        </div>
      </div>
    </main>
  )
}
