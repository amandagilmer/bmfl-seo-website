import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Kingwood TX | Personalized Education & Small Classes",
  description: "Premier private school in Kingwood, Texas. Micro school with individualized learning, character focus. Serving Humble ISD area families. Schedule your tour today.",
  keywords: "private school Kingwood TX, Kingwood private school, micro school Kingwood, Humble ISD alternative, personalized education Kingwood",
  openGraph: {
    title: "Private School Kingwood TX | Bright Minds Future Leaders",
    description: "Excellence in private education in Kingwood with small classes and personalized attention. Alternative to traditional schooling.",
    url: "https://brightmindsfutureleaders.com/areas/kingwood",
    type: "website"
  }
}

export default function KingwoodPage() {
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
                Private School Kingwood TX | <span className="text-green-600">Personalized Education</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Serving the Kingwood community with personalized education that nurtures each child's unique potential and
              builds strong character.
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

      {/* Local Community Focus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Rooted in the Kingwood Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of Kingwood families and are committed to providing exceptional education
              right in your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Local Focus</h3>
                <p className="text-green-700">
                  Deeply connected to the Kingwood community, understanding local families' needs and values.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Small Classes</h3>
                <p className="text-blue-700">
                  Maximum 8 students per class ensures every Kingwood child gets the attention they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Character First</h3>
                <p className="text-purple-700">
                  Building strong character and leadership skills that reflect Kingwood community values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Kingwood Families Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Kingwood Families Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local families trust us because we understand their children and share their commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect for Kingwood Students Who:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Need smaller class sizes than Kingwood ISD can provide</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Want personalized attention from caring teachers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Benefit from multi-age learning environments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Thrive with character-focused education</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Learn better at their own pace</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Kingwood Parents Say:</h3>
              <Card className="border-3 border-yellow-400 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Living in Kingwood, we wanted something different for our daughter. BMFL has exceeded our
                    expectations. The teachers know her personally, and she's thriving academically and socially."
                  </p>
                  <p className="font-semibold text-gray-900">- Maria Rodriguez, Kingwood Parent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Kingwood Location</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Education Lane
                      <br />
                      Kingwood, TX 77357
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+12813545437" className="text-green-600 hover:text-green-700 transition-colors">
                      (281) 354-5437
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:kingwood@brightmindsfutureleaders.com"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      kingwood@brightmindsfutureleaders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">School Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 3:00 PM
                      <br />
                      Extended care available until 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Kingwood & Surrounding Areas</h2>
              <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">We Welcome Families From:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Kingwood</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Humble</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Atascocita</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">New Caney</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Spring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Give Your Kingwood Child the Best?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of Kingwood families who have chosen personalized education for their children.
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
              Call (281) 354-5437
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
