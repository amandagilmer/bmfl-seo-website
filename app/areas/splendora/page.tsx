import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import PrivateSchoolSchema from "@/components/PrivateSchoolSchema"

export const metadata: Metadata = {
  title: "Private School Splendora TX | Bright Minds Future Leaders",
  description: "Premier private school in Splendora, Texas. Micro school with small classes, personalized education, character development. Alternative to Splendora ISD.",
  keywords: "private school Splendora TX, Splendora private school, micro school Splendora, Splendora ISD alternative, personalized education Splendora",
  openGraph: {
    title: "Private School Splendora TX | Micro School Excellence",
    description: "Excellence in private education in Splendora with individualized attention and character-focused learning.",
    url: "https://brightmindsfutureleaders.com/areas/splendora",
    type: "website"
  }
}

export default function SplendoraPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrivateSchoolSchema 
        locationName="Splendora"
        url="https://brightmindsfutureleaders.com/areas/splendora"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-blue-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Private School Splendora TX | <span className="text-green-600">Micro School Excellence</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Serving the Splendora community with personalized education that nurtures each child's unique potential
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

      {/* Private School vs Splendora ISD Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Private School vs Splendora ISD: Making the Right Choice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many Splendora families are choosing our private school for the personalized attention their children deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Splendora ISD Public Schools</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Class sizes of 25-30 students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">One-size-fits-all curriculum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Limited individual attention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Standardized testing focus</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bright Minds Private School</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Maximum 8 students per class</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized learning plans</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Individual attention for every child</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Character development focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Splendora Families Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Splendora Families Choose Our Private School</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local families trust us because we understand their children and share their commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Local Focus</h3>
                <p className="text-green-700">
                  Understanding Splendora community values and family needs with personalized private school education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Small Classes</h3>
                <p className="text-blue-700">
                  Maximum 8 students per class - the individual attention every Splendora child deserves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Character First</h3>
                <p className="text-purple-700">
                  Building strong character and leadership skills that reflect Splendora community values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section for Private School Decision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing Private School in Splendora, TX</h2>
            <p className="text-xl text-gray-600">Common questions from Splendora families</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why choose private school over Splendora ISD schools?
                </h3>
                <p className="text-gray-700">
                  Our private school in Splendora offers what large public schools can't: personalized attention with maximum 8 students per class, individualized learning plans, and character development alongside academics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does your Splendora private school approach differ from traditional schools?
                </h3>
                <p className="text-gray-700">
                  We use a micro school approach that combines the best of homeschooling and traditional private school education. Each child learns at their own pace with hands-on activities and real-world connections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes your private school worth the drive from Splendora?
                </h3>
                <p className="text-gray-700">
                  Many Splendora families make the short drive because the results speak for themselves: confident children who love learning, strong character development, and academic excellence in a nurturing environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Give Your Splendora Child the Best?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of Splendora families who have chosen private school education for their children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
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