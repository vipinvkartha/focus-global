"use client"

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Loader2 } from 'lucide-react'

interface TrackingFormProps {
  fullWidth?: boolean;
  showTitle?: boolean;
}

interface ShipmentEvent {
  date: string;
  status: string;
  location: string;
}

interface ShipmentResult {
  id: string;
  status: string;
  from: string;
  to: string;
  lastUpdate: string;
  estimatedDelivery: string;
  history: ShipmentEvent[];
}

export default function TrackingForm({ fullWidth = false, showTitle = true }: TrackingFormProps) {
  const [trackingId, setTrackingId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<ShipmentResult | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!trackingId) {
      setError('Please enter a valid tracking number')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we'll simulate a result
      if (trackingId.startsWith('FG')) {
        setResult({
          id: trackingId,
          status: 'In Transit',
          from: 'Shanghai, China',
          to: 'Mumbai, India',
          lastUpdate: '2023-08-15 08:30 GMT',
          estimatedDelivery: '2023-08-22',
          history: [
            { date: '2023-08-15 08:30 GMT', status: 'Departed from transit facility', location: 'Dubai, UAE' },
            { date: '2023-08-14 14:20 GMT', status: 'Arrived at transit facility', location: 'Dubai, UAE' },
            { date: '2023-08-12 09:45 GMT', status: 'Departed from origin', location: 'Shanghai, China' },
            { date: '2023-08-11 16:30 GMT', status: 'Processing at origin', location: 'Shanghai, China' },
            { date: '2023-08-10 11:15 GMT', status: 'Shipment created', location: 'Shanghai, China' },
          ]
        })
      } else {
        setError('No shipment found with this tracking number')
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className={`${fullWidth ? 'w-full' : 'max-w-2xl mx-auto'}`}>
      {showTitle && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Track Your Shipment</h2>
          <p className="text-gray-600 mt-2">Enter your tracking number to get real-time updates</p>
        </div>
      )}
      
      <Card>
        <CardContent className={`${showTitle ? 'pt-6' : 'pt-0 pb-0'} ${!showTitle ? 'p-0' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Enter your tracking number (e.g. FG123456789)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Tracking
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" /> 
                    Track Now
                  </>
                )}
              </Button>
            </div>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
          
          {result && (
            <div className="mt-6 border-t pt-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Tracking ID: {result.id}</h3>
                  <p className="text-sm text-gray-600">
                    From: {result.from} • To: {result.to}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {result.status}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2 text-sm">
                  <span>Last Updated: {result.lastUpdate}</span>
                  <span>Estimated Delivery: {result.estimatedDelivery}</span>
                </div>
                
                <div className="relative">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" 
                      style={{ width: '60%' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Shipment History</h4>
                <div className="space-y-4">
                  {result.history.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className={`rounded-full h-3 w-3 ${index === 0 ? 'bg-primary' : 'bg-gray-300'}`}></div>
                        {index < result.history.length - 1 && (
                          <div className="h-full w-px bg-gray-300 my-1"></div>
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">{event.status}</p>
                        <p className="text-xs text-gray-500">{event.date} • {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 