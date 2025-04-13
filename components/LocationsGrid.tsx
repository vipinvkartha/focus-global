import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface LocationProps {
  title: string;
  cities: string[];
  image: string;
  slug: string;
}

const locations: LocationProps[] = [
  {
    title: 'China',
    cities: ['YIWU', 'GUANGZHOU'],
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'china'
  },
  {
    title: 'India',
    cities: ['MUMBAI', 'COCHIN'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'india'
  },
  {
    title: 'USA',
    cities: ['NEW YORK', 'LOS ANGELES'],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'usa'
  },
  {
    title: 'Ghana',
    cities: ['ACCRA'],
    image: 'https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'ghana'
  },
  {
    title: 'Zambia',
    cities: ['LUSAKA'],
    image: 'https://images.unsplash.com/photo-1534801022022-6e319a11f249?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'zambia'
  },
  {
    title: 'Thailand',
    cities: ['BANGKOK'],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'thailand'
  },
  {
    title: 'Congo',
    cities: ['KINSHASA'],
    image: 'https://images.unsplash.com/photo-1504305754058-2f08cdf9293d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'congo'
  },
  {
    title: 'Dubai',
    cities: ['DUBAI'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640',
    slug: 'dubai'
  }
]

export default function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((location) => (
        <LocationCard 
          key={location.slug}
          title={location.title}
          cities={location.cities}
          image={location.image}
          slug={location.slug}
        />
      ))}
    </div>
  )
}

function LocationCard({ title, cities, image, slug }: LocationProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${title} location`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Locations:</h4>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span 
                key={city} 
                className="inline-flex items-center text-sm"
              >
                <MapPin className="h-3 w-3 mr-1" /> {city}
              </span>
            ))}
          </div>
        </div>
        <Link href={`/locations/${slug}`} className="w-full block">
          <Button variant="outline" size="sm" className="w-full">
            Read more
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
} 