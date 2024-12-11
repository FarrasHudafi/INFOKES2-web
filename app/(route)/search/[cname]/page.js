"use client"

import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';

function Search({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [doctorList, setDoctorList] = useState([]);

  // Unwrap params menggunakan useEffect
  useEffect(() => {
    paramsPromise.then((resolvedParams) => {
      setParams(resolvedParams);
    });
  }, [paramsPromise]);

  // Fetch doctors ketika params tersedia
  useEffect(() => {
    if (params?.cname) {
      getDoctors(params.cname);
    }
  }, [params]);

  const getDoctors = (categoryName) => {
    GlobalApi.getDoctorByCategory(categoryName).then((resp) => {
      setDoctorList(resp.data.data);
    });
  };

  if (!params) {
    return <div>Loading...</div>; // Render placeholder sementara
  }

  return (
    <div className='mt-5'>
      <DoctorList 
        heading={params.cname}
        doctorList={doctorList}
      />
    </div>
  );
}

export default Search;
