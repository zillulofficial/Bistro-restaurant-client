import { Helmet } from "react-helmet-async";
import SharedHeader from "../../Components/Shared/SharedHeader";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../Components/MenuCard/MenuCard";
import SharedSection from "../../Components/Shared/SharedSection";

const Menu = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Menu</title>
            </Helmet>
            <SharedHeader
            Title={'Our Menu'}
            SubTitle={'Would you like to try a dish'}
            image={'https://i.postimg.cc/xjWFDrdV/banner3.jpg'}
            ></SharedHeader>

            {/* offered section */}
            <SectionTitle
            Heading={"today's offer"}
            subHeading={"don't miss"}
            ></SectionTitle>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 mb-12">
                {
                    offered.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-16">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase">Order your favorite food</span>
                </button>
            </div>

            {/* dessert section */}
            <SharedSection
            Title={'desserts'}
            SubTitle={'Indulge in our delectable dessert menu, featuring a variety of sweet treats crafted to perfection. From creamy classics to indulgent delights, satisfy your cravings with every irresistible bite!'}
            image={'https://i.postimg.cc/xT6j2k5B/dessert-bg.jpg'}
            ></SharedSection>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 mb-12">
                {
                    offered.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-16">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase">Order your favorite food</span>
                </button>
            </div>

            {/* pizza section */}
            <SharedSection
            Title={'pizzas'}
            SubTitle={'Savor our mouthwatering pizzas, baked to perfection with fresh ingredients and flavorful toppings. From classic favorites to creative specialties, each slice promises a delightful burst of taste for pizza lovers!'}
            image={'https://i.postimg.cc/SQ7Ng1MS/pizza-bg.jpg'}
            ></SharedSection>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 mb-12">
                {
                    pizza.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-16">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase">Order your favorite food</span>
                </button>
            </div>

            {/* salad section */}
            <SharedSection
            Title={'salads'}
            SubTitle={'Fresh, vibrant, and wholesome—our salads are a perfect balance of crisp greens, flavorful dressings, and premium toppings. Enjoy a refreshing and nutritious option crafted to satisfy your cravings.'}
            image={'https://i.postimg.cc/kXJMzNQx/salad-bg.jpg'}
            ></SharedSection>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 mb-12">
                {
                    salad.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-16">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase">Order your favorite food</span>
                </button>
            </div>

            {/* soup section */}
            <SharedSection
            Title={'soups'}
            SubTitle={'Warm up with our comforting soups, made with rich broths, fresh ingredients, and aromatic spices. Each bowl is a perfect blend of flavors, offering a hearty and satisfying experience.'}
            image={'https://i.postimg.cc/0jfkrrsM/soup-bg.jpg'}
            ></SharedSection>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 mb-12">
                {
                    soup.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-16">
                <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase">Order your favorite food</span>
                </button>
            </div>
        </div>
    );
};

export default Menu;