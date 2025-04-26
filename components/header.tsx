"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import SiteIcon from '@/components/SiteIcon'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'FAQ', href: '#faq' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 max-w-full">
            <a href="#home" className="flex items-center">
              <div className="h-16 flex items-center">
                {!logoError ? (
                  <Image 
                    src="/custom-logo.png" 
                    alt="Focus Global Logo" 
                    width={160}  
                    height={60}
                    priority
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <SiteIcon size={70} className="text-primary" />
                )}
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center space-x-3 lg:space-x-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="ml-4">
                <a href="https://wa.me/8619548851246" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="whitespace-nowrap">Get Quote</Button>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed top-24 inset-x-0 z-40 md:hidden">
            <div className="mx-4">
              <nav className="py-4 bg-white shadow-lg rounded-lg">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 pt-3 pb-4">
                  <a href="https://wa.me/8619548851246" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full">Get Quote</Button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header