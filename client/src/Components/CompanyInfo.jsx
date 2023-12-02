import React from 'react'
import DataFromCompany from './DataFromCompany'
import { useParams } from 'react-router-dom'

const CompanyInfo = () => {

    const params = useParams()
  return (
    <div className='w-[95%]  bg-gray-50 mt-10 mb-2 rounded-[10px] shadow-lg pt-1'>
      <h1 className='uppercase text-2xl font-semibold text-left ml-8 my-3 text-gray-800'>{params.name}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-3 mx-auto'>
      <DataFromCompany title={'Carola Jojo'} type={'Ful Name'} />
      <DataFromCompany title={'Carola Jojo'} type={'Email'} />
      <DataFromCompany title={'Carola Jojo'} type={'Phone'} />
      <DataFromCompany title={'Carola Jojo'} type={'State'} />
      <DataFromCompany title={'Carola Jojo'} type={'County'} />
      <DataFromCompany title={'Carola Jojo'} type={'Address'} />
      </div>
    </div>
  )
}

export default CompanyInfo
