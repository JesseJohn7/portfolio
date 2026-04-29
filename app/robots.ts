import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/.next/', '/node_modules/'],
      crawlDelay: 0.5,
    },
    sitemap: 'https://billionaire-dev.vercel.app/sitemap.xml',
  }
}
