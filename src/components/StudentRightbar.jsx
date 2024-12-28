import React from 'react'
import { Link } from 'react-router-dom'

const StudentRightbar = ({job}) => {
  console.log(job)
  
  return (
    <div className='top-[60px] w-[350px] h-full'>
      <h2>
        Job Details
      </h2>
      {job && <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
  <span className="inline-block rounded p-2 text-white">
    <img src={job.image} className='w-20 h-20 rounded-full' alt="" />
  </span>

  <a href="#">
    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
      {job.title}
    </h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
   {job.description}
  </p>

  <div className='flex gap-10'>
  <h1 className='font-semibold text-xl'>Skills:-</h1>
  <ul className='list-disc'>
    {
        job?.skills?.map((skill,index)=>{
            return <li className='text-sm text-gray-600' key={index}>{skill}</li>
        })
    }
  </ul>
  </div>

  <h1>Salary: {job.salary} &#8377;</h1>

  <div className='flex gap-10'>
  <h1 className='font-semibold text-xl'>Requirements:-</h1>
  <ul className='list-disc'>
    {
        job?.requirements?.map((req,index)=>{
            return <li className='text-sm text-gray-600' key={index}>{req}</li>
        })
    }
  </ul>
  </div>

 

  <Link to="/applyjob" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Apply

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </Link>
</article>}
    </div>
  )
}

export default StudentRightbar
