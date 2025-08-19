export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    bio?: string
    avatar?: string
  }
  tags: string[]
  categories: string[]
  featured: boolean
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    canonicalUrl?: string
  }
  readingTime: number
  status: 'draft' | 'published'
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  postCount: number
}