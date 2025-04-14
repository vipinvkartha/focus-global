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
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Secure and reliable shipping solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Fast and efficient service</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Global network coverage</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Door-to-door delivery options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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