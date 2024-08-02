import { CrescentMoon, Menu, Search, Sun } from "../images/svg";
import { topbarIcons } from "../constants";
import { useState } from "react";


const TopBar = ({leftbarStatus, showLeftbar, getMode}) => {
  const [modeIcon, setModeIcon] = useState(localStorage.getItem("theme") === "light" ? false:true)
  const [showSearchPage, setShowSearchPage] = useState(false)
  

  return (
    <nav className={`w-full dark:bg-zinc-900 bg-blue-700 px-6 py-2 fixed left-0 top-0 z-50 flex items-center navbar-shadow`}>
      <div className="flex items-center">
        <div className={`size-10 rounded-full flex items-center justify-center cursor-pointer duration-300 dark:hover:bg-zinc-800 hover:bg-blue-400`}>
          <img width={30} src={Menu} alt="menu" onClick={()=> leftbarStatus(true)}/>
        </div>
        <div className={`size-10 md:hidden ml-3 rounded-full flex items-center justify-center cursor-pointer duration-300 dark:hover:bg-zinc-800 hover:bg-blue-400`} onClick={()=> setShowSearchPage(!showSearchPage)}>
          <img width={20} src={Search} alt="search"/>
        </div>
        <div className={`size-full md:hidden fixed top-0 left-0 dark:bg-zinc-800 bg-slate-100 ${showSearchPage ? "block":"hidden"}`}>
          <form className="px-3 pt-10 flex gap-3">
            <input className={`w-[70%] bg-transparent rounded-md h-10 p-3 border border-gray-300 outline-none dark:text-white text-zinc-800`} type="search" placeholder="Search..."/>
            <input className="w-[28%] bg-blue-400 rounded-md text-base" type="submit" value="Search"/>
          </form>
        </div>
        <form className={`${showLeftbar ? "ml-[200px]":"ml-[50px]"} max-md:hidden w-[250px] flex items-center justify-between p-3 dark:bg-zinc-800 bg-blue-600`}>
          <img width={20} src={Search} alt="search" />
          <input type="search" placeholder="search..." className={`w-[200px] bg-transparent outline-none border-none rounded-md text-base dark:text-white text-zinc-800`} />
        </form>
      </div>
      <div className="flex flex-nowrap items-center md:gap-5 gap-2 ml-auto">
          {
            modeIcon ? (
              <div className={`size-10 flex items-center justify-center rounded-full duration-300 cursor-pointer dark:hover:bg-zinc-800 hover:bg-blue-400`} onClick={()=> {
                setModeIcon(false)
                getMode("light")
              }}>
              <img width={20} src={CrescentMoon} alt='mode' />
              </div>
            ):
            (
              <div className={`size-10 flex items-center justify-center rounded-full duration-300 cursor-pointer dark:hover:bg-zinc-800 hover:bg-blue-400`}  onClick={()=>{
                setModeIcon(true)
                getMode("dark")
              }}>
              <img width={20} src={Sun} alt='mode'/>
            </div>
            )
          }
        {
          topbarIcons.map(icon=>(
              <div key={icon.name} className={`size-10 flex items-center justify-center rounded-full duration-300 cursor-pointer dark:hover:bg-zinc-800 hover:bg-blue-400`}>
                <img width={20} src={icon.img} alt={icon.name}/>
              </div>
            ))
        }
      </div>
    </nav>
  );
};

export default TopBar;
