import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Clock, Users, GraduationCap, TrendingUp, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Conroe TX | Bright Minds Future Leaders",
  description: "Top private school in Conroe, Texas. Micro school approach with small classes, personalized education. Alternative to Conroe ISD.",
  keywords: "private school Conroe TX, Conroe private school, micro school Conroe, Conroe ISD alternative, personalized education Conroe",
  openGraph: {
    title: "Private School Conroe TX | Individualized Learning",
    description: "Premier private school in Conroe offering micro school education with personalized attention.",
    url: "https://brightmindsfutureleaders.com/areas/conroe",
    type: "website"
  }
}

export default function ConroePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-brand-light py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/who-we-serve" className="text-gray-500 hover:text-gray-700">
                  Who We Serve
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">Conroe, TX</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary-600 mr-3" />
              <span className="text-lg text-primary-700 font-semibold">Serving Conroe, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Private School Conroe TX:
              <br />
              <span className="text-primary-600">Individualized Learning</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Conroe families are choosing BMFL over large{" "}
              <a
                href="https://www.conroeisd.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:underline"
              >
                Conroe ISD
              </a>{" "}
              schools for personalized education that actually works. Quality micro school education just 20 minutes
              from Conroe.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto border-t-4 border-primary-500">
              <div className="flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary-600 mr-2" />
                <Clock className="w-6 h-6 text-primary-600 mr-2" />
                <span className="text-lg font-semibold text-gray-900">20 Minutes from Conroe</span>
              </div>
              <p className="text-gray-600">
                Easy drive via I-45 South to FM 1485 - many Conroe families make this commute for transformative
                education
              </p>
            </div>
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
      </section>

      {/* Why Conroe Families Choose BMFL */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Conroe Families Make the Drive to BMFL
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Conroe family choosing BMFL micro school"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conroe ISD Class Size Issues</h3>
                  <p className="text-gray-700">
                    Many Conroe ISD schools have 25-30+ students per class. At BMFL, your child is one of only 7
                    students maximum.
                  </p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Attention Guaranteed</h3>
                  <p className="text-gray-700">
                    Your Conroe child gets direct, one-on-one instruction from a certified teacher, not just group work
                    or computer time.
                  </p>
                </div>
                <div className="border-l-4 border-accent-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ability-Based Learning</h3>
                  <p className="text-gray-700">
                    No more grade-level teaching that's too hard or too easy. We meet your child exactly where they are
                    academically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conroe ISD vs BMFL Comparison */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">BMFL vs. Conroe ISD Schools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-200 border-t-4 border-t-red-500">
              <CardHeader>
                <CardTitle className="text-xl text-red-700">
                  Typical{" "}
                  <a
                    href="https://www.conroeisd.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Conroe ISD
                  </a>{" "}
                  School
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• 25-30+ students per classroom</li>
                  <li>• Limited individual attention</li>
                  <li>• Grade-level curriculum regardless of ability</li>
                  <li>• Teaching to standardized tests</li>
                  <li>• Struggling students often overlooked</li>
                  <li>• Behavior issues disrupt learning</li>
                  <li>• Large, impersonal environment</li>
                </ul>
                <div className="mt-4 text-sm text-gray-600">
                  <a
                    href="https://www.greatschools.org/texas/conroe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:underline"
                  >
                    View Conroe area school ratings
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-200 border-t-4 border-t-primary-500">
              <CardHeader>
                <CardTitle className="text-xl text-primary-700">BMFL Micro School</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Maximum 7 students total</li>
                  <li>• Individual attention from certified teacher</li>
                  <li>• Ability-based learning, personalized pace</li>
                  <li>• Teaching for mastery and understanding</li>
                  <li>• Every child gets exactly what they need</li>
                  <li>• Family atmosphere, collaborative learning</li>
                  <li>• Small, personal, caring environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conroe Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Conroe Families See Real Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-primary-500">
              <CardHeader>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-xl text-primary-700">From Struggling to Thriving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "The drive from Conroe is worth every minute. My son was lost in a class of 30 at his Conroe ISD
                  school. At BMFL, he gets the individual attention he needs and is finally excited about learning
                  again."
                </p>
                <p className="text-sm font-semibold text-primary-700">– Conroe Parent</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary-500">
              <CardHeader>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-xl text-secondary-700">Math Breakthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "My daughter was struggling with math in fourth grade at her Conroe school. The teacher said she'd
                  catch up eventually. Angela identified exactly what she needed and now she's doing work above grade
                  level!"
                </p>
                <p className="text-sm font-semibold text-secondary-700">– Conroe Parent</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="bg-primary-50 border-primary-200 border-t-4 border-t-primary-500">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-700 text-center">
                  Typical Results for Conroe ISD Families
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary-700 mb-2">2-3</div>
                    <p className="text-gray-700">Grade levels gained per year</p>
                  </div>
                  <div>
                    <Users className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-secondary-700 mb-2">1:7</div>
                    <p className="text-gray-700">Teacher ratio vs. 1:30 in Conroe ISD</p>
                  </div>
                  <div>
                    <GraduationCap className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-accent-700 mb-2">100%</div>
                    <p className="text-gray-700">Of Conroe families report improved confidence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commute Information */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Easy Commute from Conroe</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-t-4 border-t-primary-500">
              <CardHeader>
                <CardTitle className="text-xl text-primary-700 flex items-center">
                  <Car className="w-6 h-6 mr-2" />
                  Simple Route
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Take I-45 South from Conroe</li>
                  <li>• Exit at FM 1485 toward New Caney</li>
                  <li>• Approximately 20 minutes door-to-door</li>
                  <li>• Reverse traffic flow (easier commute)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary-500">
              <CardHeader>
                <CardTitle className="text-xl text-secondary-700 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Flexible Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• School hours: 8:00 AM - 3:00 PM</li>
                  <li>• Flexible arrival time for commuters</li>
                  <li>• Before and after care available</li>
                  <li>• Many Conroe families coordinate carpools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Serving Nearby Communities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/areas/new-caney">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-primary-500">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-primary-700">New Caney</h3>
                  <p className="text-sm text-gray-600">15 minutes</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/the-woodlands">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-secondary-500">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-secondary-700">The Woodlands</h3>
                  <p className="text-sm text-gray-600">25 minutes</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/spring">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-accent-500">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-accent-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-accent-700">Spring</h3>
                  <p className="text-sm text-gray-600">30 minutes</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/porter">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-primary-500">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-primary-700">Porter</h3>
                  <p className="text-sm text-gray-600">25 minutes</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Conroe Community Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary-500">
              <CardHeader>
                <CardTitle className="text-lg text-primary-700">School District</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://www.conroeisd.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      Conroe ISD Official Site
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.greatschools.org/texas/conroe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      Conroe School Ratings
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary-500">
              <CardHeader>
                <CardTitle className="text-lg text-secondary-700">City Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://www.cityofconroe.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      City of Conroe
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mctx.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      Montgomery County
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent-500">
              <CardHeader>
                <CardTitle className="text-lg text-accent-700">Parent Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://www.pta.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      National PTA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.understood.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      Learning & Attention Issues
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Drive Worth It?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join other Conroe families who've discovered that 20 minutes in the car is a small price to pay for
            transformative education. Your child deserves more than getting lost in a crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3">
              Schedule Your Conroe Family Tour
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-primary-700 bg-transparent"
            >
              Talk to Other Conroe Parents
            </Button>
          </div>
          <p className="text-primary-100 mt-4 text-sm">
            <strong>Conroe families:</strong> Ask about our Conroe ISD transition support program
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo-horizontal.png" alt="BMFL Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-300 mb-4">
                Serving Conroe families with individualized K4-5th grade education. Worth the 20-minute drive for
                transformative results.
              </p>
              <div className="text-gray-300">
                <p className="mb-2">📍 New Caney, Texas (20 min from Conroe)</p>
                <p className="mb-2">📞 (XXX) XXX-XXXX</p>
                <p>✉️ info@brightmindsfutureleaders.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Angela
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="hover:text-white">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-serve" className="hover:text-white">
                    Who We Serve
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/areas/conroe" className="hover:text-white text-primary-400">
                    Conroe
                  </Link>
                </li>
                <li>
                  <Link href="/areas/new-caney" className="hover:text-white">
                    New Caney
                  </Link>
                </li>
                <li>
                  <Link href="/areas/the-woodlands" className="hover:text-white">
                    The Woodlands
                  </Link>
                </li>
                <li>
                  <Link href="/areas/spring" className="hover:text-white">
                    Spring
                  </Link>
                </li>
                <li>
                  <Link href="/areas/porter" className="hover:text-white">
                    Porter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Find Us</h4>
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.2233630446317!2d-95.2174081!3d30.1450294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864753c4117e12c5%3A0xf3ac09466823961c!2sBright%20Minds%20Future%20Leaders%20-%20New%20Caney!5e0!3m2!1sen!2sus!4v1751946775660!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
              <p className="text-gray-300 text-sm">Easy 20-minute drive from Conroe via I-45 South</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bright Minds Future Leaders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
