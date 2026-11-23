import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type PolicySection = {
  title: string
  paragraphs: string[]
  points?: string[]
}

type PolicyPageProps = {
  title: string
  intro: string
  sections: PolicySection[]
}

export function PolicyPage({ title, intro, sections }: PolicyPageProps) {
  return (
    <main className="policy-page" dir="rtl">
      <div className="policy-container">
        <header className="policy-header">
          <Link className="policy-home" href="/" aria-label="روى، الصفحة الرئيسية">
            <img src="/rowa-logo.jpg" alt="" aria-hidden="true" />
            <span>روى</span>
          </Link>
          <Link className="policy-back" href="/">
            العودة إلى المتجر <ArrowLeft size={16} aria-hidden="true" />
          </Link>
        </header>

        <article className="policy-card">
          <span className="policy-eyebrow">روى | مياهك المفضلة، واصلة لبابك</span>
          <h1>{title}</h1>
          <p className="policy-intro">{intro}</p>

          <div className="policy-sections">
            {sections.map((section) => (
              <section className="policy-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && (
                  <ul>
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="policy-updated">آخر تحديث: ٢٣ نوفمبر ٢٠٢٦</p>
          <div className="policy-contact">
            <span>للاستفسارات، تواصل مع مدير المبيعات أبو فيصل:</span>
            <a href="tel:+966560757063" dir="ltr">+966 56 075 7063</a>
          </div>
        </article>
      </div>
    </main>
  )
}
