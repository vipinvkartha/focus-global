import QuoteForm from '@/components/QuoteForm'
import { Mail, Phone, Clock } from 'lucide-react'

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Request a Quote</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Get a customized shipping quote tailored to your specific requirements. Fill out the form below and our team will respond promptly.
          </p>
        </div>
      </div>
      
      {/* Quote Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Shipping Quote Request</h2>
              <QuoteForm />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@focusglobal.com" className="text-gray-600 hover:text-primary">
                      info@focusglobal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">
                      We respond to all quote requests within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Competitive shipping rates</li>
                <li>✓ Global network of carriers and agents</li>
                <li>✓ Transparent pricing with no hidden fees</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Real-time shipment tracking</li>
                <li>✓ Customs clearance expertise</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="font-medium text-lg mb-2">Need help?</div>
              <p className="text-gray-600 mb-4">
                Our logistics specialists are ready to assist you with any questions about your shipment.
              </p>
              <a 
                href="tel:+1-555-123-4567" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                Call us: +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 