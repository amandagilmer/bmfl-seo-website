import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleReviews from "@/components/GoogleReviews"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to learn more about how Bright Minds Future Leaders can help your child thrive? We'd love to hear
              from you and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We believe the best way to understand if our program is right for your child is through conversation.
                  Reach out to schedule a tour, ask questions, or simply learn more about our approach.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-primary-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-600">
                          22893 Antique Ln
                          <br />
                          New Caney, TX 77357
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-secondary-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                        <a
                          href="tel:+18329577530"
                          className="text-secondary-600 hover:text-secondary-700 font-medium text-lg"
                        >
                          (832) 957-7530
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Monday - Friday, 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-accent-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                        <a
                          href="mailto:info@brightmindsfutureleaders.com"
                          className="text-accent-600 hover:text-accent-700 font-medium"
                        >
                          info@brightmindsfutureleaders.com
                        </a>
                        <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-primary-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">School Hours</h3>
                        <div className="text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 3:00 PM</p>
                          <p className="text-sm mt-1">Extended care available upon request</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full flex flex-col">
              <div className="min-h-[800px] h-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://sites.brightmindsfutureleaders.com/widget/form/uKJPQPNxVzsvHoa4OsRJ"
                  style={{
                    width: "100%",
                    minHeight: "800px",
                    height: "auto",
                    border: "none",
                  }}
                  id="inline-uKJPQPNxVzsvHoa4OsRJ"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Drop us a message"
                  data-height="800"
                  data-layout-iframe-id="inline-uKJPQPNxVzsvHoa4OsRJ"
                  data-form-id="uKJPQPNxVzsvHoa4OsRJ"
                  title="Drop us a message"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We proudly serve families throughout North Houston and surrounding communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "New Caney", link: "/areas/new-caney" },
              { name: "Porter", link: "/areas/porter" },
              { name: "Humble", link: "/areas/humble" },
              { name: "Kingwood", link: "/areas/kingwood" },
              { name: "Atascocita", link: "/areas/atascocita" },
              { name: "Spring", link: "/areas/spring" },
              { name: "Conroe", link: "/areas/conroe" },
              { name: "The Woodlands", link: "/areas/the-woodlands" },
            ].map((area) => (
              <Card key={area.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <a href={area.link} className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      <Footer />

      {/* Form Embed Script */}
      <Script src="https://sites.brightmindsfutureleaders.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}
