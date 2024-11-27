
const SharedSection = ({Title, SubTitle, image}) => {
    return (
        <div className=" px-20 py-24 lg:px-28 lg:py-36 bg-cover bg-fixed bg-no-repeat lg:h-[600px] mb-24" style={{backgroundImage: `url("${image}")`}}>
            <div className="bg-black bg-opacity-50 mx-auto text-center px-7 py-3 md:px-40 md:py-24 flex flex-col justify-center items-center">
                <h1 className="font-Cinzel uppercase text-xl md:text-5xl mb-3 text-white">{Title}</h1>
                <p className="text-sm md:text-base text-white">{SubTitle}</p>
            </div>
        </div>
    );
};

export default SharedSection;