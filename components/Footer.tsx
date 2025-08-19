import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bright Minds Future Leaders</h3>
            <p className="text-gray-300 text-sm">
              Personalized education that meets every child where they are and helps them reach their full potential.
            </p>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
              <span className="text-gray-300 text-sm">
                22893 Antique Ln
                <br />
                New Caney, TX 77357
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/areas/new-caney" className="text-gray-300 hover:text-white transition-colors text-sm">
                  New Caney
                </Link>
              </li>
              <li>
                <Link href="/areas/humble" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Humble
                </Link>
              </li>
              <li>
                <Link href="/areas/kingwood" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Kingwood
                </Link>
              </li>
              <li>
                <Link href="/areas/atascocita" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Atascocita
                </Link>
              </li>
              <li>
                <Link href="/areas/spring" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Spring
                </Link>
              </li>
              <li>
                <Link href="/areas/the-woodlands" className="text-gray-300 hover:text-white transition-colors text-sm">
                  The Woodlands
                </Link>
              </li>
              <li>
                <Link href="/areas/splendora" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Splendora
                </Link>
              </li>
              <li>
                <Link href="/areas/cleveland" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cleveland
                </Link>
              </li>
              <li>
                <Link href="/areas/crosby" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Crosby
                </Link>
              </li>
              <li>
                <Link href="/areas/huffman" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Huffman
                </Link>
              </li>
              <li>
                <Link href="/areas/conroe" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Conroe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-300" />
                <a href="tel:+18329577530" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (832) 957-7530
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <a
                  href="mailto:info@brightmindsfutureleaders.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@brightmindsfutureleaders.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>School Hours:</div>
                  <div>8:30 AM - 3:30 PM</div>
                  <div>Monday - Friday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 Bright Minds Future Leaders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
