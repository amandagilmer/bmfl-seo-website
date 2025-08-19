import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import PrivateSchoolSchema from "@/components/PrivateSchoolSchema"

export const metadata: Metadata = {
  title: "Private School Cleveland TX | Bright Minds Future Leaders",
  description: "Top private school in Cleveland, Texas. Micro school with personalized education, small classes, character development. Alternative to Cleveland ISD.",
  keywords: "private school Cleveland TX, Cleveland private school, micro school Cleveland, Cleveland ISD alternative, personalized education Cleveland",
  openGraph: {
    title: "Private School Cleveland TX | Character-Based Learning",
    description: "Premier private school in Cleveland offering individualized attention and character-focused education.",
    url: "https://brightmindsfutureleaders.com/areas/cleveland",
    type: "website"
  }
}

export default function ClevelandPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrivateSchoolSchema 
        locationName="Cleveland"
        url="https://brightmindsfutureleaders.com/areas/cleveland"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-blue-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Private School Cleveland TX | <span className="text-green-600">Character-Based Learning</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Serving the Cleveland community with personalized education that nurtures each child's unique potential
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

      {/* Private School vs Cleveland ISD Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Private School vs Cleveland ISD: The Clear Choice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleveland families are discovering the difference personalized private education makes for their children.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cleveland ISD Public Schools</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Large class sizes limit individual attention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Rigid curriculum doesn't adapt to individual needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Limited character development programs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Test-focused education approach</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bright Minds Private School</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Maximum 8 students per class ensures attention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Curriculum adapts to each child's learning style</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Character development integrated into daily learning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Whole-child education approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cleveland Families Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Cleveland Families Choose Our Private School</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleveland parents see the immediate difference in their children's confidence and love of learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect for Cleveland Students Who:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Need smaller class sizes than Cleveland ISD provides</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Thrive with personalized attention from caring teachers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Benefit from character-focused education</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learn better through hands-on experiences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Want to develop leadership skills naturally</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Cleveland Parents Say:</h3>
              <Card className="border-3 border-yellow-400 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "We chose this private school over Cleveland ISD because our daughter needed more individual attention. The teachers here truly know her and help her succeed at her own pace."
                  </p>
                  <p className="font-semibold text-gray-900">- Jennifer Thompson, Cleveland Parent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Private School Cleveland TX - FAQ</h2>
            <p className="text-xl text-gray-600">Answers for Cleveland families considering private education</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How far is the drive from Cleveland to your private school?
                </h3>
                <p className="text-gray-700">
                  We're conveniently located about 20-25 minutes from Cleveland via Highway 59 and FM 1485. Many Cleveland families find this short drive worth it for the personalized education their children receive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the difference between your private school and Cleveland ISD schools?
                </h3>
                <p className="text-gray-700">
                  Our private school offers maximum 8 students per class (compared to 25-30 in Cleveland ISD), personalized learning plans, and integrated character development. We meet each child where they are academically and help them grow from there.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you serve students from Cleveland ISD boundaries?
                </h3>
                <p className="text-gray-700">
                  Yes! We welcome families from Cleveland and surrounding areas. Many of our students previously attended Cleveland ISD schools but needed the smaller class sizes and individualized attention our micro school provides.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Cleveland Families: Give Your Child the Private School Advantage</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Cleveland families who have chosen excellence in private education for their children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Tour</Link>
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