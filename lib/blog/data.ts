import { BlogPost } from '@/types/blog'
import { promises as fs } from 'fs'
import path from 'path'
import { generateSlug, calculateReadingTime } from './utils'

const BLOG_DATA_DIR = path.join(process.cwd(), 'data/blog')
const POSTS_FILE = path.join(BLOG_DATA_DIR, 'posts.json')

// Ensure blog data directory exists
async function ensureBlogDataDir() {
  try {
    await fs.access(BLOG_DATA_DIR)
  } catch {
    await fs.mkdir(BLOG_DATA_DIR, { recursive: true })
  }
}

// Initialize posts file if it doesn't exist
async function initializePostsFile() {
  try {
    await fs.access(POSTS_FILE)
  } catch {
    await fs.writeFile(POSTS_FILE, JSON.stringify([], null, 2))
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  await ensureBlogDataDir()
  await initializePostsFile()
  
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.status === 'published')
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function createPost(postData: Partial<BlogPost>): Promise<BlogPost> {
  await ensureBlogDataDir()
  await initializePostsFile()
  
  const posts = await getAllPosts()
  
  const newPost: BlogPost = {
    id: generateId(),
    title: postData.title || '',
    slug: postData.slug || generateSlug(postData.title || ''),
    excerpt: postData.excerpt || '',
    content: postData.content || '',
    publishedAt: postData.publishedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: postData.author || {
      name: 'Angela Gilmer',
      bio: 'Founder & Lead Educator at Bright Minds Future Leaders',
      avatar: '/angela-gilmer-students.jpeg'
    },
    tags: postData.tags || [],
    categories: postData.categories || [],
    featured: postData.featured || false,
    seo: postData.seo || {
      metaTitle: postData.title || '',
      metaDescription: postData.excerpt || '',
      keywords: []
    },
    readingTime: calculateReadingTime(postData.content || ''),
    status: postData.status || 'draft'
  }
  
  posts.push(newPost)
  await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2))
  
  return newPost
}

export async function updatePost(slug: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  await ensureBlogDataDir()
  await initializePostsFile()
  
  const posts = await getAllPosts()
  const postIndex = posts.findIndex(post => post.slug === slug)
  
  if (postIndex === -1) return null
  
  posts[postIndex] = {
    ...posts[postIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
    readingTime: updates.content ? calculateReadingTime(updates.content) : posts[postIndex].readingTime
  }
  
  await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2))
  
  return posts[postIndex]
}

export async function deletePost(slug: string): Promise<boolean> {
  await ensureBlogDataDir()
  await initializePostsFile()
  
  const posts = await getAllPosts()
  const filteredPosts = posts.filter(post => post.slug !== slug)
  
  if (filteredPosts.length === posts.length) return false
  
  await fs.writeFile(POSTS_FILE, JSON.stringify(filteredPosts, null, 2))
  return true
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}