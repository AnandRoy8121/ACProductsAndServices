import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full mt-4 px-8 py-4">
        <h1 className="font-serif text-2xl mb-4 font-bold sm:text-4xl text-Primary-Color text-center">
        About Us
      </h1>
      <div className='flex flex-col sm:flex-row w-full  bg-gradient-to-tr from-[#293df0] to-[#3255a5] rounded-lg shadow-lg'>
        {/* Left About */}
        <div className='flex flex-col w-full sm:w-1/2 p-4'>
        <h2 className='text-xl font-bold text-center text-Primary-Color underline'>KANAKA DURGA CONSULTANCY SERVICES</h2>
        <ul className='text-Primary-Color font-semibold flex flex-col gap-8 my-4'>
            <li className='text-sm px-4 py-2'>Kanaka Durga Consultancy Services started in October 2017</li>
            <li className='text-sm px-4 py-2'>Operating in ODISHA (Bhubaneswar) & ANDHRA PRADESH (Visakhapatnam), we have offices in both the locations</li>
            <li className='text-sm px-4 py-2'><span className='text-green-300'>Our motto: </span>Our priority is that we have to provide the best & economical Techno-Commercial Designing of Air Conditioning/HVAC to Architects/Builders/End users.</li>
        </ul>
        </div>
        {/* Right About */}
        <div className='flex flex-col w-full sm:w-1/2 p-4'>
        <h2 className='text-xl font-bold text-center text-Primary-Color underline'>Our CEO Journey and Experience</h2>
        <ul className='text-Primary-Color w-full font-semibold flex flex-col gap-2 my-4'>
            <li className='text-sm px-4 py-2'><span className='text-green-400'>URLAM CHANDRA MOHN PATNAIK/U.C.M.PATNAIK</span> B.Tech (Mechanical Engineering), M.TECH (Production Engineering) & MBA (Marketing and Finance), PGDCA.
</li>
            <li className='text-sm px-4 py-2'>In 2002, started my career as a Technical Sales Advisor at Hero Honda in Visakhapatnam.</li>
            <li className='text-sm px-4 py-2'>After working for a few years, i joined as a Project Engineer at Pollution Control Board Consultant at Visakhapatnam.</li>
            <li className='text-sm px-4 py-2'>In 2005, I joined with V-GUARD Industries as a Technical Sales Executive in Pumps Division at Visakhapatnam.</li>
            <li className='text-sm px-4 py-2'>In July2006, I joined with ETA GENERAL PVT.LTD (O GENERAL) at Visakhapatnam in the field of Air Conditioners.</li>
            <li className='text-sm px-4 py-2'>In February 2007, I was promoted as State Head, ODISHA at ETA GENERAL PVT.LTD.</li>
            <li className='text-sm px-4 py-2'>From 2009 October till March 2021, i worked with ESSAR ELECTRONICS as an Associate Designer (Techno-Commercial) and headed the Projects & Marketing Departments. </li>
            <li className='text-sm px-4 py-2'>In the 21 years of experience, 17 years in the field of HVAC, we have completed more than 500 projects.</li>
            <li className='text-sm px-4 py-2'>In addition, we have designed and executed more than 300 projects.</li>
            <li className='text-sm px-4 py-2'>ISHRAE (Indian Society of Heating, Refrigerating & Air Conditioning Engineers) Visakhapatnam Chapter President For The Society Year 2023-2024.</li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default About