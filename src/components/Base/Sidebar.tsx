import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setShow } from "@/store/slices/sidebarSlice";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {

    const dispatch = useAppDispatch()

    const router = useRouter()

    const showHide = useAppSelector((state) => state.sidebar.show)


    function toggle({ init }: any) {
        if (init == false) {
            dispatch(setShow(false))
        } else {
            dispatch(setShow(!showHide))
        }
    }

    useEffect(() => {
        router.pathname && toggle(false)
    }, [router.pathname])

    return (
        <>
            {(showHide ? (
                <>
                    <AnimatePresence>
                        <motion.div className="w-full relative md:relative py-3 md:w-64 md:flex flex-col h-screen overflow-hidden bg-[#171E37]"

                            initial={{
                                opacity: 0.2,
                                x: -200,
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -200,
                            }}>
                            <div className="w-full h-12 flex px-6 justify-between relative md:px-5 md:justify-start items-center">
                                <Image src={require("@/assetts/Logo_withText.svg")} className="w-auto h-8 flex justify-start " alt="Logo" />
                                <Image src={require("@/assetts/times.svg")} className="w-5 md:hidden cursor-pointer hover:opacity-80" onClick={toggle} alt="close" />
                            </div>
                            <div className="w-full h-[calc(100vh-8rem)] 2xl:h-[calc(100vh-10rem)] overflow-y-auto scrollbar-thin">
                                {children}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>
            ) : (
                <>
                    <AnimatePresence>
                        <motion.div className="hidden w-full relative md:relative py-3 md:w-64 md:flex flex-col h-screen overflow-hidden bg-[#171E37]"

                            initial={{
                                opacity: 0.2,
                                x: -200,
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -200,
                            }}>
                            <div className="w-full h-12 flex px-6 justify-between relative md:px-5 md:justify-start items-center">
                                <Image src={require("@/assetts/Logo_withText.svg")} className="w-auto h-8 flex justify-end " alt="Logo" />
                            </div>
                            <div className="w-full h-[calc(100vh-8rem)] 2xl:h-[calc(100vh-10rem)] overflow-y-auto scrollbar-thin">
                                {children}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>
            ))
            }
        </>
    )
}

export default Sidebar  