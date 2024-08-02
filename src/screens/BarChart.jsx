import Bar from "../components/charts/Bar";

const BarChart = () => {
  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Bar Chart
          </h2>
          <p
            className={`text-nowrap mt-1 text-base dark:text-white text-black`}
          >
            The minimum wage in Germany, France and Spain (EUR/month)
          </p>
        </div>
        <div className="min-w-[600px] flex-grow h-[480px]">
          <Bar/>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
