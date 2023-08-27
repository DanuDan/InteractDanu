import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";



export default function LinkItem({ icon, title, notif, href, className, active, leading, subClick, subItem }: any) {


    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    const router = useRouter()
    const currentActiveRoute = router.pathname === href

    const routerPathParts = router.pathname.split("/");
    const hrefPathParts = typeof href === 'string' ? href.split("/") : [];
    const masterRoute = routerPathParts[2] === hrefPathParts[2];

    return (
        leading ? (
            <>
                <div onClick={subClick} className={`${((subItem && active) || masterRoute) && 'bg-transparent/10'} cursor-pointer select-none px-8 py-3 2xl:py-4 hover:bg-transparent/20 transition-all flex items-center space-x-3 w-full ${className}`}>
                    {
                        icon && (
                            <div className="2xl:h-5 2xl:w-5 h-4 w-4">
                                <Image alt="icon" className="w-full h-full" src={require(`@/assetts/${icon}`)} />
                            </div >
                        )
                    }
                    <div className="text-sm 2xl:text-base flex-grow text-gray-500 font-semibold">
                        {title}
                    </div>
                    {
                        notif && (
                            <div className="w-4 h-4 flex relative items-center justify-center rounded bg-[#98FFE0]">
                                <div className="text-xs text-[#1F2849] absolute">
                                    1
                                </div>
                            </div>
                        )
                    }
                </div>
                {
                    ((subItem && active) || masterRoute) && subItem.map((item: any, i: any) => (
                        <Link key={i} href={item.link} className={`${(router.pathname == item.link) && 'bg-transparent/20'} bg-transparent/10 select-none px-7 py-5 hover:bg-transparent/20 transition-all flex items-center space-x-3 w-full ${className}`}>
                            {
                                item.icon && (
                                    <div className="2xl:h-5 2xl:w-5 h-4 w-4">
                                        <Image alt="icon" className="w-full h-full" src={require(`@/assetts/${item.icon}`)} />
                                    </div >
                                )
                            }
                            <div className={`${!item.icon && 'pl-8'} text-sm 2xl:text-base flex-grow text-white font-semibold`}>
                                {item.name}
                            </div>
                        </Link >
                    ))
                }
            </>

        ) : (
            <Link href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${currentActiveRoute && 'bg-[#1F2849] '} text-gray-500 select-none pl-5 pr-3 py-3 rounded-lg hover:bg-[#1F2849] transition-all flex justify-center items-center space-x-3 w-full ${className}`}>
                {
                    icon && (
                        <div className="2xl:h-5 2xl:w-5 h-4 w-4">
                            {currentActiveRoute ?
                                <Image alt="icon" className="w-full h-full" src={require(`@/assetts/${icon}`)} /> :
                                <>
                                    {
                                        isHovering ?
                                            <Image alt="icon" className="w-full h-full" src={require(`@/assetts/${icon}`)} />
                                            :
                                            <Image alt="icon" className="w-full h-full" src={require(`@/assetts/${icon}`)} />
                                    }
                                </>
                            }
                        </div >
                    )
                }
                <div className="text-lg flex-grow font-semibold">
                    {title}
                </div>
                <div className="flex justify-center items-end">
                    {
                        notif && (
                            <div className="w-4 h-4 flex relative items-center justify-center rounded bg-[#98FFE0]">
                                <div className="text-xs text-[#1F2849] absolute">
                                    1
                                </div>
                            </div>
                        )
                    }
                </div>
            </Link >
        )
    )
}   