import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Image from "next/image";
import InputSelect from "@/components/Input/Select";
Chart.register(...registerables)
Chart.defaults.borderColor = '#1C243F';
Chart.defaults.scales.linear.beginAtZero = true

function FeatureChartReport() {


    const chartData = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
        datasets: [
            {
                label: "",
                fill: false,
                data: [72.30, 50.80, 74.50, 55.20, 70.10, 36.20, 110.60, 75.40, 81.23, 45.90, 70.75],
                pointRadius: 0,
                hoverRadius: 0,
                borderColor: "#0BB885",
                borderWidth: 3,
                backgroundColor: "#0BB885",
                hoverBackgroundColor: "#0BB885",
                borderRadius: 20,
                borderSkipped: false,
            },
        ],
    };


    const options = {
        barThickness: 10,
        cubicInterpolationMode: 'monotone',
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        responsive: true,
        interaction: {
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    title: function () {
                        return '';
                    },
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (context.parsed.y !== null) {
                            label += (context.parsed.y);
                        }
                        if (context.parsed.y === 100) {
                            return label += "%";
                        }
                        return label += "K";
                    }
                }
            }
        },
        title: {
            display: false,
        },
        scales: {
            y: {
                stacked: false,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
    }

    const optionsMobile = {
        maintainAspectRatio: true,
        aspectRatio: 2,
        responsive: true,
        interaction: {
            intersect: true,
        },
        plugins: {
            tooltip: { enabled: false },
            legend: {
                display: false
            },
        },
    }


    return (
        <>
            <div className="bg-[#1C243F] w-full md:w-[32%] border-t-2 md:border-t-0  md:border-l-2 border-[#2E4B85] rounded-b-lg  md:rounded-bl-none md:rounded-tr-lg md:pb-3 md:mb-5">
                <div className="flex justify-center items-center pt-6">
                    <InputSelect placeholder="2023" className="flex justify-start items-center cursor-pointer  bg-transparent w-[5rem] text-[#0BB885] focus:border-[#0BB885] border-2 border-[#0BB885] py-0.5 px-4 rounded-md">
                        <button className= "rounded-lg  bg-[#2E4B85] w-full flex justify-start text-white focus:bg-gray-500 hover:bg-gray-500 px-5 py-1">2023</button>
                    </InputSelect>
                </div>
                <div className="w-full h-full flex flex-col justify-center 2xl:justify-between 2xl:py-20">
                    <div className="w-full flex flex-col space-y-4 justify-center items-center">
                        <div className="text-4xl text-white font-semibold">
                            $842.98
                        </div>
                        <div className="text-xs text-gray-500 font-semibold">
                            Latest Month Balance $426.2k
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="bg-[#1C243F] w-[12rem] flex justify-center py-4">
                            <>
                                <Line options={options}
                                    height={'100%'}
                                    data={chartData} />
                            </>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center py-5 md:py-0">
                        <button className="bg-[#0BB885] flex justify-center text-white py-1 px-5 rounded-lg">
                            View Report
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureChartReport;
