import React from 'react';
import ReactApexChart from 'react-apexcharts';
import OutLet from '../OutLet/OutLet';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { GiBackpack } from 'react-icons/gi';

const Dashboard = () => {
  const data = [
    {
      title: 'Total Orders',
      number: '13,647',
      reach: '2.3% Last Week',
      icon: <IoIosArrowRoundUp />, // Icon for performance
      icons: <BsCart3 />, // Main Icon
      more: 'view more'
    },
    {
      title: 'New Leads',
      number: '9,526',
      reach: '2.3% Last Week',
      icon: <IoIosArrowRoundUp />,
      icons: <FaAward />,
      more: 'view more'
    },
    {
      title: 'Deals',
      number: '976',
      reach: '8.1% Last Month',
      icon: <IoIosArrowRoundDown />,
      icons: <GiBackpack />,
      more: 'view more'
    },
    {
      title: 'Booked Revenue',
      number: '$123.6k',
      reach: '10.5% Last Month',
      icon: <IoIosArrowRoundDown />,
      icons: <MdOutlineAttachMoney />,
      more: 'view more'
    }
  ];

  const chartState = {
    series: [
      {
        name: 'Sales',
        data: [
          { x: '2019/01/01', y: 400 },
          { x: '2019/04/01', y: 430 },
          { x: '2019/07/01', y: 448 },
          { x: '2019/10/01', y: 470 },
          { x: '2020/01/01', y: 540 },
          { x: '2020/04/01', y: 580 },
          { x: '2020/07/01', y: 690 },
          { x: '2020/10/01', y: 690 }
        ]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: '100%',
        width: '100%'
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: (val) => `Q${Math.floor(new Date(val).getMonth() / 3) + 1}`
        }
      },
      tooltip: {
        x: {
          formatter: (val) => `Q${Math.floor(new Date(val).getMonth() / 3) + 1} ${new Date(val).getFullYear()}`
        }
      }
    }
  };

  const [state, setState] = React.useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  return (
    <OutLet>
      <div className="bg-[#F7FBFC] p-5 min-h-screen">
        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-5">
              <div className="flex items-center justify-between">
                <div className="h-16 w-16 bg-blue-400 text-white flex items-center justify-center text-4xl">
                  {item.icons}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-2xl font-bold mb-3">{item.number}</p>
                </div>
              </div>
              <div className="mt-5 py-2 flex items-center space-x-2">
                <span className="text-2xl text-orange-500">{item.icon}</span>
                <p className={`${index === 0 || index === 1 ? 'text-blue-500' : 'text-red-500'}`}>
                  {item.reach}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="md:h-[50vw] h-[90vw] overflow-hidden mt-5 flex justify-center items-center">
          <div className="w-full h-full p-5">
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="bar"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Additional Donut Chart Section */}
        

      </div>
    </OutLet>
  );
};

export default Dashboard;
