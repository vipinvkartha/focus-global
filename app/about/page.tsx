import Image from 'next/image'
import { Check, Globe, Truck, Users, Shield, Clock } from 'lucide-react'
import FAQAccordion, { freightFAQs } from '@/components/FAQAccordion'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">About Focus Global</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Your trusted partner in global logistics and freight forwarding solutions since 2010.
          </p>
        </div>
      </div>
      
      {/* Company Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1595500403311-00acfc9de97b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080"
              alt="Focus Global Operations"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">FOCUS GLOBAL LIMITED</h2>
            <p className="text-gray-600 mb-6">
              Focus Global is an international freight forwarding company providing comprehensive freight and logistics 
              services worldwide. We specialize in air freight, sea freight, road transportation, warehousing, and supply 
              chain management solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our experienced team works tirelessly to ensure your cargo is transported safely, efficiently, and cost-effectively. 
              With offices in major logistics hubs across the globe, we have the network and expertise to handle shipments of any size 
              and complexity.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>Global logistics network with offices in key markets</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>Door-to-door shipping solutions with real-time tracking</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>Quality inspection and verification services</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>Custom logistics solutions for businesses of all sizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Services */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get your shipping delivered totally hassle free!</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We source your required products from manufacturers directly and collect them in our own warehouses after 
              quality checking. Then we deliver the cargo to you by sea or air to your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Connect with suppliers worldwide through our extensive network of offices and partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Door to Door</h3>
              <p className="text-gray-600">
                Complete door-to-door cargo services from origin to destination with all paperwork handled.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Thorough inspection of all products before shipping to ensure quality and specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Optimized logistics for quick delivery times with express options available.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>China Yiwu warehouse to global destinations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Express transportation to major cities</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Collection of goods from various parts of China</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>All kinds of general cargo accepted</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Minimum order value: 1 Lakh INR</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Charter services for large shipments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-gray-600">Worldwide Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Shipments Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional service and innovative logistics solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-gray-500 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in international logistics, Michael leads our global operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gray-500 mb-4">Operations Director</p>
                <p className="text-gray-600">
                  Sarah ensures seamless coordination across our global network of offices and partners.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Patel</h3>
                <p className="text-gray-500 mb-4">Head of Logistics</p>
                <p className="text-gray-600">
                  David specializes in optimizing shipping routes and ensuring timely delivery of all cargo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQAccordion 
            faqs={freightFAQs} 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and operations"
          />
        </div>
      </div>
    </div>
  )
} 