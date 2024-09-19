import React from 'react'

// COMPONENTS
import TitlePages from '../components/TitlePages'
import DashboardCards from '../components/DashboardCards'

// ICONS
import { PiStudent } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";

const Home = () => {
  return (
    <div>
     <TitlePages titleName="Home" />

      <div className='p-4 w-full flex flex-wrap items-center justify-center gap-4'>
        <DashboardCards title="Total Alunos" number="2000" icon={<PiStudent />} bgBorder='border-[rgb(32,45,105)] dark:border-blue-400'  />
        <DashboardCards title="Total Cursos" number="4" icon={<MdOndemandVideo />} bgBorder='border-red-400 dark:border-blue-400'  />
        <DashboardCards title="Total Projetos" number="100" icon={<PiStudent />} bgBorder='border-indigo-400 dark:border-blue-400'  />
        
      </div>
    </div>
  )
}

export default Home
