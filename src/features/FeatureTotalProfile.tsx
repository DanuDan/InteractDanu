import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)
Chart.defaults.borderColor = '#1C243F';
Chart.defaults.scales.linear.beginAtZero = true

function FeatureTotalProfile() {


    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept"],
        datasets: [
            {
                label: "",
                fill: false,
                data: [120, 250, 300, 280, 100, 50, 200, 250, 80],
                backgroundColor: "#0BB885",
                hoverBackgroundColor: "#0BB885",
                borderRadius: 20,
                borderSkipped: false,
            },
            {
                label: "",
                fill: false,
                data: [-180, -80, -50, -200, -100, -50, -80, -70, -75],
                backgroundColor: "#FF9F43",
                hoverBackgroundColor: "#FF9F43",
                borderRadius: 20,
                borderSkipped: false,
            }
        ],
    };


    const options = {
        barThickness: 10,
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
                stacked: true,
                // beginAtZero: true,
                // ticks: {
                //     display: false,
                // },
                grid: {
                    display: false,
                },
            },
            x: {
                stacked: true,
                // beginAtZero: true,
                // ticks: {
                //     display: false,
                // },
                grid: {
                    display: false,
                }
            },
        },
    }


    return (
        <>
            <div className="bg-[#1C243F] w-full md:w-[68%] h-auto rounded-t-lg md:rounded-tr-none md:rounded-bl-lg md:pt-3 md:mb-5">
                <div className="flex justify-between items-center px-6 pb-4 pt-2">
                    <div className=" text-white font-semibold text-lg">
                        Total Profit
                    </div>
                    <div className=" flex space-x-4 items-center">
                        <div className=" w-full flex items-center space-x-2">
                            <div className="w-2.5 h-2 rounded-full bg-[#0BB885]" />
                            <div className="w-full text-gray-500 text-sm">
                                Earning
                            </div>
                        </div>
                        <div className=" w-full flex items-center space-x-2">
                            <div className="w-2.5 h-2 rounded-full bg-[#FF814A]" />
                            <div className="w-full text-gray-500 text-sm">
                                Expense
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex justify-start items-start">
                    <div className="bg-[#1C243F] w-full rounded-lg flex justify-center py-4">
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

export default FeatureTotalProfile;
