"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Made Much Larger */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-bright-minds.png"
              alt="Bright Minds Future Leaders"
              className="h-20 sm:h-24 lg:h-28 xl:h-32 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/approach" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Our Approach
            </Link>
            <Link href="/who-we-serve" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Who We Serve
            </Link>
            <Link href="/success-stories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Success Stories
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+18329577530" className="hover:text-purple-600 transition-colors">
                (832) 957-7530
              </a>
            </div>
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/approach"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                href="/who-we-serve"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Serve
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+18329577530"
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (832) 957-7530
                </a>
                <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full">
                  <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
