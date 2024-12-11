import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                alt=""
                src="/doctors.jpg"
                width={800}
                height={800}
                className="absolute inset-0 h-full
                rounded-3xl 
                w-full object-cover"
                />
            </div>

            <div className="lg:py-24">
                <h2 className="text-4xl font-bold sm:text-4xl">
                    Temukan & Pesan 
                    <span className='text-primary'> Janji Temu </span> 
                    dengan 
                    <span className='text-primary '> Dokter </span>
                    Favorit Anda
                    </h2>

                <p className="mt-4 text-gray-500">
                Temukan cara termudah untuk terhubung dengan dokter terbaik di sekitar Anda. 
                Pesan janji temu kapan saja dengan fleksibilitas penuh dan nikmati layanan kesehatan 
                yang dirancang sesuai kebutuhan Anda. Mulailah langkah awal menuju kesehatan yang lebih baik hari ini!
                </p>

                <Link href={'/search/Dentist'}>
                    <Button className="mt-10">Explore Now</Button>
                </Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero