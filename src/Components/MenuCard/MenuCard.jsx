
const MenuCard = ({item}) => {
    const {name, recipe, image, price}= item
    return (
        <div className="flex">
            <img className="bg-[#d9d9d9] mr-8 w-[118px] h-[104px]" style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className="text-xl font-Cinzel">{name}------------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuCard;