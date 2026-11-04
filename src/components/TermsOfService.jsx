import { MailIcon } from './Icons'
import { SITE_CONFIG } from '../constants/siteConfig'

const toc = [
  'Acceptance of terms',
  'Who can use our apps',
  'Licence to use the apps',
  'Coins, gold and virtual items',
  'Ads and in-app purchases',
  'User conduct',
  'Intellectual property',
  'Third-party services',
  'Privacy',
  'Disclaimers',
  'Limitation of liability',
  'Termination',
  'Changes to these terms',
  'Governing law',
  'Contact & trader details',
]

const Section = ({ n, title, children }) => (
  <section id={`s${n}`} className="pp-sec reveal">
    <h2><span className="n">{String(n).padStart(2, '0')}</span>{title}</h2>
    {children}
  </section>
)

export default function TermsOfService() {
  return (
    <main>
      <section className="pp-top">
        <div className="wrap">
          <p className="eyebrow in" style={{ '--d': '0s' }}>LEGAL</p>
          <h1 className="disp h1 in" style={{ '--d': '.06s' }}>Terms of Service</h1>
          <p className="pp-intro in" style={{ '--d': '.14s' }}>
            These Terms of Service ("Terms") are an agreement between you and {SITE_CONFIG.name} ("we", "us", "our"). They apply to every mobile game and app we publish, including all apps on Google Play, the Samsung Galaxy Store and the Apple App Store whose package or bundle id starts with <em>com.magiban.org.</em>, and to this website. Please read them before you download or use our apps.
          </p>
          <div className="tags in" style={{ '--d': '.22s' }}>
            <span className="tag">Effective: November 5, 2026</span>
            <span className="tag">Applies to all {SITE_CONFIG.name} apps &amp; games</span>
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
          <Section n={1} title="Acceptance of Terms">
            <p>By downloading, installing, opening or using any of our apps, you agree to these Terms and to our <a className="pp-link" href="/policy.html">Privacy Policy</a>. If you do not agree, please do not use our apps and uninstall them from your device.</p>
            <p>The terms of the store you downloaded the app from (for example the Google Play Terms of Service or the Apple Media Services Terms) also apply. If those store terms conflict with these Terms, the store terms win for anything about the store itself, such as payments and refunds.</p>
          </Section>

          <Section n={2} title="Who Can Use Our Apps">
            <p>Our games and apps are made for a general audience aged <strong>13 and over</strong>. They are not designed for or directed at children. If you are 13 or older but under the age of majority where you live, please read these Terms with a parent or guardian, who accepts them on your behalf.</p>
            <p className="note">Apps that we clearly label as made for children (for example <em>Kids Learning Games: Kiddoz</em>) are meant to be set up and supervised by a parent or guardian, who accepts these Terms on the child's behalf. The children's section of our Privacy Policy explains how those apps work.</p>
          </Section>

          <Section n={3} title="Licence to Use the Apps">
            <p>We give you a personal, limited, non-exclusive, non-transferable and revocable licence to download and use our apps on devices you own or control, for your own non-commercial entertainment and personal use, in line with these Terms and the rules of the store you got them from.</p>
            <p>You may not:</p>
            <ul className="list">
              <li>Copy, sell, rent, sublicense or redistribute the apps or any part of them.</li>
              <li>Decompile, reverse engineer, modify or create derivative works of the apps, except where the law expressly allows it.</li>
              <li>Remove or change any copyright, trademark or other notices in the apps.</li>
              <li>Use the apps for any unlawful purpose or in a way that breaks these Terms.</li>
            </ul>
            <p>The apps are licensed, not sold. We keep all rights we do not expressly give you.</p>
          </Section>

          <Section n={4} title="In-App Coins, Gold & Virtual Items">
            <p>Many of our games include virtual currency and items, such as coins, gold, hints, boosters, power-ups, skins or unlocked levels ("Virtual Items"). You earn them by playing, through daily rewards or by watching rewarded ads, and in some apps they may in future also be bought.</p>
            <div className="boxes g2">
              <div className="box"><h3>No cash value</h3><p>Virtual Items have no real-world monetary value. They cannot be exchanged for cash, money, goods or anything of value outside the app.</p></div>
              <div className="box"><h3>Only inside the app</h3><p>Virtual Items can only be used in the app or game where you got them, and cannot be sold, traded or transferred to anyone else.</p></div>
              <div className="box"><h3>A licence, not property</h3><p>Virtual Items are part of the limited licence in section 3. You do not own them, and we may change, rebalance or remove them as we update our games.</p></div>
              <div className="box"><h3>Not refundable</h3><p>Virtual Items are not refundable and cannot be exchanged, except where the law where you live requires it.</p></div>
            </div>
            <p className="note">Our apps generally store your progress and Virtual Items on your device. If you uninstall an app, clear its data or change devices, your progress and Virtual Items may be lost and we may not be able to restore them.</p>
          </Section>

          <Section n={5} title="Ads & In-App Purchases">
            <p>Our apps are free to download and are supported by ads served through <strong>Google AdMob</strong>, including banner, full-screen (interstitial) and rewarded ads. Rewarded ads are always optional: you choose to watch one in exchange for an in-game reward, such as extra coins, a hint or another try. A reward is only given when the ad finishes as the ad network reports it, and we cannot guarantee that an ad will always be available.</p>
            <p>Some apps may offer optional in-app purchases now or in the future (for example removing ads or buying Virtual Items). If they do:</p>
            <ul className="list">
              <li>All payments are processed by the app store you use (Google Play Billing, the Apple App Store, or the Samsung Galaxy Store). We never see or store your payment card details.</li>
              <li>The price and what you get are shown before you confirm a purchase.</li>
              <li>Refunds are handled by the store under its own refund policy (for example Google Play's or Apple's refund policy). Please ask the store for a refund; we will help where we can at <a className="pp-link" href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.</li>
              <li>Nothing in these Terms limits any right to a refund or remedy that consumer law where you live gives you.</li>
            </ul>
          </Section>

          <Section n={6} title="User Conduct">
            <p>When you use our apps you agree not to:</p>
            <ul className="list">
              <li>Cheat, exploit bugs, or use hacks, bots, modified versions of the app or other unauthorised software to gain an advantage or obtain Virtual Items or rewards.</li>
              <li>Tamper with ads, block or fake ad views, or generate fraudulent ad clicks or rewards.</li>
              <li>Interfere with, disrupt or try to gain unauthorised access to the apps or any related systems.</li>
              <li>Use share or invite-friends features to send spam, or to send anything unlawful, abusive, misleading or offensive.</li>
              <li>Use the apps in any way that breaks the law or the rights of others.</li>
            </ul>
          </Section>

          <Section n={7} title="Intellectual Property">
            <p>The apps and everything in them, including the code, game design, levels, graphics, artwork, characters, sounds, music, text, names and logos, belong to {SITE_CONFIG.name} or our licensors and are protected by copyright, trademark and other laws. "Magiban" and our app names and logos are our trademarks. You may not use them without our written permission.</p>
            <p>If you believe something in our apps infringes your rights, please contact us at the email below with details and we will look into it.</p>
          </Section>

          <Section n={8} title="Third-Party Services">
            <p>Our apps use services provided by other companies, such as Google AdMob for ads, the app stores for downloads and payments, and your device's share sheet for invite-friends features. Ads may link to third-party apps, websites or offers.</p>
            <p>These services are run by their own providers under their own terms and privacy policies. We do not control them and are not responsible for their content, products, availability or practices. Your use of them is at your own risk and under their terms.</p>
          </Section>

          <Section n={9} title="Privacy">
            <p>Our <a className="pp-link" href="/policy.html">Privacy Policy</a> at <a className="pp-link" href="https://magiban.in/policy.html">https://magiban.in/policy.html</a> explains what information our apps and our ad partners collect and how it is used. It forms part of these Terms.</p>
          </Section>

          <Section n={10} title="Disclaimers">
            <p>Our apps are provided <strong>"as is" and "as available"</strong>. To the fullest extent the law allows, we make no warranties of any kind, express or implied, including that the apps will be uninterrupted, error-free, secure, or free of bugs, or that your progress or Virtual Items will never be lost. We may change, update, suspend or stop offering any app or feature at any time.</p>
            <p>Our apps are for entertainment and general personal use. Fitness, habit or learning features are not medical, health, professional or educational advice. Please talk to a qualified professional before starting any exercise programme, and play responsibly by taking regular breaks.</p>
          </Section>

          <Section n={11} title="Limitation of Liability">
            <p>To the fullest extent the law allows, {SITE_CONFIG.name} will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, progress, Virtual Items, profits or goodwill, arising from or related to your use of, or inability to use, our apps.</p>
            <p>Where we are liable, our total liability to you for all claims is limited to the greater of the amount you paid us for the app or in-app purchase concerned in the 12 months before the claim, or INR 1,000.</p>
            <p className="note">Some countries do not allow certain warranties or liabilities to be excluded or limited. In those places the above applies only as far as the law allows, and nothing in these Terms affects your statutory rights as a consumer.</p>
          </Section>

          <Section n={12} title="Termination">
            <p>You can stop using our apps at any time by uninstalling them. We may suspend or end your access to an app, or remove Virtual Items obtained through cheating or fraud, if you break these Terms. When your licence ends you must stop using the app. Sections 4, 7 and 10 to 14 continue to apply after termination.</p>
          </Section>

          <Section n={13} title="Changes to These Terms">
            <p>We may update these Terms from time to time, for example when we add features or when laws or store rules change. We will post the new Terms on this page with a new effective date. If you keep using our apps after the change takes effect, you accept the updated Terms.</p>
          </Section>

          <Section n={14} title="Governing Law">
            <p>These Terms are governed by the laws of India. Subject to any mandatory consumer protection law of the country where you live, the courts of India have jurisdiction over any dispute arising from these Terms or our apps. Before going to court, please contact us first so we can try to resolve the issue informally.</p>
          </Section>

          <Section n={15} title="Contact & Trader Details">
            <p>Our apps are published by:</p>
            <div className="boxes g2">
              <div className="box"><h3>Developer</h3><p>{SITE_CONFIG.name}</p></div>
              <div className="box"><h3>Email</h3><p>{SITE_CONFIG.supportEmail}</p></div>
              <div className="box"><h3>Website</h3><p>{SITE_CONFIG.siteUrl.replace('https://', '')}</p></div>
              <div className="box"><h3>Country</h3><p>India</p></div>
            </div>
            <p>For questions about these Terms, purchases, refunds or anything else, email us:</p>
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="btn btn-accent pp-mail"><MailIcon size={18} />{SITE_CONFIG.supportEmail}</a>
          </Section>
        </div>
      </div>
    </main>
  )
}
