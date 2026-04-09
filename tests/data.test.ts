import { describe, it, expect } from 'vitest'
import {
  siteConfig,
  hero,
  categories,
  products,
  featuredProducts,
  events,
  about,
  testimonials,
  faq,
  catalogs,
} from '../lib/data'

describe('siteConfig', () => {
  it('should have required site identity fields', () => {
    expect(siteConfig.name).toBeTruthy()
    expect(siteConfig.tagline).toBeTruthy()
    expect(siteConfig.description).toBeTruthy()
  })

  it('should have a valid WhatsApp number (Brazilian format)', () => {
    expect(siteConfig.whatsapp).toMatch(/^55\d{10,11}$/)
  })

  it('should have a valid Instagram URL', () => {
    expect(siteConfig.instagram).toMatch(/^https:\/\/www\.instagram\.com\//)
  })

  it('should have at least one address', () => {
    expect(siteConfig.addresses.length).toBeGreaterThan(0)
  })

  it('each address should have city, street, and maps URLs', () => {
    for (const address of siteConfig.addresses) {
      expect(address.city).toBeTruthy()
      expect(address.street).toBeTruthy()
      expect(address.mapsUrl).toMatch(/^https:\/\//)
      expect(address.embedUrl).toMatch(/^https:\/\//)
    }
  })
})

describe('hero', () => {
  it('should have headline, subheadline, and CTA labels', () => {
    expect(hero.headline).toBeTruthy()
    expect(hero.subheadline).toBeTruthy()
    expect(hero.ctaLabel).toBeTruthy()
    expect(hero.ctaSecondary).toBeTruthy()
  })
})

describe('categories', () => {
  it('should be a non-empty array', () => {
    expect(categories.length).toBeGreaterThan(0)
  })

  it('each category should have id, title, description, image and href', () => {
    for (const cat of categories) {
      expect(cat.id).toBeTruthy()
      expect(cat.title).toBeTruthy()
      expect(cat.description).toBeTruthy()
      expect(cat.image).toBeTruthy()
      expect(cat.href).toMatch(/^\//)
    }
  })
})

describe('products', () => {
  it('should be a non-empty array', () => {
    expect(products.length).toBeGreaterThan(0)
  })

  it('each product should have id, category, items and whatsappMsg', () => {
    for (const product of products) {
      expect(product.id).toBeTruthy()
      expect(product.category).toBeTruthy()
      expect(Array.isArray(product.items)).toBe(true)
      expect(product.items.length).toBeGreaterThan(0)
      expect(product.whatsappMsg).toBeTruthy()
    }
  })
})

describe('featuredProducts', () => {
  it('should be a non-empty array', () => {
    expect(featuredProducts.length).toBeGreaterThan(0)
  })

  it('each featured product should have name, description, image and whatsappMsg', () => {
    for (const fp of featuredProducts) {
      expect(fp.name).toBeTruthy()
      expect(fp.description).toBeTruthy()
      expect(fp.image).toBeTruthy()
      expect(fp.whatsappMsg).toBeTruthy()
    }
  })
})

describe('events', () => {
  it('should have title, text, and formats', () => {
    expect(events.title).toBeTruthy()
    expect(events.text).toBeTruthy()
    expect(Array.isArray(events.formats)).toBe(true)
    expect(events.formats.length).toBeGreaterThan(0)
  })

  it('each event format should have name, capacity and description', () => {
    for (const format of events.formats) {
      expect(format.name).toBeTruthy()
      expect(format.capacity).toBeTruthy()
      expect(format.description).toBeTruthy()
    }
  })
})

describe('about', () => {
  it('should have chef Thay and designer Renata info', () => {
    expect(about.thay.name).toBeTruthy()
    expect(about.thay.role).toBeTruthy()
    expect(about.renata.name).toBeTruthy()
    expect(about.renata.role).toBeTruthy()
  })

  it('Thay should have Le Cordon Bleu credential', () => {
    const cordonBleu = about.thay.credentials.find((c) =>
      c.label.includes('Le Cordon Bleu')
    )
    expect(cordonBleu).toBeDefined()
  })

  it('both chefs should have bio arrays with content', () => {
    expect(about.thay.bio.length).toBeGreaterThan(0)
    expect(about.renata.bio.length).toBeGreaterThan(0)
  })
})

describe('testimonials', () => {
  it('should be a non-empty array', () => {
    expect(testimonials.length).toBeGreaterThan(0)
  })

  it('each testimonial should have name, text, city and 5 stars', () => {
    for (const t of testimonials) {
      expect(t.name).toBeTruthy()
      expect(t.text).toBeTruthy()
      expect(t.city).toBeTruthy()
      expect(t.stars).toBe(5)
    }
  })
})

describe('faq', () => {
  it('should be a non-empty array', () => {
    expect(faq.length).toBeGreaterThan(0)
  })

  it('each FAQ entry should have a question and an answer', () => {
    for (const entry of faq) {
      expect(entry.q).toBeTruthy()
      expect(entry.a).toBeTruthy()
    }
  })
})

describe('catalogs', () => {
  it('should be a non-empty array', () => {
    expect(catalogs.length).toBeGreaterThan(0)
  })

  it('each catalog entry should have title, description, href and icon', () => {
    for (const catalog of catalogs) {
      expect(catalog.title).toBeTruthy()
      expect(catalog.description).toBeTruthy()
      expect(catalog.href).toMatch(/^\//)
      expect(catalog.icon).toBeTruthy()
    }
  })
})
