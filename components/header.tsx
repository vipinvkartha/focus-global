"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin,
  Plane,
  Ship,
  FileText
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const locations = [
    { label: 'China', href: '/locations/china' },
    { label: 'USA', href: '/locations/usa' },
    { label: 'India', href: '/locations/india' },
    { label: 'Zambia', href: '/locations/zambia' },
    { label: 'Ghana', href: '/locations/ghana' },
    { label: 'Thailand', href: '/locations/thailand' },
    { label: 'Congo', href: '/locations/congo' },
    { label: 'Dubai', href: '/locations/dubai' },
  ]

  const services = [
    { label: 'Sea Freight', href: '/services/sea-freight' },
    { label: 'Air Freight', href: '/services/air-freight' },
  ]

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { 
      label: 'Locations', 
      href: '/locations',
      isDropdown: true,
      items: locations 
    },
    { 
      label: 'Freight Services', 
      href: '/services',
      isDropdown: true,
      items: services 
    },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Focus Global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <Link href={subItem.href} className="w-full">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-3">
              <Link href="/quote">
                <Button variant="outline" size="sm">Get Quote</Button>
              </Link>
              <Link href="/track">
                <Button size="sm">Track Shipment</Button>
              </Link>
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white shadow-lg rounded-lg mb-4">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.label} className="py-2">
                  <div className="flex items-center px-4 text-sm font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="pl-6 space-y-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-1 text-sm hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="px-4 pt-3 space-y-2">
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Get Quote</Button>
              </Link>
              <Link href="/track" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Track Shipment</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header