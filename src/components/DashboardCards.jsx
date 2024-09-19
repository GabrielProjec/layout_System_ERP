import React from 'react'

function DashboardCards({ icon, title, number , bgBorder  }) {
    return (
        <div className={`flex justify-center items-center  border-l-4 ${bgBorder} rounded-lg w-[300px] h-[100px] bg-white dark:bg-[#292929] shadow-lg `}>
            <div className='ml-2 w-[20%] flex items-center justify-center  text-6xl dark:text-white'>
                {icon}
            </div>
            <div className=' w-[80%] h-full flex flex-col items-center justify-center dark:text-white  '>
                <p className='text-2xl font-semibold'>{title}</p>
                <p className='text-xl font-medium'>{number}</p>
            </div>
        </div>
    )
}

export default DashboardCards
