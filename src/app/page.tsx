'use client'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import ColorTone from './ui/ColorTone'
import { useEffect, useState } from 'react';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // Dynamic import to fetch the JSON data
    import('../../src/app/lib/cars.json')
      .then((data) => {
        setCars(data.default); // Set the cars data from the imported JSON file
      })
      .catch((error) => {
        console.error('Error fetching cars data:', error);
      });
  }, []);

  return (
    <section className='py-10 px-2'>
      <div className='container flex flex-col items-center gap-4'>
        {cars.map((car, index) => (
          <Card key={index} className='py-4 px-3 lg:w-3/4 xl:w-1/2'>
            <CardBody className='overflow-visible py-2'>
              <div className='flex max-sm:flex-col gap-6'>
                <Image alt={car.name} width={200} height={200} className='flex-1 object-scale-down' src={car.imageUrl} />
                <div className='flex-1'>
                  <h2 className='text-lg font-bold uppercase'>{car.name}</h2>
                  <p className='text-sm text-default-500'>{car.type}</p>
                  <div className='mb-6 mt-2 flex gap-3'>
                    <span className='font-bold'>${car.price.toLocaleString()}</span>
                    <span className={car.status === 'Out of Order' ? 'text-error' : 'text-success'}>{car.status}</span>
                  </div>
                  {car.status === 'Out of Order' ? (
                    <Button  disabled  radius='full'>
                      Out of Order
                    </Button>
                  ) : (
                    <>
                      <ColorTone />
                      <div className='mt-6 flex gap-6'>
                        <Button color='primary' radius='full'>
                          Order Now
                        </Button>
                        <Button color='primary' variant='bordered' radius='full'>
                          {car.addOns ? 'Customize' : 'View Details'}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
interface Car {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  addOns: boolean;
  status: string;
}
