#!/usr/bin/env npx tsx

import { getAllPosts, updatePost } from '../lib/blog/data'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

async function deployToVercel() {
  console.log('🚀 Starting automatic deployment...')
  
  try {
    // Stage all changes
    await execAsync('git add .')
    
    // Check if there are changes to commit
    const { stdout: status } = await execAsync('git status --porcelain')
    if (!status.trim()) {
      console.log('📝 No changes to deploy')
      return
    }
    
    // Commit changes
    const timestamp = new Date().toISOString()
    await execAsync(`git commit -m "🤖 Automated content update - ${timestamp}

🎯 AI-generated blog content for private school SEO
📈 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"`)
    
    // Push to development branch first
    await execAsync('git push origin development')
    console.log('✅ Pushed to development branch')
    
    // Auto-merge to main if on development branch
    const { stdout: currentBranch } = await execAsync('git branch --show-current')
    if (currentBranch.trim() === 'development') {
      // Switch to main and merge
      await execAsync('git checkout main')
      await execAsync('git merge development')
      await execAsync('git push origin main')
      await execAsync('git checkout development')
      console.log('✅ Merged to main branch and deployed')
    }
    
    console.log('🎉 Automatic deployment complete!')
    
  } catch (error) {
    console.error('❌ Deployment failed:', error)
    throw error
  }
}

async function publishDraftPosts() {
  console.log('📝 Checking for draft posts to publish...')
  
  try {
    const posts = await getAllPosts()
    const draftPosts = posts.filter(post => post.status === 'draft')
    
    if (draftPosts.length === 0) {
      console.log('📝 No draft posts to publish')
      return 0
    }
    
    // Publish first draft post (can be configured to publish multiple)
    const postToPublish = draftPosts[0]
    
    await updatePost(postToPublish.slug, {
      status: 'published',
      publishedAt: new Date().toISOString()
    })
    
    console.log(`✅ Published: "${postToPublish.title}"`)
    return 1
    
  } catch (error) {
    console.error('❌ Failed to publish posts:', error)
    return 0
  }
}

async function main() {
  console.log('🤖 Starting automated publishing system...')
  
  try {
    const publishedCount = await publishDraftPosts()
    
    if (publishedCount > 0) {
      await deployToVercel()
      console.log('🎉 Automated publishing complete!')
    } else {
      console.log('📝 No new content to publish')
    }
    
  } catch (error) {
    console.error('❌ Automated publishing failed:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}