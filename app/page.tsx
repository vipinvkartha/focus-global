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
import TrackingForm from '@/components/TrackingForm'
import LocationsGrid from '@/components/LocationsGrid'
import FAQAccordion, { freightFAQs } from '@/components/FAQAccordion'
import QuoteForm from '@/components/QuoteForm'

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
              <a href="#quote">
                <Button size="lg">Get a Quote</Button>
              </a>
              <a href="#track">
                <Button size="lg" variant="outline">
                  Track Shipment
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
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
                  <span>Minimum goods accepted: 1 CBM</span>
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

      {/* Tracking Section */}
      <section className="py-20" id="track">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Track Your Shipment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Monitor your shipment in real-time. Get detailed information about the current status, 
              location, and estimated delivery time of your cargo.
            </p>
          </div>
          
          <TrackingForm />
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

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-white/80">Worldwide Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Shipments Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20" id="quote">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a customized shipping quote tailored to your specific requirements. Fill out the form below and our team will respond promptly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Shipping Quote Request</h3>
                <QuoteForm />
              </div>
            </div>
            
            <div className="space-y-6">
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <FAQAccordion 
            faqs={freightFAQs} 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and operations"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Ship with Focus Global?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a customized shipping solution that meets your needs
          </p>
          <a href="#quote">
            <Button size="lg" variant="secondary">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}