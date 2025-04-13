"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Loader2, Check } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  fromCountry: string;
  toCountry: string;
  serviceType: string;
  cargoType: string;
  weight: string;
  dimensions: string;
  message: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  fromCountry: '',
  toCountry: '',
  serviceType: '',
  cargoType: '',
  weight: '',
  dimensions: '',
  message: '',
}

const serviceTypes = [
  { value: 'air', label: 'Air Freight' },
  { value: 'sea', label: 'Sea Freight' },
  { value: 'road', label: 'Road Freight' },
  { value: 'rail', label: 'Rail Freight' },
  { value: 'multimodal', label: 'Multimodal' },
  { value: 'warehouse', label: 'Warehousing' },
  { value: 'customs', label: 'Customs Clearance' },
]

const cargoTypes = [
  { value: 'general', label: 'General Cargo' },
  { value: 'hazardous', label: 'Hazardous Materials' },
  { value: 'perishable', label: 'Perishable Goods' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'vehicles', label: 'Vehicles' },
  { value: 'machinery', label: 'Machinery' },
  { value: 'textiles', label: 'Textiles' },
  { value: 'other', label: 'Other' },
]

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof FormData]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string, name: keyof FormData) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    // Required fields
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone) newErrors.phone = 'Phone is required'
    if (!formData.fromCountry) newErrors.fromCountry = 'Origin country is required'
    if (!formData.toCountry) newErrors.toCountry = 'Destination country is required'
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      // Reset form after submission
      setFormData(initialData)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Quote Request Received</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your quote request. Our team will review your requirements and get back to you within 24 hours with a customized quote.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name*</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number*</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fromCountry">From (Origin Country)*</Label>
          <Input
            id="fromCountry"
            name="fromCountry"
            placeholder="Country of origin"
            value={formData.fromCountry}
            onChange={handleChange}
            className={errors.fromCountry ? 'border-red-500' : ''}
          />
          {errors.fromCountry && <p className="text-red-500 text-sm">{errors.fromCountry}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="toCountry">To (Destination Country)*</Label>
          <Input
            id="toCountry"
            name="toCountry"
            placeholder="Country of destination"
            value={formData.toCountry}
            onChange={handleChange}
            className={errors.toCountry ? 'border-red-500' : ''}
          />
          {errors.toCountry && <p className="text-red-500 text-sm">{errors.toCountry}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type*</Label>
          <Select 
            value={formData.serviceType} 
            onValueChange={(value) => handleSelectChange(value, 'serviceType')}
          >
            <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cargoType">Cargo Type</Label>
          <Select 
            value={formData.cargoType} 
            onValueChange={(value) => handleSelectChange(value, 'cargoType')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select cargo type" />
            </SelectTrigger>
            <SelectContent>
              {cargoTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="weight">Approximate Weight</Label>
          <Input
            id="weight"
            name="weight"
            placeholder="e.g., 500kg, 2 tons"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dimensions">Dimensions</Label>
          <Input
            id="dimensions"
            name="dimensions"
            placeholder="e.g., 2m x 1m x 1m, 3 CBM"
            value={formData.dimensions}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please provide any additional details about your shipment"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <div className="text-sm text-gray-500">
        Fields marked with * are required
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Request...
          </>
        ) : (
          'Request Quote'
        )}
      </Button>
    </form>
  )
} 