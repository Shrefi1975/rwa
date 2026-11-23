'use client'

import { useState, type FormEvent } from 'react'
import { ArrowLeft, MapPin, MessageCircle, Phone } from 'lucide-react'

const brands = ['مياه رِفا', 'مياه نوفا', 'مياه أكويا', 'مياه صفا', 'مياه البيان', 'مياه بيرين', 'مياه العين']

export function WaterOrderForm() {
  const [neighborhood, setNeighborhood] = useState('')
  const [phone, setPhone] = useState('')
  const [preferredWater, setPreferredWater] = useState('')
  const normalizedPhone = phone.replace(/\D/g, '').replace(/^0/, '')
  const phoneIsValid = /^5\d{8}$/.test(normalizedPhone)
  const ready = Boolean(neighborhood.trim() && preferredWater) && phoneIsValid

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!ready) return

    const message = `مرحباً، أرغب بمعرفة العروض المتاحة في حي ${neighborhood.trim()}.\nنوع المياه المفضل: ${preferredWater}\nرقم الجوال: +966${normalizedPhone}`
    window.open(`https://wa.me/966560757063?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={sendToWhatsApp} className="lead-form">
      <label className="sr-only" htmlFor="neighborhood">الحي</label>
      <div className="input-shell">
        <MapPin className="field-icon" size={19} aria-hidden="true" />
        <input
          id="neighborhood"
          type="text"
          value={neighborhood}
          onChange={(event) => setNeighborhood(event.target.value)}
          placeholder="اكتب اسم الحي"
          autoComplete="address-level3"
          required
        />
      </div>

      <label htmlFor="preferred-water">نوع المياه المفضل</label>
      <div className="input-shell select-shell">
        <select id="preferred-water" value={preferredWater} onChange={(event) => setPreferredWater(event.target.value)} required>
          <option value="" disabled>اختر نوع المياه المفضل</option>
          {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>

      <label htmlFor="phone">رقم الجوال</label>
      <div className="input-shell phone-shell" dir="ltr">
        <span className="saudi-flag" aria-label="علم المملكة العربية السعودية"><span>لا إله إلا الله</span><i /></span>
        <span className="dial-code">+966</span>
        <span className="phone-divider" aria-hidden="true" />
        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          maxLength={10}
          value={phone}
          onChange={(event) => setPhone(event.target.value.replace(/[^\d]/g, ''))}
          placeholder="5XXXXXXXX"
          aria-describedby="phone-hint"
          required
        />
        <Phone className="field-icon phone-icon" size={17} aria-hidden="true" />
      </div>
      <span id="phone-hint" className="field-hint">أدخل رقمك بصيغة 5XXXXXXXX</span>

      <div className="minimum-order" role="note">
        <span>الحد الأدنى للطلب</span>
        <strong>٢٠ كرتون</strong>
      </div>
      <button className="whatsapp-button" type="submit" disabled={!ready}>
        <MessageCircle size={20} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
        <span>إرسال عبر الواتساب</span>
        <ArrowLeft className="submit-arrow" size={18} aria-hidden="true" />
      </button>
      <p className="privacy-note"><span>بالإرسال، توافق على التواصل معك بخصوص العروض.</span></p>
    </form>
  )
}
