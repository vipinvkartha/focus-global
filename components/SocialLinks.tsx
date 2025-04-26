import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const socialLinks = [
  { 
    icon: <Instagram className="h-8 w-8" />, 
    href: 'https://www.instagram.com/focus_global_hk_ltd?igsh=MTQ5am05ZXk1c3Vv',
    label: 'Instagram'
  },
  { 
    icon: <Facebook className="h-8 w-8" />, 
    href: 'https://www.facebook.com/share/p/18ahMJk71m/?mibextid=wwXIfr',
    label: 'Facebook'
  },
  { 
    icon: <MessageCircle className="h-8 w-8" />, 
    href: 'https://wa.me/8619548851246',
    label: 'WhatsApp'
  }
]

export default function SocialLinks() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Connect With Us</h3>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
            Follow us on social media to stay updated with our latest services and shipping solutions
          </p>
          <div className="flex items-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:text-primary"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 