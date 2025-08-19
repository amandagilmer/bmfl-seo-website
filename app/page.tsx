import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, BookOpen, Target, Heart, TrendingUp, Star } from "lucide-react"
import { TrackingEvents } from "@/components/TrackingEvents"
import GoogleReviews from "@/components/GoogleReviews"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TrackingEvents />
      <Header />

      {/* Hero Section - Split Layout */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  "They'll Catch Up by Third Grade"
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">What Happens When They Don't?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  At Bright Minds Future Leaders, we don't wait for children to struggle. We don't push kids forward
                  when they're not ready. We meet each child exactly where they are and help them build confidence while
                  they learn.
                </p>
              </div>

              {/* Quote section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-400 shadow-lg">
                <p className="text-lg text-gray-800 mb-3 italic font-medium">
                  "I don't know about you but as a parent, I don't want my child to 'catch up'. That's the difference
                  between choosing a micro school and watching them succeed."
                </p>
                <p className="text-base text-gray-600 font-semibold">
                  - Karen Pryor, Founder & Chief Executive Officer
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
                >
                  <Link href="https://book.brightmindsfutureleaders.com/apply-now">
                    Schedule Your Child's Assessment Today
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-8 py-4 text-lg rounded-lg bg-white shadow-lg"
                >
                  <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                    Download Our Parent Packet
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Student Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-students-bg.png"
                  alt="Happy students at Bright Minds Future Leaders micro school sitting on colorful carpet in classroom"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Real BMFL Students!
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning By Doing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Learning</span> By <span className="text-pink-500">Doing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students don't just read about the world – they experience it through hands-on activities, community
              connections, and real-world learning opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="/learning-by-doing-circles.png"
                alt="Students engaged in hands-on learning activities including building blocks, letter recognition, and tactile learning"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Hands-On Learning That Sticks</h3>
              <p className="text-gray-700 leading-relaxed">
                Research shows that children learn best when they can touch, manipulate, and interact with their
                learning materials. Our approach combines traditional academics with engaging, tactile experiences that
                make learning memorable and fun.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Building and construction activities develop spatial reasoning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Letter and number recognition through multi-sensory methods</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Problem-solving through hands-on challenges and games</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <img
                src="/indoor-building-blocks.png"
                alt="Students building with colorful geometric blocks in classroom"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">STEM Building</h4>
                  <p className="text-sm">Developing engineering skills</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/students-outdoor-learning.png"
                alt="Children engaged in outdoor learning activities on grass"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Outdoor Learning</h4>
                  <p className="text-sm">Nature-based education</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/parachute-play.png"
                alt="Children playing with colorful parachute outdoors"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Team Building</h4>
                  <p className="text-sm">Cooperation & coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes - Updated without specific numbers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Small Class Sizes</h3>
                <p className="text-blue-700">
                  Intimate learning environments ensure every child gets the individual attention they deserve. No child
                  gets lost in the crowd as we grow thoughtfully with additional caring teachers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-pink-400 bg-pink-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-pink-900 mb-2">Mixed-Grade Learning</h3>
                <p className="text-pink-700">
                  Multi-age classrooms allow children to learn at their own pace while developing leadership skills.
                  Older students mentor younger ones, creating thoughtful leaders at every level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-orange-400 bg-orange-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-orange-900 mb-2">Self-Directed Learning</h3>
                <p className="text-orange-700">
                  Children develop independence and critical thinking skills through guided self-directed learning
                  experiences that build confidence and natural leadership abilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Connections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Real-World <span className="text-purple-600">Community Connections</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Learning extends beyond our classroom walls. We believe in connecting our students with their community
                through meaningful experiences that bring lessons to life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Fire safety education with local firefighters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Community service projects that build character</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Field trips that connect to curriculum topics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Guest speakers who share real-world expertise</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/fire-truck-visit.png"
                alt="BMFL students with local firefighters and fire truck during educational visit"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Community Heroes!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Is This Your Child?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Struggling to keep up with grade-level expectations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Lost in overcrowded classrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Behavior issues from frustration and boredom</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">You're worried about their self-esteem</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Here's What Changes at BMFL</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learning at their own pace with confidence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Personal attention from caring teachers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Positive behavior through engagement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Building confidence and love for learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Section - Updated */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose <span className="text-yellow-500">Bright Minds Future Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another school. We're a community dedicated to nurturing each child's unique potential and
              preparing them for a bright future as thoughtful leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-orange-400 bg-orange-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-orange-900 mb-3">Intimate Learning Environment</h3>
                <p className="text-orange-700">
                  Our thoughtfully sized classes ensure every child receives the individual attention they need to
                  succeed and thrive academically while we grow with additional caring educators.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-purple-900 mb-3">Experienced Leadership</h3>
                <p className="text-purple-700">
                  Our dedicated team brings years of educational expertise and a passion for helping children reach
                  their full potential as confident, thoughtful leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Character Development</h3>
                <p className="text-blue-700">
                  We focus on building strong character, leadership skills, and emotional intelligence alongside
                  academic excellence through mixed-age learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-red-400 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-red-900 mb-3">Multi-Age Learning</h3>
                <p className="text-red-700">
                  Our mixed-grade approach allows children to learn at their own pace while developing natural
                  leadership skills by mentoring younger students and learning from older peers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-pink-400 bg-pink-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-pink-900 mb-3">Personalized Approach</h3>
                <p className="text-pink-700">
                  Every child learns differently. We tailor our teaching methods to match each student's unique learning
                  style and needs while fostering leadership qualities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-green-400 bg-green-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-3">Proven Results</h3>
                <p className="text-green-700">
                  Our students consistently show remarkable improvement in both academic performance and personal
                  confidence, developing into thoughtful leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-3 border-yellow-400 bg-yellow-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  "My child has thrived in this environment. The small class sizes and personalized attention have made
                  all the difference. She's confident, engaged, and actually loves learning now!"
                </p>
                <p className="font-semibold text-gray-900">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-purple-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  "After struggling in traditional school, my son is finally succeeding. The teachers really understand
                  how to reach each child and help them grow. We couldn't be happier!"
                </p>
                <p className="font-semibold text-gray-900">- Michael R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Child Deserves More Than "They'll Catch Up Eventually"
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every day your child spends struggling is a day of lost confidence and missed opportunities. At Bright Minds
            Future Leaders, we believe every child deserves to thrive from day one.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Limited spots available for the 2024-2025 school year. Don't wait - your child's future starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg shadow-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/apply-now">Schedule Your Child's Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent shadow-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                Download Our Parent Packet
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - Right above footer */}
      <GoogleReviews />

      <Footer />
    </div>
  )
}
