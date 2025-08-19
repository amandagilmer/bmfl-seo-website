import { BlogPost } from '@/types/blog'

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)
  return readingTime
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function generateExcerpt(content: string, length: number = 160): string {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\n/g, ' ')
  if (plainText.length <= length) return plainText
  return plainText.substring(0, length).trim() + '...'
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter(post => 
    post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  )
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getRelatedPosts(posts: BlogPost[], currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const related = posts
    .filter(post => post.id !== currentPost.id)
    .filter(post => {
      // Find posts with matching categories or tags
      const hasMatchingCategory = post.categories.some(cat => 
        currentPost.categories.includes(cat)
      )
      const hasMatchingTag = post.tags.some(tag => 
        currentPost.tags.includes(tag)
      )
      return hasMatchingCategory || hasMatchingTag
    })
    .sort((a, b) => {
      // Sort by relevance (more matching tags/categories first)
      const aMatches = [...a.categories, ...a.tags].filter(item => 
        [...currentPost.categories, ...currentPost.tags].includes(item)
      ).length
      const bMatches = [...b.categories, ...b.tags].filter(item => 
        [...currentPost.categories, ...currentPost.tags].includes(item)
      ).length
      return bMatches - aMatches
    })

  return related.slice(0, limit)
}