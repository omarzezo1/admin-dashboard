import { Link, useLocation } from "react-router-dom";
import { leftbarIcons } from "../constants";
import { Person } from "../images/imgs";
import { LeftArrow } from "../images/svg";

const Leftbar = ({ leftbarStatus, showLeftbar }) => {
  const location = useLocation()

  return (
    <aside className={`w-fit h-screen fixed left-0 top-0 flex justify-center dark:bg-zinc-900 bg-blue-700 ${showLeftbar ? 'z-[99]' : 'z-[30]'}`}>
      <div className="w-full h-full flex flex-col items-center justify-start overflow-y-scroll">
        <div className="w-full h-[64px] flex items-center justify-end p-5 pl-0 border-b dark:border-gray-600 border-white">
          <div className={`size-8 rounded-full cursor-pointer flex items-center justify-center duration-300 dark:hover:bg-zinc-800 hover:bg-blue-400`} onClick={() => leftbarStatus(false)}>
            {showLeftbar ? (
              <img width={15} src={LeftArrow} alt="left-arrow" />
            ) : null}
          </div>
        </div>
        <div className="w-full mx-0 mt-8 mb-3 flex items-center flex-col px-1 pt-0 pb-3 border-b dark:border-gray-600 border-white">
          <img src={Person} alt="side-img" className='w-[65px] object-cover rounded-full border dark:border-gray-600 border-white'/>
          <h4 className={`text-white text-lg mt-4 duration-300 ${showLeftbar ? "block" : "hidden"}`}>
            Omar Abd Elaziz
          </h4>
          <h5 className={`text-base dark:text-blue-400 text-white duration-300 ${showLeftbar ? "block" : "hidden"}`}>Admin</h5>
        </div>
        {leftbarIcons.map((block) => (
          <ul key={block.name} className="w-full pb-3 border-b dark:border-gray-600 border-white">
            {block.items.map((item) => (
              <li key={item.title}>
                <Link to={item.path} className={`w-full flex justify-start items-center flex-nowrap py-3 px-5 cursor-pointer  duration-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 hover:bg-blue-400 focus:bg-blue-400 ${location.pathname === item.path && "dark:bg-zinc-800 bg-blue-400"}`}>
                  <img width={22} src={item.img} alt={item.title} />
                  <h5 className={`ml-5 text-base text-white font-semibold ${showLeftbar ? "block" : "hidden"}`}>
                    {item.title}
                  </h5>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Leftbar;
