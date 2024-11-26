import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ShopCard from "../ShopCard/ShopCard";

const RecommendationSection = () => {
    const [shop, setShop] = useState()
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const menuItems = data.filter(item => item.category === 'offered')
                setShop(menuItems)
            })
    }, [])
    // console.log(shop);
    return (
        <div className="container mx-auto mb-24">
            <SectionTitle
                Heading='chef Recommends'
                subHeading='Should Try'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    shop.map(items=><ShopCard key={items._id} items={items}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default RecommendationSection;