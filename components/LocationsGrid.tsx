import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface LocationProps {
  title: string;
  cities: string[];
  image: string;
  slug: string;
}

const locations: LocationProps[] = [
  {
    title: 'India',
    cities: ['CHENNAI', 'COCHIN'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'india'
  },
  {
    title: 'Middle East',
    cities: ['DUBAI', 'RIYADH'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'middle-east'
  },
  {
    title: 'Africa',
    cities: ['AFRICA'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'africa'
  },
  {
    title: 'Jordan',
    cities: ['AMMAN'],
    image: 'https://images.unsplash.com/photo-1614772067419-1452cf9aeaa3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/a-building-built-into-the-side-of-a-cliff-pxyUkvOcqMM?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'jordan'
  },
  {
    title: 'Australia',
    cities: ['SYDNEY', 'MELBOURNE'],
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'australia'
  }
]

export default function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {locations.map((location) => (
        <Card key={location.slug} className="overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={location.image}
              alt={`${location.title} location`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-2">{location.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {location.cities.map((city) => (
                  <span key={city} className="inline-flex items-center text-sm text-white">
                    <MapPin className="h-3 w-3 mr-1" /> {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 