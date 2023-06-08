import { AiOutlinePlus } from "react-icons/ai"

export const AccordionItem = ({ title, desc, toggle, open }) => {

    return (
        <div className={`w-full flex-1 grid-cols-1 row-gap-0 border-t border-customBorder`} onClick={toggle}>
            <div className="border-b border-customBorder">
                <div className="flex py-8 justify-between items-center cursor-pointer">
                    <h5 className="text-2xl	font-semibold">{title}</h5>
                    <div className={`duration-500 ${open && "rotate-45 ease-linear"}`}><AiOutlinePlus size={32} /></div>
                </div>
                <div className={`overflow-hidden transition-[max-height] mr-20 duration-500 ease-in  ${open ? "max-h-40" : "max-h-0"}`}>
                    <p className="mb-8">{desc}</p>
                </div>
            </div>
        </div>
    )
} 