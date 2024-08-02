import { Download } from "../images/svg";
import PieChartHome from "../components/charts/PieChartHome";
import { pieChartDashboard,campaignChartData } from "../constants/index";
import Line from "../components/charts/Line";
import {mockDataInvoices} from '../data/mockData'
import Choropleth from "../components/charts/Choropleth ";
import Bar from "../components/charts/Bar";

const Dashboard = () => {
  return (
    <div className="min-h-screen content max-lg:pr-1">
      <div className="w-full flex max-sm:flex-col max-lg:items-start items-center">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Dashboard
          </h2>
          <p
            className={`mt-1 text-base text-nowrap dark:text-white text-black`}
          >
            Welcome to your dashboard
          </p>
        </div>
        <button
          className={`h-fit flex items-center p-2 lg:text-base text-sm text-black max-lg:mt-3 sm:ml-auto rounded-md border-none cursor-pointer duration-300 hover:bg-blue-600 
          dark:bg-blue-400 bg-blue-500`}
        >
          <img className="block mr-1" width={15} src={Download} alt="" />
          Download Reports
        </button>
      </div>
      {/* Row 1 */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="w-full flex flex-wrap gap-2">
          {pieChartDashboard.map((el) => (
            <div
              key={el.title}
              className={`flex items-center min-w-[300px] flex-grow py-3 rounded-md dark:bg-zinc-800 bg-slate-100`}
            >
              <div
                className={`flex flex-col gap-2 pl-3 dark:text-white text-zinc-800`}
              >
                <img width={25} src={el.icon} alt="" />
                <span className="text-sm">{el.number}</span>
                <p className="text-base font-medium">{el.title}</p>
              </div>
              <div className="size-20 flex flex-col gap-2 items-center justify-center ml-auto">
                <PieChartHome data={el.data} color={el.color} />
                <p
                  className={`size-fit text-sm font-semibold dark:text-white text-zinc-800`}
                >
                  {el.per}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex max-xl:flex-col gap-2 mt-3">
        <div
          className={`min-w-[700px] flex-grow h-[500px] p-3 rounded-md dark:bg-zinc-800 bg-slate-100`}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-purple-400">
              Revenue Generated
            </h3>
            <p
              className={`text-base font-medium dark:text-white text-zinc-800`}
            >
              $59,342.32
            </p>
          </div>
          <div className="h-[87%]">
            <Line />
          </div>
        </div>
        <div
          className={`w-full xl:w-1/3 h-[500px] overflow-y-auto xl:px-3 rounded-md`}
        >
            <div className="flex flex-col gap-2 mb-1">
            <h3 className={`text-2xl px-2 py-3 rounded-md font-bold text-purple-400 dark:bg-zinc-800 bg-slate-100`}>
              Recent Transactions
            </h3>
          </div>
          <div className={`flex flex-col gap-1`}>
            {
              mockDataInvoices.map(el=>(
                <div key={el.name} className={`flex justify-between gap-1 px-2 py-3 rounded-md dark:text-white text-zinc-800 dark:bg-zinc-800 bg-slate-100`}>
                  <p title={el.name} className="font-semibold overflow-hidden text-nowrap text-ellipsis">{el.name}</p>
                  <p className="overflow-hidden text-nowrap text-ellipsis">{el.date}</p>
                  <p className="p-2 rounded-md text-sm font-semibold bg-red-500">${el.cost}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div className="mt-3 flex max-xl:flex-col gap-2">
        <div className={`w-full xl:w-[40%] flex-grow p-3 h-[500px] rounded-md dark:bg-zinc-800 bg-slate-100`}>
          <div className="flex h-full flex-col gap-8">
            <h3 className="text-2xl font-bold text-purple-400">
              Campaign
            </h3>
            <div className="h-[60%]">
              <PieChartHome data={campaignChartData} color={"nivo"}/>
            </div>
           <div className={`flex flex-col items-center gap-1 dark:text-white text-zinc-800`}>
            <p className="text-xl font-semibold">$48,352 revenue generated</p>
            <p className="text-base text-center">Includes extra misc expenditures and costs</p>
           </div>
          </div>
        </div>
        <div className={`min-w-[800px] flex-grow p-3 h-[500px] rounded-md dark:bg-zinc-800 bg-slate-100`}>
          <div className="flex h-full flex-col gap-8">
            <h3 className="text-2xl font-bold text-purple-400">
              Sales Quantity
            </h3>
            <div className="h-[80%]">
              <Bar/>
            </div>
          </div>
        </div>
      </div>
      {/* Row 4 */}
      <div className={`min-w-[800px] flex-grow h-[400px] mt-3 rounded-md dark:bg-zinc-800 bg-slate-100`}>
        <Choropleth/>
      </div>
    </div>
  );
};

export default Dashboard;
