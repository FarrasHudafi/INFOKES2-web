import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppoinment from './BookAppoinment'

const DoctorDetail = ({doctor}) => {
    const socialMediaList = [
        {
            id: 1,
            icon: '/assets/icons/twitter.png',
            url: '',
        },
        {
            id: 2,
            icon: '/assets/icons/linkedin.png',
            url: '',
        },
        {
            id: 3,
            icon: '/assets/icons/instagram.png',
            url: '',
        }
    ]
  return (
    <div>

    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Doctors image */}
          <div>
            <Image 
            src={doctor.image?.url}
            width={200}
            height={200}
            alt='doctor-image'
            className='rounded-lg w-full h[280px] object-cover'
            />
          </div>

          {/* doctor information */}
          <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline '>
            <h2 className='font-bold text-2xl  '>{doctor.Name}</h2>
            <h2 className='flex gap-2 text-md text-gray-600'><GraduationCap/> <span>{doctor.Year_of_Experience} of Experience</span></h2>
            <h2 className='text-md flex gap-2 text-gray-500'>
                <MapPin/>
                <span >{doctor.Address}</span>
            </h2>
            <h2 className="text-[13px]  bg-blue-100 p-1 rounded-full px-10 text-primary">
                  {doctor.categories?.[0]?.Name || 'Unknown Category'}
            </h2>

            {/* Social Media Icons */}
            <div className='flex gap-3'>
                    {socialMediaList.map((item,index)=>(
                        <Image src={item.icon} key={index}
                        width={28}
                        height={28}
                        alt='social-media-icon'
                        />
                    ))}
            </div>
            <BookAppoinment doctor={doctor}/>
          </div>
        </div>
            {/* about doctor */}
        <div className='p-3 border-[1px] mt-5 rounded-lg'>
            <h2 className='font-bold text-[20px]'>About Me</h2>
            <p className='text-gray-500 tracking-wider mt-2'>
                {doctor.About}
            </p>
        </div>
    </div>
  )
}

export default DoctorDetail