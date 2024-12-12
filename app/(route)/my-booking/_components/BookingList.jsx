import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image'
import React from 'react'
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

const BookingList = ({ bookingList, expired, updateRecord }) => {
  

    const onDeleteBooking=(item)=>{
    // console.log(item)
    GlobalApi.deleteBooking(item.documentId).then(resp=>{
      // console.log(resp);
      if(resp)
      {
        toast('Booking Delete Successfully!');
        updateRecord()
      }
    })
  }


  return (
    <div>
      {bookingList && bookingList.map((item, index) => (
        <div key={index} className='flex items-center gap-4 border-[1px] shadow-md p-5 m-3 rounded-lg relative'>
          <Image
            src={item?.doctor?.image?.url} // Fallback jika `url` tidak tersedia
            className='rounded-full h-[70px] w-[70px] object-cover '
            width={70}
            height={70}
            alt='doctor-image'
          />
          
          <div className='flex flex-col gap-2 w-full'>
              <h2 className='font-bold text-[18px] items-center flex justify-between'>
                {item?.doctor?.Name}
              </h2>
              <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary h-5 w-5'/> {item?.doctor?.Address}</h2>
              <h2 className='flex gap-2'><Calendar className='text-primary h-5 w-5'/> Appointment on : { moment(item.Date).format('DD-MMM-YYYY')}</h2>
              <h2 className='flex gap-2'><Clock className='text-primary h-5 w-5'/>Time : {item.Time}
              </h2>
          </div>
                {!expired&&<CancelAppointment onContinueClick={()=> onDeleteBooking(item)}/>}
        </div>
      ))}
    </div>
  );
};


export default BookingList