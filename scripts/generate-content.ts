#!/usr/bin/env npx tsx

import { ContentGenerationConfig, generateMultiplePosts } from '../lib/blog/ai-content-generator'

// Content generation configurations for different topics
const CONTENT_CONFIGS: ContentGenerationConfig[] = [
  {
    topics: ['reading comprehension', 'phonics', 'early literacy'],
    locations: ['New Caney', 'Kingwood', 'Humble', 'Splendora'],
    tone: 'friendly',
    targetAudience: 'parents',
    contentType: 'educational'
  },
  {
    topics: ['math skills', 'problem solving', 'number sense'],
    locations: ['Cleveland', 'Crosby', 'Huffman', 'Spring'],
    tone: 'professional',
    targetAudience: 'parents',
    contentType: 'tips'
  },
  {
    topics: ['character development', 'leadership skills', 'emotional intelligence'],
    locations: ['Atascocita', 'Porter', 'The Woodlands', 'Conroe'],
    tone: 'authoritative',
    targetAudience: 'parents',
    contentType: 'comparison'
  },
  {
    topics: ['small class sizes', 'individualized learning', 'micro school benefits'],
    locations: ['New Caney', 'Humble', 'Kingwood'],
    tone: 'friendly',
    targetAudience: 'parents',
    contentType: 'educational'
  },
  {
    topics: ['choosing private school', 'school comparison', 'educational options'],
    locations: ['Splendora', 'Cleveland', 'Crosby'],
    tone: 'professional',
    targetAudience: 'parents',
    contentType: 'comparison'
  }
]

async function main() {
  console.log('🤖 Starting AI content generation...')
  
  try {
    const posts = await generateMultiplePosts(CONTENT_CONFIGS, 3)
    
    console.log(`✅ Successfully generated ${posts.length} blog posts:`)
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`)
      console.log(`   Slug: ${post.slug}`)
      console.log(`   Categories: ${post.categories.join(', ')}`)
      console.log(`   Reading Time: ${post.readingTime} minutes`)
      console.log('')
    })
    
    console.log('🚀 Content generation complete!')
    
  } catch (error) {
    console.error('❌ Content generation failed:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}