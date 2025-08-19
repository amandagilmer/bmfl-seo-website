import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brightmindsfutureleaders.com'
  const currentDate = new Date().toISOString()
  
  // High priority location pages for private school searches
  const locationPages = [
    'new-caney',
    'kingwood', 
    'humble',
    'splendora',
    'cleveland',
    'crosby',
    'huffman',
    'atascocita',
    'spring',
    'porter',
    'the-woodlands',
    'conroe'
  ].map(location => ({
    url: `${baseUrl}/areas/${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9 // High priority for private school location searches
  }))

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main service pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/approach`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/who-we-serve`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Location pages - high priority for local SEO
    ...locationPages
  ]
}