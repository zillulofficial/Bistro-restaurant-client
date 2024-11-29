
const SharedHeader = ({Title, SubTitle, image}) => {
    return (
        <div className="px-20 py-24 lg:px-[300px] lg:pb-[110px] lg:pt-[240px] bg-cover bg-fixed bg-no-repeat lg:h-[700px] mb-24" style={{backgroundImage: `url("${image}")`}}>
            <div className="bg-black bg-opacity-50 mx-auto text-center px-7 py-3 md:px-40 md:py-36 flex flex-col justify-center items-center">
                <h1 className="font-Cinzel uppercase text-5xl md:text-[88px] md:text-5xl mb-3 text-white font-bold">{Title}</h1>
                <p className="font-Cinzel text-sm md:text-base text-white">{SubTitle}</p>
            </div>
        </div>
    );
};

export default SharedHeader;