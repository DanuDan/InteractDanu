import BaseFooter from "@/components/Base/Footer";
import UserLayout from "@/components/layouts/UserLayout";

export default function settings() {

    return (
        <>
            <UserLayout title="Settings" >
                <div className="px-6 pt-8 space-y-5 h-[calc(100vh-10rem)]">
                    <div className="space-y-2">
                        <div className="text-white text-3xl font-semibold">
                            Marketing Settings
                        </div>
                        <div className="text-base font-semibold">
                            <div className="text-gray-500 ">
                                Home / <span className="text-[#0BB885]">Settings</span>
                            </div>
                        </div>
                        <div className="w-full h-full py-20 flex justify-center items-center rounded-lg bg-[#1C243F]">
                            <div className="w-full md:w-[70%] text-center text-xl text-gray-500">
                                <span className="text-red-500"> " </span>
                                Oops! Looks like this page is currently undergoing maintenance or development to bring you even better content. We appreciate your patience and can't wait to share the updates with you soon
                                <span className="text-red-500"> " </span>
                            </div>
                        </div>
                    </div>
                </div>
                <BaseFooter />
            </UserLayout >
        </>
    )
}