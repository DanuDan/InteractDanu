import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)
Chart.defaults.borderColor = '#1C243F';
Chart.defaults.scales.linear.beginAtZero = true

function FeatureChartOrders() {


    const chartData = {
        labels: ["ya", "yu", "ye", "yo", "yi"],
        datasets: [
            {
                label: "",
                fill: false,
                data: [30, 40, 50, 60, 9],
                backgroundColor: "#FF814A",
                hoverBackgroundColor: "#FF814A",
                borderRadius: 20,
                borderSkipped: false,
            },
            {
                label: "",
                fill: false,
                data: [100, 100, 100, 100, 100],
                backgroundColor: "#2E4B85",
                borderRadius: 20,
                borderSkipped: false,
            }
        ],
    };


    const options = {
        barThickness: 10,
        // categoryPercentage: 0.5 ,
        // barPercentage: 0.5,
        maintainAspectRatio: true,
        aspectRatio: 2,
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
                }
            },
        },
    }


    return (
        <>
            <div className="bg-[#1C243F]  rounded-lg pt-3 mb-5">
                <div className="flex-col items-center px-6 pb-4 pt-2">
                    <div className=" text-white font-semibold text-lg">
                        Orders
                    </div>
                    <div className="text-3xl font-semibold text-[#FF814A] ">
                        189k
                    </div>
                </div>
                <div className="w-full h-[10rem] flex justify-center items-center">
                    <div className="bg-[#1C243F] w-[16rem] md:w-[11.5rem] 2xl:w-[16rem] h-auto  flex justify-center py-4">
                        <>
                            <Bar options={options}
                                height={'100%'}
                                data={chartData} />
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureChartOrders;
