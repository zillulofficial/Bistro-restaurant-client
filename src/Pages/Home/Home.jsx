import Banner from "../../Components/Banner/Banner";
import CallUsSection from "../../Components/CallUsSection/CallUsSection";
import Categories from "../../Components/Categories/Categories";
import Description from "../../Components/Description/Description";
import MenuSection from "../../Components/MenuSection/MenuSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Description></Description>
            <MenuSection></MenuSection>
            <CallUsSection></CallUsSection>
        </div>
    );
};

export default Home;