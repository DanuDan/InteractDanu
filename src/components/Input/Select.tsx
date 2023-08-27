import Image from "next/image";
import { useState } from "react";

export default function InputSelect({
    placeholder,
    icon,
    className,
    children,
    label,
}: any) {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="grid">

            {label && (
                <label className="text-lg text-gray-500 font-medium w-full ml-2 mb-2">
                    {label}
                </label>)
            }
            <div className="relative flex justify-center items-center w-full">
                <div>
                    <div
                        // value={value}
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={`${className}`}
                        placeholder={placeholder}
                    >
                        <div className= {(icon ? "text-gray-400 " : "text-[#0BB8855] ") + "text-sm" }>{placeholder}</div>
                        <div className="absolute w-8 -right-2">
                            {icon ?
                                <Image src={require(`@/assetts/chevron_down.svg`)} alt="refresh" /> :
                                <Image src={require(`@/assetts/chevron_down_primary.svg`)} alt="refresh" />
                            }
                        </div>
                    </div>
                    {toggleMenu && (
                        <div className="absolute w-[9rem] mt-3">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}