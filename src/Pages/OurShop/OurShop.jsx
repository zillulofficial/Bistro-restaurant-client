import { Helmet } from "react-helmet-async";
import SharedHeader from "../../Components/Shared/SharedHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import ShopCard from "../../Components/ShopCard/ShopCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const [menu] = useMenu()
    const tabs = ["salad", "pizza", "soup", "dessert", "drinks"];
    const {category}= useParams()
    const initialIndex= tabs.indexOf(category)
    const [activeTab, setActiveTab] = useState(initialIndex);

    console.log(category);
    const salad = menu?.filter(item => item.category === 'salad')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const soup = menu?.filter(item => item.category === 'soup')
    const dessert = menu?.filter(item => item.category === 'dessert')
    const drinks = menu?.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>BistroBoss | Shop</title>
            </Helmet>
            <SharedHeader
                Title={'Our Shop'}
                SubTitle={'Would you like to try a dish'}
                image={'https://i.postimg.cc/JzYDsGQB/banner2.jpg'}
            ></SharedHeader>

            {/* tabs section */}
            <div className="container mx-auto mb-24">
                <Tabs defaultIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <TabList className="flex justify-center gap-8 mb-6">
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                className="relative uppercase pb-1 text-lg text-gray-500 cursor-pointer hover:text-[#BB8506] transition-colors ease-in "
                                selectedClassName="text-yellow-600 border-b-2 border-yellow-600"
                            >
                                {tab}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            salad?.map(items=> <ShopCard key={items._id} items={items}></ShopCard>)
                        }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            pizza?.map(items=> <ShopCard key={items._id} items={items}></ShopCard>)
                        }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            soup?.map(items=> <ShopCard key={items._id} items={items}></ShopCard>)
                        }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            dessert?.map(items=> <ShopCard key={items._id} items={items}></ShopCard>)
                        }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            drinks?.map(items=> <ShopCard key={items._id} items={items}></ShopCard>)
                        }
                    </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;