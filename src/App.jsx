import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Leftbar  from './utils/Leftbar'
import Topbar from './utils/TopBar'
import Dashboard from './screens/Dashboard'
import UserForm from './screens/UserForm'
import Team from './screens/Team'
import Contacts from "./screens/Contacts";
import Invoices from "./screens/Invoices";
import Faq from "./screens/Faq";
import Calendar  from "./screens/calendar/Calendar";
import BarChart from "./screens/BarChart";
import PieChart from "./screens/PieChart";
import LineChart from "./screens/LineChart";
import ChoroplethChart from "./screens/ChoroplethChart";


const App = () => {
  const [showLeftbar, setShowLeftbar] = useState(false)
  const [mode, setMode] = useState("")

  //controle left bar
  const leftbarStatus = (e)=>{
    setShowLeftbar(e)
  }

  //get theme mode
  const getMode = (e)=>{
    setMode(e)
    localStorage.setItem("theme", e)
  }

  useEffect(()=>{
    if(localStorage.getItem("theme")){
      document.body.classList = localStorage.getItem("theme")
    }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      document.body.classList.add("dark")
    }else{
      document.body.classList.add("light")
    }
  },[mode])


  return (
    <div className={`overflow-x-auto relative ${showLeftbar ? "pl-[270px]":"xl:pl-[120px] pl-[100px]"} dark:bg-zinc-900 bg-white`}>
      <Topbar showLeftbar={showLeftbar} leftbarStatus={leftbarStatus} getMode={getMode}/>
      <Leftbar showLeftbar={showLeftbar} leftbarStatus={leftbarStatus}/>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contacts-information' element={<Contacts />}/>
        <Route path='/invoices' element={<Invoices />}/>
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/profile-form' element={<UserForm />}/>
        <Route path='/faq-page' element={<Faq />}/>
        <Route path='/bar-chart' element={<BarChart />}/>
        <Route path='/pie-chart' element={<PieChart />}/>
        <Route path='/line-chart' element={<LineChart />}/>
        <Route path='/choropleth-chart' element={<ChoroplethChart />}/>
      </Routes>
    </div>
  )
}

export default App