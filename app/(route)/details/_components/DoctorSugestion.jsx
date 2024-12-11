import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const DoctorSugestion = () => {
  const [doctorList, setDoctorList] = useState();
  useEffect(() => {
    getDoctorList();
  }, [])
  const getDoctorList= () => {
    GlobalApi.getDoctorList().then(resp => {
        // console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='font-bold mb-3'>Suggestion</h2>
        {doctorList?.map((doctor, index) => {
            return(
                <Link key={index} href={'/details/' + doctor?.documentId}>
                    <div className='mb-4 p-3 shadow-sm w-full 
                    cursor-pointer hover:bg-slate-100
                    rounded-lg flex items-center gap-3'>
                        <Image
                        src={doctor.image?.url}
                        alt='doctor'
                        width={80}
                        height={80}
                        className='h-[80px] w-[80px] object-cover rounded-full'
                        />
                        <div className='mt-3 flex-col flex gap-1 items-baseline'>
                            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                            text-primary'>{doctor.categories?.[0]?.Name || 'Unknown Category'}</h2>
                            <h2 className='font-medium text-sm'>{doctor.Name}</h2>
                            <h2 className='text-primary text-xs flex gap-2'>
                            {/* <GraduationCap/> */}
                            {doctor.Year_of_Experience}</h2>
                        </div>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default DoctorSugestion