import Image from "next/image";

export default function FeatureActivity() {

    const Activity = [
        {
            desc: (
                <span>
                    <span className="text-white">Nick Mark</span> Mentioned{" "}<span className="text-white">Sara Smith</span> In New Post
                </span>
            ),
            data: "11 JUL 8:10 PM",
        },
        {
            desc: (
                <span>
                    The{" "}<span className="text-white">Post Name</span> was removed by{" "}<span className="text-white">Nick Mark</span>
                </span>
            ),
            data: "11 JUL 9:10 PM",
        },
        {
            desc: (
                <span>
                    <span className="text-white">Patrick Sullivan</span> Published a New Post
                </span>
            ),
            data: "12 JUL 10:10 PM",
        },
        {
            desc: (
                <span>
                    <span className="text-white">240+ users</span> has subscribed no Newsletter #1
                </span>
            ),
            data: "18 JUL 19:10 PM",
        },
        {
            desc: (
                <span>
                    The{" "}<span className="text-white">Post Name</span> was suspanded by{" "}<span className="text-white">Nick Mark</span>
                </span>
            ),
            data: "11 JUL 9:10 PM",
        }
    ]

    return (
        <div className="bg-[#1C243F] w-full h-auto rounded-lg pt-5 pb-5 mt-5 md:mt-0 2xl:pb-8 mb-5">
            <div className=" flex flex-col space-y-2 px-6 pb-4 pt-2 ">
                <div className="w-full flex justify-start text-white font-semibold text-2xl">
                    Activity overview
                </div>
                <div className="w-full flex justify-start items-center space-x-4">
                    <div className="w-4 h-4">
                        <Image src={require(`@/assetts/arrow_up.svg`)} alt="arrow" />
                    </div>
                    <div className="font-normal text-white text-lg">
                        16% this month
                    </div>
                </div>
            </div>
            <div className="pt-5 ">
                {
                    Activity.map((item, i) => (
                        <div key={i} className=" flex flex-row justify-start items-start space-x-4 space-y-2 px-2 md:px-6 ">
                            <div className="w-6 h-[6.7rem] 2xl:h-[7.5rem] flex flex-col items-center rounded-lg">
                                <div className="w-6 h-8 rounded-full border-2 border-[#FF814A]"></div>
                                <div className="w-0 h-full border border-[#2E4B85]"></div>
                            </div>
                            <div className="flex flex-col ">
                                <div className="text-base text-gray-500">{item.desc} </div>
                                <div className="text-sm text-gray-500">{item.data}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}