'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'

export function WaterContactActions() {
  const [orderSectionVisible, setOrderSectionVisible] = useState(false)

  useEffect(() => {
    const orderSection = document.querySelector('#order')
    if (!orderSection) return

    const observer = new IntersectionObserver(([entry]) => setOrderSectionVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(orderSection)
    return () => observer.disconnect()
  }, [])

  if (orderSectionVisible) return null

  return (
    <div className="floating-contact-stack" role="group" aria-label="تواصل معنا">
      <a className="floating-contact-button floating-call" href="tel:+966560757063" aria-label="اتصل بنا على الرقم +966 56 075 7063">
        <Phone size={23} aria-hidden="true" />
      </a>
      <a className="floating-contact-button floating-whatsapp" href="https://wa.me/966560757063" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب">
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </div>
  )
}
