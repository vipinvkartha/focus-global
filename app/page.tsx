import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  ArrowRight, 
  Check, 
  Globe, 
  Shield, 
  Clock,
  MapPin
} from 'lucide-react'
import LocationsGrid from '@/components/LocationsGrid'
import FAQAccordion, { freightFAQs } from '@/components/FAQAccordion'
import QuoteForm from '@/components/QuoteForm'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20" id="home">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Global Logistics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Global Logistics Solutions for Your Business
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Reliable, efficient, and comprehensive freight forwarding services worldwide
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/8619548851246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="relative w-[800px] h-[500px]">
                <Image
                  src="/custom-desc.png"
                  alt="Focus Global Operations"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">FOCUS GLOBAL LIMITED</h2>
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
                  <span>Door-to-door shipping solutions</span>
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Plane className="h-10 w-10" />}
              title="Air Freight"
              description="Fast and reliable air freight services for time-sensitive cargo"
            />
            <ServiceCard
              icon={<Ship className="h-10 w-10" />}
              title="Sea Freight"
              description="Cost-effective ocean freight solutions for large shipments"
            />
            <ServiceCard
              icon={<Truck className="h-10 w-10" />}
              title="Road Freight"
              description="Efficient ground transportation across continents"
            />
            <ServiceCard
              icon={<Package className="h-10 w-10" />}
              title="Warehousing"
              description="Secure storage and distribution services"
            />
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm inline-block mx-auto border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and value to our clients through our commitment to quality and efficiency
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Secure and Reliable</h3>
                    <p className="text-gray-600">Your cargo is handled with the utmost care and security throughout the journey</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fast and Efficient</h3>
                    <p className="text-gray-600">Timely delivery with optimized routes and processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                    <p className="text-gray-600">Extensive network coverage across major trade routes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Door-to-Door Service</h3>
                    <p className="text-gray-600">Complete logistics solutions from pickup to final delivery</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50" id="locations">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Global Locations</h2>
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
      </section>

      {/* Social Links Section */}
      <SocialLinks />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our shipping and logistics services
            </p>
          </div>
          
          <FAQAccordion faqs={freightFAQs} />
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}