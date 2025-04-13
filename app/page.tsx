import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plane, Ship, Truck, Package, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
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
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Logistics Operations"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Focus Global?</h2>
              <div className="space-y-6">
                <Feature
                  title="Global Network"
                  description="Access to an extensive network of partners worldwide"
                />
                <Feature
                  title="Expert Team"
                  description="Experienced professionals dedicated to your success"
                />
                <Feature
                  title="Custom Solutions"
                  description="Tailored logistics solutions for your specific needs"
                />
                <Feature
                  title="24/7 Support"
                  description="Round-the-clock customer service and cargo tracking"
                />
              </div>
            </div>
          </div>
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
          <Button size="lg" variant="secondary">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}