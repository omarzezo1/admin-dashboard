import Pie from "../components/charts/Pie";

const PieChart = () => {
  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Pie Chart
          </h2>
          <p
            className={`text-nowrap mt-1 text-base dark:text-white text-black`}
          >
            Simple Pie Chart
          </p>
        </div>
        <div className="min-w-[700px] flex-grow h-[480px]">
          <Pie/>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
