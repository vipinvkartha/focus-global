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
    title: 'Dubai',
    cities: ['DUBAI'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'dubai'
  },
  {
    title: 'Australia',
    cities: ['SYDNEY'],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'australia'
  },
  {
    title: 'Singapore',
    cities: ['SINGAPORE'],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'singapore'
  }
]

export default function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{location.title}</h3>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {location.cities.map((city) => (
                <span 
                  key={city} 
                  className="inline-flex items-center text-sm"
                >
                  <MapPin className="h-3 w-3 mr-1" /> {city}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 