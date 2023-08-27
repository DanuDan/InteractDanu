import { Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import InputSelect from "../components/Input/Select";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setValue } from "@/store/slices/earningSlice";
Chart.register(...registerables)
Chart.defaults.borderColor = '#FFFFFF';
Chart.defaults.scales.linear.beginAtZero = true


function FeatureChart() {

    const dispatch = useAppDispatch()
    const earningValue = useAppSelector((state) => state.earning)

    const chartData = {
        labels: [],
        datasets: [{
            label: 'Total Sales',
            fill: false,
            borderColor: "#1C243F",
            weight: 2,
            borderRadius: 20,
            data: [
                earningValue.totalSales, 300 - earningValue.totalSales
            ],
            backgroundColor: [
                "#0BB885",
                "#1F2849"
            ],
        },
        {
            label: '',
            fill: false,
            weight: 1,
            data: [],
            backgroundColor: [],
        },
        {
            fill: false,
            label: 'Total Orders',
            borderRadius: 20,
            borderColor: "#1C243F",
            weight: 2,
            data: [
                earningValue.totalOrders, 300 - earningValue.totalOrders
            ],
            backgroundColor: [
                "#FF814A",
                "#1F2849"
            ],
        }],
    };


    const options = {
        maintainAspectRatio: true,
        responsive: true,
        interaction: {
            intersect: false,
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return '';
                    },
                    label: function (context: any) {
                        let label = context.dataset.data[0]
                        if (context.parsed.y) {
                            label += (context.parsed.y);
                        }
                        return label += "K";
                    }
                }
            },
            legend: {
                display: false
            },
        },
    }

    const optionsMobile = {
        maintainAspectRatio: true,
        aspectRatio: 1,
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

    function lastWeek() {
            dispatch(setValue({totalSales: 251, totalOrders: 176, show: "Last Week"}))
    }

    function twoWeeksAgo() {
            dispatch(setValue({totalSales: 165, totalOrders: 147, show: "2 Weeks Ago"}))
    }

    function lastMonth(){
        dispatch(setValue({totalSales: earningValue.totalSales, totalOrders: earningValue.totalOrders, show: null}))
    }

    return (
        <>
            <div className="bg-[#1C243F] md:w-[19rem] rounded-lg pt-3 mb-5">
                <div className=" flex justify-between items-center px-6 pb-4 pt-2 ">
                    <div className=" text-white font-semibold text-lg">
                        Earnings
                    </div>
                    <div className="flex items-center md:justify-end" >
                        <InputSelect icon placeholder={(earningValue.show && `${earningValue.show}`) || "This Week"} className="flex justify-start items-center bg-[#1C243F] w-[6rem] cursor-pointer  rounded-lg ${className}" >
                            <button onClick={lastWeek}  className={(earningValue.show === "Last Week" ? ("bg-gray-500 ") : ("bg-[#2E4B85] ")) + `rounded-t-lg w-full flex justify-start text-white focus:bg-gray-500 hover:bg-gray-500 px-5 py-1`}>Last Week</button>
                            <button onClick={twoWeeksAgo} className={(earningValue.show === "2 Weeks Ago" ? ("bg-gray-500 ") : ("bg-[#2E4B85] ")) + "w-full flex justify-start text-white bg-[#2E4B85] focus:bg-gray-500 hover:bg-gray-500 px-5 py-1"}>2 Weeks Ago</button>
                            <button onClick={lastMonth} className="rounded-b-lg w-full flex justify-start text-white bg-[#2E4B85] focus:bg-gray-500 hover:bg-gray-500 px-5 py-1">Last Month</button>
                        </InputSelect>
                    </div>
                </div>
                <div className=" flex w-[19rem] justify-start">
                    <div>
                        <div className="bg-[#1C243F] w-[12rem] h-[12rem] flex justify-center py-4 pl-4">
                            <>
                                <Doughnut options={options}
                                    height={'100%'}
                                    data={chartData} />
                            </>
                        </div>
                    </div>
                    <div className="w-full flex left-4 items-center">
                        <div className="w-full h-full py-8 flex flex-col justify-between">
                            <div className="flex space-x-3 justify-start items-center">
                                <div className=" w-2 h-2 rounded-full bg-[#0BB885]" />
                                <div className="space-y-1">
                                    <div className="text-white text-sm">
                                        Total Sales
                                    </div>
                                    <div className="text-gray-500 font-semibold text-sm ">
                                        {earningValue.totalSales}
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3 justify-start items-center">
                                <div className=" w-2 h-2 rounded-full bg-[#FF814A]" />
                                <div className="space-y-1">
                                    <div className="text-white text-sm">
                                        Total Orders
                                    </div>
                                    <div className="text-gray-500 font-semibold text-sm">
                                        {earningValue.totalOrders}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureChart;
