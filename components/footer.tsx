import Link from 'next/link'
import { Globe, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'

const socialLinks = [
  { 
    icon: <Instagram className="h-5 w-5" />, 
    href: 'https://www.instagram.com/focus_global_hk_ltd?igsh=MTQ5am05ZXk1c3Vv',
    label: 'Instagram'
  },
  { 
    icon: <Facebook className="h-5 w-5" />, 
    href: 'https://www.facebook.com/share/p/18ahMJk71m/?mibextid=wwXIfr',
    label: 'Facebook'
  },
  { 
    icon: <MessageCircle className="h-5 w-5" />, 
    href: 'https://wa.me/8619548851246',
    label: 'WhatsApp'
  }
]

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">Focus Global</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in global logistics and freight forwarding solutions.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>Room no.2607 A,26th Floor
Tower-21,Vanke Jinyu Building
Nanhai District, Foshan city, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+8619548851246</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@focusglobaltrading.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Focus Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer