import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock, GraduationCap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Huffman TX | Bright Minds Future Leaders",
  description: "Premier private school serving Huffman, Texas. Micro school with personalized education, small classes. Alternative to Humble ISD.",
  keywords: "private school Huffman TX, Huffman private school, micro school Huffman, Humble ISD alternative, personalized education Huffman",
  openGraph: {
    title: "Private School Huffman TX | Personalized Learning",
    description: "Excellence in private education serving Huffman with individualized attention and character development.",
    url: "https://brightmindsfutureleaders.com/areas/huffman",
    type: "website"
  }
}

export default function HuffmanPage() {
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
                Private School Huffman TX | <span className="text-green-600">Personalized Learning</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Serving the Huffman community with personalized education that nurtures each child's unique potential
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

      {/* Why Huffman Families Choose Our Private School */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Huffman Families Choose Our Private School</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Huffman parents are discovering the difference personalized private education makes for their children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Small Classes</h3>
                <p className="text-green-700">
                  Maximum 8 students per class ensures every Huffman child receives the individual attention they deserve to thrive academically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Personalized Learning</h3>
                <p className="text-blue-700">
                  Each Huffman student gets a customized learning plan that adapts to their unique needs, interests, and learning style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Character Development</h3>
                <p className="text-purple-700">
                  Building strong character, leadership skills, and emotional intelligence alongside academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Humble ISD Alternative Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Better Alternative to Humble ISD for Huffman Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many Huffman families within Humble ISD boundaries are choosing our private school for a more personalized educational experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Humble ISD Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Large class sizes of 25-30 students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Limited one-on-one teacher interaction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Rigid curriculum that may not fit all learning styles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Heavy focus on standardized testing</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bright Minds Private School Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Maximum 8 students per class</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Daily one-on-one attention from caring teachers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Flexible curriculum adapted to each child's needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Holistic education focusing on the whole child</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Huffman Parents Say About Our Private School</h2>
          
          <Card className="border-3 border-yellow-400 bg-yellow-50 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-lg italic">
                "We live in Huffman and were zoned for Humble ISD, but after visiting Bright Minds, we knew this was the right choice for our daughter. The small classes and individualized attention have helped her confidence soar. She actually looks forward to school every day now!"
              </p>
              <p className="font-semibold text-gray-900">- Amanda and Chris Johnson, Huffman Parents</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for Huffman Students Who:</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Need more individual attention than Humble ISD can provide</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learn differently and need personalized approaches</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Thrive in smaller, more intimate learning environments</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Benefit from character development integrated with academics</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Want to develop natural leadership skills</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learn best through hands-on, experiential activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Private School Questions from Huffman Families</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How far is your private school from Huffman?
                </h3>
                <p className="text-gray-700">
                  We're conveniently located about 15-20 minutes from Huffman via FM 1960 and FM 1485. Many Huffman families find this short drive worthwhile for the personalized education their children receive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why choose private school over Humble ISD for my Huffman child?
                </h3>
                <p className="text-gray-700">
                  While Humble ISD has many good teachers, our private school offers what large districts simply can't: maximum 8 students per class, personalized learning plans for each child, and the flexibility to truly meet each student where they are academically and emotionally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you work with families from the Huffman area specifically?
                </h3>
                <p className="text-gray-700">
                  Yes! We welcome families from Huffman and the broader Northeast Harris County area. Many of our current families come from Huffman, Atascocita, Humble, and Kingwood, creating a wonderful community of like-minded families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Huffman Parents: Your Child's Future Starts Here</h2>
          <p className="text-xl mb-8 opacity-90">
            Give your Huffman child the private school advantage they deserve. Small classes, big results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour Today</Link>
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