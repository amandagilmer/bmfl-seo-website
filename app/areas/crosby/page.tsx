import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Crosby TX | Bright Minds Future Leaders",
  description: "Excellence in private education in Crosby, Texas. Micro school with small classes, personalized learning. Alternative to Crosby ISD.",
  keywords: "private school Crosby TX, Crosby private school, micro school Crosby, Crosby ISD alternative, personalized education Crosby",
  openGraph: {
    title: "Private School Crosby TX | Small Class Excellence",
    description: "Premier private school in Crosby offering personalized education with small class sizes.",
    url: "https://brightmindsfutureleaders.com/areas/crosby",
    type: "website"
  }
}

export default function CrosbyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-blue-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Private School Crosby TX | <span className="text-green-600">Small Class Excellence</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Serving the Crosby community with personalized education that nurtures each child's unique potential
              and builds strong character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg rounded-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
              >
                <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                  Download Our Parent Packet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Crosby Families Choose Private School */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Private School Over Crosby ISD?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crosby families are choosing our private school for the individualized attention their children deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Small Class Sizes</h3>
                <p className="text-green-700">
                  Maximum 8 students per class compared to 25-30 in Crosby ISD schools. Every child gets the attention they need to succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Character Development</h3>
                <p className="text-blue-700">
                  Building strong character and values alongside academic excellence - something many Crosby parents value highly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Convenient Location</h3>
                <p className="text-purple-700">
                  Easy 25-minute drive from Crosby via Highway 90 - many families make this commute for quality private education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Is This Your Crosby Child?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Getting lost in large Crosby ISD classrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Struggling with one-size-fits-all curriculum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Behavior issues from frustration or boredom</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Losing confidence and love of learning</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Here's What Changes at Our Private School</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Thriving in small classes with individual attention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learning at their own pace with personalized curriculum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Positive behavior through engagement and understanding</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Building confidence and developing leadership skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Crosby Parents Say About Our Private School</h2>
          
          <Card className="border-3 border-yellow-400 bg-yellow-50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-lg italic">
                "We drove from Crosby to visit this private school and immediately knew this was right for our son. The small classes and personal attention have made such a difference in his confidence and love of learning."
              </p>
              <p className="font-semibold text-gray-900">- David and Lisa Martinez, Crosby Parents</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Private School Questions from Crosby Families</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is the drive from Crosby worth it for private school education?
                </h3>
                <p className="text-gray-700">
                  Many Crosby families tell us the 25-minute drive is absolutely worth it when they see their child's transformation. Small class sizes, personalized attention, and character development simply aren't available in large public school settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does your private school compare to Crosby ISD schools?
                </h3>
                <p className="text-gray-700">
                  While Crosby ISD has dedicated teachers, they're constrained by large class sizes (25-30 students) and rigid curriculum requirements. Our private school offers maximum 8 students per class, individualized learning plans, and the flexibility to meet each child where they are academically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What age groups do you serve from the Crosby area?
                </h3>
                <p className="text-gray-700">
                  We serve elementary-age students in our mixed-age classrooms. This approach allows younger students to learn from older peers while older students develop leadership skills by helping younger ones - creating a supportive learning community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Crosby Parents: Your Child Deserves More</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't settle for overcrowded classrooms. Give your Crosby child the private school advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
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