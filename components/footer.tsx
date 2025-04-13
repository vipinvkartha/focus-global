import Link from 'next/link'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">Focus Global</span>
            </div>
            <p className="text-sm">
              Your trusted partner in global logistics and freight forwarding solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/track" className="hover:text-primary transition-colors">Track Shipment</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/air-freight" className="hover:text-primary transition-colors">Air Freight</Link></li>
              <li><Link href="/services/sea-freight" className="hover:text-primary transition-colors">Sea Freight</Link></li>
              <li><Link href="/services/road-freight" className="hover:text-primary transition-colors">Road Freight</Link></li>
              <li><Link href="/services/warehousing" className="hover:text-primary transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@focusglobal.com</span>
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