import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getPublishedPosts } from "@/lib/blog/data"
import { formatDate } from "@/lib/blog/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Blog | Education Insights & Tips | Bright Minds Future Leaders",
  description: "Expert insights on private school education, micro schooling, and child development. Tips for parents choosing the best educational path for their children.",
  keywords: "private school blog, education blog, micro school insights, parenting tips, child development, educational resources",
  openGraph: {
    title: "Private School Education Blog | Bright Minds Future Leaders",
    description: "Expert insights on private education, micro schooling, and helping children thrive academically and personally.",
    url: "https://brightmindsfutureleaders.com/blog",
    type: "website"
  }
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Private School Education <span className="text-purple-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on private education, child development, and creating the best learning environment for your child.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
              <p className="text-gray-600">
                We're working on creating valuable content about private education and child development. 
                Check back soon for expert insights and tips.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-purple-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}