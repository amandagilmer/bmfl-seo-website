import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Heart, Target, Star, Award, Lightbulb } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 py-12 sm:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-purple-600">Approach</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              We believe every child learns differently. Our personalized approach meets students where they are and
              helps them reach their full potential through individualized instruction and character development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Philosophy</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 border-l-4 border-purple-500">
            <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4 leading-relaxed text-center">
              "I don't base my kids on grade levels. I base them on ability levels. That's the difference between
              watching a child struggle and watching them succeed."
            </blockquote>
            <cite className="text-purple-700 font-semibold text-base sm:text-lg text-center block">
              – Angela Gilmer, Founder & Certified Teacher
            </cite>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Ability-Based Learning</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                Traditional schools group children by age and expect them all to learn the same material at the same
                pace. We know this doesn't work for every child.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                At Bright Minds Future Leaders, we assess each child's actual ability level in every subject and create
                a personalized learning plan that challenges them appropriately while building confidence through
                success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Individual assessment in each subject area</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Customized learning plans for every student
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Progress at their own pace, not grade level
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Regular reassessment and plan adjustments</span>
                </li>
              </ul>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-l-4 border-purple-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base italic">
                  "The difference is incredible. Instead of struggling to keep up with grade-level expectations, our
                  daughter is thriving at her own level and making amazing progress. She's gained 2 grade levels in
                  reading in just 6 months!"
                </p>
                <div className="text-xs sm:text-sm text-gray-600">
                  <strong>Jennifer M.</strong> - Parent of 3rd Grade Student
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Six <span className="text-purple-600">Character Pillars</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Character development is at the heart of everything we do. Our Six Pillars program builds the foundation
              for lifelong success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700 text-base sm:text-lg">Perseverance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Building resilience, determination, and the ability to overcome challenges through persistence and
                  growth mindset.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-700 text-base sm:text-lg">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Building character through honesty, authenticity, and doing the right thing even when no one is
                  watching.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 text-base sm:text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Encouraging creative thinking, problem-solving, and the courage to try new approaches to challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700 text-base sm:text-lg">Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Fostering the ability to inspire others and be inspired, creating positive influence in their
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-700 text-base sm:text-lg">Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Developing internal drive, goal-setting skills, and the passion to pursue excellence in all endeavors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 text-base sm:text-lg">Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Taking ownership of actions, choices, and learning while developing accountability and reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Learning <span className="text-purple-600">Environment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Small Class Sizes</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                With small class sizes, every child receives the individual attention they need to thrive. This isn't
                just about smaller numbers – it's about creating meaningful relationships and personalized learning
                experiences.
              </p>
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h4 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">What This Means:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 90-minute individual instruction blocks</li>
                  <li>• Immediate feedback and support</li>
                  <li>• Strong teacher-student relationships</li>
                  <li>• Customized pace for each learner</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Mixed-Age Learning</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                Our multi-age classroom creates natural mentorship opportunities where older students help younger ones,
                and everyone learns from each other. This mirrors real-world environments and builds leadership skills.
              </p>
              <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border-l-4 border-purple-500 mb-6">
                <h4 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">Benefits Include:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Peer mentoring and support</li>
                  <li>• Leadership development</li>
                  <li>• Reduced competition, increased collaboration</li>
                  <li>• Real-world social dynamics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Daily <span className="text-purple-600">Schedule</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning with flexibility to meet each child's needs. School hours: 8:30 AM - 3:30 PM
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-blue-200">
                  <span className="font-semibold text-blue-700">8:30 - 9:00 AM</span>
                  <span className="text-gray-700">Morning Group</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-200">
                  <span className="font-semibold text-blue-700">9:00 - 10:15 AM</span>
                  <span className="text-gray-700">Reading/Language Arts</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-200">
                  <span className="font-semibold text-blue-700">10:30 AM - 12:00 PM</span>
                  <span className="text-gray-700">Math</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-200">
                  <span className="font-semibold text-blue-700">1:30 - 3:00 PM</span>
                  <span className="text-gray-700">Science/Project Based Learning</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-semibold text-blue-700">3:00 - 3:15 PM</span>
                  <span className="text-gray-700">Reflection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Assessment */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual <span className="text-purple-600">Assessment</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every child begins with comprehensive testing in Reading and Math to determine their true ability level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <Card className="border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
                <CardTitle className="text-blue-700 text-lg sm:text-xl">Reading Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Comprehensive evaluation of reading comprehension, phonics skills, vocabulary, and fluency to create a
                  personalized reading plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-4" />
                <CardTitle className="text-purple-700 text-lg sm:text-xl">Math Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Detailed testing of mathematical concepts, problem-solving abilities, and computational skills to
                  identify strengths and areas for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain high academic standards while adapting our methods to each child's learning style and pace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700 text-base sm:text-lg">Reading & Language Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Phonics-based instruction</li>
                  <li>• Literature appreciation</li>
                  <li>• Creative writing development</li>
                  <li>• Public speaking skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-700 text-base sm:text-lg">Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hands-on manipulatives</li>
                  <li>• Conceptual understanding</li>
                  <li>• Problem-solving strategies</li>
                  <li>• Real-world applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 text-base sm:text-lg">Science & Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hands-on experiments</li>
                  <li>• Scientific method</li>
                  <li>• Nature exploration</li>
                  <li>• Critical thinking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700 text-base sm:text-lg">Social Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Community connections</li>
                  <li>• Cultural awareness</li>
                  <li>• Historical understanding</li>
                  <li>• Civic responsibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Experience Our Approach Firsthand
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            The best way to understand our approach is to see it in action. Schedule a tour to observe our classroom,
            meet our teacher, and see how personalized education can transform your child's learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/apply-now">Schedule Your Child's Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 bg-transparent font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Call (832) 957-7530
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
