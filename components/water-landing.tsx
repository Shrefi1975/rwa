import { ArrowDown, ArrowLeft, BadgePercent, MapPin, Sparkles } from 'lucide-react'
import { WaterContactActions } from '@/components/water-contact-actions'
import { WaterOrderForm } from '@/components/water-order-form'

const brands = [
  { name: 'مياه رِفا', key: 'rifa' },
  { name: 'مياه نوفا', key: 'nova' },
  { name: 'مياه أكويا', key: 'akoya' },
  { name: 'مياه صفا', key: 'safa' },
  { name: 'مياه البيان', key: 'al-bayan' },
  { name: 'مياه بيرين', key: 'berain' },
  { name: 'مياه العين', key: 'al-ain' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="روى، الصفحة الرئيسية">
        <img className="brand-logo" src="/rowa-logo.jpg" alt="" aria-hidden="true" />
        <span className="brand-name">روى<small>مياه تصلك لبابك</small></span>
      </a>
      <a className="header-order" href="#order">سجّل الآن <ArrowLeft size={15} aria-hidden="true" /></a>
    </header>
  )
}

function HeroBanner() {
  return (
    <section id="top" className="hero-banner hero-poster-banner" aria-label="عروض توصيل المياه في جدة">
      <a href="#order" className="hero-poster-link" aria-label="اطلب المياه المفضلة لديك للتوصيل إلى المنزل">
        <picture className="hero-poster-picture">
          <source media="(min-width: 761px)" srcSet="/rowa-desktop-hero.jpg" />
          <img src="/hero-water-poster-user.jpg" alt="توصيل مياه الشرب في جدة مع مجموعة من العلامات التجارية المفضلة" className="hero-poster-image" />
        </picture>
        <span className="hero-poster-copy">
          <span className="hero-copy-kicker"><MapPin size={15} aria-hidden="true" /> توصيل مجاني داخل جدة</span>
          <h1>مياهك المفضلة،<br />واصلة لبابك.</h1>
          <span className="hero-copy-description" style={{ lineHeight: 0, color: '#000000' }}>اختار من أشهر الماركات</span>
        </span>
      </a>
    </section>
  )
}

function OfferBanner() {
  return (
    <section className="offer-banner" aria-labelledby="offer-heading">
      <span className="offer-icon" aria-hidden="true"><BadgePercent size={34} strokeWidth={1.8} /></span>
      <div className="offer-copy">
        <span className="offer-kicker">العرض اللي تنتظرونه</span>
        <h2 id="offer-heading">عروض الـ10 ريال <span>رجعت!</span></h2>
        <p>اطلب الآن واستمتع بتوصيل مجاني حتى باب منزلك.</p>
      </div>
      <a className="offer-cta" href="#order">اطلب الآن <ArrowLeft size={17} aria-hidden="true" /></a>
    </section>
  )
}

function OrderSection() {
  return (
    <section id="order" className="order-section" aria-labelledby="order-heading">
      <div className="order-copy">
        <span className="section-kicker">طلبك بخطوات بسيطة</span>
        <h2 id="order-heading">اطلبها الآن،<br /><span>وتوصلك إلى باب بيتك مجانًا</span></h2>
      </div>
      <div className="lead-card"><WaterOrderForm /></div>
    </section>
  )
}

function BrandsSection() {
  return (
    <section id="brands" className="brands-section" aria-labelledby="brands-heading">
      <div className="brands-heading">
        <span><Sparkles size={16} aria-hidden="true" /> اختيارات جدة المفضلة</span>
        <h2 id="brands-heading">ماركات مياه نثق بجودتها</h2>
        <p>اختاري من أشهر العلامات، ونوصلها لبابك مجاناً داخل جدة.</p>
      </div>
      <div className="brand-list" aria-label="ماركات المياه المتوفرة">
        {brands.map((brand) => (
          <article className="brand-card" key={brand.key}>
            <div className={`brand-art brand-art-${brand.key}`} role="img" aria-label={`شعار ${brand.name}`} />
            <h3>{brand.name}</h3>
          </article>
        ))}
      </div>
      <a href="#order" className="browse-link">اكتشف العروض المتاحة <ArrowDown size={16} aria-hidden="true" /></a>
    </section>
  )
}

function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <a href="#top" className="footer-brand" aria-label="روى، العودة إلى الأعلى">
          <img className="footer-logo" src="/rowa-logo.jpg" alt="" aria-hidden="true" />
          <span><strong>روى</strong><small>مياهك المفضلة، نوصّلها لبابك</small></span>
        </a>
        <p className="footer-description">توصيل مجاني داخل جدة، بخيارات تناسبك وجودة تثق بها.</p>
      </footer>
      <WaterContactActions />
    </>
  )
}

export function WaterLanding() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroBanner />
      <OfferBanner />
      <OrderSection />
      <BrandsSection />
      <SiteFooter />
    </main>
  )
}
