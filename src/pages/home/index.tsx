
import BaseFooter from "@/components/Base/Footer";
import FeatureInfoDashboard from "@/features/FeatureInfoDashboard";
import UserLayout from "@/components/layouts/UserLayout";
import FeatureChart from "@/features/FeatureChartEarnings";
import FeatureChartOrders from "@/features/FeatureChartOrders";
import FeatureChartProfit from "@/features/FeatureChartProfit";
import FeatureTotalProfile from "@/features/FeatureTotalProfile";
import FeatureChartReport from "@/features/FeatureChartReport";
import FeatureActivity from "@/features/FeatureActivity";

export default function Home() {

    return (
        <>
            <UserLayout title="Home" >
                <div className="px-6 pt-8 space-y-5">
                    <div className="space-y-2">
                        <div className="text-white text-3xl font-semibold">
                            Marketing Dashboard
                        </div>
                        <div className="text-base font-semibold">
                            <div className="text-gray-500">
                                Home / <span className="text-[#0BB885]">Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <FeatureInfoDashboard />
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-5">
                        <div className="flex flex-col w-full md:w-[60%]">
                            <div className="flex flex-col md:flex-row w-full md:space-x-4">
                                <FeatureChart />
                                <FeatureChartOrders />
                                <FeatureChartProfit />
                            </div>
                            <div className="flex flex-col md:flex-row w-full ">
                                <FeatureTotalProfile />
                                <FeatureChartReport />
                            </div>
                        </div>
                        <div className="w-full">
                            <FeatureActivity />
                        </div>
                    </div>
                </div>
                <BaseFooter />
            </UserLayout >
        </>
    )
}