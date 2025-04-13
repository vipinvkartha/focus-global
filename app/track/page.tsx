import TrackingForm from '@/components/TrackingForm'

export default function TrackPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Track Your Shipment</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Monitor your shipment in real-time. Get detailed information about the current status, 
            location, and estimated delivery time of your cargo.
          </p>
        </div>
      </div>
      
      {/* Tracking Form */}
      <div className="container mx-auto px-4 py-12">
        <TrackingForm />
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">How do I track my shipment?</h3>
              <p className="text-gray-600">
                Enter your tracking number in the form above. You will receive detailed information about your shipment's current status, location, and estimated delivery time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Where can I find my tracking number?</h3>
              <p className="text-gray-600">
                Your tracking number is provided in the confirmation email sent to you after booking your shipment. It is also available on your invoice and bill of lading documents.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">How often is tracking information updated?</h3>
              <p className="text-gray-600">
                Tracking information is updated in real-time as your shipment progresses through our network. Updates typically occur at key milestones such as departure, arrival at transit points, and final delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">What should I do if my tracking information is not available?</h3>
              <p className="text-gray-600">
                If your tracking information is not available or seems incorrect, please contact our customer service team at info@focusglobal.com or call us at +1 (555) 123-4567 for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 