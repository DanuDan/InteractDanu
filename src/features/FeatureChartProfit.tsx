import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)
Chart.defaults.borderColor = '#1C243F';
Chart.defaults.scales.linear.beginAtZero = true

function FeatureChartProfit() {


    const chartData = {
        labels: ["ya", "yu", "ye", "yo", "yi", "yy"],
        datasets: [
            {
                label: "",
                fill: false,
                data: [0, 1, 0.50, 2.25, 1.74, 2.75],
                pointStyle: function (context: any) {
                    var index = context.dataIndex;
                    if (index === 5) {
                        return "circle";
                    }
                    return false
                },
                pointRadius: 5,
                pointBorderWidth: 5,
                pointBackgroundColor: "black",
                pointBorderColor: "#0BB885",
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
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        responsive: true,
        elements: {
            point: {
                hoverRadius: 5,
                hoverBorderColor: 'rgba(1, 124, 251, 0.2)',
                hoverBorderWidth: 15,
                radius: 4,
                hitRadius: 5,
            },
        },
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
                    color: "black",
                    display: true,
                    lineWidth: 2,
                },
                border: {
                    dash: [5, 7],
                },
            },
        },
    }


    return (
        <>
            <div className="bg-[#1C243F] rounded-lg pt-3 mb-5">
                <div className="flex-col items-center px-6 pb-4 pt-2">
                    <div className=" text-white font-semibold text-lg">
                        Profit
                    </div>
                    <div className="text-3xl font-semibold text-[#0BB885] ">
                        8,24k
                    </div>
                </div>
                <div className="w-full h-[10rem] flex justify-center items-center">
                    <div className="bg-[#1C243F] w-[13rem] md:w-[10rem] 2xl:w-[11rem] p-4 flex justify-center py-4">
                        <>
                            <Line options={options}
                                height={'100%'}
                                data={chartData} />
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureChartProfit;
