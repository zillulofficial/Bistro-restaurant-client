import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCard from "../MenuCard/MenuCard";
import useMenu from "../../Hooks/useMenu";

const MenuSection = () => {
    const [menu] = useMenu()
    return (
        <div className="mb-24 lg:container mx-auto">
            <SectionTitle
                Heading='From our menu'
                subHeading='Check it out'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {
                    menu?.filter(item=> item.category === 'salad').map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            {/* button */}
            <div className="text-center">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">View Full Menu</span>
                </button>
            </div>
        </div>
    );
};

export default MenuSection;