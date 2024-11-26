
const ShopCard = ({ items }) => {
    const { name, recipe, image } = items
    return (
        <div>
            <div className="card mx-auto bg-base-100 w-[350px] shadow-xl hover:scale-[.95] duration-200 transition-all ease-in">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl mb-2">{name}</h2>
                    <p className="mb-6">{recipe}</p>
                    <div className="text-center">
                        <button class="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#BB8506] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#BB8506] group-hover:bg-[#1F2937] group-hover:h-full"></span>

                            <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-[#BB8506] font-Cinzel">ADD TO CART</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;