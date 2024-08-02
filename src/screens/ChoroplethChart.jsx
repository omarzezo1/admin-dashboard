import Choropleth from "../components/charts/Choropleth ";

const ChoroplethChart = () => {
  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Geography
          </h2>
          <p
            className={`text-nowrap mt-1 text-base dark:text-white text-black`}
          >
            Simple Geography Chart
          </p>
        </div>
        <div className={`min-w-[700px] flex-grow h-[450px] border mt-5 rounded-md dark:border-slate-100 border-zinc-500`}>
          <Choropleth/>
        </div>
      </div>
    </div>
  );
};

export default ChoroplethChart;
