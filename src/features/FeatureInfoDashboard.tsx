import Image from "next/image"

export default function FeatureInfoDashboard() {

    const Info = [
        {
            icon_local: "Icon_Total_Cost_White.svg",
            icon_hover: "Icon_Total_Cost.svg",
            desc: "$35,768",
            name: "Total Cost",
        },
        {
            icon_local: "Icon_Champion.svg",
            icon_hover: "Icon_Champion_White.svg",
            desc: "$66,053",
            name: "Total Sales",
        },
        {
            icon_local: "Icon_Calender.svg",
            icon_hover: "Icon_Calender_White.svg",
            desc: "$35,000,00",
            name: "This Week",
        },
        {
            icon_local: "Icon_PieChart.svg",
            icon_hover: "Icon_PieChart_White.svg",
            desc: "$63,00K",
            name: "Revenue",
        },
        {
            icon_local: "Icon_Wallet.svg",
            icon_hover: "Icon_Wallet_White.svg",
            desc: "Last payment",
            name: "$1250",
        }
    ]

    return (
        <>

            <div className="w-full flex  transition-all overflow-x-auto scrollbar-none overflow-hidden justify-start md:justify-center space-x-5 ">
                {
                    Info.map((item, i) => (
                        <button key={i} className="min-w-[10rem] w-full flex items-center justify-center space-x-4 rounded-lg py-7 bg-[#1C243F] cursor-pointer hover:bg-[#0BB885] focus:bg-[#0BB885] group">
                            <div>
                                {
                                    <Image src={require(`@/assetts/${item.icon_local}`)} alt="info" className={(item.icon_local == "Icon_Total_Cost_White.svg" ? "w-14 h-14 " : "w-9 h-9 ") + "block group-hover:hidden group-focus:hidden"} />
                                }
                                {
                                    <Image src={require(`@/assetts/${item.icon_hover}`)} alt="info" className={(item.icon_hover == "Icon_Total_Cost.svg" ? "w-14 h-14 " : "w-9 h-9 ") + "hidden group-hover:block group-focus:block"} />
                                }
                            </div>
                            <div className="flex flex-col justify-start ">
                                <div className="flex justify-start text-lg whitespace-nowrap text-white ">
                                    {item.name}
                                </div>
                                <div className="flex justify-start text-base whitespace-nowrap text-gray-500 group-hover:text-white group-focus:text-white">
                                    {item.desc}
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>
        </>
    )
}