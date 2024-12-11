import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorList = ({ doctorList, heading = 'Popular Doctors' }) => {
  return (
    <div className="mb-10">
      <h2 className="font-bold text-xl px-10">{decodeURIComponent(heading)}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {doctorList.length > 0 ? (
          doctorList.map((doctor, index) => (
            <div
              key={index}
              className="border-[1px] rounded-lg p-3 flex flex-col cursor-pointer hover:border-primary hover:shadow-md transition-all ease-in-out"
            >
              <Image
                src={doctor.image?.url}
                alt="Doctor"
                width={500}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
              <div className="mt-3 flex flex-col flex-grow">
                <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary text-center">
                  {doctor.categories?.[0]?.Name || 'Unknown Category'}
                </h2>
                <h2 className="font-bold">{doctor.Name}</h2>
                <h2 className="text-primary text-sm">{doctor.Year_of_Experience || 'N/A'} years</h2>
                <h2 className="text-gray-500 text-sm">{doctor.Address || 'No address available'}</h2>
                {/* Spacer to push "Book Now" to the bottom */}
                <div className="flex-grow"></div>
                <Link href={'/details/' + doctor?.documentId} className="w-full">
                  <h2
                    className="p-2 px-3 border-[1px] text-primary border-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white"
                    aria-label={`Book an appointment with ${doctor.Name}`}
                  >
                    Book Now
                  </h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorList;
