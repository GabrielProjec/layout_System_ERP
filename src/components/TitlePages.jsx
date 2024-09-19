import React from 'react'

const TitlePages = ({titleName}) => {
  return (
    <div >
      <h1 className='text-4xl border-b-2 border-gray-400 dark:border-blue-400 dark:text-white p-2'>{titleName}</h1>
    </div>
  )
}

export default TitlePages
