'use client';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSugestion from '../_components/DoctorSugestion';

const Details = ({ params }) => {
  const [doctor, setDoctor] = useState(null);
  const [recordId, setRecordId] = useState(null);

  // Use React.use to unwrap params
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setRecordId(resolvedParams.recordId);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (recordId) {
      getDoctorById();
    }
  }, [recordId]);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(recordId).then((resp) => {
      setDoctor(resp.data.data);
    });
  };

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Doctors details */}
        <div className="col-span-3">
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>

        {/* Doctors Sugestion */}
        <div>
          <DoctorSugestion />
        </div>
      </div>
    </div>
  );
};

export default Details;


// 'use client'
// import GlobalApi from '@/app/_utils/GlobalApi'
// import React, { useEffect, useState } from 'react'
// import DoctorDetail from '../_components/DoctorDetail';
// import DoctorSugestion from '../_components/DoctorSugestion';


// const Details = ({params}) => {
  
//   const [doctor, setDoctor] = useState();

//   useEffect(() => {
//     getDoctorById()
//   }, [])
//   const getDoctorById= () => {
//     GlobalApi.getDoctorById(params.recordId).then(resp => {
//       setDoctor(resp.data.data);
//     })
//   }
//   return (
//     <div className='p-5 md:px-20'>
//       <h2 className='font-bold text-[22px]'>Details</h2>

//       <div className='grid grid-cols-1 lg:grid-cols-4'>
//         {/* Doctors details */}
//         <div className='col-span-3'>
//         {doctor && <DoctorDetail doctor={doctor}/>}
//         </div>

//         {/* Doctors Sugestion */}
//         <div>
//           <DoctorSugestion/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Details