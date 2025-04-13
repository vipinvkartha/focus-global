import LocationsGrid from '@/components/LocationsGrid'
import { Globe } from 'lucide-react'

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Our Global Locations</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Focus Global maintains a strong presence worldwide with offices and operations in key logistics hubs across all continents.
          </p>
        </div>
      </div>
      
      {/* Locations Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Globe className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Move to the Fastest & Safest Sea & Air Freight Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With our global network of offices, we provide reliable and efficient freight forwarding services to meet all your logistics needs.
          </p>
        </div>
        
        <LocationsGrid />
        
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-lg p-6 inline-block mx-auto">
            <h3 className="text-xl font-bold mb-2">World wide FCL and Air Cargo booking accepted</h3>
            <p className="text-gray-600">
              Contact our team for personalized service and competitive rates for your freight needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Global Network Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-10">Our Global Network</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Extensive Coverage</h3>
              <p className="text-gray-600">
                Our strategic locations allow us to provide comprehensive freight services in major markets, including Asia, North America, Europe, Africa, and the Middle East.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Local Expertise, Global Reach</h3>
              <p className="text-gray-600">
                Each of our offices is staffed with experienced local professionals who understand the unique logistical challenges and requirements of their region, while being connected to our global network.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Seamless Coordination</h3>
              <p className="text-gray-600">
                Our integrated operations system ensures smooth coordination between all locations, providing end-to-end visibility and control over your shipments regardless of origin or destination.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Continuous Expansion</h3>
              <p className="text-gray-600">
                We continually evaluate market trends and customer needs to expand our presence in emerging logistics hubs, ensuring we can support your business growth in new markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 