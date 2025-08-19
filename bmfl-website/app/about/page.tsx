import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleReviews from "@/components/GoogleReviews"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Users, Award, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Meet Our Founder</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Bright Minds Future Leaders</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded with a passion for personalized education and character development, we're dedicated to nurturing
              the whole child through innovative micro-school learning.
            </p>
          </div>
        </div>
      </section>

      {/* Angela Gilmer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Meet Angela Gilmer</h2>
              <h3 className="text-xl font-semibold text-purple-600">Founder & Lead Educator</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Angela Gilmer brings over 15 years of educational experience and a deep passion for helping children
                discover their unique potential. Her vision for Bright Minds Future Leaders was born from witnessing too
                many bright children struggle in traditional educational settings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a Master's degree in Elementary Education and specialized training in multi-age learning
                environments, Angela has dedicated her career to creating educational experiences that honor each
                child's individual learning style and pace.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">M.Ed. Elementary Education, University of Houston</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Certified Montessori Guide</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">15+ Years Educational Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/angela-gilmer-couple.jpeg"
                alt="Angela Gilmer with her husband at a special dinner"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-sm font-medium text-gray-900">Angela & Family</p>
                <p className="text-xs text-gray-600">Celebrating community connections</p>
              </div>
            </div>
          </div>

          {/* Angela with Students */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/angela-gilmer-students.jpeg"
                alt="Angela Gilmer with her students in a backyard learning environment"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-xl p-4 shadow-lg">
                <p className="text-sm font-bold text-black">Real BMFL Students!</p>
                <p className="text-xs text-gray-800">Learning together outdoors</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">A Personal Touch to Education</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Angela believes that education should be as unique as each child. Her approach combines the warmth of
                family-style learning with rigorous academic standards, creating an environment where children feel safe
                to take risks, make mistakes, and grow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Every child deserves to feel successful and valued," Angela says. "When we meet children where they are
                and help them build on their strengths, amazing things happen."
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-lg text-purple-800 italic font-medium">
                  "I don't want any child to just 'catch up.' I want them to soar from exactly where they are today."
                </p>
                <p className="text-sm text-purple-600 mt-2">- Angela Gilmer, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that every child is capable of greatness when given the right environment, support, and
              opportunities to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Child-Centered Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We put the child at the center of everything we do, honoring their unique interests, learning style,
                  and developmental pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community & Connection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learning happens best in community. We foster deep connections between students, families, and our
                  broader community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Character First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Academic excellence is important, but character development and emotional intelligence are the
                  foundation of true success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hands-On Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Children learn best through experience. We provide rich, hands-on learning opportunities that make
                  education come alive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We cultivate natural leaders through mixed-age learning, responsibility, and opportunities to serve
                  others.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifelong Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We instill a love of learning that extends far beyond our classroom, preparing students for a lifetime
                  of growth and discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              Bright Minds Future Leaders was born from a simple but powerful belief: every child deserves an education
              that honors their unique gifts and helps them flourish.
            </p>

            <p className="leading-relaxed mb-6">
              After years of working in traditional educational settings, Angela Gilmer witnessed too many bright,
              capable children struggling not because they couldn't learn, but because the system wasn't designed to
              meet their individual needs. She saw children lose confidence, develop negative associations with
              learning, and begin to believe they weren't "smart enough."
            </p>

            <p className="leading-relaxed mb-6">
              This experience ignited a passion to create something different—a learning environment where children
              could thrive at their own pace, develop strong character alongside academic skills, and discover the joy
              of learning through hands-on experiences and meaningful connections.
            </p>

            <p className="leading-relaxed mb-6">
              In 2023, that vision became reality with the founding of Bright Minds Future Leaders. Our micro-school
              approach combines the best of personalized education with the warmth of a family-like community, creating
              an environment where children don't just learn—they flourish.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border-l-4 border-purple-400 my-8">
              <p className="text-lg font-medium text-gray-900 mb-4">Our Mission</p>
              <p className="text-gray-700 leading-relaxed">
                To provide personalized, character-centered education that nurtures each child's unique potential,
                builds confidence, and develops the thoughtful leaders our world needs.
              </p>
            </div>

            <p className="leading-relaxed">
              Today, we're proud to serve families throughout the Greater Houston area, helping children discover their
              strengths, develop their character, and prepare for a bright future as confident, capable leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews - Right above footer */}
      <GoogleReviews />

      <Footer />
    </div>
  )
}
